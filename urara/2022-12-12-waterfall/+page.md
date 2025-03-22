---
title: 瀑布流图片的简单实现
created: 2022-12-12
summary: Simple implementation of a waterfall flow picture
tags:
  - CSS
---

瀑布流图片又被称为 Masonry Layout, Waterfall Layout

## HTML

```html
<div>
  <img />
  <img />
  <img />
  <img />
</div>
```

## CSS

```css
div {
  /*在容器内设置栏数*/
  column-count: n;

  /*垂直间距*/
  column-gap: 0;

  /*在间隔中加点线*/
  column-rule: dotted;
}

img {
  /*防止单个元素分栏*/
  break-inside: avoid;
}
```

元素是从上到下竖直排列的[^1]
![](https://simpleweblearning.s3.us-west-2.amazonaws.com/2021/01/07220125/direction.png)

[^1]: [ Masonry (Waterfall) Layout with Pure CSS](https://www.simpleweblearning.com/masonry-waterfall-layout-with-pure-css/)
