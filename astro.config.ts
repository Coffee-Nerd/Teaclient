import mdx from "@astrojs/mdx";
import metaTags from "astro-meta-tags";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://teaclient.net",
	server: {
		port: 7053,
	},
	integrations: [mdx(), metaTags(), tailwind({ nesting: true })],
	redirects: {
		"/discord": "https://discord.gg/ejFTe4Hfnc",
		"/klaas": "https://klaas.tiiny.site/",
		"/github": "https://github.com/TeaClientMC",
	},
	vite: {
		resolve: {
			alias: {
				"@assets": "/src/assets/",
			},
		},
		build: {
			minify: true,
			sourcemap: true,
		},
	},
});
