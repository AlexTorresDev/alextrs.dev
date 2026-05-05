import { defineConfig } from 'astro/config'

// Astro integration imports
import sitemap from '@astrojs/sitemap'
import preact from '@astrojs/preact'
import { VitePWA } from 'vite-plugin-pwa'

// Helper imports
import { manifest, seoConfig } from './utils/seoConfig'

import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'en'],
	},
	site: seoConfig.baseURL,
	integrations: [sitemap(), preact()],
	vite: {
		plugins: [
			VitePWA({
				registerType: 'autoUpdate',
				manifest,
				workbox: {
					globDirectory: 'dist',
					globPatterns: [
						'**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}'
					],
					navigateFallback: null
				}
			}),
			tailwindcss()
		]
	},
	server: {
		open: true
	}
})
