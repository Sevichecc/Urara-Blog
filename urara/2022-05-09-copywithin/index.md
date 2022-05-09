---
title: JavaScript · 数组中的copyWithin方法
created: 2022-05-08T17:13:47.671Z
summary: 一种数组内元素复制的方法
tags:
  - JavaScript
lastmod: 2022-05-09T02:27:47.533Z
---

> `copyWithin()` 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度   
> 
>  —— MDN

## 简介
以下部分内容来自 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)
### 语法：
```js
  arr.copyWithin(target[, start[, end]])
```
## 参数
### target

0 为基底的索引，复制序列到该位置。

如果是负数，`target` 将从末尾开始计算。如果 `target` 大于等于 `arr.length`，将会不发生拷贝。如果 `target` 在 `start` 之后，复制的序列将被修改以符合 `arr.length`。

### start

0 为基底的索引，开始复制元素的起始位置。

如果是负数，`start` 将从末尾开始计算。如果 `start` 被忽略，`copyWithin` 将会从 0 开始复制。

### end

0 为基底的索引，开始复制元素的结束位置。

`copyWithin` 将**会拷贝到该位置，但不包括 `end` 这个位置的元素**。

如果是负数， `end` 将从末尾开始计算。如果 `end` 被忽略，`copyWithin` 方法将会一直复制至数组结尾（默认为 `arr.length`）。

## 例子
### 源码
```js
  const array1 = ['a', 'b', 'c', 'd', 'e'];

  // copy to index 0 the element at index 3
  console.log(array1.copyWithin(0, 3, 4));
  // expected output: Array ["d", "b", "c", "d", "e"]

  // copy to index 1 all elements from index 3 to the end
  console.log(array1.copyWithin(1, 3));
  // expected output: Array ["d", "d", "e", "d", "e"]
```
### 可视化

---
![](/2022-05-09-copywithin/copyWithin.min.svg)

---
上图将target位置用红色的部分表示，被复制的元素为蓝色。

1. `a = array1[0]` ,所在位置是将要被替换的target位置。`d = array1[3]`是复制的起始元素，复制结束在`array1[4]`之前。复制后`a`的位置被 `d`所取代。
2. `b = array1[1]` ,所在位置是将要被替换的target位置，`d = array1[3]`是复制的起始元素，复制没有指定结束位置，所以一直复制到数组末尾。复制后`a`的位置被 `'d','e'`所取代。


