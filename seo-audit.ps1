param(
  [string]$SiteRoot = $PSScriptRoot
)

$ErrorActionPreference = 'Stop'
$base = (Resolve-Path -LiteralPath $SiteRoot).Path
$files = Get-ChildItem -LiteralPath $base -Recurse -Filter index.html -ErrorAction SilentlyContinue |
  Where-Object { $_.FullName -notlike '*\_publish\*' -and $_.FullName -notlike '*\_tmp\*' }

$results = foreach ($file in $files) {
  $html = Get-Content -LiteralPath $file.FullName -Raw
  $relative = $file.FullName.Substring($base.Length + 1)
  $title = [regex]::Match($html, '(?is)<title>(.*?)</title>').Groups[1].Value.Trim()
  $description = [regex]::Match($html, '(?is)<meta\s+[^>]*name=["'']description["''][^>]*content=["''](.*?)["'']').Groups[1].Value
  if (-not $description) {
    $description = [regex]::Match($html, '(?is)<meta\s+[^>]*content=["''](.*?)["''][^>]*name=["'']description["'']').Groups[1].Value
  }
  $canonical = [regex]::Match($html, '(?is)<link\s+[^>]*rel=["'']canonical["''][^>]*href=["''](.*?)["'']').Groups[1].Value
  if (-not $canonical) {
    $canonical = [regex]::Match($html, '(?is)<link\s+[^>]*href=["''](.*?)["''][^>]*rel=["'']canonical["'']').Groups[1].Value
  }

  $issues = [System.Collections.Generic.List[string]]::new()
  if (-not $title) { $issues.Add('missing title') }
  # SERP title display is query/device dependent; flag only clear outliers.
  if ($title.Length -gt 75) { $issues.Add('review long title') }
  if (-not $description) { $issues.Add('missing description') }
  if (-not $canonical) { $issues.Add('missing canonical') }
  if (([regex]::Matches($html, '(?is)<h1\b')).Count -ne 1) { $issues.Add('H1 count != 1') }
  if (([regex]::Matches($html, '(?is)<html\s+[^>]*lang=')).Count -ne 1) { $issues.Add('missing html lang') }

  [pscustomobject]@{
    File = $relative
    TitleLength = $title.Length
    DescriptionLength = $description.Length
    H1 = ([regex]::Matches($html, '(?is)<h1\b')).Count
    Canonical = $canonical
    Issues = ($issues -join '; ')
  }
}

$results | Sort-Object File | Format-Table -AutoSize -Wrap
$problemCount = @($results | Where-Object Issues).Count
Write-Host "`nAudited $($results.Count) pages; $problemCount page(s) need review."
if ($problemCount -gt 0) { exit 1 }
