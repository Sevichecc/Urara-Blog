<script lang="ts">
  import { site } from '$lib/config/site'
  export let post: Urara.Post
</script>

<button class="tooltip tooltip-left opacity-60 hover:opacity-100" data-tip="Translate">
  <a
    href={`https://translate.google.com/translate?sl=auto&tl=${
      navigator.languages ? navigator.languages[0] : navigator.language
    }&u=${site.protocol + site.domain + post.path}`}
    class="btn btn-circle btn-ghost">
    <span class="i-heroicons-outline-translate" />
  </a>
</button>
