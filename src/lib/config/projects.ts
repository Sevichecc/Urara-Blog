export interface Project{
  id: number,
  name: string,
  tech: string[],
  category: string,
  description: string,
  img: string,
  github?: string,
  demo: string
}

export const projects: Project = {
  id: 1,
  name: '知乎专栏mock',
  tech: ['Vue 3', 'Composition API'],
  category: 'SPA应用',
  description: '这是一个前后端分离的应用，模仿的是知乎专栏',
  img: 'https://s2.loli.net/2022/05/16/FDWr4b3mGOgcd5K.png',
  github: 'https://github.com/Sevichecc/zhihu-post-mock',
  demo: 'https://zheye.seviche.cc'
}