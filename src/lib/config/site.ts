import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: 'sevic.me',
  title: 'sevic.me',
  subtitle: 'Random Frontend-Developer',
  lang: 'zh',
  description: 'Random Frontend-Developer',
  author: {
    name: 'Sevi.C',
    avatar: '/assets/avatar.png',
    status: '🖤',
    bio: 'Full-stack wizard.',
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
  keywords: ['Tech', 'Code', 'Seviche CC', 'Frondend Developer', 'Programming'],
  themeColor: '#3D4451'
}
