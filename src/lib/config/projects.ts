export type Project = {
  id: string
  name: string
  tags?: string[]
  feature?: string
  description?: string
  img: string
  link?: string
}

export const projects: Project[] = [
  // {
  //   id: 'haibian',
  //   name: '海边小站',
  //   tags: ['Vue 3', 'Vue Router', 'Vuex', 'Axios', 'JWT', 'easyMDE', 'BootStrap'],
  //   feature: 'Vue3 + TypeScript',
  //   description:
  //     '海边小站是一个面向成人英语学习的博文平台，为用户提供丰富的英文文摘、英语词汇教程、英语口语教程。网站有用户注册登录、博文发布编辑、用户资料更新等功能。',
  //   img: 'https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2022/06/d4d2489936e4f647c25df6982c6ef924.png',
  //   link: 'https://haibian.seviche.cc'
  // },
  {
    id: 'miniflux-injector',
    name: 'Miniflux-injector',
    tags: ['Svelte', 'Browser Extension', 'Miniflux', 'RSS'],
    description:
      "Browser extension for the self-hosted miniflux bookmark service. Fork from <a href='https://github.com/Fivefold/linkding-injector' target='_blank'>linkding-injector</a>",
    feature: 'Svelte',
    img: 'https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2022/12/7ae29e6a539895491fbb88a28c95aed7.png',
    link: 'https://github.com/Sevichecc/miniflux-injector/blob/main/docs/API.png'
  },
  {
    id: 'fokify',
    name: 'Fokify ',
    tags: ['MVC', 'Vanilla JS', 'ES6', 'Parcel', 'SCSS', 'HTML5'],
    feature: 'JavaScript',
    description:
      '一个基于Web端的菜谱搜索平台，有菜谱搜索、上传、收藏等功能，并使用 LocalStorage 来存储用户数据，让用户在退出页面后仍能浏览所收藏的菜谱。',
    img: 'https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2022/06/c3f41e397af1e480f57dd75e82334819.png',
    link: 'https://forkify.seviche.cc'
  },
  // {
  //   id: 'Coachlist',
  //   name: 'Find a Coach',
  //   tags: ['Vue 3', 'Vite', 'Vuex', 'Vue Router', 'CSS Animation'],
  //   feature: 'Vue3',
  //   description:
  //     '一个基于Vue3组合式API的师生对接的在线平台，有注册登录、筛选老师、联系老师、注册成为老师等功能。使用Vue3的transition组件和CSS动画为页面提供流畅的过渡效果',
  //   img: '/assets/coach.png',
  //   link: 'https://coachlist.seviche.cc'
  // }
  // ,
  {
    id: 'bankist',
    name: 'Bankist',
    tags: ['Lazy-loading'],
    feature: 'JavaScript',
    description: '一个模拟的银行官网页面，用原生JS实现了懒加载、平滑滚动，以及幻灯片等组件',
    img: 'https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2022/07/b5e1ff87c3b4ba4cf2f00d4124154472.png',
    link: 'https://bankist.seviche.cc'
  },
  {
    id: 'omnifood',
    name: 'Omnifood',
    tags: ['CSS5'],
    feature: 'JavaScript',
    description: '一个食品订阅APP官网，纯HTML + CSS + JavaScript实现',
    img: 'https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2022/07/89424d0b448d105775c1d60346c57c59.png',
    link: 'https://omnifood.seviche.cc'
  },
  {
    id: 'piggame',
    name: 'Pig Game',
    tags: ['Game'],
    feature: 'JavaScript',
    description: '一个投骰子的游戏，先累计到20的人输。',
    img: 'https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2022/07/154ae3bc957a478679f1d9b7e0e0dce1.png',
    link: 'https://pig-game-101.netlify.app/'
  }
]
