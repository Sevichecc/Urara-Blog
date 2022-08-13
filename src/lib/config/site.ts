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
        text: 'Sevichecc',
        icon: 'i-simple-icons-github',
        link: 'https://github.com/sevichecc'
      },
      {
        text: 'RSS',
        icon: 'i-ic-twotone-rss-feed',
        link: '/atom.xml',
        rel: 'rss'
      },
      {
        text: '@seviche:kongwoo.icu',
        icon: 'i-simple-icons-matrix',
        link: 'https://matrix.to/#/@seviche:kongwoo.icu'
      },
      {
        text: '0xAFF18B986818D8AD',
        icon: 'i-heroicons-solid-key',
        link: 'https://keys.openpgp.org/vks/v1/by-fingerprint/76DF9F9CC0C3619AA12CB914AFF18B986818D8AD',
        rel: 'pgpkey'
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
