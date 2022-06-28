<script lang="ts">
  import { site } from '$lib/config/site'
  import { header as headerConfig } from '$lib/config/general'
  
</script>

<!-- <form
  action={headerConfig.search.provider === 'duckduckgo' ? '//duckduckgo.com/' : '//google.com/search'}
  method="get"
  accept-charset="UTF-8"
  class="flex-1">
  <input
    type="text"
    name="q"
    class="input input-ghost input-bordered xl:bg-base-100 xl:text-base-content transition-all w-full h-12" />
  <input
    type="hidden"
    name={headerConfig.search.provider === 'duckduckgo' ? 'sites' : 'sitesearch'}
    value={site.protocol + site.domain} />
  <button type="submit" class="btn btn-square btn-ghost ml-2">
    <span class="i-heroicons-outline-search" />
  </button>
</form> -->

<input type="checkbox" id="search-modal" class="modal-toggle " />
<label for="search-modal" class="modal cursor-pointer w-full items-start pt-16">
  <label class="modal-box w-11/12 max-w-4xl " for="">
    <div class="form-control input-group-md">
      <div class="input-group ">
        <input type="text" placeholder="Search…" class="input input-bordered flex-1" />
        <button class="btn btn-square">
          <span class="i-heroicons-outline-search" />
        </button>
      </div>
    </div>
  </label>
</label>
