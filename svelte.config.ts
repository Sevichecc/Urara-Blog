// sveltekit config type
import type { Config } from '@sveltejs/kit'
// svelte adapter
import adapterVercel from '@sveltejs/adapter-vercel'
import adapterNetlify from '@sveltejs/adapter-netlify'
import adapterStatic from '@sveltejs/adapter-static'
// svelte preprocessor
import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'
import { vitePreprocess } from '@sveltejs/kit/vite'

export default {
  extensions: ['.svelte', ...(mdsvexConfig.extensions as string[])],
  preprocess: [mdsvex(mdsvexConfig), vitePreprocess()],
  kit: {
    adapter: Object.keys(process.env).some(key => key === 'VERCEL')
      ? adapterVercel()
      : Object.keys(process.env).some(key => key === 'NETLIFY')
      ? adapterNetlify()
      : adapterStatic({
          pages: 'build',
          assets: 'build',
          fallback: undefined
        }),
    prerender: {
      handleMissingId: 'warn'
    },
    csp: {
      mode: 'auto',
      directives: {
        'style-src': ['self', 'unsafe-inline', 'https://giscus.app']
      }
    }
  }
} as Config
