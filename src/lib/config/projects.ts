export type Project = {
  id: string
  name?: string
  tags?: string[]
  feature?: string
  description?: string
  img?: string
  link?: string
}

export const projects: Project[] = [
  {
    id: 'zheye',
    name: '者也专栏',
    tags: ['Vue 3', 'BootStarp', 'Vue Router', 'Vuex', 'Axios'],
    feature: 'Vue3 + TypeScript',
    description: '这是一个前后端分离的应用，功能类似于知乎专栏，支持表单验证、文件上传、Markdown输入和编辑等功能',
    img: 'https://uneorange.oss-cn-guangzhou.aliyuncs.com/202205251801454.avif',
    link: 'https://zheye.seviche.cc'
  }
  // {
  //   id: 'coach',
  //   name: 'Find a Coach',
  //   tags: ['Vue 3', 'Composition API'],
  //   feature: 'Vue3',
  //   description:
  //     '既然如何， 问题的关键究竟为何？ 要想清楚，科学和人文谁更有意义，到底是一种怎么样的存在。 普列姆昌德曾经提到过，希望的灯一旦熄灭，生活刹那间变成了一片黑暗。这启发了我， 那么， 我认为， 总结的来说，',
  //   img: 'https://uneorange.oss-cn-guangzhou.aliyuncs.com/202205251801454.avif',
  //   link: 'https://zheye.seviche.cc'
  // },
  // {
  //   id: 'fokify',
  //   name: 'Forkify-食谱平台',
  //   tags: ['MVM', 'Composition API'],
  //   feature: 'JavaScript',
  //   description:
  //     '既然如何， 问题的关键究竟为何？ 要想清楚，科学和人文谁更有意义，到底是一种怎么样的存在。 普列姆昌德曾经提到过，希望的灯一旦熄灭，生活刹那间变成了一片黑暗。这启发了我， 那么， 我认为， 总结的来说，',
  //   img: 'https://s2.loli.net/2022/05/16/FDWr4b3mGOgcd5K.png',
  //   link: 'https://forkify.seviche.cc'
  // },
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
