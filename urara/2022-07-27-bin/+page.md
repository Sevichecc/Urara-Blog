---
title: JS中的二进制数字
created: 2022-07-27
summary: 0b/0B和paresInt
tags:
  - JavaScript
---

参考：[How to Represent Binary Numbers in JavaScript? - Designcise](https://www.designcise.com/web/tutorial/how-to-represent-binary-numbers-in-javascript)

## ES6+

在 ES6 之后的版本，在二进制数字前加`0b` 或者`0B`来标识这是一个二进制数字，比如：

```js
let number5 = ob101
let number5 = oB101
```

## Before ES6

- 通过字符串和 parseInt 来转换
- parseInt 可以在字符串中提取数字，第一个参数是要提取的字符串，第二个是基准的计算进制

```js
const number = '0101'

Number.parseInt(number, 2)
```

相关：[JavaScript · 十进制数转二进制](/2022-03-04-decbin)
