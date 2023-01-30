<script lang="ts">
  import { site } from '$lib/config/site'
  export let post: Urara.Post
</script>

<button class="tooltip tooltip-left opacity-60 hover:opacity-100" data-tip="Share">
  <a
    href={`https://www.addtoany.com/share#url=${site.protocol + site.domain + post.path}&title=${encodeURI(
      post.title ?? post.path.slice(1)
    )}`}
    class="btn btn-circle btn-ghost">
    <span class="i-heroicons-outline-share" />
  </a>
</button>
