<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte'
  import { site } from '$lib/config/site'
  import { header as headerConfig } from '$lib/config/general'
  import Typeahead from 'svelte-typeahead'
  import { page } from '$app/stores'
  //  ref : https://github.com/saadeghi/daisyui/blob/master/src/docs/src/components/Search.svelte
</script>

<form>
  <input type="checkbox" id="search-modal" class="modal-toggle " />
  <label for="search-modal" class="modal cursor-pointer w-full items-start pt-16 ">
    <label class="modal-box w-11/12 max-w-4xl " for="">
      <div class="form-control">
        <span
          class="i-heroicons-outline-search text-base-content pointer-events-none absolute z-10 my-2 ml-3 stroke-current opacity-60 w-5" />
      </div>
      <Typeahead placeholder="Search is not avaible …" limit={8} label="Search" inputAfterSelect="clear">
        <div class="py-1 text-sm" />
      </Typeahead>
      <div class="pointer-events-none absolute right-14 top-8 gap-1 opacity-50 hidden lg:flex">
        <kbd class="kbd kbd-sm">ESC</kbd>
      </div>
    </label>
  </label>
</form>

<!-- <script lang="ts">
  import { onMount, createEventDispatcher } from "svelte"
  import { page } from "$app/stores"
  import { goto } from "$app/navigation"
  import Typeahead from "svelte-typeahead"
  import { pages } from "@src/lib/data.js"
  const dispatch = createEventDispatcher()
  let searchIndex = []
  pages.forEach((group) => {
    group.items.forEach((item) => {
      searchIndex.push(item)
    })
  })

  let seachboxEl
  function handleKeydown(e) {
    if ((e.keyCode === 75 && e.metaKey) || (e.keyCode === 75 && e.ctrlKey)) {
      e.preventDefault()
      seachboxEl.querySelector("input[type=search]").focus()
      dispatch("focus")
    }
  }
  function onSelect({ detail }) {
    goto(searchIndex[detail.originalIndex].href)
    dispatch("search", detail)
  }
</script>

<svelte:window on:keydown={handleKeydown} />
-->
<style global>
  .searchbox [data-svelte-typeahead] {
    background: none;
    width: 100%;
    max-width: 100%;
  }
  [data-svelte-search] label {
    display: none;
  }
  [data-svelte-search] input {
    background-color: transparent;
    color: inherit;
    border-radius: 0.5em;
    padding-left: 2em;
  }
  [data-svelte-search] input::placeholder {
    color: inherit;
  }
  [data-svelte-search] input:focus {
    outline-color: hsla(var(--bc) / 0.2);
    background-color: hsl(var(--b1));
    color: hsla(var(--bc));
  }
  [data-svelte-typeahead] .svelte-typeahead-list {
    transform: translateY(0.5em);
    background: hsl(var(--b1));
    border-radius: var(--rounded-btn);
    overflow: hidden;
  }
  [data-svelte-typeahead] .svelte-typeahead-list .selected,
  [data-svelte-typeahead] .svelte-typeahead-list .selected:hover {
    background: hsl(var(--n));
    color: hsl(var(--nc));
  }
  [data-svelte-typeahead] .svelte-typeahead-list li {
    color: hsl(var(--bc));
  }
  [data-svelte-typeahead] .svelte-typeahead-list li:hover {
    background: hsl(var(--b2));
    color: hsl(var(--bc));
  }
  [data-svelte-typeahead] .svelte-typeahead-list li:not(:last-of-type) {
    border-bottom-color: hsla(var(--bc) / 0.1);
  }
</style>
