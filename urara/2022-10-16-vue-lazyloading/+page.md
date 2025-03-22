---
title: 阅读 · vue用箭头函数懒加载组件的原理
created: 2022-10-16
summary: Promise + Dynamic Import + Webpack
tags:
  - Vue
---

- [JS 懒加载，预加载 - 掘金](https://juejin.cn/post/6863295010591375373)
  > vue 中的延迟加载是通过 webpack 代码拆分组件实现的。
- [解密 Vue 路由懒加载\_跟小猿学前端的博客-CSDN 博客](https://blog.csdn.net/weixin_43742274/article/details/107202322)
  > 路由懒加载的实现方式主要是利用 Promise 对象和 Webpack 打包时的特性（webpack 在打包项目的时候会根据你的配置文件将项目进行模块划分），利用箭头函数成功将不同的路由组件划分成为不同的模块，实现按需引入，不需要一次性全量加载，优化性能，降低首屏加载的时延
- [【译】ES6 的工厂函数](https://www.jianshu.com/p/9ce26a5044e6)
  > 工厂函数是一个最后返回值是对象的函数，但它既不是类，也不是构造函数。在 JavaScript 中，任何函数都可以返回一个对象。但当函数没有使用 new 关键字时，那它便是一个工厂函数。
- [一文搞懂 Dynamic Import 和 Top-level await 提案 - 掘金](https://juejin.cn/post/6844904126535434253)

  > 通过动态 import 允许我们按需加载 JavaScript 模块，而不会在最开始的时候就将全部模块加载。

  > 动态 import 返回了一个 Promise 对象，这也意味着可以在 then 中等模块加载成功后去做一些操作。
