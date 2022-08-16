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
    id: 'summerblue',
    rel: 'friend',
    name: '夏诤',
    title: 'SummberBlue',
    link: 'https://summerblue.space/',
    descr: '早睡早起身体好'
  },
  {
    id: 'loikin',
    rel: 'friend',
    name: 'Loikin',
    title: '此生未命名',
    link: 'https://blog.loikein.one/',
    descr: '用爱和理性对抗荒谬',
    avatar: '/assets/loikin.png'
  },
  {
    id: 'sharktale',
    rel: 'friend',
    name: '鲨',
    title: '一只脆脆鲨',
    link: 'http://blog.sharktale.xyz/',
    descr: '遇见一只脆脆鲨',
    avatar: 'https://s2.loli.net/2022/03/30/xwOzn9G8TIqFPvR.jpg'
  }
]
