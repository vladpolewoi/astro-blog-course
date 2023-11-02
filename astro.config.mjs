import { defineConfig } from "astro/config"

import tailwind from "@astrojs/tailwind"
import preact from "@astrojs/preact"

// https://astro.build/config
export default defineConfig({
	site: "https://astro-blog-course.netlify.app/",
	experimental: {
		devOverlay: true,
	},
	integrations: [tailwind(), preact()],
})
