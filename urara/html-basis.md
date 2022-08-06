---
title: HTML · 基础笔记
created 2021-12-06T11:59:47+08:00
slug: html-notes
tags:
  - HTML
lastmod: 2022-05-07T05:30:47.655Z
---

课程：[Build Responsive Real-World Websites with HTML and CSS](https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/)

## HTML 是什么

HyperTextMarkupLanguage
[HTML 元素参考 - HTML（超文本标记语言） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)

## 基本组成

以`<p>Hello!</p>`为例子：

1. opening tag:`<p>`
2. content : `Hello!`
3. closing tag: `</p>`

## 框架

```html
<!DOCTYPE html>
<html>
  <head lang="语言代码">
    <meta charset="UTF-8" />
    <title>这是标题的位置，head里面的东西都看不见（一般来说）</title>
  </head>

  <body>
    <h1>一级标题</h1>
  </body>
</html>
```

## attributes

- 用来描述元素 elements
- pieces of data

| attributes |                                                                                               |
| ---------- | --------------------------------------------------------------------------------------------- |
| src        | sources                                                                                       |
| alt\*      | alternative text (describe what the image are ) good for SEO/blind people                     |
| width      | 宽度                                                                                          |
| height     | 高度                                                                                          |
| href       | 超链接 `#`表示回到页首                                                                        |
| target     | 在哪个窗口打开\_blank 新窗口 `_self` 旧窗口 `_top`顶部 `_parent` 父级窗口，如果有窗口层级的话 |

## tags

|            |                                                                       |
| ---------- | --------------------------------------------------------------------- |
| head       | 在页面中不可见的元素，如页面标题、link to css files……                 |
| main       | 文章的主要内容（HTML5 中新增）                                        |
| body       | 页面的主要内容                                                        |
| section    | 区块(semeantic HTMl                                                   |
| h1         | 标题，一个页面只能有一个 h1                                           |
| p          | 段落                                                                  |
| span       | 行内文本                                                              |
| `<!— —>`   | 注释                                                                  |
| b          | **加粗**，和`<strong>`不同，它没有语意，是过时的表述                  |
| strong     | **加粗**，表示是页面中重要的元素                                      |
| i          | _斜体_，过时的表述，应用`<em>`                                        |
| em         | _斜体_，emphasize                                                     |
| ol         | 1. order list 数字排序                                                |
| ul         | . unorder list                                                        |
| li         | list item 列 ,用在 ol/ul 里面                                         |
| img        | 图片 特殊类型，不需要包含内容，需要 attributes( src/alt/width/height) |
| meta       | data about data meta charset=”UTF-8”                                  |
| a          | anchor 超链接（attribute:href)                                        |
| header     | 页头(container                                                        |
| nav        | 导航 ( container                                                      |
| menu       | 菜单，web application 常用                                            |
| article    | 内容(container                                                        |
| footer     | 页脚(container                                                        |
| div        | 无意义内容区块                                                        |
| br/        | 断行                                                                  |
| aside      | 次级信息/额外信息                                                     |
| figure     | 常用于 feature cards/coding list……                                    |
| figcaption | 图片脚注(只能在 figure 里面用)                                        |
| form       | 表单                                                                  |
| input      | 输入框                                                                |
| label      | 表单输入标题（也许                                                    |
| table      | 表格                                                                  |
| thead      | 表头                                                                  |
| tbody      | 表体                                                                  |
| th         | 表头单元格                                                            |
| tr         | table row                                                             |
| td         | table data                                                            |
| address    | 地址                                                                  |
| s          | 删除                                                                  |
| blockquote | 引言                                                                  |

- `<button>` 和`< a>` 的区别：
  - button ：一种页面内操作
  - a: 页面跳转

## HTML entity

特殊符号速查表

[Glyphs | CSS-Tricks](https://css-tricks.com/snippets/html/glyphs/)

## semantic HTML

- use semantic elements instead of others, such as `<div>` / `<b>`
- semantic HTML good for SEO and accessibility

## 空格

`&nbsp;`

## 当 div 中用 css 设置了图片时

```html
<div class="image" role="img" arial-label="description about the image"></div>
```

## 随堂练习

### 商品卡片

<iframe height="300" style="width: 100%;" scrolling="no" title="html2" src="https://codepen.io/sevichee/embed/yLzErOL?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/sevichee/pen/yLzErOL">
  html2</a> by Sowhere (<a href="https://codepen.io/sevichee">@sevichee</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 分页器 pagination

<iframe height="300" style="width: 100%;" scrolling="no" title="pagination" src="https://codepen.io/sevichee/embed/ZEXqREG?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/sevichee/pen/ZEXqREG">
  pagination</a> by Sowhere (<a href="https://codepen.io/sevichee">@sevichee</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
