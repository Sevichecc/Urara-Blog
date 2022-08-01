export interface FriendOld {
  // hCard+XFN
  id: string // HTML id
  rel?: string // XFN, contact / acquaintance / friend
  link?: string // URL
  html?: string // HTML
  title?: string // 标题
  descr?: string // 描述
  avatar?: string // 头像
  name?: string // backwards compatibility
}

export type Friend = {
  id: string // HTML id
  rel?: string // XHTML Friends Network
  link?: string // URL
  html?: string // Custom HTML

  title?: string // 标题
  name?: string // 人名
  avatar?: string // 头像
  descr?: string // 描述
  class?: {
    avatar?: string // 头像类名
    img?: string // 图片类名
  }
}

export const friends: Friend[] = [
  {
    id: 'mantyke',
    rel: 'friend',
    name: '塔塔',
    title: '小球飞鱼',
    link: 'https://mantyke.icu/',
    descr: '我们会一起遇见鲸鱼吗？',
    avatar: 'https://mantyke.icu/images/logo.png'
  },
  {
    id: 'middleofnowhere',
    rel: 'friend',
    name: '陆博学',
    title: 'Middle of No where',
    link: 'https://notes.midofnowhere.link/',
    descr: `Welcome to the middle of nowhere. That's right, absolute nowhere.`,
    avatar: 'https://github.com/yue2/picbed/blob/main/cutepic.png?raw=true'
  },
  {
    id: 'chestnut',
    rel: 'friend',
    name: '栗',
    title: '野生栗子🌰',
    link: 'https://blog.chestnut.monster/'
  },
  {
    id: 'nekolas',
    rel: 'friend',
    name: 'Nic Tian',
    title: `Nekolas's blog`,
    link: 'https://blog.nekolas.cafe/',
    descr: '欢迎加入锈栓抵抗军',
    avatar: 'https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/avatar/nic-avatar-tomato.png'
  },
  {
    id: 'summerblue',
    rel: 'friend',
    name: '夏诤',
    title: 'SummberBlue',
    link: 'https://summerblue.space/',
    descr: '早睡早起身体好'
  }
  // {
  //   id: 'test5',
  //   name: '藍',
  //   title: '藍藍藍藍藍',
  //   link: 'https://kwaa.dev',
  //   descr: 'without avatar'
  // },
  // {
  //   id: 'test6',
  //   title: 'Test6',
  //   name: 'test6'
  // }
]
