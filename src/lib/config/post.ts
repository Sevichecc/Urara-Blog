import type { PostConfig } from '$lib/types/post'

export const post: PostConfig = {
  // bridgy: {
  //   post: ['mastodon']
  // },
  comment: {
    // use: ['Webmention', 'Giscus', 'Disqus'],
    use: ['Giscus','Disqus'],
    style: 'boxed',
    // webmention: {
    //   username: 'kwaa.dev',
    //   sortBy: 'created',
    //   sortDir: 'down',
    //   form: true,
    //   commentParade: true
    // },
    giscus: {
      // src: 'https://giscus.kwaa.dev/client.js',
      repo: 'sevichecc/urara-giscus',
      repoID: 'R_kgDOHSra4Q',
      lang: 'en',
      mapping: 'og:title',
      category: 'General',
      reactionsEnabled: false,
      categoryID: 'DIC_kwDOHSra4c4CO9ua',
      // theme: 'urara'
      theme: 'light_high_contrast'
    },
    disqus: {
      shortname: 'seviche-cc'
    }
  }
}
