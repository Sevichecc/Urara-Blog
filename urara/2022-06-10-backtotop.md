---
title: 实现一个返回页面顶部的 Vue3 组件
created: 2022-06-10
summary: 结合流畅的动画平滑滚动到页面顶部
tags:
  - Vue3
  - BootStrap
---

Demo : [者也专栏の右边](https://zheye.seviche.cc)

主要参考：[Simple Vue.js and Tailwind.css Scroll To Top Button | Adam Bailey](https://adambailey.io/blog/scroll-to-top-button-vue/)

CSS 库：[Bootstrap V5.2](https://getbootstrap.com/docs/5.2/getting-started/introduction/)

- 按钮的布局方式为 sticky
- 因为可能需要频繁切换显示状态，所以用`v-show` 而不是 `v-if`来控制按钮可见性
- 使用 Vue 中内置的`<transition>`组件实现状态之间的平滑过渡

```vue title="BackToTop.vue"
<template>
  <div class="position-sticky bottom-0 end-0 w-100 d-flex justify-content-end b-0 pb-3 pe-5">
    <transition>
      <button class="btn btn-secondary btn-sm" v-show="isVisible" @click="scrollToTop" aria-label="scroll to top of the page">
        <img src="../assets/to-top.min.svg" alt="a arrow point to top" />
      </button>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'

export default defineComponent({
  name: 'BackToTop',
  setup() {
    const isVisible = ref(false)
    const handleScroll = () => {
      isVisible.value = window.scrollY > 0
    }
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    return {
      isVisible,
      handleScroll,
      scrollToTop
    }
  }
})
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
```

```html title="to-top.min.svg"
<svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M24.008 14.1V42M12 26l12-12 12 12M12 6h24"
    stroke="#fff"
    stroke-width="4"
    stroke-linecap="round"
    stroke-linejoin="round" />
</svg>
```

其他参考/实现方式：

- [vue 返回顶部的组件 BackTop](https://blog.csdn.net/m0_46217225/article/details/117933815)
- [vue-simple-scroll-up/ScrollToTop.vue · GitHub](https://github.com/asdf1899/vue-simple-scroll-up/blob/master/src/ScrollToTop.vue)
- [Vue.js - Scroll Back To Top Button Without Library](https://codepen.io/webty_mizusawa/pen/QWLMeqE)
- [Vue3 从 0 到 1 组件开发-基础组件：BackTop 回顶 - 掘金](https://juejin.cn/post/6993729338843594783)
- [vue 相同路径刷新怎么回到顶部 - 掘金](https://juejin.cn/post/6873264845915947016)

题外话：||BootStrap 的文档写得好烂||
