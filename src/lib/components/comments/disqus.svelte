<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  export let post: Urara.Post
  onMount(() => {
    const [c, s] = [document.createElement('script'), document.createElement('script')]
    c.id = 'disqus_config'
    c.type = 'application/javascript'
    s.id = 'disqus_script'
    s.src = `https://cdn.commento.io/js/commento.js`
    s.setAttribute('data-timestamp', Date.now().toString())
    if (window['DISQUS']) {
      window['DISQUS'].reset({
        reload: true
      })
    } else {
      document.head.appendChild(c)
      document.head.appendChild(s)
    }
  })

  onDestroy(() => document.querySelectorAll('#disqus_config, #disqus_script').forEach(node => node.remove()))
</script>

<div id="commento" class="-mb-2" />
