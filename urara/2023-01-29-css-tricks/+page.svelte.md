---
title: CSS · 玻璃按钮和优雅的文字描边
created: 2023-01-29
summary: Glass buttons and elegant text stroke
tags:
  - CSS Trick
---

## 1.玻璃按钮

### 来源

[Fediverse Fetch Analyzer](https://midnight-productive-sunset.glitch.me/l/organic-interest)

### 效果

<div class='bg-[#ced8de] grid place-items-center py-4 rounded-xl'>
  <button class="neumorphism  w-20">
  Neumorphism Button
  </button>
</div>

### 思路

- 用三种不同的阴影效果来创造层次感
- 用 box-shadow 实现，其中
  - 阴影 1: `4px 4px 8px #afb8bd` 为右下 ↘ 暗面阴影颜色
  - 阴影 2: `-4px -4px 8px #edf8ff` 为左上 ↖ 亮面外边缘颜色
  - 阴影 3: `inset 2px 2px rgba(0, 0, 0, 0.1)` 为内部阴影，用于营造玻璃透明感
- 鼠标悬浮(hover)在按钮上时，按钮颜色变浅
- 按钮阴影色应和背景是同一色系

### 代码

```css title='css'
button {
  /*  reset */
  all: unset;
  padding: 10px;
  font-size: 1rem;
  border-radius: 50px;
  /* hsl(hue saturation lightness / alpha)  */
  background: hsl(260, 25%, 84%);
  cursor: pointer;
  box-shadow: 4px 4px 8px #afb8bd, -4px -4px 8px #edf8ff, inset 2px 2px rgba(0, 0, 0, 0.1);
}

button:hover {
  background: hsl(260, 25%, 90%);
}

html {
  background: #ced8de;
}
```

```html title='html'
<button>Neumorphism Button</button>
```

CodePen:[neumorphism-button](https://codepen.io/sevichee/pen/eYjzpVp)

## 2. 优雅文字描边

### 来源

[Typescript cheatsheet](https://devhints.io/typescript)

### 效果

<p class="elegant-shadow font-serif italic text-4xl text-center">Elegant-text-shadow</p>

### 思路

- 用两个多重投影重合后未覆盖的部分作为灰色描边。
- 用 text-shadow 来做，当有两个 text-shadow 的时候，可以做多重投影
- `text-shadow：水平阴影，垂直阴影，模糊距离，阴影颜色`
- 从上到下的投影：
  - 上 `2px 2px 0 #fff` 白色 （和文字背景颜色一样）
  - 下 `3px 3px 0 #ddd` 灰色
- 两个投影偏移的距离越大，描边越粗。不过我感觉，1px 的差距比较像描边。

### 代码

```css title='css'
p {
  font-family: serif;
  font-style: italic;
  font-size: 4rem;
  text-shadow: 2px 2px 0 #fff, 3px 3px 0 #ddd;
}
```

```html title='html'
<p>Elegant-text-shadow</p>
```

CodePen：[elegant-text-stroke](https://codepen.io/sevichee/pen/OJwwgry)

<style>
  .neumorphism{
  all: unset;
  padding:10px;
  font-size: 1rem;
  border-radius: 50px;
  background: hsl(260,25%,84%);
  cursor: pointer;
  box-shadow: 
    4px 4px 8px #afb8bd, 
    -4px -4px 8px #edf8ff, 
    inset 2px 2px rgba(0, 0, 0,0.1);
  }

  .neumorphism:hover{
     background: hsl(260,25%,90%);
  }

  .elegant-shadow {
  text-shadow: 2px 2px 0 #fff, 3px 3px 0 #ddd;
}
</style>
