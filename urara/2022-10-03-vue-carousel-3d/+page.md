---
title: nuxt2安装3d轮播图插件vue-3d-carousel
created: 2022-10-03
summary: Using Vue-3d-carousel in nuxt2
tags:
  - Nuxt
---

[Vue-3d-carousel](https://github.com/Wlada/vue-carousel-3d)是一个 vue2 的 3d 轮播图组件包，比起 swiper 里面的轮播图其 3d 方面的自定义选项更多，缺点是单位只能用 px，自适应不太方便，而且点击左右两边的卡片时会连跳两级，动画效果不太流畅。

- 文档：[Vue Carousel 3D - 3D Carousel for Vue.js](https://wlada.github.io/vue-carousel-3d/)
- Nuxt 版本：2.15.8

## 1-安装

```bash
npm install -S vue-carousel-3d
```

或者

```bash
yarn add vue-carousel-3d
```

## 2-配置 nuxt 插件

在 `/plugin`文件夹里面加入`vue-carousel-3d.js` ,写入

```js
import Vue from 'vue'
import Carousel3d from 'vue-carousel-3d'

Vue.use(Carousel3d)
```

然后在 `nuxt.config.js` 里面配置插件，这个插件需要关闭 ssr

```js
export.module{
	plugin:[
	{src:'vue-carousel-3d',ssr:false}]，
}
```

## 3-使用举例

需要包裹在`<client-only>`里面

```html
<client-only>
  <carousel-3d>
    <slide :index="0">Slide 1 Content</slide>
    <slide :index="1">Slide 2 Content</slide>
  </carousel-3d>
</client-only>
```
