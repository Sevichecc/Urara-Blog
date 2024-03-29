---
title: JavaScript · 判断水仙花数
summary: 用JavaScript判断水仙花数
created: 2022-03-03T15:07:14.533Z
categories:
  - JavaScript
tags:
  - JavaScript
slug: Narcissistic-number-in-JavaScript
lastmod: 2022-04-07T07:20:02.340Z
---

题目来源： [“如果”可以“重来” | 百度前端技术学园](http://ife.baidu.com/javascript/if&while.html#%E7%BC%96%E7%A0%81%E4%B8%89)

## 题目

根据用户输入的数据，判断水仙花数（三位数），水仙花数是指一个 n 位数 (n≥3)，它的每个位上的数字的 n 次幂之和等于它本身。

```html
<label>请输需要判断的水仙花数(三位数):</label>
<input type="text" />
<br />
<button>开始判断</button>
<script>
  function numDaffodils(num) {
    // 判断是否为水仙花数
  }
</script>
```

**需求说明**

- 当点击 `开始判断` 按钮，就执行 `numDaffodils` 函数判断输入的数字是否为水仙花数.
- 如果是，就弹出提示框提示是水仙花数，如果不是，就提示不是水仙花数
- 例如输入 153，`153=1* 1*1+5*5*5+3*3*3` , 是水仙花数，就提示 153 是水仙花数。
- 请加入输入判断，必须输入数字，不能输入其他类型。

## 解法

```html
<label>请输需要判断的水仙花数(三位数):</label>
<input type="text" />
<br />
<button>开始判断</button>
<script>
  const btn = document.querySelector('button')

  function numDaffodils() {
    let num = document.querySelector('input').value

    //输入的是字符串
    // console.log(typeof num); =>string

    // 检查是否是有效数字
    if (num.startsWith('0') || num.length !== 3 || isNaN(num)) alert('请输入三位有效数字')

    // 拆分为数组
    let numArr = num.split('')

    //判断是不是水仙花数字！
    const numCheck = numArr.reduce((acc, value) => acc + Math.pow(value, 3), 0)

    numCheck == num ? alert('是水仙花数 ✅') : alert('不是水仙花数❗️')
  }

  btn.addEventListener('click', numDaffodils)
</script>
```

这里有一个坑：从 `<input type="text">` 获取输入内容[^1]，因为 `type=text` ，所以输出的是 `string` 而不是 `number`，不能直接用`typeof ==='number'`判断输入的是不是数字

## 参考

- [learn/task2_3 简单水仙花.html · Homeuh/learn · GitHub](https://github.com/Homeuh/learn/blob/6ed2d79cd6abff09f981c0af21080c38b55b6ef2/out/artifacts/Web0_1_Web_exploded/Task_JS/task2_3%E7%AE%80%E5%8D%95%E6%B0%B4%E4%BB%99%E8%8A%B1.html)

- [IFE/水仙花数.html · Yaomiaomu/IFE · GitHub](https://github.com/Yaomiaomu/IFE/blob/fed038d6c76b2bf62ee83d6539c927c6fa333b91/JAVASCRIPT/%E6%B0%B4%E4%BB%99%E8%8A%B1%E6%95%B0.html)

[^1]: [HTML text input allow only numeric input](https://stackoverflow.com/questions/469357/html-text-input-allow-only-numeric-input)
