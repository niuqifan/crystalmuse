# Background Image Editing Guide

以后替换图片时，为了避免“新图片影响老图片”，只改这个文件：

`assets/css/background-config.css`

## 1. 换首页头图 Hero

```css
--hero-bg: url("../images/your-new-hero.png");
--hero-position: center calc(50% - 95px);
```

只影响首页头图。

## 2. 换 Shop by Intention 的 8 张图

按顺序替换：

```css
--intent-01: url("../images/intent-01.png");
--intent-02: url("../images/intent-02.png");
...
--intent-08: url("../images/intent-08.png");
```

只影响 Shop by Intention。

## 3. 换 Shop by Chakra 背景图

```css
--chakra-bg: url("../images/chakra-background.png");
--chakra-position: left center;
```

只影响 Shop by Chakra。

## 4. 注意

- 不要直接覆盖旧图片文件，建议新增不同文件名。
- 不要在 HTML 里插入 `<img>`。
- 只改对应模块的变量，不要改其他模块。
- 需要移动图片位置时，只改对应模块的 `position` 变量。


## 4. 换 Popular Crystal Products 的背景图

按你上传顺序替换（当前已配置 1-5）：

```css
--product-01: url("../images/product-01.png");
--product-02: url("../images/product-02.png");
--product-03: url("../images/product-03.png");
--product-04: url("../images/product-04.png");
--product-05: url("../images/product-05.png");
--product-06: url("../images/product-06.png");
--product-07: url("../images/product-07.png");
--product-08: url("../images/product-08.png");
--product-09: url("../images/product-09.png");
--product-10: url("../images/product-10.png");
```

现在已经扩展到 10 张，对应 Popular Crystal Products 两排产品。后续如果继续新增，也建议继续按这个命名规则扩展。


## 5. 换 OEM & Private Label 上方横幅图

只改：

```css
--oem-banner-bg: url("../images/oem-banner.png");
--oem-banner-position: center center;
--oem-banner-size: contain;
```

这个设置只影响 `OEM & Private Label` 上方的横幅背景图，不会影响 Hero、Intention、Chakra 或 Products。


## 6. 换 Learning Hub（学习中心）背景图

按顺序替换 4 张图：

```css
--learn-01: url("../images/learn-01.png");
--learn-02: url("../images/learn-02.png");
--learn-03: url("../images/learn-03.png");
--learn-04: url("../images/learn-04.png");
--learn-position: center center;
--learn-size: cover;
```

这个设置只影响 `Crystal Learning Hub` 的 4 张文章卡片背景图，不会影响其他模块。
