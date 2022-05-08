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
      category: 'Announcements',
      categoryID: 'DIC_kwDOHSra4c4CO9uZ',
      // theme: 'urara'
      theme: 'preferred_color_scheme'
    },
    disqus: {
      shortname: 'seviche-cc'
    }
  }
}
