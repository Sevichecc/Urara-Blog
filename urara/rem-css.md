---
title: CSS · Rem in CSS
slug: rem-css
tags:
  - CSS
date: 2022-01-12T09:50:27.000Z
summary: CSS中的Rem是什么
lastmod: 2022-05-07T05:32:42.708Z
---

默认为浏览器默认字体大小：

```
1rem=16px
```

改变 rem 为 10px：

## 1. set px

```css
html {
  font-size: 10px;
}
```

> 这种方法会让用户不能改变页面字体大小，不建议用

## 2. percentage

设置为用户浏览器字体的大小比例。

```
html{
/* 10px/16px =62.5%*/
font-size:62.5%;
}
```
