---
title: CSS · Tab选项卡
summary: 一个纯 CSS 实现的 Tab 选项卡
created: 2022-03-09T07:42:25.299Z
tags:
  - CSS
categories:
  - CSS
lastmod: 2022-04-07T07:40:02.371Z
---

一个纯 CSS 实现的 Tab 选项卡

## 原理

> 通过隐藏的 `input` 和与之关联的 [label](https://so.csdn.net/so/search?q=label&spm=1001.2101.3001.7020) 点击 `label` 触发 `input` 的 `checked` 状态触发的，再配合使用元素状态的伪类 `:checked `样式就可以实现不同状态的切换，中间的过度效果还可以配合 CSS3 的 `transition`过度效果实现 [^1]。

## 代码

- `input` 的`name` 都一样，`id`不同

### HTML

```html
<div class="tab-frame">
  <!--标签页标题栏-->
  <!-- 设置一个为check -->
  <input type="radio" name="tab" id="tab1" check />
  <label for="tab1">TAB1</label>

  <input type="radio" name="tab" id="tab2" />
  <label for="tab2">TAB2</label>

  <input type="radio" name="tab" id="tab3" />
  <label for="tab3">TAB2</label>

  <!--Tab内容-->
  <div class="tab-content">
    <p>THIS IS TAB1 CONTENT</p>
    <p>Notice the gap between the content and tab after applying background cololr</p>
  </div>
  <div class="tab-content">
    <p>THIS IS TAB2 CONTENT</p>
    <p>Notice the gap between the content and tab after applying background cololr</p>
  </div>
  <div class="tab-content">
    <p>THIS IS TAB3 CONTENT</p>
    <p>Notice the gap between the content and tab after applying background cololr</p>
  </div>
</div>
```

### CSS

```css
/* 隐藏input和tab内容 */
.tab-frame input,
.tab-content {
  display: none;
}

/* 导航栏样式：未选中时 */
.tab-frame label {
  color: #555;
  padding: 10px 20px;
  border-bottom: 1px solid #555;
  cursor: pointer;
  float: left;
}

/* 导航栏样式：选中时 */
.tab-frame input:checked + label {
  color: #0f71aa;
  border: 1px solid #555;
  border-bottom: none;
  border-radius: 4px 4px 0px 0px;
  cursor: default;
}

/* Tab内容样式 */
.tab-frame .tab-content {
  color: #0f71aa;
  font-size: 1.5rem;
  font-weight: bold;
  padding-top: 40px;
  clear: left;
}

/* 点击的时候显示tab内容，即input checked的时候显示label*/
.tab-frame input:nth-of-type(1):checked ~ .tab-content:nth-of-type(1),
.tab-frame input:nth-of-type(2):checked ~ .tab-content:nth-of-type(2),
.tab-frame input:nth-of-type(3):checked ~ .tab-content:nth-of-type(3) {
  display: block;
}
```

## 参考

Demo：[Tabs CSS & HTML, no JS & Jquery](https://codepen.io/llgruff/pen/ZGBxOa)

[^1]: [CSS tab 选项卡 (标签页) 切换](https://blog.csdn.net/baiding1123/article/details/51889201)
