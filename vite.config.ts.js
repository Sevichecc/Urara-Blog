// vite.config.ts
import { defineConfig as defineConfig2 } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import UnoCSS from 'unocss/vite'
import { presetTagify, presetIcons, extractorSvelte } from 'unocss'
import { VitePWA } from 'vite-plugin-pwa'
import TailwindCSS from 'tailwindcss'

// tailwind.config.ts
import typography from '@tailwindcss/typography'
import daisyui from 'daisyui'
var defineConfig = config => config
var tailwind_config_default = defineConfig({
  content: ['./src/**/*.{html,md,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter'
    ]
  }
})

// vite.config.ts
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
var vite_config_default = defineConfig2({
  mode: process.env.MODE || 'production',
  envPrefix: 'URARA_',
  css: {
    postcss: {
      plugins: [
        TailwindCSS(tailwind_config_default),
        autoprefixer(),
        ...(process.env.NODE_ENV === 'production'
          ? [
              cssnano({
                preset: ['default', { discardComments: { removeAll: true } }]
              })
            ]
          : [])
      ]
    }
  },
  plugins: [
    UnoCSS({
      mode: 'svelte-scoped',
      include: [/\.svelte$/, /\.md?$/, /\.ts$/],
      extractors: [extractorSvelte],
      presets: [
        presetTagify({
          extraProperties: matched => (matched.startsWith('i-') ? { display: 'inline-block' } : {})
        }),
        presetIcons({ scale: 1.5 })
      ]
    }),
    VitePWA({
      srcDir: './build',
      outDir: './.svelte-kit/output/client',
      registerType: 'autoUpdate',
      scope: '/',
      base: '/'
    }),
    sveltekit()
  ]
})
export { vite_config_default as default }
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidGFpbHdpbmQuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyB2aXRlIGRlZmluZSBjb25maWdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG4vLyB2aXRlIHN2ZWx0ZWtpdFxuaW1wb3J0IHsgc3ZlbHRla2l0IH0gZnJvbSAnQHN2ZWx0ZWpzL2tpdC92aXRlJ1xuLy8gdml0ZSBwbHVnaW5cbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXG5pbXBvcnQgeyBwcmVzZXRUYWdpZnksIHByZXNldEljb25zLCBleHRyYWN0b3JTdmVsdGUgfSBmcm9tICd1bm9jc3MnXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xuLy8gcG9zdGNzcyAmIHRhaWx3aW5kY3NzXG5pbXBvcnQgVGFpbHdpbmRDU1MgZnJvbSAndGFpbHdpbmRjc3MnXG5pbXBvcnQgdGFpbHdpbmRDb25maWcgZnJvbSAnLi90YWlsd2luZC5jb25maWcnXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcidcbmltcG9ydCBjc3NuYW5vIGZyb20gJ2Nzc25hbm8nXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIG1vZGU6IHByb2Nlc3MuZW52Lk1PREUgfHwgJ3Byb2R1Y3Rpb24nLFxuICBlbnZQcmVmaXg6ICdVUkFSQV8nLFxuICBjc3M6IHtcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBbXG4gICAgICAgIFRhaWx3aW5kQ1NTKHRhaWx3aW5kQ29uZmlnIGFzIGFueSkgYXMgYW55LFxuICAgICAgICBhdXRvcHJlZml4ZXIoKSxcbiAgICAgICAgLi4uKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcbiAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgY3NzbmFubyh7XG4gICAgICAgICAgICAgICAgcHJlc2V0OiBbJ2RlZmF1bHQnLCB7IGRpc2NhcmRDb21tZW50czogeyByZW1vdmVBbGw6IHRydWUgfSB9XVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuICAgICAgICAgIDogW10pXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgVW5vQ1NTKHtcbiAgICAgIG1vZGU6ICdzdmVsdGUtc2NvcGVkJyxcbiAgICAgIGluY2x1ZGU6IFsvXFwuc3ZlbHRlJC8sIC9cXC5tZD8kLywgL1xcLnRzJC9dLFxuICAgICAgZXh0cmFjdG9yczogW2V4dHJhY3RvclN2ZWx0ZV0sXG4gICAgICBwcmVzZXRzOiBbXG4gICAgICAgIHByZXNldFRhZ2lmeSh7XG4gICAgICAgICAgZXh0cmFQcm9wZXJ0aWVzOiAobWF0Y2hlZDogc3RyaW5nKSA9PiAobWF0Y2hlZC5zdGFydHNXaXRoKCdpLScpID8geyBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyB9IDoge30pXG4gICAgICAgIH0pLFxuICAgICAgICBwcmVzZXRJY29ucyh7IHNjYWxlOiAxLjUgfSlcbiAgICAgIF1cbiAgICB9KSxcbiAgICBWaXRlUFdBKHtcbiAgICAgIHNyY0RpcjogJy4vYnVpbGQnLFxuICAgICAgb3V0RGlyOiAnLi8uc3ZlbHRlLWtpdC9vdXRwdXQvY2xpZW50JyxcbiAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxuICAgICAgc2NvcGU6ICcvJyxcbiAgICAgIGJhc2U6ICcvJ1xuICAgIH0pLFxuICAgIHN2ZWx0ZWtpdCgpXG4gIF1cbn0pXG4iLCAiLy8gdGFpbHdpbmQgY29uZmlnIHR5cGVcbmltcG9ydCB0eXBlIHsgVGFpbHdpbmRDb25maWcgfSBmcm9tICd0YWlsd2luZGNzcy90YWlsd2luZC1jb25maWcnXG4vLyBAdHMtaWdub3JlIFRTMjMwNTogTW9kdWxlICd0YWlsd2luZGNzcy9wbHVnaW4nIGhhcyBubyBleHBvcnRlZCBtZW1iZXIgJ1RhaWx3aW5kUGx1Z2luV2l0aG91dE9wdGlvbnMnLlxuaW1wb3J0IHR5cGUgeyBUYWlsd2luZFBsdWdpbldpdGhvdXRPcHRpb25zIH0gZnJvbSAndGFpbHdpbmRjc3MvcGx1Z2luJ1xuLy8gdGFpbHdpbmQgcGx1Z2luc1xuaW1wb3J0IHR5cG9ncmFwaHkgZnJvbSAnQHRhaWx3aW5kY3NzL3R5cG9ncmFwaHknXG5pbXBvcnQgZGFpc3l1aSBmcm9tICdkYWlzeXVpJ1xuXG5pbnRlcmZhY2UgQ29uZmlnIGV4dGVuZHMgVGFpbHdpbmRDb25maWcge1xuICBkYWlzeXVpPzoge1xuICAgIHN0eWxlZD86IGJvb2xlYW5cbiAgICB0aGVtZXM/OiBib29sZWFuIHwgc3RyaW5nW11cbiAgICBiYXNlPzogYm9vbGVhblxuICAgIHV0aWxzPzogYm9vbGVhblxuICAgIGxvZ3M/OiBib29sZWFuXG4gICAgcnRsPzogYm9vbGVhblxuICAgIGRhcmtUaGVtZT86IHN0cmluZ1xuICAgIHByZWZpeD86IHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IGRlZmluZUNvbmZpZyA9IChjb25maWc6IENvbmZpZykgPT4gY29uZmlnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGNvbnRlbnQ6IFsnLi9zcmMvKiovKi57aHRtbCxtZCxqcyxzdmVsdGUsdHN9J10sXG4gIHRoZW1lOiB7XG4gICAgZXh0ZW5kOiB7fVxuICB9LFxuICBwbHVnaW5zOiBbdHlwb2dyYXBoeSBhcyBUYWlsd2luZFBsdWdpbldpdGhvdXRPcHRpb25zLCBkYWlzeXVpIGFzIFRhaWx3aW5kUGx1Z2luV2l0aG91dE9wdGlvbnNdLFxuICBkYWlzeXVpOiB7XG4gICAgdGhlbWVzOiBbXG4gICAgICAnbGlnaHQnLFxuICAgICAgJ2RhcmsnLFxuICAgICAgJ2N1cGNha2UnLFxuICAgICAgJ2J1bWJsZWJlZScsXG4gICAgICAnZW1lcmFsZCcsXG4gICAgICAnY29ycG9yYXRlJyxcbiAgICAgICdzeW50aHdhdmUnLFxuICAgICAgJ3JldHJvJyxcbiAgICAgICdjeWJlcnB1bmsnLFxuICAgICAgJ3ZhbGVudGluZScsXG4gICAgICAnaGFsbG93ZWVuJyxcbiAgICAgICdnYXJkZW4nLFxuICAgICAgJ2ZvcmVzdCcsXG4gICAgICAnYXF1YScsXG4gICAgICAnbG9maScsXG4gICAgICAncGFzdGVsJyxcbiAgICAgICdmYW50YXN5JyxcbiAgICAgICd3aXJlZnJhbWUnLFxuICAgICAgJ2JsYWNrJyxcbiAgICAgICdsdXh1cnknLFxuICAgICAgJ2RyYWN1bGEnLFxuICAgICAgJ2NteWsnLFxuICAgICAgJ2F1dHVtbicsXG4gICAgICAnYnVzaW5lc3MnLFxuICAgICAgJ2FjaWQnLFxuICAgICAgJ2xlbW9uYWRlJyxcbiAgICAgICduaWdodCcsXG4gICAgICAnY29mZmVlJyxcbiAgICAgICd3aW50ZXInXG4gICAgXVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7O0FDSkE7QUFDQTtBQWVBLElBQU0sZUFBZSxDQUFDLFdBQW1CO0FBRXpDLElBQU8sMEJBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxtQ0FBbUM7QUFBQSxFQUM3QyxPQUFPO0FBQUEsSUFDTCxRQUFRLENBQUM7QUFBQSxFQUNYO0FBQUEsRUFDQSxTQUFTLENBQUMsWUFBNEMsT0FBdUM7QUFBQSxFQUM3RixTQUFTO0FBQUEsSUFDUCxRQUFRO0FBQUEsTUFDTjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7OztBRG5ERDtBQUNBO0FBRUEsSUFBTyxzQkFBUSxjQUFhO0FBQUEsRUFDMUIsTUFBTSxRQUFRLElBQUksUUFBUTtBQUFBLEVBQzFCLFdBQVc7QUFBQSxFQUNYLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNQLFlBQVksdUJBQXFCO0FBQUEsUUFDakMsYUFBYTtBQUFBLFFBQ2IsR0FBSSxRQUFRLElBQUksYUFBYSxlQUN6QjtBQUFBLFVBQ0UsUUFBUTtBQUFBLFlBQ04sUUFBUSxDQUFDLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEtBQUssRUFBRSxDQUFDO0FBQUEsVUFDOUQsQ0FBQztBQUFBLFFBQ0gsSUFDQSxDQUFDO0FBQUEsTUFDUDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixTQUFTLENBQUMsYUFBYSxVQUFVLE9BQU87QUFBQSxNQUN4QyxZQUFZLENBQUMsZUFBZTtBQUFBLE1BQzVCLFNBQVM7QUFBQSxRQUNQLGFBQWE7QUFBQSxVQUNYLGlCQUFpQixDQUFDLFlBQXFCLFFBQVEsV0FBVyxJQUFJLElBQUksRUFBRSxTQUFTLGVBQWUsSUFBSSxDQUFDO0FBQUEsUUFDbkcsQ0FBQztBQUFBLFFBQ0QsWUFBWSxFQUFFLE9BQU8sSUFBSSxDQUFDO0FBQUEsTUFDNUI7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFFBQVE7QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLGNBQWM7QUFBQSxNQUNkLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxJQUNSLENBQUM7QUFBQSxJQUNELFVBQVU7QUFBQSxFQUNaO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
