import { defineMiddleware } from 'astro:middleware'

const locales = ['es', 'en'] as const
const defaultLocale = 'es'

function getPreferredLocale(acceptLanguage: string | null): (typeof locales)[number] {
	if (!acceptLanguage) return defaultLocale

	const normalized = acceptLanguage.toLowerCase()
	if (normalized.includes('en')) return 'en'
	if (normalized.includes('es')) return 'es'

	return defaultLocale
}

export const onRequest = defineMiddleware((context, next) => {
	const { pathname, search } = context.url

	if (
		pathname.startsWith('/_astro/') ||
		pathname.startsWith('/api/') ||
		pathname.startsWith('/favicon') ||
		pathname.startsWith('/robots.txt') ||
		pathname.startsWith('/sitemap') ||
		pathname.startsWith('/manifest') ||
		pathname.includes('.')
	) {
		return next()
	}

	const [, maybeLocale] = pathname.split('/')
	if (locales.includes(maybeLocale as (typeof locales)[number])) {
		return next()
	}

	const preferredLocale = getPreferredLocale(context.request.headers.get('accept-language'))
	const targetPath = pathname === '/' ? '' : pathname
	return context.redirect(`/${preferredLocale}${targetPath}${search}`, 302)
})
