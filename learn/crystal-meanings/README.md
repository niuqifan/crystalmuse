# Crystal Meanings Page Redesign V2

This package contains a redesigned `/crystal-meanings/` SEO landing page for Aura Nova Gems.

## Files

- `index.html` — direct preview page
- `assets/crystal-meanings.css` — all page styling
- `assets/crystal-meanings.js` — search, chakra, intention, and A–Z filters
- `shopify-section-crystal-meanings.liquid` — Shopify section version

## SEO

Recommended page URL:
`/pages/crystal-meanings` or `/crystal-meanings/`

SEO title:
`Crystal Meanings A–Z Guide | Healing Stones & Benefits`

Meta description:
`Explore crystal meanings, healing benefits, chakra connections, zodiac signs, and simple ways to use popular stones like amethyst, rose quartz, clear quartz, citrine, and more.`

## Design direction

- Warm cream background matching Aura Nova Gems style
- Luxury serif headings
- Plum + gold accents
- Responsive card layout
- Sticky filter/search section on desktop
- FAQ Schema included in HTML

## Usage

Open `index.html` in a browser for preview. For Shopify, use `shopify-section-crystal-meanings.liquid` as a new custom section or copy the HTML/CSS/JS into a page template depending on your theme structure.


## V3 update
- 已将顶部意图筛选按钮从 6 个减少为 4 个：All / Love / Protection / Calm。
- Abundance 和 Focus 仍保留在水晶卡片内容里，用户可通过搜索框查找，不再占用顶部按钮空间。


## Image placement update

This version places the supplied crystal images into the page:

- `assets/images/hero-crystal-meanings.webp` — Hero visual area.
- `assets/images/library-crystal-showcase.webp` — Crystal library visual guide and default card imagery.
- `assets/images/overview-crystal-meanings.webp` — How to choose a crystal section.
- `assets/images/shop-by-meaning-bracelets.webp` — Shop by meaning / bracelets conversion section.
- `assets/images/card-amethyst.webp`, `card-aquamarine.webp`, `card-black-tourmaline.webp` — Individual top images for the first three crystal cards.

The crystal cards now use real image banners instead of the previous gradient placeholder icons.


## 新增水晶卡片横幅图
已把新生成的同风格水晶卡片图放入 `assets/images/`，并接入 JS 与 Shopify Liquid：Carnelian、Citrine、Clear Quartz、Fluorite、Garnet、Green Aventurine。

## 本次图片替换
已按卡片位置新增并接入 6 张原石产品图：
- Moonstone → `assets/images/card-moonstone.webp`
- Obsidian → `assets/images/card-obsidian.webp`
- Pyrite → `assets/images/card-pyrite.webp`
- Red Jasper → `assets/images/card-red-jasper.webp`
- Rhodonite → `assets/images/card-rhodonite.webp`
- Rose Quartz → `assets/images/card-rose-quartz.webp`

同时已更新 `assets/crystal-meanings.js` 和 `shopify-section-crystal-meanings.liquid` 中的卡片图片映射，打开 `index.html` 或上传 Shopify section 后会按对应水晶卡片显示。


## 新增 S/T 水晶卡片横幅图
已把新生成的同风格水晶卡片图放入 `assets/images/`，并接入 JS 与 Shopify Liquid：Selenite、Smoky Quartz、Sodalite、Sunstone、Tiger’s Eye、Turquoise。


## Image placement update - Amazonite / Apatite / Moss Agate
已将 3 张新生成的同风格原石图片放入 `assets/images/`，并按卡片位置接入：Amazonite、Apatite、Moss Agate。
