import { CITY_LANDING_PAGES } from '../data/constants'

export const DEFAULT_LANGUAGE = 'es'
const SUPPORTED_LANGS = new Set(['es', 'en'])

function normalizePath(pathname) {
  const clean = pathname?.trim() || '/'
  return clean.endsWith('/') && clean !== '/' ? clean.slice(0, -1) : clean
}

function getSlugFromSegments(segments) {
  return segments.filter(Boolean).join('/')
}

function getLandingBySlug(slug, lang) {
  return CITY_LANDING_PAGES.find((page) => page.slugs[lang] === slug) || null
}

export function parseRoute(pathname) {
  const normalized = normalizePath(pathname)
  const segments = normalized.split('/').filter(Boolean)
  const first = segments[0]
  const hasLangPrefix = SUPPORTED_LANGS.has(first)
  const lang = hasLangPrefix ? first : DEFAULT_LANGUAGE
  const slug = hasLangPrefix
    ? getSlugFromSegments(segments.slice(1))
    : getSlugFromSegments(segments)
  const landingPage = slug ? getLandingBySlug(slug, lang) : null

  return {
    lang,
    slug,
    landingPage,
    hasLangPrefix,
  }
}

export function translateSlug(slug, fromLang, toLang) {
  if (!slug) return ''
  const page = CITY_LANDING_PAGES.find((item) => item.slugs[fromLang] === slug)
  return page ? page.slugs[toLang] : slug
}

export function buildPath(lang, slug = '') {
  return slug ? `/${lang}/${slug}` : `/${lang}`
}
