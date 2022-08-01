---
title: CSS · hover时图片放大的动效
date: 2022-01-13T16:03:47.000Z
slug: hover-image-scale
tags:
  - CSS Trick
  - CSS
summary: 通过transform设置
lastmod: 2022-05-07T05:30:52.029Z
---

思路：

1. 设置放大
2. 隐藏溢出

```css
.gallery-item {
  overflow: hidden;
}

.gallery-item img:hover {
  transform: scale(1.1);
}
.gallery-item img {
  display: block;
  width: 100%;
  transition: all 0.4s;
}
```

效果：https://codepen.io/sevichee/pen/wvrRjjq
