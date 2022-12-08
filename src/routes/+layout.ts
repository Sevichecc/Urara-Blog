import type { LayoutLoad } from './$types'
export const prerender = true
export const trailingSlash =
  !Object.keys(process.env).some(key => ['VERCEL', 'CF_PAGES', 'NETLIFY'].includes(key)) && process.env.ADAPTER !== 'node'
    ? 'always'
    : undefined
export const load: LayoutLoad = async ({ url, fetch }) => ({
  path: url.pathname,
  res: await fetch('/posts.json').then(res => res.json())
})
