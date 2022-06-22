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
  {
    id: 'haibian',
    name: '海边小站',
    tags: ['Vue 3', 'Vue Router', 'Vuex', 'Axios', 'JWT', 'easyMDE', 'BootStrap'],
    feature: 'Vue3 + TypeScript',
    description:
      '海边小站是一个面向成人英语学习的博文平台，为用户提供丰富的英文文摘、英语词汇教程、英语口语教程。网站有用户注册登录、博文发布编辑、用户资料更新等功能。',
    img: 'https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2022/06/d4d2489936e4f647c25df6982c6ef924.png',
    link: 'https://haibian.seviche.cc'
  },
  {
    id: 'fokify',
    name: 'Pocket-Food ',
    tags: ['MVC', 'Vanilla JS', 'ES6', 'Parcel', 'SCSS', 'HTML5'],
    feature: 'JavaScript',
    description:
      '一个基于Web端的菜谱搜索平台，有菜谱搜索、上传、收藏等功能，并使用 LocalStorage 来存储用户数据，让用户在退出页面后仍能浏览所收藏的菜谱。',
    img: 'https://usc1.contabostorage.com/cc0b816231a841b1b0232d5ef0c6deb1:image/2022/06/c3f41e397af1e480f57dd75e82334819.png',
    link: 'https://forkify.seviche.cc'
  },
  {
    id: 'Coachlist',
    name: 'Find a Coach',
    tags: ['Vue 3', 'Vite', 'Vuex', 'Vue Router', 'CSS Animation'],
    feature: 'Vue3',
    description:
      '一个基于Vue3组合式API的师生对接的在线平台，有注册登录、筛选老师、联系老师、注册成为老师等功能。使用Vue3的transition组件和CSS动画为页面提供流畅的过渡效果',
    img: '/assets/coach.png',
    link: 'https://coachlist.seviche.cc'
  }
  // ,
  // {
  //   id: 'bankist',
  //   name: 'Bankist',
  //   tags: ['Lazy-loading'],
  //   feature: 'JavaScript',
  //   description:
  //     '既然如何， 问题的关键究竟为何？ 要想清楚，科学和人文谁更有意义，到底是一种怎么样的存在。 普列姆昌德曾经提到过，希望的灯一旦熄灭，生活刹那间变成了一片黑暗。这启发了我， 那么， 我认为， 总结的来说，',
  //   img: 'https://s2.loli.net/2022/05/16/FDWr4b3mGOgcd5K.png',
  //   link: 'https://bankist.seviche.cc'
  // },
  // {
  //   id: 'omnifood',
  //   name: 'Omnifood',
  //   tags: ['Lazy-loading'],
  //   feature: 'JavaScript',
  //   description:
  //     '既然如何， 问题的关键究竟为何？ 要想清楚，科学和人文谁更有意义，到底是一种怎么样的存在。 普列姆昌德曾经提到过，希望的灯一旦熄灭，生活刹那间变成了一片黑暗。这启发了我， 那么， 我认为， 总结的来说，',
  //   img: 'https://s2.loli.net/2022/05/16/FDWr4b3mGOgcd5K.png',
  //   link: 'https://omnifood.seviche.cc'
  // }
]
