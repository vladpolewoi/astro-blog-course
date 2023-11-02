import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
	site: "https://astro-blog-course.netlify.app/",
	experimental: {
		devOverlay: true,
	},
	integrations: [tailwind()],
})
