import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: (import.meta.env.URARA_SITE_DOMAIN as string) ??'seviche.cc',
  title: "Seviche.cc",
  subtitle: 'Tech / Code / Random Life',
  lang: 'zh',
  descr: 'Tech / Code / Random Life',
  author: {
    name: '酸橘汁腌鱼',
    photo: '/assets/avatar.avif',
    status: '🖤',
    github: 'sevichecc',
    bio: ' Code / Tech  <br> Live a Random Life '
  },
  themeColor: '#3D4451'
}
