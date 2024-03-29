---
title: CSS · 解决 Chrome 中小于12px的字体不显示的问题
lastmod: 2022-04-07T07:36:23.629Z
summary: 先用scale总体缩小再补上减少的宽度
created: 2022-03-29T13:46:29.228Z
tags:
  - CSS
  - CSS Trick
categories:
  - CSS
toc: false
---

如设置字体大小为 10.2px

### HTML

```html
<p>
  I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with
  security and best practices, and am always looking for new things to learn.
</p>
```

### CSS

```css
p {
  color: #dcdcdc;

  /*缩小基准大小，也就是缩小后的字体应该是 10.2px=12px*0.85*/
  font-size: 12px;

  /* 缩小比例 10.2px/12px=0.85 */
  transform: scale(0.85);

  /*设置缩放中心*/
  transform-origin: 0 0;

  /*(1-0.85)+1，补上缩小的宽度，这里可以按视觉效果调整一点*/
  width: 118%;

  /*兼容IE*/
  *font-size: 10.2px;
}
```

参考：

- [css 小于 12px 字体\_MAIMIHO 的博客-CSDN 博客](https://blog.csdn.net/maimiho/article/details/121548769)
- [css 设置字体小于 12px 的方法 - 代码先锋网](https://www.codeleading.com/article/46263149244/)
- [Set CSS font-size less than 12px in webkit browser](https://codepen.io/mjj2000/pen/AYEqwJ)
