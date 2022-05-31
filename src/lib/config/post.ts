import type { PostConfig } from '$lib/types/post'

export const post: PostConfig = {
  // bridgy: {
  //   post: ['mastodon']
  // },
  comment: {
    // use: ['Webmention', 'Giscus', 'Disqus'],
    use: ['Giscus', 'Disqus'],
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
      repo: 'Sevichecc/urara-giscus',
      repoID: 'R_kgDOHSra4Q',
      category: 'General',
      categoryID: 'DIC_kwDOHSra4c4CO9ua',
      theme: 'light',
      lang: 'en'
    },
    disqus: {
      shortname: 'seviche-cc'
    },
    waline: {
      serverURL: 'https://waline-seviche.vercel.app/',
      lang: 'en',
      emoji: [
        'https://cdn.jsdelivr.net/gh/norevi/waline-blobcatemojis@1.0/blobs',
        'https://cdn.jsdelivr.net/gh/norevi/blob-emoji-for-waline@2.0/blobs-gif',
        'ttps://cdn.jsdelivr.net/gh/norevi/blob-emoji-for-waline@2.0/blobs-png'
      ],
      requiredMeta: ['nick', 'mail']
    }
  }
}
