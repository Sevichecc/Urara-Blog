---
title: CSS · Argon主题的CSS修改
created 2022-01-16 14:04:17
tags:
  - CSS
slug: free-axure-cloud
summary: 基于最近所学，对当前Argon主题做了一些微小的调整
lastmod: 2022-05-07T05:30:35.639Z
---

然后已经不用 Wordpress 了，这个主题加载太慢了（也可能是我自己的问题

```css
/*删掉tag图标*/

.fa-tags {
  display: none;
}

/*左侧菜单居中*/
.leftbar-menu-item {
  text-align: center;
}
/*删掉日历图标*/
.fa-calendar-o {
  display: none;
}

/*说说字体统一大小*/
.shuoshuo-date-date {
  font-size: 15px;
}

.shuoshuo-date-month {
  font-size: 15px;
}

/*banner字体改为思源宋体*/
.banner-title.text-white {
  font-family: 'Noto Serif SC', serif;
}
/*删掉左侧搜索栏*/
.card-body.text-center.leftbar-search-button {
  display: none;
}

/*删掉左侧栏站点名称*/
.leftbar-banner.card-body {
  display: none;
}

/*作者相关链接居中*/
.site-author-links a {
  text-align: center;
}

/*去掉页脚卡片外形，并缩减边距*/
#footer.card {
  background: none;
  padding: 0;
  box-shadow: none !important;
}

html.darkmode #footer {
  background: none !important;
}
```
