# 免费 GSC → Google 表格同步

此脚本只读取 `https://auranovagems.com/` 的 Google Search Console 搜索表现，不会提交网址、修改网站或发布内容。它将最近 28 个已稳定日期的总览、页面和查询词分别写入 `Summary`、`Pages`、`Queries` 三个工作表。Google API 日期按太平洋时间计算，结束日期为太平洋时间今天的三天前。每次运行会替换上一次快照；失败时不会清掉旧数据。

## 一次性设置（由网站 GSC 授权账号操作）

1. 新建一个空白 Google 表格，名称可用 `AURANOVAGEMS GSC SEO Data`。
2. 在表格菜单打开「扩展程序 → Apps Script」。将 `Code.gs` 的全部内容复制到脚本编辑器。
3. 在 Apps Script 的「项目设置」开启显示 `appsscript.json`，将本目录的 `appsscript.json` 内容复制进去并保存。
4. 如果你的 GSC 资源不是 `https://auranovagems.com/` URL 前缀资源，请把 `SITE_URL` 改为 GSC 资源的准确名称（域名资源格式为 `sc-domain:auranovagems.com`）。
5. 选择 `syncGsc28Days` 并点击运行，使用有该资源读取权限的 Google 账号授权。不要把密码、令牌或授权代码发到聊天中。
6. 回到表格确认三个工作表都有数据，`Summary` 的网址和日期正确。
7. 在 Apps Script 左侧「触发器」添加触发器：函数 `syncGsc28Days`，事件来源「时间驱动」，每天运行一次。SEO 优化任务仍可每两天读取一次最新快照。
8. 将表格链接发给我。我会验证当前 Google Drive 连接是否能读取它，再更新现有 SEO 定时任务的数据来源。读取未验证前，不会宣称自动链路已经完成。

若首次运行提示 403，请检查登录账号是否对准确的 GSC 资源有读取权限，以及 Apps Script 使用的 Google Cloud 项目是否已启用 Search Console API。不要公开分享这个表格；保留为私人表格，通过已连接的 Google Drive 授权读取。

官方资料：
- https://developers.google.com/webmaster-tools/pricing
- https://developers.google.com/webmaster-tools/v1/searchanalytics/query
- https://developers.google.com/apps-script/concepts/scopes
- https://developers.google.com/apps-script/guides/triggers/installable

