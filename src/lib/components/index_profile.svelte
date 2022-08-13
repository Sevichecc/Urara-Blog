<script lang="ts">
  import { site } from '$lib/config/site'
</script>

<div
  class="h-card flex flex-col gap-4 sticky top-24 card card-body p-4 items-right xl:border-2 xl:py-8 border-base-content/10 xl:ml-auto xl:mr-8 xl:max-w-xs">
  <a href={site.protocol + site.domain} class="hidden u-url u-uid">{site.author.name}</a>
  <figure class="relative mx-auto group">
    <img
      class="rounded-full shadow-xl w-32 h-32 hover:rotate-[360deg] transition-transform duration-1000 ease-in-out"
      src={site.author.avatar}
      alt={site.author.name} />
    {#if site.author.status}
      <div class="heart absolute rounded-full w-10 h-10 bottom-0 right-0 bg-base-100 shadow-xl text-xl text-center py-1.5">
        {site.author.status}
      </div>
    {/if}
  </figure>
  <div class="text-center flex flex-col gap-2">
    <h2 class="text-2xl font-bold mt-0 mb-2 p-name">{site.author.name}</h2>
    <p class="opacity-75 p-note">{@html site.author.bio}</p>
    <label for="remote-follow" class="btn  btn-active  btn-outline btn-xs modal-button w-fit mx-auto normal-case mt-4 gap-2 ">
      <span class="i-material-symbols-group-add-rounded" />
      Remote Follow
    </label>
    {#if site.author.metadata}
      <div class="flex gap-1 flex-wrap justify-center">
        {#each site.author.metadata as { text, icon, link, rel }}
          {#if link}
            <a
              href={link}
              rel={rel ?? 'me noopener external'}
              class:btn-square={!text}
              class="btn btn-sm btn-ghost normal-case gap-2 u-url"
              target="_blank">
              {#if icon}
                <span class="{icon} !w-5 !h-5" />
              {/if}
              {#if text}
                {text}
              {/if}
            </a>
          {:else}
            <button class:btn-square={!text} class="btn btn-sm btn-ghost normal-case gap-2" {rel}>
              {#if icon}
                <span class="{icon} !w-5 !h-5" />
              {/if}
              {#if text}
                {text}
              {/if}
            </button>
          {/if}
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
  .heart {
    -webkit-animation: heartbeat 2s linear 1s infinite;
    -o-animation: heartbeat 2s linear 1s infinite;
    -moz-animation: heartbeat 2s linear 1s infinite;
    -ms-animation: heartbeat 2s linear 1s infinite;
    animation: heartbeat 2s linear 1s infinite;
  }
  @keyframes heartbeat {
    0% {
      -webkit-transform: scale(1);
      -o-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }

    2% {
      -webkit-transform: scale(1);
      -o-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }

    4% {
      -webkit-transform: scale(1.08);
      -o-transform: scale(1.08);
      -moz-transform: scale(1.08);
      -ms-transform: scale(1.08);
      transform: scale(1.08);
    }

    8% {
      -webkit-transform: scale(1.1);
      -o-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }

    20% {
      -webkit-transform: scale(0.96);
      -o-transform: scale(0.96);
      -moz-transform: scale(0.96);
      -ms-transform: scale(0.96);
      transform: scale(0.96);
    }

    24% {
      -webkit-transform: scale(1.1);
      -o-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }

    32% {
      -webkit-transform: scale(1.08);
      -o-transform: scale(1.08);
      -moz-transform: scale(1.08);
      -ms-transform: scale(1.08);
      transform: scale(1.08);
    }

    40% {
      -webkit-transform: scale(1);
      -o-transform: scale(1);
      -moz-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1);
    }
  }

  @-webkit-keyframes heartbeat {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    2% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    4% {
      -webkit-transform: scale(1.08);
      transform: scale(1.08);
    }

    8% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }

    20% {
      -webkit-transform: scale(0.96);
      transform: scale(0.96);
    }

    24% {
      -webkit-transform: scale(1.1);
      transform: scale(1.1);
    }

    32% {
      -webkit-transform: scale(1.08);
      transform: scale(1.08);
    }

    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
</style>
