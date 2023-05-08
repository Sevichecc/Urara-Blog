import type { PostConfig } from '$lib/types/post'

export const post: PostConfig = {
  bridgy: {
    post: ['mastodon']
  },
  comment: {
    use: ['Webmention', 'Giscus', 'Remark42'],
    style: 'boxed',
    webmention: {
      username: 'seviche.cc',
      sortBy: 'created',
      sortDir: 'down',
      form: true,
      commentParade: true
    },
    giscus: {
      // src: 'https://giscus.kwaa.dev/client.js',
      repo: 'Sevichecc/urara-giscus',
      repoID: 'R_kgDOHSra4Q',
      category: 'General',
      categoryID: 'DIC_kwDOHSra4c4CO9ua',
      theme: 'light',
      lang: 'en'
    },
    remark42: {
      host: 'https://remark42.seviche.cc',
      no_footer: true
    }
  }
}
