---
title: JavaScript · 十进制数转二进制
summary: 用JavaScript将十进制数转二进制数
created: 2022-03-04T14:57:48.683Z
draft: ''
tags:
  - JavaScript
categories:
  - JavaScript
lastmod: 2022-04-16T12:54:16.167Z
type: default
# changelogs:
#   - tag: "20220308"
#     summary:
#       - 将`push` 改为`unshift`
#       - 使用`padding`填充字符串
#       - 修改`binNumber.length >= binBit`
---

## 题目

来源：[“如果”可以“重来” | 百度前端技术学园](http://ife.baidu.com/javascript/if&while.html#:~:text=opens%20new%20window)

验证工具：[在线进制转换 | 进制转换器 — 在线工具](https://www.sojson.com/hexconvert.html)

### Task1

实现当点击转化按钮时，将输入的十进制数字转化为二进制，并显示在 `result` 的 `p` 标签内

### Task2

- 转化显示后的二进制数为 bin-bit 中输入的数字宽度，例如 `dec-number` 为 5 ，`bin-bit` 为 5 ，则转化后数字为 `00101`
- 如果 `bin-bit` 小于转化后的二进制本身位数，则使用原本的位数，如 `dec-number` 为 5 ，`bin-bit` 为 2 ，依然输出 `101` ，但同时在 console 中报个错。

## 解法

```html
<input id="dec-number" type="number" placeholder="输入一个十进制非负整数" />
<input id="bin-bit" type="number" placeholder="输入转化后二进制数字位数" />
<button id="trans-btn">转化为二进制</button>
<p id="result">运算结果</p>
<script>
  /////// Task 1
  const btn = document.querySelector('#trans-btn')
  const result = document.querySelector('#result')

  function dec2bin() {
    let decNumber = Number(document.querySelector('#dec-number').value)

    // 判断输入必须为一个非负整数
    if (decNumber < 0 || !Number.isInteger(decNumber)) {
      alert('请输入一个非负整数！')
    }

    // 求余
    let bin = []
    let remainder
    while (decNumber !== 0) {
      remainder = decNumber % 2
      decNumber = parseInt(decNumber / 2)
      bin.unshift(remainder)
    }
    let binNumber = bin.join('')

    ////// Task2
    let binBit = Number(document.querySelector('#bin-bit').value)
    if (binNumber.length >= binBit) {
      binNumber = binNumber.slice(0, binBit + 1)
    } else {
      binNumber = binNumber.padStart(binBit, '0')
    }
    result.innerHTML = `运算结果：${binNumber}`
  }
  btn.addEventListener('click', dec2bin)
</script>
```
