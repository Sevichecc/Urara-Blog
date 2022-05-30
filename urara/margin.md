---
title: CSS · Add margin to buttons
slug: css-margin
tags:
  - CSS Trick
  - CSS
date: 2022-01-13T10:04:21.000Z
summary: 用helper class为单个按钮加margin，防止元素复用时产生不必要的margin
lastmod: 2022-05-07T05:32:49.156Z
---

用 helper class 为单个按钮加 margin，防止元素复用时产生不必要的 margin

## HTML

```html
<button class="btn helper">Text</button>
```

## CSS

```css
.helper {
  margin-right: 1.6rem;
}
```

## 为按钮增加内边距

如果设置 border 数值为负，周边空间则会收到影响，但用 box-shadow 就不会:

所以可以这样设置：

`box-shadow: inset 0 0 0 3px #fff;`
