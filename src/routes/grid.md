---
title: CSS · Reusable Grid
slug: css-grid
tags:
  - CSS
date: 2022-01-13T10:01:44.000Z
summary: 可复用的CSS Grid设置
lastmod: 2022-05-07T05:32:52.372Z
---

1. 先设置一个 class 为 grid，并设定 gap
2. 子元素中再设置具体的列数

如设一个上为 2 列和下为 3 列的栅格布局：

#### CSS:

```css
.grid {
  display: grid;
  gap: 1.2rem;
}
.grid--2--cols {
  grid-template-columns: repeat(2, 1fr);
}

.grid--3--cols {
  grid-template-columns: repeat(3, 1fr);
}
```

#### HTML:

```html
<section class="grid grid--2--cols">
  <div>Text1</div>
  <div>Text2</div>
</section>

<section class="grid grid--3--cols">
  <div>Text1</div>
  <div>Text2</div>
  <div>Text3</div>
</section>
```
