<!-- <script lang="ts">
  import { onMount } from 'svelte'
  import { site } from '$lib/config/site'
  import type { WalineConfig } from '$lib/types/post'

  export let post: Urara.Post
  export let config: WalineConfig

  onMount(() => {
    const waline = document.createElement('script')
    const [c, s] = [document.createElement('script'), document.createElement('script')]
    c.id = 'disqus_config'
    c.type = 'application/javascript'
    console.log(waline)
    Object.entries({
      src: 'https://unpkg.com/@waline/client@v2/dist/waline.js',
      serverURL: config.serverURL,
      path: config.path ?? post.path ?? window.location.pathname,
      lang: config.lang ?? 'en',
      emoji: config.emoji ?? ['//unpkg.com/@waline/emojis@1.0.1/weibo'],
      dark: config.dark ?? false,
      meta: config.meta ?? ['nick', 'mail', 'link'],
      requiredMeta: config.requiredMeta ?? [],
      login: config.login ?? 'enable',
      wordLimit: config.wordLimit ?? 0,
      pageSize: config.pageSize ?? 10,
      imageUploader: config.imageUploader,
      highlighter: config.highlighter,
      texRender: config.texRender,
      copyright: config.copyright ?? true,
      crossorigin: 'anonymous',
      async: ''
    }).forEach(([key, value]) => waline.setAttribute(key, value))
    setTimeout(() => {
      const observer = new MutationObserver(() => {
        document.getElementById('giscus-loading').remove()
        observer.disconnect()
      })
      observer.observe(document.getElementById('giscus'), {
        childList: true
      })
      document.getElementById('giscus-container').appendChild(waline)
    }, 1000)
  })
</script>

<link rel="stylesheet" href="https://unpkg.com/@waline/client@v2/dist/waline.css" />
<div id="waline" class="waline-container" />

<style>
  .waline-container {
    background-color: var(--card-background);
    border-radius: var(--card-border-radius);
    box-shadow: var(--shadow-l1);
    padding: 2%;
  }
  .waline-container .vcount {
    color: var(--card-text-color-main);
  }
  .v[data-class='v'] .vcard {
    flex: 1;
    width: 0;
    padding-bottom: 0.5em;
    border-bottom: 0; /*????????????????????????*/
  }
  .v[data-class='v'] .vcard .vquote {
    border-left: 1px solid rgba(237, 237, 237, 0.5);
  }
  @media (max-width: 580px) {
    .v[data-class='v'] .vheader .vheader-item:not(:last-child) {
      border-bottom: 1px solid rgba(237, 237, 237, 0.8); /*??????????????????*/
    }
  }
  /*????????????*/
  :root {
    --waline-theme-color: #34495e; /*????????????????????????*/
    --waline-active-color: #246bb1; /*????????????????????????????????????*/
    /* ?????? */
    --waline-badge-color: #34495e; /*???????????????*/
    --waline-avatar-radius: 5px;
    --waline-avatar-size: 6rem;
    --waline-dark-grey: #34495e; /*ID??????*/
    --waline-text-color: #34495e; /*????????????*/
    --waline-font-size: 1.7rem; /*??????????????????*/
  }
  /*????????????*/
  :root[data-scheme='dark'] {
    --waline-theme-color: #acc6e0;
    --waline-white: #34495e; /*??????????????????*/
    --waline-active-color: #8ab1d8;
    --waline-light-grey: #666;
    --waline-dark-grey: #acc6e0; /*ID??????*/
    --waline-badge-color: #acc6e0;
    /* ???????????? */
    --waline-text-color: rgba(255, 255, 255, 0.7);
    --waline-bgcolor: #515151;
    --waline-bgcolor-light: #66696b; /*?????????????????????*/
    --waline-border-color: #9b9c9c;
    --waline-disable-bgcolor: #444;
    --waline-disable-color: #272727;
    /* ???????????? */
    --waline-bq-color: #9b9c9c; /*quote*/
    /* ???????????? */
    --waline-info-bgcolor: #acc6e0;
    --waline-info-color: #9b9c9c;
  }
  .v[data-class='v'] .vcontent .vemoji {
    width: 2.2em; /*?????????????????????*/
    margin: 0.25em;
  }
  .v[data-class='v'] .vheader {
    border-bottom: 1px solid rgba(237, 237, 237, 0.8); /*??????????????????*/
  }
  .v[data-class='v'] .vpanel {
    border-radius: 8px; /*???????????????*/
  }
</style> -->
