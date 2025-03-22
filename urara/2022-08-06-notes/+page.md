---
title: Monkey Patch
created: 2022-08-06
summary: 猴子打补丁
toc: false
tag:
  - Notes
---

[Monkey Patch - Wikipedia](https://en.wikipedia.org/wiki/Monkey%20patch)

> A **Monkey patch** is a way for a program to extend or modify supporting system software locally (affecting only the running instance of the program)."

也可以可以理解为基于原生功能（API）的一些自定义拓展？这个概念常在 Python 里面出现，也叫鸭子双关

[Checking if a JavaScript native function is monkey patched](https://mmazzarolo.com/blog/2022-07-30-checking-if-a-javascript-native-function-was-monkey-patched/)

> Monkey patching is a powerful but dangerous technique because the code you’re overriding is not in your control: future updates to the JavaScript engine may break some assumptions made in your patch and cause serious bugs.
> Additionally, by monkey patching code you don’t own, you might override some code that has already been monkey patched by another developer, introducing a potential conflict.

对于 JS 来说，Monkey patch 的问题在于：如果 JS 引擎更新了，可能会带来一些难以预计的 bug，这篇文章说了几种怎么检测是否存在 monkey patch 函数的方法，比如用 toString、iframe、proxy 等等，但都不是很完美，可以根据使用场景来决定用哪种方法
