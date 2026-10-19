// Bind this script to a Google Sheet owned by the account with GSC access.
const SITE_URL = 'https://auranovagems.com/';
const SEARCH_TYPE = 'web';
const TIME_ZONE = 'America/Los_Angeles'; // Search Console dates use Pacific time.

function syncGsc28Days() {
  const today = Utilities.formatDate(new Date(), TIME_ZONE, 'yyyy-MM-dd');
  const endDate = shiftDate_(today, -3); // Prefer finalized data.
  const startDate = shiftDate_(endDate, -27); // 28 inclusive days.
  const range = { startDate, endDate, type: SEARCH_TYPE };

  // Fetch everything before changing the spreadsheet. A failed request leaves
  // the last successful snapshot intact.
  const total = fetchRows_(range, []);
  const pages = fetchRows_(range, ['page']);
  const queries = fetchRows_(range, ['query']);
  const updatedAt = new Date();
  const book = SpreadsheetApp.getActiveSpreadsheet();

  const totalRow = total[0] || { clicks: 0, impressions: 0, ctr: 0, position: 0 };
  replaceSheet_(book, 'Summary',
    ['site', 'start_date', 'end_date', 'search_type', 'clicks', 'impressions', 'ctr', 'position', 'updated_at'],
    [[SITE_URL, startDate, endDate, SEARCH_TYPE, totalRow.clicks, totalRow.impressions,
      totalRow.ctr, totalRow.position, updatedAt]]);
  replaceSheet_(book, 'Pages',
    ['page', 'clicks', 'impressions', 'ctr', 'position', 'start_date', 'end_date', 'updated_at'],
    pages.map(r => [r.keys[0], r.clicks, r.impressions, r.ctr, r.position,
      startDate, endDate, updatedAt]));
  replaceSheet_(book, 'Queries',
    ['query', 'clicks', 'impressions', 'ctr', 'position', 'start_date', 'end_date', 'updated_at'],
    queries.map(r => [r.keys[0], r.clicks, r.impressions, r.ctr, r.position,
      startDate, endDate, updatedAt]));
}

function fetchRows_(range, dimensions) {
  const url = 'https://www.googleapis.com/webmasters/v3/sites/' +
    encodeURIComponent(SITE_URL) + '/searchAnalytics/query';
  const rows = [];
  const pageSize = 25000;
  for (let startRow = 0; ; startRow += pageSize) {
    const response = UrlFetchApp.fetch(url, {
      method: 'post',
      contentType: 'application/json',
      headers: { Authorization: 'Bearer ' + ScriptApp.getOAuthToken() },
      payload: JSON.stringify({ ...range, dimensions, rowLimit: pageSize, startRow }),
      muteHttpExceptions: true
    });
    const code = response.getResponseCode();
    if (code !== 200) {
      throw new Error('GSC API HTTP ' + code + ': ' + response.getContentText().slice(0, 500));
    }
    const batch = JSON.parse(response.getContentText()).rows || [];
    rows.push(...batch);
    if (batch.length < pageSize) break;
  }
  return rows;
}

function replaceSheet_(book, name, headers, rows) {
  const sheet = book.getSheetByName(name) || book.insertSheet(name);
  sheet.clearContents();
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  if (rows.length) {
    sheet.getRange(2, 1, rows.length, headers.length).setValues(rows);
  }
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
}

function shiftDate_(dateText, days) {
  const date = new Date(dateText + 'T12:00:00Z');
  date.setUTCDate(date.getUTCDate() + days);
  return Utilities.formatDate(date, 'UTC', 'yyyy-MM-dd');
}

