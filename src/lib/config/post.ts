import type { PostConfig } from '$lib/types/post'

export const post: PostConfig = {
  bridgy: {
    post: ['mastodon']
  },
  comment: {
    use: ['Remark42','Webmention', 'Giscus'],
    style: 'boxed',
    webmention: {
      username: 'sevic.me',
      sortBy: 'created',
      sortDir: 'down',
      form: true,
      commentParade: false
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
