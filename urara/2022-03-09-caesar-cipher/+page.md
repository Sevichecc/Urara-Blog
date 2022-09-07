---
title: JavaScript · Caesar Cipher 凯撒加密
summary: 用JavaScrpit编码实现凯撒加密算法
created: 2022-03-08T16:01:08.850Z
tags:
  - JavaScript
categories:
  - JavaScript
lastmod: 2022-04-07T07:20:47.694Z
---

## 题目

来源：[操作字符串对象 | 百度前端技术学园](http://ife.baidu.com/javascript/string.html#%E5%AD%97%E7%AC%A6%E4%B8%B2)

编码实现凯撒加密算法，根据输入的偏移量，实现对字符串的加密和解密.

恺撒加密（Caesar cipher），是一种最简单且最广为人知的替换加密技术。明文中的所有字母都在字母表上向后（或向前）按照一个固定数目进行偏移后被替换成密文。

例如，当偏移量是 3 的时候，所有的字母 A 将被替换成 D，B 变成 E，以此类推。

**需求说明**

- 点击加密按钮，根据用户输入的偏移量，对明文进行加密，加密后的为密文，显示在密文输入框中
- 点击解密按钮，根据用户输入的偏移量，对密文进行加密，解密出来的为明文，显示在明文输入框中

## 解法

- `string.replace` 替换数字
- 用`.charCodeAt()` 获取字母编码
- 正则表达式`/[A-Za-z]/g`选择字母
- 偏移量超过范围的，往反方向偏移
- 结果验证：[凯撒密码加密/解密 - 一个工具箱 ](http://www.atoolbox.net/Tool.php?Id=778)

### HTML

```html
<label>偏移:</label>
<input type="text" name="offset" size="5" value="3" />
<br />
<label>
  明文:
  <label></label>
  <input type="text" name="plain" size="50" value="This is a test." />
  <br />
  <label>密文:</label>
  <input type="text" name="enc" size="50" />
  <br />
  <input type="button" value="加密" onClick="encrypt()" />
  &nbsp;
  <input type="button" value="解密" onClick="decrypt()" />
</label>
```

### JS

```js
let offsetInput = document.querySelector('input[name=offset]')
let plain = document.querySelector('input[name=plain')
let enc = document.querySelector('input[name=enc]')

// 加密
function encrypt() {
  let offset = Number(offsetInput.value)
  function conver(s) {
    let charCode = s.charCodeAt(0)
    // 替换大写字母 A-Z:65-90
    if (charCode <= 90 && charCode >= 65) {
      return String.fromCharCode(charCode + offset < 90 ? charCode + offset : charCode - offset)
    } else {
      //替换小写字母 a-z:97-122
      return String.fromCharCode(charCode + offset < 122 ? charCode + offset : charCode - offset)
    }
  }
  enc.value = plain.value.replace(/[A-Za-z]/g, conver)

  // 替换大写字母 A-Z:65-90
  // function transUpper(s) {
  //   let charCode = s.charCodeAt();
  //   return String.fromCharCode(
  //     charCode + offset <= 90 ? charCode + offset : charCode - offset
  //   );
  // }

  // //替换小写字母 a-z:97-122
  // function transLower(s) {
  //   let charCode = s.charCodeAt();
  //   return String.fromCharCode(
  //     charCode + offset <= 122 ? charCode + offset : charCode - offset
  //   );
  // }
  // let encUpper = plain.replace(/[A-Z]/g, transUpper);
  // enc.value = encUpper.replace(/[a-z]/g, transLower);
}

// 解密
function decrypt() {
  let offset = Number(offsetInput.value)
  function conver(s) {
    let charCode = s.charCodeAt(0)
    // 替换大写字母 A-Z:65-90
    if (charCode <= 90 && charCode >= 65) {
      return String.fromCharCode(charCode - offset < 65 ? charCode + offset : charCode - offset)
    } else {
      //替换小写字母 a-z:97-122
      return String.fromCharCode(charCode - offset < 97 ? charCode + offset : charCode - offset)
    }
  }
  plain.value = enc.value.replace(/[A-Za-z]/g, conver)
}
```

## 参考

- [凯撒密码 javascript](https://blog.csdn.net/dikanjiang6340/article/details/101264748?utm_relevant_index=1)
- [Caesar Cipher in Javascript - Stack Overflow](https://stackoverflow.com/questions/44232645/caesar-cipher-in-javascript?newreg=0a8ff4c05c484b01a7df20821475fb15)
