<script lang="ts">
  import { site } from '$lib/config/site'
</script>

<div class="sticky flex flex-row gap-4 xl:flex-col top-24 card card-body items-right h-card">
  <a href={site.protocol + site.domain} class="hidden u-url" rel="me">{site.title}</a>
  {#if site.author.avatar}
    <img class="hidden u-photo" src={site.author.avatar} alt={site.author.name} decoding="async" loading="lazy" />
    <div class="justify-end flex-none w-32 h-32 my-auto ml-auto avatar">
      <img
        class="rounded-full shadow-xl w-32 h-32 hover:rotate-[360deg] transition-transform duration-1000 ease-in-out"
        src={site.author.avatar}
        alt={site.author.name} />
      {#if site.author.status}
        <div class="heart absolute rounded-full w-10 h-10 bottom-0 right-0 bg-base-100 shadow-xl text-xl text-center py-1.5">
          {site.author.status}
        </div>
      {/if}
    </div>
  {/if}
  <div class="flex-1 my-auto text-right">
    <h1 class="mt-0 mb-2 text-3xl font-bold p-name">{site.author.name}</h1>
    <p class="opacity-75 p-note">{@html site.author.bio}</p>
    <p class="pt-3 space-x-3">
      <a
        class="text-sm transition tooltip tooltip-secondary hover:text-secondary"
        target="_blank"
        rel="noopener noreferrer"
        data-tip="Bookmark"
        aria-label="Bookmark"
        href="https://airtable.com/shrpftxf6JgRomP2X">
        <span
          class="i-ic-round-bookmark-border
 !w-8 !h-8 mr-1 fill-current inline-block hover:text-lime-500" />
      </a>
      <a
        class="text-sm transition tooltip tooltip-secondary hover:text-secondary"
        target="_blank"
        rel="noopener noreferrer"
        data-tip="RSS"
        aria-label="RSS"
        href="/atom.xml">
        <span class="i-ic-twotone-rss-feed !w-8 !h-8 mr-1 fill-current inline-block hover:text-lime-500" />
      </a>

      {#if site.author.email}
        <a
          class="text-sm transition tooltip tooltip-secondary hover:text-secondary"
          target="_blank"
          rel="noopener noreferrer"
          data-tip="Mail"
          aria-label="Mail"
          href="mailto:{site.author.email}">
          <span class="i-ic-baseline-mail !w-8 !h-8 mr-1 fill-current inline-block hover:text-lime-500" />
        </a>
      {/if}
      {#if site.author.github}
        <a
          class="text-sm transition tooltip tooltip-secondary hover:text-secondary"
          target="_blank"
          rel="noopener noreferrer"
          data-tip="Github"
          aria-label="Github"
          href="https://github.com/{site.author.github}">
          <span class="i-uil-github !w-8 !h-8 mr-1 fill-current inline-block hover:text-violet-500" />
        </a>
      {/if}
    </p>
    {#if site.author.pgp}
      <a href={site.author.pgp.link} rel="pgpkey" class="mt-4 font-mono rounded-full btn btn-ghost btn-xs bg-base-300">
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
