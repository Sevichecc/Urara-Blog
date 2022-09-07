---
title: CSS · 基础笔记
created: 2021-12-06T11:59:47+08:00
slug: css-fundamental
tags:
  - CSS
lastmod: 2022-05-07T05:30:27.910Z
---

一些随堂笔记。

课程：[Build Responsive Real-World Websites with HTML and CSS](https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/)

## css 是什么

- **C**ascading**S**tyle**S**heets (层叠式样式表）
- CSS describes the **visual style and presentation** of the **content written in HTML**
- CSS consists of countless **properties** that developers use to format the content: properties about font, text, spacing, layout, etc.

## 分类

### inline CSS

```html
<p style="color:blue">text</p>
```

> 最好不用

### internal CSS

放在`<head>`里面的`<style>`，如：

```html
<head>
  <style>
    h1 {
      color: blue;
    }
  </style>
</head>
```

- 代码很长的时候，整理很麻烦

### external CSS

- 引用单独的 css 文件，如 `style.css`
- 放在`<head>`里用`<link>`引用，如：

```html
<head>
  <link href="style.css" ref="stylesheet" />
</head>
```

关于`<link>` ，可参考:[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/link#attr-rel)

## 组成

![](https://s2.loli.net/2022/01/06/Wvj8SKIwGrVaicJ.png)

## Selectors

### descendent selector

```css
footer p {
  font-family: sans;
}

article header p {
  color: blue;
}
```

### line selector

```css
h1,
h2,
h3 {
  color: blue;
}
```

定义特定元素样式的两种方式：CSS ID、class attributes

## id

> 给每个元素一个 id，仅能用一次，尽量不要用

在 HTML 中：

```html
<p id="author">text</p>
```

在 CSS 中：

```css
#author {
  font-family: sans;
}
```

### class attributes

> 能无限复用

在 HTML 中：

```html
<p class="author">text</p>
```

在 CSS 中：

```css
.author {
  font-family: sans;
}
```

> 能无限复用

在 HTML 中：

```html
<p class="author">text</p>
```

在 CSS 中：

```css
.author {
  font-family: sans;
}
```

### universal selector

- 对所有元素生效
- 优先级最低
- 不可继承

```css
* {
  color: #1098ab;
}
```

### body

- 在`<body>` 里的通常只应用于文本元素（text）
- Not all properties get inherited. It’s mostly ones **related to text**: `font-family`, `font-size`, `font-weight`, `font-style`, `color`, `line-height`, `letter-spacing`, `text-align`, `text-transform`, `text-shadow`, `list-style`, etc.
- 可继承

### 优先级

#### conflicting between selectors

![](https://s2.loli.net/2022/01/07/Zl3GX9dhrO2nqMs.png)

- 尽量不要用`!important`

```css
foot p {
  color: green !important;
}
```

- 所有 selector 都会被应用，只有冲突的按优先级应用
- 当使用相同类别的 selector 时，应用最后一个

#### inheritance

- inheriting elements can easily be override
- 优先级最低
- body 可继承，universal selector 不可以

## 颜色

### RGB/RGBA

- 基本`(r,g,b,alpha)`
- 白色`(255,255,255)`
- 黑色`(0,0,0)`

## Hexadecimal Colors

- 0 to ff (255 in hexadecimal numbers):
  `#00ffff`
- Shorthand, when all colors are identical pairs
  `#off`
  当需要透明度的时候才用 rgb 颜色，一般用 hex

## Pseudo Class

> 用来指定特定元素

### 第一个元素/最后一个元素

```css
li:first-child {
  font-weight: bold;
}

li:last-child {
  font-style: italic;
}
```

### 奇数/偶数 /特定次序

```css
li:nth-child(odd) {
  font-style: italic;
}

li:nth-child(even) {
  font-style: italic;
}

li:nth-child(3) {
  font-style: italic;
}
```

### 多种元素时

如下所示，当 HTML 中`<p>`并不是`<article>`里面的第一个元素时，不生效。

即当母元素(parent element)里有多种元素时(child elements)，不宜使用伪类(pseudo class)，可以在列中使用，如`<li>`

```html
<article>
  <head></head>
  <p></p>
</article>
```

```css
article p:fist-child {
  font-family: sans;
}
```

### Style hyperlinks

四个状态都应定义，并按顺序排列

#### link

不进行交互的预览下

```css
a:link {
  color: #1098ad;
}
```

#### visited

点击后

```css
a:visited {
  color: #777;
}
```

#### hover

悬停时

```css
a:hover {
  color: orangered;
  font-weight: bold;
  text-decoration: underline dotted orangered;
}
```

#### active

点击时(通常和 hover 同时出现

```css
a:active {
  background-color: black;
  font-style: italic;
}
```

## Pseudo Elements

> any pseudo elements is actually an inline element

在 HTML 中并不真实存在，但仍可在 CSS 中选择，如行内第一个字符：
在 HTML 中并不真实存在，但仍可在 CSS 中选择，如行内第一个字符：

```css
h1::first-letter {
  font-style: normal;
}
```

段内第一行：

```css
p::first-line {
  color: red;
}
```

### adjacent sibiling selector

在同一 parent element 里，下面最临近的元素

如 h3 标题下的 p：

```css
h3 + p::first-line {
  color: red;
}
```

### after

- 就算没有文字内容，也要定义`content`
- 位于行末

![https://s2.loli.net/2022/01/08/YZaXGonBRELSuvH.png](https://s2.loli.net/2022/01/08/YZaXGonBRELSuvH.png)

```css
h2::after {
  content: 'TOP';
  font-size: 16px;
  font-weight: bold;
  color: black;
  padding: 5px 15px;
  display: inline-block;
  position: absolute;
  top: -10px;
  right: -25px;
  background-color: #ffe70e;
}

h2 {
  position: relative;
}
```

### before

- 位于行前

```css
h2::before {
}
```

## Box Model

![](https://s2.loli.net/2022/01/07/hM1AKQwbp5u8gSJ.png)

![](https://s2.loli.net/2022/01/07/V9SoD43kBH1z5cp.png)

![](https://s2.loli.net/2022/01/07/pUJWb7iMqgI213G.png)

### Type of boxes:

#### inline boxes

![https://s2.loli.net/2022/01/08/HhPGpo83LnKMQCJ.png](https://s2.loli.net/2022/01/08/HhPGpo83LnKMQCJ.png)

#### block-level boxes

![https://s2.loli.net/2022/01/08/kK4HD6YVsFIqx31.png](https://s2.loli.net/2022/01/08/kK4HD6YVsFIqx31.png)

#### inline-block boxes

![img其实是inline-block box ](https://s2.loli.net/2022/01/08/1Jxe5aOTtPwGFoc.png)

img 其实是 inline-block box

### padding

内边距

```css
padding: 上下 左右;
```

#### reset margin ane padding

```css
* {
  margin: 0;
  padding: 0;
}
```

不要用 body

### margin

外边距

#### collapsing margins

- 当两元素的 margin 重合时，大的会覆盖小的

### Dimensions

#### width

- percentage: percentage of the width of the parents containers

## position

![](https://s2.loli.net/2022/01/08/u9G7IJyYWzbdRF4.png)

### Normal Flow

- 默认状态

### Absolute Position

- 绝对位置
- 常用于一些小元素
- parent elements/containers should set to `relative`
- 取决于最近层次的 relative parent elements/containers

![https://s2.loli.net/2022/01/08/NIga4hbQOHVfFCr.png](https://s2.loli.net/2022/01/08/NIga4hbQOHVfFCr.png)

### centering page

use the `<div>` element to create a container class, then set the `margin-left` and `margin-right` to `auto`

```css
.container {
  width: 800px;
  margin: 0 auto;
}
```

## 基本操作

### CSS 注释

- `/*需要注释的内容*/`
- VS code 快捷键 :`CMD+/` (mac) `Control+/` (win)
- 调出开发者工具`cmd+i`

### Fix bugs

- 方法：

  - **inspect**
  - 检查刚开始变得不一样的地方
  - 如果有很多 selector，复杂的那个会被首先应用
  - 检查 css 文件引用链接是否正确

- 工具：
  HTML 校对器:
  [Markup Validation Service](https://validator.w3.org/)

  代码比对:
  [Diffchecker](https://www.diffchecker.com/)
