import { useEffect, useState } from 'react'
import { buildPath, parseRoute, translateSlug } from '../utils/routing'

export function useLanguage() {
  const [route, setRoute] = useState(() => parseRoute(window.location.pathname))

  useEffect(() => {
    const applyNormalizedRoute = () => {
      const parsed = parseRoute(window.location.pathname)
      setRoute(parsed)

      if (!parsed.hasLangPrefix || window.location.pathname === '/') {
        const normalizedPath = buildPath(parsed.lang, parsed.slug)
        window.history.replaceState({}, '', `${normalizedPath}${window.location.hash}`)
      }
    }

    const handlePopState = () => {
      setRoute(parseRoute(window.location.pathname))
    }

    applyNormalizedRoute()
    window.addEventListener('popstate', handlePopState)

    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const toggleLanguage = () => {
    const nextLang = route.lang === 'es' ? 'en' : 'es'
    const nextSlug = translateSlug(route.slug, route.lang, nextLang)
    const nextPath = buildPath(nextLang, nextSlug)
    window.history.pushState({}, '', `${nextPath}${window.location.hash}`)
    setRoute(parseRoute(nextPath))
  }

  return { lang: route.lang, route, toggleLanguage }
}
