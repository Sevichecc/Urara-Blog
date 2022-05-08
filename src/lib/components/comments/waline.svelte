<script lang='ts' >
  import { onMount } from 'svelte'
  import type { WalineConfig } from '$lib/types/post'
  export let post: Urara.Post
  export let config: WalineConfig
  onMount(()=>{
  const s = document.createElement('script')
      s.setAttribute ('serverURL',config.serverURL)
      //改到这里了，下面都是编的
      s.innerHTML = `
        const disqus_config = function () {
          this.page.url = '${post.path}'
          this.page.identifier = '${post.path}'
          this.page.title = '${post.title ?? post.path.slice(1)}'
          ${`this.language = '${config.lang}'` ?? ''}
        }`
      s.src = `https://unpkg.com/@waline/client@v2/dist/waline.js`
      s.setAttribute('data-timestamp', Date.now().toString())
      if (window['WALINE']) {
        window['WALINE'].reset({
          reload: true
        })
      } else {
        document.head.appendChild(c)
        document.head.appendChild(s)
      }
  })
</script>

<link
  rel="stylesheet"
  href="https://unpkg.com/@waline/client@v2/dist/waline.css"
/>

<div id="waline" class="waline-container"></div>
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
  .v[data-class="v"] .vcard {
    flex: 1;
    width: 0;
    padding-bottom: 0.5em;
    border-bottom: 0; /*删掉回复下面的线*/
  }

  .v[data-class=v] .vcard .vquote {
    border-left: 1px solid rgba(237,237,237,.5);
}

  @media (max-width: 580px) {
    .v[data-class="v"] .vheader .vheader-item:not(:last-child) {
      border-bottom: 1px solid rgba(237, 237, 237, 0.8); /*输入框分割线*/
    }
  }

  /*日间模式*/
  :root {
    --waline-theme-color: #34495e; /*主题色，提交按钮*/
    --waline-active-color: #246bb1; /*鼠标移到提交按钮上的颜色*/
    /* 徽章 */
    --waline-badge-color: #34495e; /*博主徽章色*/
    --waline-avatar-radius: 5px;
    --waline-avatar-size: 6rem;
    --waline-dark-grey: #34495e; /*ID颜色*/
    --waline-text-color: #34495e; /*字体颜色*/
    --waline-font-size: 1.7rem; /*字体大小颜色*/
  }

  /*夜间模式*/
  :root[data-scheme="dark"] {
    --waline-theme-color: #acc6e0;
    --waline-white: #34495e; /*按键字体颜色*/
    --waline-active-color: #8ab1d8;
    --waline-light-grey: #666;
    --waline-dark-grey: #acc6e0; /*ID颜色*/
    --waline-badge-color: #acc6e0;

    /* 布局颜色 */
    --waline-text-color: rgba(255, 255, 255, 0.7);
    --waline-bgcolor: #515151;
    --waline-bgcolor-light: #66696b; /*行内代码块颜色*/
    --waline-border-color: #9b9c9c;
    --waline-disable-bgcolor: #444;
    --waline-disable-color: #272727;

    /* 特殊颜色 */
    --waline-bq-color: #9b9c9c; /*quote*/

    /* 其他颜色 */
    --waline-info-bgcolor: #acc6e0;
    --waline-info-color: #9b9c9c;
  }

  .v[data-class="v"] .vcontent .vemoji {
    width: 2.2em; /*表情包大小修改*/
    margin: 0.25em;
  }

  .v[data-class="v"] .vheader {
    border-bottom: 1px solid rgba(237, 237, 237, 0.8); /*输入框分割线*/
  }
  .v[data-class="v"] .vpanel {
    border-radius: 8px; /*输入框圆角*/
  }
</style>