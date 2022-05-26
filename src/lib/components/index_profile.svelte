<script lang="ts">
  import { site } from '$lib/config/site'
</script>

<div class="flex flex-row xl:flex-col gap-4 sticky top-24 card card-body items-right h-card">
  <a href={site.protocol + site.domain} class="hidden u-url" rel="me">{site.title}</a>
  {#if site.author.photo}
    <img class="hidden u-photo" src={site.author.photo} alt={site.author.name} decoding="async" loading="lazy" />
    <div class="flex-none avatar w-32 h-32 ml-auto my-auto justify-end">
      <img
        class="rounded-full shadow-xl w-32 h-32 hover:rotate-[360deg] transition-transform duration-1000 ease-in-out"
        src={site.author.photo}
        alt={site.author.name} />
      {#if site.author.status}
        <div class="heart absolute rounded-full w-10 h-10 bottom-0 right-0 bg-base-100 shadow-xl text-xl text-center py-1.5">
          {site.author.status}
        </div>
      {/if}
    </div>
  {/if}
  <div class="flex-1 text-right my-auto">
    <h1 class="text-3xl font-bold mt-0 mb-2 p-name">{site.author.name}</h1>
    <p class="opacity-75 p-note">{@html site.author.bio}</p>
    <p class="pt-3 space-x-3">
      <!-- {#if site.author.email}
        <a
          class="text-sm transition hover:text-gray-600 tooltip tooltip-secondary hover:text-secondary"
          target="_blank"
          rel="noopener noreferrer"
          data-tip="Mail"
          aria-label="Mail"
          href="mailto:{site.author.email}">
          <span class="i-ic-baseline-mail !w-8 !h-8 mr-1 fill-current inline-block hover:text-lime-500" />
        </a>
      {/if} -->
      <!-- {#if site.author.discordID}
        <a
          class="text-sm transition hover:text-gray-600 tooltip tooltip-secondary hover:text-secondary"
          target="_blank"
          rel="noopener noreferrer"
          data-tip="Discord"
          aria-label="Discord"
          href="https://discordapp.com/users/{site.author.discordID}">
          <span class="i-ic-outline-discord !w-8 !h-8 mr-1 fill-current inline-block hover:text-blue-500" />
        </a>
      {/if} -->
      {#if site.author.github}
        <a
          class="text-sm transition hover:text-gray-600 tooltip tooltip-secondary hover:text-secondary"
          target="_blank"
          rel="noopener noreferrer"
          data-tip="Github"
          aria-label="Github"
          href="https://github.com/{site.author.github}">
          <span class="i-uil-github !w-8 !h-8 mr-1 fill-current inline-block hover:text-violet-500" />
        </a>
      {/if}
      <!-- {#if site.author.discordID}
        <a
          class="text-sm transition hover:text-gray-600 tooltip tooltip-secondary hover:text-secondary"
          target="_blank"
          rel="noopener noreferrer"
          data-tip="Discord"
          aria-label="Discord"
          href="https://discordapp.com/users/{site.author.discordID}">
          <span class="i-ic-outline-discord !w-8 !h-8 mr-1 fill-current inline-block hover:text-blue-500" />
        </a>
      {/if} -->
    </p>
    {#if site.author.pgp}
      <a href={site.author.pgp.link} rel="pgpkey" class="btn btn-ghost btn-xs bg-base-300 font-mono rounded-full mt-4">
        <span class="i-heroicons-solid-key !w-4 !h-4 mr-1" />
        {site.author.pgp.text}
      </a>
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