---
title: JavaScript · 打字机效果生成器
summary: 用 JavaScript 实现网页打字机效果
date: 2022-03-08T16:19:05.137Z
tags:
  - JavaScript
categories:
  - JavaScript
lastmod: 2022-04-07T07:40:27.758Z
---

## 题目

来源：[百度前端学院](http://ife.baidu.com/javascript/string.html#%E4%BB%BB%E5%8A%A1%E5%9B%9B)

参照 [打字机效果 DEMO (opens new window)](https://b.bdstatic.com/searchbox/icms/searchbox/img/%E6%89%93%E5%AD%97%E6%9C%BA.gif)，实现一个打字机效果生成器

**需求说明**

- 在输入框中输入需要实现打字机效果的文本
- 实现原理使用定时器间隔一段时间递增地截取字符串的长度
- 点击 button 实现打字机效果的生成，将文本输出到 id 为 showText 的标签中

```html
<label>请输入文本:</label>
<input type="text" />
<button onclick="generateTypeEffect()">生成打字效果</button>
<h2 id="showText"></h2>
<script>
  function generateTypeEffect() {
    //这里实现打字机效果
    //将内容显示在h2中
  }
</script>
```

## 解法

```html
<label>请输入文本:</label>
<input type="text" />
<button onclick="generateTypeEffect()">生成打字效果</button>
<h2 id="showText"></h2>
<script>
  let i = 0
  function generateTypeEffect() {
    const output = document.getElementById('showText')
    const input = document.querySelector('input').value
    if (i < input.length) {
      output.textContent += input[i]
      setTimeout(generateTypeEffect, 200, ++i)
    }
  }
</script>
```

## 参考

[How TO - Typing Effect](https://www.w3schools.com/howto/howto_js_typewriter.asp)
