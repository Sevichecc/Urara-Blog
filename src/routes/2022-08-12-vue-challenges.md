---
title: Vue.js 挑战练习
created: 2022-08-12
summary: 我的答案以及相关知识点
tags:
  - Vue
---

最近做了一下这个[Vue.js 挑战](https://cn-vuejs-challenges.netlify.app/questions/14-dynamic-css-values/README.zh-CN.html)，其中的题目大多出自[Vue3 文档](https://staging-cn.vuejs.org/)，都不是很难，但涉及到的知识点
比较琐碎，用来复习挺好的。

然后这是我的答案和题目涉及到的知识点，除了[鼠标指针](###鼠标指针)这个部分没通过单元测试之外，其他都都通过了，然后这个鼠标指针为什么没通过单元测试我也没弄明白，试了下其他人的也通过不了，好奇怪……

这里省去部分题目，主要写答案。

## Built-ins

### DOM 传送门

Vue.js 提供了一个内置组件，将其插槽内容渲染到另一个 DOM，成为该 DOM 的一部分。

```vue
<script setup>
const msg = 'Hello World'
</script>
<template>
  <teleport to="body">
    <span>{{ msg }}</span>
  </teleport>
</template>
```

相关知识点 ：[Teleport | Vue.js](https://v3.cn.vuejs.org/guide/teleport.html#teleport)

> 有时组件模板的一部分逻辑上属于该组件，而从技术角度来看，最好将模板的这一部分移动到 DOM 中 Vue app 之外的其他位置[^1]。

- 有点像传送门，将相应元素渲染到制定位置
- to 后面写 css selector

### 优化性能的指令

Vue.js 提供了一个指令，以便只渲染一次元素和组件，并且跳过以后的更新。

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)

setInterval(() => {
  count.value++
}, 1000)
</script>

<template>
  <span v-once>使它从不更新: {{ count }}</span>
</template>
```

相关知识点：`Vue-事件修饰符`

## CSS Features

### 动态 CSS

Vue 单文件组件 `<style>` 模块支持给 CSS 绑定动态值。

```vue
<script setup>
import { ref } from 'vue'
const theme = ref('red')

const colors = ['blue', 'yellow', 'red', 'green']

setInterval(() => {
  theme.value = colors[Math.floor(Math.random() * 4)]
}, 1000)
</script>

<template>
  <p>hello</p>
</template>

<style scoped>
/* Modify the code to bind the dynamic color */
p {
  color: v-bind(theme);
}
</style>
```

相关知识点：`v-bind` `Dynamic Styling动态绑定样式`

### 全局 CSS

给具有 CSS 作用域的 Vue 单文件组件设置全局 CSS 样式

```vue
<template>
  <p>Hello Vue.js</p>
</template>

<style scoped>
p {
  font-size: 20px;
  color: red;
  text-align: center;
  line-height: 50px;
}

/* Make it work */
:global(body) {
  width: 100vw;
  height: 100vh;
  background-color: burlywood;
}
</style>
```

或者

```vue
<template>
  <p>Hello Vue.js</p>
</template>

<style scoped>
p {
  font-size: 20px;
  color: red;
  text-align: center;
  line-height: 50px;
}
</style>
<style>
/* Make it work */
body {
  width: 100vw;
  height: 100vh;
  background-color: burlywood;
}
</style>
```

相关知识点：[单文件组件 CSS 功能 | Vue.js](https://staging-cn.vuejs.org/api/sfc-css-features.html)

## Components

### DOM 传送门

见上面

### Props 验证

验证 Button 组件的 Prop 类型 ，使它只接收: primary | ghost | dashed | link | text | default ，且默认值为 default

```vue
<script setup>
import Button from './Button.vue'
defineProps({
  type: {
    type: String,
    default: 'default',
    validator: value => {
      ;['primary', 'ghost', 'dashed', 'link', 'text', 'default'].includes(value)
    }
  }
})
</script>

<template>
  <Button type="dashed" />
</template>
```

相关知识点：[Props | Vue.js](https://staging-cn.vuejs.org/guide/components/props.html#prop-validation)

### 函数式组件

这题我不是很懂，翻了一下大家的解决方案，感觉这个比较能看懂：[21 - functional component · Issue #322 · webfansplz/vuejs-challenges · GitHub](https://github.com/webfansplz/vuejs-challenges/issues/322)

```vue
<script setup lang="ts">
import { ref, h } from 'vue'

/**
 * Implement a functional component :
 * 1. Render the list elements (ul/li) with the list data
 * 2. Change the list item text color to red when clicked.
 */
const ListComponent = (props, { emit }) =>
  h(
    // 创建 ul
    'ul',
    // 根据传入的props创建li
    props.list.map((item: { name: string }, index: number) =>
      h(
        'li',
        {
          // 点击时处罚toggle。并将当前index作为参数传入toggle
          onClick: () => emit('toggle', index),
          // 将当前点击的li颜色设置为红色
          style: index === props.activeIndex ? { color: 'red' } : null
        },
        // li 默认值
        item.name
      )
    )
  )
ListComponent.props = ['list', 'activeIndex']
ListComponent.emits = ['toggle']

const list = [
  {
    name: 'John'
  },
  {
    name: 'Doe'
  },
  {
    name: 'Smith'
  }
]

const activeIndex = ref(0)

function toggle(index: number) {
  activeIndex.value = index
}
</script>

<template>
  <list-component :list="list" :active-index="activeIndex" @toggle="toggle" />
</template>
```

相关知识点：

- [渲染函数 & JSX | Vue.js](https://staging-cn.vuejs.org/guide/extras/render-function.html#functional-components)
- [渲染机制 | Vue.js](https://staging-cn.vuejs.org/guide/extras/rendering-mechanism.html)

### 渲染函数[h()]

> 使用 h 渲染函数来实现一个组件。

```js
import { defineComponent, h } from 'vue'
export default defineComponent({
  name: 'MyButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['custom-click'],
  setup(props, { emit, slots }) {
    return () =>
      h(
        'button',
        {
          disabled: props.disabled,
          onClick: () => emit('custom-click')
        },
        slots.default?.()
      )
  }
})
```

### 树组件

实现一个树组件

```vue
<script setup lang="ts">
import { defineComponent } from 'vue'
interface TreeData {
  key: string
  title: string
  children: TreeData[]
}
defineProps<{ data: TreeData[] }>()
</script>

<template>
  <ul v-for="node in data">
    <li>{{ node.title }}</li>
    <template v-if="node.children && node.children.length">
      // 用递归的方法来实现
      <TreeComponent :data="node.children" />
    </template>
  </ul>
</template>
```

参考：

- [208 - Tree Component · Issue #659 · webfansplz/vuejs-challenges · GitHub](https://github.com/webfansplz/vuejs-challenges/issues/659)
- [Creating a Recursive Tree Component in Vue.js | DigitalOcean](https://www.digitalocean.com/community/tutorials/vuejs-recursive-components)
  相关知识点：[单文件组件 `<script setup>` | Vue.js](https://staging-cn.vuejs.org/api/sfc-script-setup.html#recursive-components)

## Composable Function

本节相关知识点：[组合式函数 | Vue.js](https://staging-cn.vuejs.org/guide/reusability/composables.html)

### 切换器

尝试编写可组合函数

```vue
<script setup lang="ts">
import { ref } from 'vue'
/**
 * Implement a composable function that toggles the state
 * Make the function work correctly
 */
function useToggle(init: boolean) {
  const state = ref(init)
  const toggle = () => (state.value = !state.value)
  return [state, toggle]
}

const [state, toggle] = useToggle(false)
</script>

<template>
  <p>State: {{ state ? 'ON' : 'OFF' }}</p>
  <p @click="toggle">Toggle state</p>
</template>
```

### 计数器

实现一个计数器

```vue
<script setup lang="ts">
import { ref } from 'vue'

interface UseCounterOptions {
  min?: number
  max?: number
}

/**
 * Implement the composable function
 * Make sure the function works correctly
 */
function useCounter(initialValue = 0, options: UseCounterOptions = {}) {
  const count = ref(initialValue)

  const inc = () => {
    if (count.value < options.max) count.value++
  }

  const dec = () => {
    if (count.value > options.min) count.value--
  }

  const reset = () => (count.value = initialValue)
  return { count, inc, dec, reset }
}

const { count, inc, dec, reset } = useCounter(0, { min: 0, max: 10 })
</script>
```

### 实现本地存储函数

封装一个`localStorage`API

```vue
<script setup lang="ts">
import { ref, watchEffect } from 'vue'

/**
 * Implement the composable function
 * Make sure the function works correctly
 */
function useLocalStorage(key: string, initialValue: any) {
  const value = ref(localStorage.getItem(key) || initialValue)
  watchEffect(() => {
    localStorage.setItem(key, value.value)
  })
  return value
}

const counter = useLocalStorage('counter', 0)

// We can get localStorage by triggering the getter:
console.log(counter.value)

// And we can also set localStorage by triggering the setter:

const update = () => counter.value++
</script>

<template>
  <p>Counter: {{ counter }}</p>
  <button @click="update">Update</button>
</template>
```

相关知识点：

- [watchEffect()](https://staging-cn.vuejs.org/api/reactivity-core.html#watcheffect)
- [Window.localStorage - Web API 接口参考 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage)

### 鼠标坐标

这个没通过单元测试，不知道什么原因，试了下其他人的也没能通过……

```vue
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
// Implement ...
function useEventListener(target, event, callback) {
  onMounted(() => target.addEventListener(event, callback))
  onUnmounted(() => target.removeEventListener(event, callback))
}

// Implement ...
function useMouse() {
  const x = ref(0)
  const y = ref(0)
  useEventListener(window, 'mousemove', e => {
    x.value = e.pageX
    y.value = e.pageY
  })
  return { x, y }
}
const { x, y } = useMouse()
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>
```

## Composition API

### 生命周期钩子

```vue
<script setup lang="ts">
import { onMounted, inject, onUnmounted } from 'vue'

const timer = inject('timer')
const count = inject('count')

onMounted(() => {
  timer.value = window.setInterval(() => {
    count.value++
  }, 1000)
})
// 计时器要清除
onUnmounted(() => {
  window.clearInterval(timer.value)
})
</script>

<template>
  <div>
    <p>Child Component: {{ count }}</p>
  </div>
</template>
```

- 相关知识点：
  - [组合式 API：依赖注入 | Vue.js](https://staging-cn.vuejs.org/api/composition-api-dependency-injection.html)
  - [组合式 API：生命周期钩子 | Vue.js](https://staging-cn.vuejs.org/api/composition-api-lifecycle.html#onunmounted)

### ref 全家桶

```vue
<script setup lang="ts">
import { ref, Ref, reactive, isRef, unref, toRef } from 'vue'

const initial = ref(10)
const count = ref(0)

// Challenge 1: Update ref
function update(value) {
  count.value = value
}

/**
 * Challenge 2: Check if the `count` is a ref object.
 * Make the output be 1
 */
console.log(isRef(count) ? 1 : 0)

/**
 * Challenge 3: Unwrap ref
 * Make the output be true
 */
function initialCount(value: number | Ref<number>) {
  // Make the output be true
  console.log(unref(value) === 10)
}

initialCount(initial)

/**
 * Challenge 4:
 * create a ref for a property on a source reactive object.
 * The created ref is synced with its source property:
 * mutating the source property will update the ref, and vice-versa.
 * Make the output be true
 */
const state = reactive({
  foo: 1,
  bar: 2
})
const fooRef = toRef(state, 'foo') // change the impl...

// mutating the ref updates the original
fooRef.value++
console.log(state.foo === 2)

// mutating the original also updates the ref
state.foo++
console.log(fooRef.value === 3)
</script>

<template>
  <div>
    <p>
      <span @click="update(count - 1)">-</span>
      {{ count }}
      <span @click="update(count + 1)">+</span>
    </p>
  </div>
</template>
```

相关知识点：

- [isRef()](https://staging-cn.vuejs.org/api/reactivity-utilities.html#isref)
- [unref()](https://staging-cn.vuejs.org/api/reactivity-utilities.html#unref)
- [toRef](https://staging-cn.vuejs.org/api/reactivity-utilities.html#toref)

### 响应性丢失

保证解构/扩展不丢失响应性

```vue
<script setup lang="ts">
import { reactive, toRefs } from 'vue'

function useCount() {
  const state = reactive({
    count: 0
  })

  function update(value: number) {
    state.count = value
  }

  return {
    state: toRefs(state),
    update
  }
}

// Ensure the destructured properties don't lose their reactivity
const {
  state: { count },
  update
} = useCount()
</script>

<template>
  <div>
    <p>
      <span @click="update(count - 1)">-</span>
      {{ count }}
      <span @click="update(count + 1)">+</span>
    </p>
  </div>
</template>
```

相关知识点：[toRefs](https://staging-cn.vuejs.org/api/reactivity-utilities.html#torefs)

### 可写的计算属性

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'

const count = ref(1)
const plusOne = computed({
  get() {
    return count.value + 1
  },
  set(newValue) {
    count.value = newValue - 1
  }
})

/**
 * Make the `plusOne` writable.
 * So that we can get the result `plusOne` to be 3, and `count` to be 2.
 */

plusOne.value++
</script>

<template>
  <div>
    <p>{{ count }}</p>
    <p>{{ plusOne }}</p>
  </div>
</template>
```

相关知识点：[可写的计算属性 ](https://staging-cn.vuejs.org/guide/essentials/computed.html#writable-computed)

### watch 全家桶

```vue
<script setup lang="ts">
import { ref, watch } from 'vue'

const count = ref(0)

/**
 * Challenge 1: Watch once
 * Make sure the watch callback only triggers once
 */
const watchOnce = watch(count, () => {
  console.log('Only triggered once')
  watchOnce()
})

count.value = 1
setTimeout(() => (count.value = 2))

/**
 * Challenge 2: Watch object
 * Make sure the watch callback is triggered
 */
const state = ref({
  count: 0
})

watch(
  state,
  () => {
    console.log('The state.count updated')
  },
  { deep: true }
)

state.value.count = 2

/**
 * Challenge 3: Callback Flush Timing
 * Make sure visited the updated eleRef
 */

const eleRef = ref()
const age = ref(2)
watch(
  age,
  () => {
    console.log(eleRef.value)
  },
  {
    flush: 'post'
  }
)
age.value = 18
</script>

<template>
  <div>
    <p>
      {{ count }}
    </p>
    <p ref="eleRef">
      {{ age }}
    </p>
  </div>
</template>
```

相关知识点：[侦听器 | Vue.js](https://staging-cn.vuejs.org/guide/essentials/watchers.html)

### 浅层 ref

响应式 API: shallowRef

```vue
<script setup lang="ts">
import { shallowRef, watch } from 'vue'

const state = shallowRef({ count: 1 })

// Does NOT trigger
watch(
  state,
  () => {
    console.log('State.count Updated')
  },
  { deep: true }
)

/**
 * Modify the code so that we can make the watch callback trigger.
 */
state.value = { count: 2 }
</script>

<template>
  <div>
    <p>
      {{ state.count }}
    </p>
  </div>
</template>
```

相关知识点：[shallowRef()](https://staging-cn.vuejs.org/api/reactivity-advanced.html#shallowref)

### 依赖注入

child.vue

```vue
<script setup lang="ts">
import { inject } from 'vue'
const count = inject('count')
</script>

<template>
  {{ count }}
</template>
```

相关知识点：[组合式 API：依赖注入 | Vue.js](https://staging-cn.vuejs.org/api/composition-api-dependency-injection.html)

### Effect 作用域 API

```vue
<script setup lang="ts">
import { ref, computed, watch, watchEffect, effectScope } from 'vue'

const counter = ref(1)
const doubled = computed(() => counter.value * 2)

// use the `effectScope` API to make these effects stop together after being triggered once

const scope = effectScope()
scope.run(() => {
  watch(doubled, () => console.log(doubled.value))
  watchEffect(() => console.log(`Count: ${doubled.value}`))
  counter.value = 2
})

setTimeout(() => {
  counter.value = 4
  scope.stop()
})
</script>

<template>
  <div>
    <p>
      {{ doubled }}
    </p>
  </div>
</template>
```

相关知识点：[effectScope](https://staging-cn.vuejs.org/api/reactivity-advanced.html#effectscope)

### 自定义 ref

```vue
<script setup>
import { watch, customRef } from 'vue'

/**
 * Implement the function
 */
function useDebouncedRef(value, delay = 200) {
  let timeout
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      }
    }
  })
}
const text = useDebouncedRef('hello')

/**
 * Make sure the callback only gets triggered once when entered multiple times in a certain timeout
 */
watch(text, value => {
  console.log(value)
})
</script>

<template>
  <input v-model="text" />
</template>
```

相关知识点：[customRef](https://staging-cn.vuejs.org/api/reactivity-advanced.html#customref)

## Directives

### 大写

创建一个自定义的修饰符  `capitalize`，它会自动将  `v-model`  绑定输入的字符串值首字母转为大写：
App.vue

```vue
<script setup>
import { ref } from 'vue'
import Input from './Input.vue'

const value = ref('')
</script>

<template>
  <Input type="text" v-model.capitalize="value" />
</template>
```

Input.vue

```vue
<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  modelValue: String,
  modelModifiers: {
    default: () => ({})
  }
})

const emit = defineEmits(['update:modelValue'])
function emitValue(e) {
  let value = e.target.value
  if (props.modelModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1)
  }
  emit('update:modelValue', value)
}
</script>

<template>
  <input type="text" :value="modelValue" @input="emitValue" />
</template>
```

相关知识点：[处理 v-model 修饰符](https://staging-cn.vuejs.org/guide/components/events.html#usage-with-v-model)

### 优化性能的指令

见上面。v-once

### 切换焦点指令

```vue
<script setup lang="ts">
import { ref } from 'vue'

const state = ref(false)

/**
 * Implement the custom directive
 * Make sure the input element focuses/blurs when the 'state' is toggled
 *
 */

const VFocus = {
  updated: (el, state) => (state.value ? el.focus() : el.blur())
}

setInterval(() => {
  state.value = !state.value
}, 2000)
</script>

<template>
  <input v-focus="state" type="text" />
</template>
```

相关知识点：[自定义指令 | Vue.js](https://staging-cn.vuejs.org/guide/reusability/custom-directives.html)

### 防抖点击指令

尝试实现一个防抖点击指令

```vue
<script setup lang="ts">
/**
 * Implement the custom directive
 * Make sure the `onClick` method only gets triggered once when clicked many times quickly
 * And you also need to support the debounce delay time option. e.g `v-debounce-click:ms`
 *
 */

function debounce(fn, delay) {
  let timeout
  let count = 0
  return (...args) => {
    if (count === 0) {
      count++
      fn(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

const VDebounceClick = {
  mounted: (el, binding) => {
    const { value, arg } = binding
    el.addEventListener('click', debounce(value, arg))
  }
}

function onClick() {
  console.log('Only triggered once when clicked many times quickly')
}
</script>

<template>
  <button v-debounce-click:200="onClick">Click on it many times quickly</button>
</template>
```

相关知识点：[指令钩子](https://staging-cn.vuejs.org/guide/reusability/custom-directives.html#introduce)

### 激活的样式-指令

```vue
<script setup lang="ts">
import { ref, watchEffect } from 'vue'

/**
 * Implement the custom directive
 * Make sure the list item text color changes to red when the `toggleTab` is toggled
 *
 */
const VActiveStyle = {
  mounted: (el, binding) => {
    const [styles, fn] = binding.value
    watchEffect(() => {
      Object.keys(styles).map(key => (el.style[key] = fn() ? styles[key] : ''))
    })
  }
}

const list = [1, 2, 3, 4, 5, 6, 7, 8]
const activeTab = ref(0)
function toggleTab(index: number) {
  activeTab.value = index
}
</script>

<template>
  <ul>
    <li
      v-for="(item, index) in list"
      :key="index"
      v-active-style="[{ color: 'red' }, () => activeTab === index]"
      @click="toggleTab(index)">
      {{ item }}
    </li>
  </ul>
</template>
```

### 实现简易版`v-model`指令

```vue
<script setup lang="ts">
import { ref } from 'vue'

/**
 * Implement a custom directive
 * Create a two-way binding on a form input element
 *
 */
const VOhModel = {
  mounted: (el, binding) => {
    el.value = binding.value
    el.addEventListener('input', () => {
      value.value = el.value
    })
  }
}

const value = ref('Hello Vue.js')
</script>

<template>
  <input v-oh-model="value" type="text" />
  <p>{{ value }}</p>
</template>
```

## Event Handling

### 阻止事件冒泡

```vue
<script setup lang="ts">
const click1 = () => {
  console.log('click1')
}

const click2 = e => {
  console.log('click2')
}
</script>

<template>
  <div @click="click1()">
    <div @click.stop="click2()">click me</div>
  </div>
</template>
```

相关知识点：[事件修饰符](https://staging-cn.vuejs.org/guide/essentials/event-handling.html#event-modifiers)

### 按键修饰符

```vue
<template>
  <!-- Add key modifiers made this will fire even if Alt or Shift is also pressed -->
  <button @click.alt="onClick1" @click.shift="onClick1">A</button>

  <!-- Add key modifiers made this will only fire when Shift and no other keys are pressed -->
  <button @click.shift.exact="onCtrlClick">A</button>

  <!-- Add key modifiers made this will only fire when no system modifiers are pressed -->
  <button @click.exact="onClick2">A</button>
</template>

<script setup>
function onClick1() {
  console.log('onClick1')
}
function onCtrlClick() {
  console.log('onCtrlClick')
}
function onClick2() {
  console.log('onClick2')
}
</script>
```

相关知识点：[按键修饰符](https://staging-cn.vuejs.org/guide/essentials/event-handling.html#key-modifiers)

## Global API:General

### 下一次 DOM 更新

在`Vue.js`中改变响应式状态时，DOM 不会同步更新。 `Vue.js`  提供了一个用于等待下一次 DOM 更新的方法

```vue
<script setup>
import { ref, nextTick } from 'vue'

const count = ref(0)
const counter = ref(null)

async function increment() {
  count.value++

  /**
   * DOM is not yet updated, how can we make sure that the DOM gets updated
   * Make the output be true
   */
  await nextTick()
  console.log(+counter.value.textContent === 1)
}
</script>

<template>
  <button ref="counter" @click="increment">
    {{ count }}
  </button>
</template>
```

相关知识点：[nextTick()](https://staging-cn.vuejs.org/api/general.html#nexttick)

## Lifecycle

### 生命周期钩子

[同上：生命周期钩子](#生命周期钩子)

## Reactivity:Advanced

### 浅层 ref

[同上：浅层 ref](#浅层-ref)

### 原始值 API

```vue
<script setup lang="ts">
import { reactive, isReactive, toRaw, markRaw } from 'vue'

const state = { count: 1 }
const reactiveState = toRaw(reactive(state))

/**
 * Modify the code so that we can make the output be true.
 */
console.log(reactiveState === state)

/**
 * Modify the code so that we can make the output be false.
 */
const info = markRaw({ count: 1 })
const reactiveInfo = reactive(info)

console.log(isReactive(reactiveInfo))
</script>

<template>
  <div>
    <p>
      {{ reactiveState.count }}
    </p>
  </div>
</template>
```

相关知识点：

- [toRaw](https://staging-cn.vuejs.org/api/reactivity-advanced.html#toraw)
- [markRaw](https://staging-cn.vuejs.org/api/reactivity-advanced.html#markraw)

### Effect 作用域 API

[同上：Effect 作用域 API](#effect-作用域-api)

### 自定义 ref

[同上：自定义 ref](#自定义-ref)

## Reactivity:Core

### ref 全家桶

[同上：ref 全家桶](#ref-全家桶)

### 可写的计算属性

[同上：可写的计算属性](#可写的计算属性)

### watch 全家桶

[同上：watch 全家桶](#watch-全家桶)

## Reactivity:Utilities

### 响应性丟失

[同上：响应性丟失](#响应性丟失)

## Utility Function

### until

```vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

/**
 * Implement the until function
 */

function until(initial) {
  function toBe(value) {
    return new Promise(resolve => {
      initial.value = value
      resolve(initial.value)
    })
  }

  return {
    toBe
  }
}

async function increase() {
  count.value = 0
  setInterval(() => {
    count.value++
  }, 1000)
  await until(count).toBe(3)
  console.log(count.value === 3) // Make sure the output is true
}
</script>

<template>
  <p @click="increase">Increase</p>
</template>
```

## Web Components

### 自定义元素

```vue
<script setup lang="ts">
import { onMounted, defineCustomElement } from 'vue'

/**
 * Implement the code to create a custom element.
 * Make the output of page show "Hello Vue.js".
 */
const VueJs = defineCustomElement({
  props: { message: String },
  template: '<span>{{message}}</span>'
})

customElements.define('vue-js', VueJs)
onMounted(() => {
  document.getElementById('app')!.innerHTML = '<vue-js message="Hello Vue.js"></vue-js>'
})
</script>

<template>
  <div id="app"></div>
</template>
```

并且 vite.config.js 里要做相关设置
相关知识点：[Vue 与 Web Components | Vue.js](https://staging-cn.vuejs.org/guide/extras/web-components.html)
