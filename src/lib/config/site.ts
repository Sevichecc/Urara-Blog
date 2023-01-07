import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: 'seviche.cc',
  title: 'Seviche.cc',
  subtitle: 'Tech / Code / Random Life',
  lang: 'zh',
  description: 'Tech / Code / Random Life',
  author: {
    name: '酸橘汁腌鱼',
    avatar: '/assets/avatar.jpg',
    status: '🖤',
    bio: ' Code / Tech  <br> Living a Random Life ',
    metadata: [
      {
        icon: 'i-mdi-github',
        link: 'https://github.com/sevichecc'
      },
      {
        icon: 'i-simple-icons-matrix',
        link: 'https://matrix.to/#/@seviche:kongwoo.icu'
      },
      {
        icon: 'i-heroicons-solid-key',
        link: '/assets/DDDDDDDD.asc',
        rel: 'pgpkey'
      },
      {
        icon: 'i-ic-twotone-rss-feed',
        link: '/atom.xml',
        rel: 'rss'
      }
      // ,
      // {
      //   text: 'Bookmark',
      //   icon: 'i-ic-round-bookmark-border',
      //   link: 'https://airtable.com/shrpftxf6JgRomP2X',
      //   rel: 'bookmark'
      // }
    ]
  },
  keywords: ['Tech', 'Code', 'Random Life'],
  themeColor: '#3D4451'
}
