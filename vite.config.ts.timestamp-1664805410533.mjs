// vite.config.ts
import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";
import { presetTagify, presetIcons, extractorSvelte } from "unocss";
import { VitePWA } from "vite-plugin-pwa";
import { sveltekit } from "@sveltejs/kit/vite";
import TailwindCSS from "tailwindcss";

// tailwind.config.ts
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";
var tailwind_config_default = {
  content: ["./src/**/*.{html,md,js,svelte,ts}"],
  theme: {
    extend: {}
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter"
    ]
  }
};

// vite.config.ts
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
var vite_config_default = defineConfig({
  envPrefix: "URARA_",
  css: {
    postcss: {
      plugins: [
        TailwindCSS(tailwind_config_default),
        autoprefixer(),
        ...process.env.NODE_ENV === "production" ? [
          cssnano({
            preset: ["default", { discardComments: { removeAll: true } }]
          })
        ] : []
      ]
    }
  },
  plugins: [
    UnoCSS({
      include: [/\.svelte$/, /\.md?$/, /\.ts$/],
      extractors: [extractorSvelte],
      presets: [
        presetTagify({
          extraProperties: (matched) => matched.startsWith("i-") ? { display: "inline-block" } : {}
        }),
        presetIcons({ scale: 1.5 })
      ]
    }),
    VitePWA({
      srcDir: "./build",
      outDir: "./.svelte-kit/output/client",
      registerType: "autoUpdate",
      scope: "/",
      base: "/"
    }),
    sveltekit()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidGFpbHdpbmQuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3NldmljaGUvRG9jdW1lbnRzL1VyYXJhXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvc2V2aWNoZS9Eb2N1bWVudHMvVXJhcmEvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3NldmljaGUvRG9jdW1lbnRzL1VyYXJhL3ZpdGUuY29uZmlnLnRzXCI7Ly8gdml0ZSBkZWZpbmUgY29uZmlnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuLy8gdml0ZSBwbHVnaW5cbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnXG5pbXBvcnQgeyBwcmVzZXRUYWdpZnksIHByZXNldEljb25zLCBleHRyYWN0b3JTdmVsdGUgfSBmcm9tICd1bm9jc3MnXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xuaW1wb3J0IHsgc3ZlbHRla2l0IH0gZnJvbSAnQHN2ZWx0ZWpzL2tpdC92aXRlJ1xuLy8gcG9zdGNzcyAmIHRhaWx3aW5kY3NzXG5pbXBvcnQgVGFpbHdpbmRDU1MgZnJvbSAndGFpbHdpbmRjc3MnXG5pbXBvcnQgdGFpbHdpbmRDb25maWcgZnJvbSAnLi90YWlsd2luZC5jb25maWcnXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcidcbmltcG9ydCBjc3NuYW5vIGZyb20gJ2Nzc25hbm8nXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGVudlByZWZpeDogJ1VSQVJBXycsXG4gIGNzczoge1xuICAgIHBvc3Rjc3M6IHtcbiAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgVGFpbHdpbmRDU1ModGFpbHdpbmRDb25maWcgYXMgYW55KSBhcyBhbnksXG4gICAgICAgIGF1dG9wcmVmaXhlcigpLFxuICAgICAgICAuLi4ocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAgICAgICAgID8gW1xuICAgICAgICAgICAgICBjc3NuYW5vKHtcbiAgICAgICAgICAgICAgICBwcmVzZXQ6IFsnZGVmYXVsdCcsIHsgZGlzY2FyZENvbW1lbnRzOiB7IHJlbW92ZUFsbDogdHJ1ZSB9IH1dXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgOiBbXSlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBVbm9DU1Moe1xuICAgICAgaW5jbHVkZTogWy9cXC5zdmVsdGUkLywgL1xcLm1kPyQvLCAvXFwudHMkL10sXG4gICAgICBleHRyYWN0b3JzOiBbZXh0cmFjdG9yU3ZlbHRlXSxcbiAgICAgIHByZXNldHM6IFtcbiAgICAgICAgcHJlc2V0VGFnaWZ5KHtcbiAgICAgICAgICBleHRyYVByb3BlcnRpZXM6IChtYXRjaGVkOiBzdHJpbmcpID0+IChtYXRjaGVkLnN0YXJ0c1dpdGgoJ2ktJykgPyB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH0gOiB7fSlcbiAgICAgICAgfSksXG4gICAgICAgIHByZXNldEljb25zKHsgc2NhbGU6IDEuNSB9KVxuICAgICAgXVxuICAgIH0pLFxuICAgIFZpdGVQV0Eoe1xuICAgICAgc3JjRGlyOiAnLi9idWlsZCcsXG4gICAgICBvdXREaXI6ICcuLy5zdmVsdGUta2l0L291dHB1dC9jbGllbnQnLFxuICAgICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXG4gICAgICBzY29wZTogJy8nLFxuICAgICAgYmFzZTogJy8nXG4gICAgfSksXG4gICAgc3ZlbHRla2l0KClcbiAgXVxufSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3NldmljaGUvRG9jdW1lbnRzL1VyYXJhXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvc2V2aWNoZS9Eb2N1bWVudHMvVXJhcmEvdGFpbHdpbmQuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9zZXZpY2hlL0RvY3VtZW50cy9VcmFyYS90YWlsd2luZC5jb25maWcudHNcIjsvLyBAdHMtaWdub3JlIENvdWxkIG5vdCBmaW5kIGEgZGVjbGFyYXRpb24gZmlsZSBmb3IgbW9kdWxlICdAdGFpbHdpbmRjc3MvdHlwb2dyYXBoeScuXG5pbXBvcnQgdHlwb2dyYXBoeSBmcm9tICdAdGFpbHdpbmRjc3MvdHlwb2dyYXBoeSdcbi8vIEB0cy1pZ25vcmUgQ291bGQgbm90IGZpbmQgYSBkZWNsYXJhdGlvbiBmaWxlIGZvciBtb2R1bGUgJ2RhaXN5dWknLlxuaW1wb3J0IGRhaXN5dWkgZnJvbSAnZGFpc3l1aSdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb250ZW50OiBbJy4vc3JjLyoqLyoue2h0bWwsbWQsanMsc3ZlbHRlLHRzfSddLFxuICB0aGVtZToge1xuICAgIGV4dGVuZDoge31cbiAgfSxcbiAgcGx1Z2luczogW3R5cG9ncmFwaHksIGRhaXN5dWldLFxuICBkYWlzeXVpOiB7XG4gICAgdGhlbWVzOiBbXG4gICAgICAnbGlnaHQnLFxuICAgICAgJ2RhcmsnLFxuICAgICAgJ2N1cGNha2UnLFxuICAgICAgJ2J1bWJsZWJlZScsXG4gICAgICAnZW1lcmFsZCcsXG4gICAgICAnY29ycG9yYXRlJyxcbiAgICAgICdzeW50aHdhdmUnLFxuICAgICAgJ3JldHJvJyxcbiAgICAgICdjeWJlcnB1bmsnLFxuICAgICAgJ3ZhbGVudGluZScsXG4gICAgICAnaGFsbG93ZWVuJyxcbiAgICAgICdnYXJkZW4nLFxuICAgICAgJ2ZvcmVzdCcsXG4gICAgICAnYXF1YScsXG4gICAgICAnbG9maScsXG4gICAgICAncGFzdGVsJyxcbiAgICAgICdmYW50YXN5JyxcbiAgICAgICd3aXJlZnJhbWUnLFxuICAgICAgJ2JsYWNrJyxcbiAgICAgICdsdXh1cnknLFxuICAgICAgJ2RyYWN1bGEnLFxuICAgICAgJ2NteWsnLFxuICAgICAgJ2F1dHVtbicsXG4gICAgICAnYnVzaW5lc3MnLFxuICAgICAgJ2FjaWQnLFxuICAgICAgJ2xlbW9uYWRlJyxcbiAgICAgICduaWdodCcsXG4gICAgICAnY29mZmVlJyxcbiAgICAgICd3aW50ZXInXG4gICAgXVxuICB9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7QUFFN0IsT0FBTyxZQUFZO0FBQ25CLFNBQVMsY0FBYyxhQUFhLHVCQUF1QjtBQUMzRCxTQUFTLGVBQWU7QUFDeEIsU0FBUyxpQkFBaUI7QUFFMUIsT0FBTyxpQkFBaUI7OztBQ1B4QixPQUFPLGdCQUFnQjtBQUV2QixPQUFPLGFBQWE7QUFFcEIsSUFBTywwQkFBUTtBQUFBLEVBQ2IsU0FBUyxDQUFDLG1DQUFtQztBQUFBLEVBQzdDLE9BQU87QUFBQSxJQUNMLFFBQVEsQ0FBQztBQUFBLEVBQ1g7QUFBQSxFQUNBLFNBQVMsQ0FBQyxZQUFZLE9BQU87QUFBQSxFQUM3QixTQUFTO0FBQUEsSUFDUCxRQUFRO0FBQUEsTUFDTjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGOzs7QURsQ0EsT0FBTyxrQkFBa0I7QUFDekIsT0FBTyxhQUFhO0FBRXBCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFdBQVc7QUFBQSxFQUNYLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNQLFlBQVksdUJBQXFCO0FBQUEsUUFDakMsYUFBYTtBQUFBLFFBQ2IsR0FBSSxRQUFRLElBQUksYUFBYSxlQUN6QjtBQUFBLFVBQ0UsUUFBUTtBQUFBLFlBQ04sUUFBUSxDQUFDLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEtBQUssRUFBRSxDQUFDO0FBQUEsVUFDOUQsQ0FBQztBQUFBLFFBQ0gsSUFDQSxDQUFDO0FBQUEsTUFDUDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxTQUFTLENBQUMsYUFBYSxVQUFVLE9BQU87QUFBQSxNQUN4QyxZQUFZLENBQUMsZUFBZTtBQUFBLE1BQzVCLFNBQVM7QUFBQSxRQUNQLGFBQWE7QUFBQSxVQUNYLGlCQUFpQixDQUFDLFlBQXFCLFFBQVEsV0FBVyxJQUFJLElBQUksRUFBRSxTQUFTLGVBQWUsSUFBSSxDQUFDO0FBQUEsUUFDbkcsQ0FBQztBQUFBLFFBQ0QsWUFBWSxFQUFFLE9BQU8sSUFBSSxDQUFDO0FBQUEsTUFDNUI7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFFBQVE7QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLGNBQWM7QUFBQSxNQUNkLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxJQUNSLENBQUM7QUFBQSxJQUNELFVBQVU7QUFBQSxFQUNaO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
