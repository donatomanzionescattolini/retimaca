import { useEffect } from 'react'
import { buildPath } from '../utils/routing'

const SITE_URL = 'https://retimaca.com'

function upsertMetaByName(name, content) {
  let element = document.head.querySelector(`meta[name="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('name', name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function upsertMetaByProperty(property, content) {
  let element = document.head.querySelector(`meta[property="${property}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('property', property)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function upsertLink(rel, href, hreflang) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]`
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    if (hreflang) {
      element.setAttribute('hreflang', hreflang)
    }
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

export function useSeoMeta({ lang, route }) {
  useEffect(() => {
    const landingPage = route.landingPage
    const localizedPath = buildPath(lang, route.slug)
    const canonical = `${SITE_URL}${localizedPath}`
    const enPath = buildPath('en', landingPage ? landingPage.slugs.en : route.slug)
    const esPath = buildPath('es', landingPage ? landingPage.slugs.es : route.slug)
    const enUrl = `${SITE_URL}${enPath}`
    const esUrl = `${SITE_URL}${esPath}`

    const title = landingPage
      ? lang === 'es'
        ? `Leña en ${landingPage.city} | ${landingPage.intents.es} | Retimaca`
        : `Firewood in ${landingPage.city} | ${landingPage.intents.en} | Retimaca`
      : lang === 'es'
        ? 'Retimaca | Leña premium con entrega el mismo día en Miami'
        : 'Retimaca | Premium firewood with same-day Miami delivery'

    const description = landingPage
      ? lang === 'es'
        ? `Retimaca ofrece ${landingPage.intents.es.toLowerCase()} en ${landingPage.city}. Casuarina y Oak Blanco con entrega rápida y atención para restaurantes y hogares.`
        : `Retimaca provides ${landingPage.intents.en.toLowerCase()} in ${landingPage.city}. Australian Pine and White Oak with fast delivery for restaurants and homes.`
      : lang === 'es'
        ? 'Leña natural premium para restaurantes y hogares en Miami-Dade y Broward. Casuarina y Oak Blanco con entrega rápida.'
        : 'Premium natural firewood for restaurants and homes across Miami-Dade and Broward. Australian Pine and White Oak with fast delivery.'

    document.title = title
    upsertMetaByName('description', description)
    upsertMetaByProperty('og:title', title)
    upsertMetaByProperty('og:description', description)
    upsertMetaByProperty('og:url', canonical)
    upsertMetaByName('twitter:title', title)
    upsertMetaByName('twitter:description', description)
    upsertLink('canonical', canonical)
    upsertLink('alternate', enUrl, 'en')
    upsertLink('alternate', esUrl, 'es')
    upsertLink('alternate', canonical, 'x-default')

    const existingSchema = document.getElementById('dynamic-geo-schema')
    if (existingSchema) {
      existingSchema.remove()
    }

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          name: 'Retimaca',
          url: SITE_URL,
          telephone: '+1-786-877-5187',
          areaServed: ['Miami', 'Doral', 'Kendall', 'Broward'],
          knowsLanguage: ['es', 'en'],
        },
        {
          '@type': 'WebPage',
          inLanguage: lang === 'es' ? 'es-US' : 'en-US',
          url: canonical,
          name: title,
          description,
        },
      ],
    }

    if (landingPage) {
      schema['@graph'].push({
        '@type': 'Service',
        name: lang === 'es' ? `Entrega de leña en ${landingPage.city}` : `Firewood delivery in ${landingPage.city}`,
        areaServed: landingPage.city,
        serviceType: landingPage.intents[lang],
        provider: {
          '@type': 'LocalBusiness',
          name: 'Retimaca',
          url: SITE_URL,
        },
      })
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'dynamic-geo-schema'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
  }, [lang, route])
}
