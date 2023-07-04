import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  outDir: "build",
  site: "https://bora-sen.github.io",
  base: "/retro-donut-website/",
  build: {
    assets: "assets",
  },
})
