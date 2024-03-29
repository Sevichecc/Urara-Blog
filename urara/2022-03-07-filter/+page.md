---
title: JavaScript · 字符串去重
summary: 编码实现字符串去重
created: 2022-03-07T13:55:21.090Z
tags:
  - JavaScript
categories:
  - JavaScript
lastmod: 2022-04-07T07:20:30.550Z
---

## 题目

来源:[百度前端学院](http://ife.baidu.com/javascript/string.html#%E5%AD%97%E7%AC%A6%E4%B8%B2)

```js
/*
去掉字符串 str 中，连续重复的地方
*/
function removeRepetition(str) {
  // do something
}

// 测试用例
console.log(removeRepetition('aaa')) // ->a
console.log(removeRepetition('abbba')) // ->aba
console.log(removeRepetition('aabbaabb')) // ->abab
console.log(removeRepetition('')) // ->
console.log(removeRepetition('abc')) // ->abc
```

## 解法

```js
function removeRepetition(str) {
  let strArr = [...str]
  const result = strArr.filter((s, i, arr) => s !== arr[i + 1]).join('')
  return result
}

console.log(removeRepetition('aaa')) // ->a
console.log(removeRepetition('abbba')) // ->aba
console.log(removeRepetition('aabbaabb')) // ->abab
console.log(removeRepetition('')) // ->
console.log(removeRepetition('abc')) // ->abc
```

如果没有限定条件说是“连续重复”，就可以用 **Set**：

```js
function removeRepetition(str) {
  let strArr = [...new Set(str)]
  return strArr.join('')
}
console.log(removeRepetition('aaa')) // ->a
console.log(removeRepetition('abbba')) // ->ab
console.log(removeRepetition('aabbaabb')) // ->ab
console.log(removeRepetition('')) // ->
console.log(removeRepetition('abc')) // ->abc
```

## 其他解法

- [filter 结合 call Method](https://www.programminghunter.com/article/7794242622/)
- [用 for 循环的两种方式](https://www.cnblogs.com/zyc-zsxbh/p/9327364.html)
