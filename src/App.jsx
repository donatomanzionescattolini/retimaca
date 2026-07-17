import { Suspense, lazy, useState } from 'react'
import { MDBIcon } from 'mdb-react-ui-kit'
import { woods, gallery, CONTACT_INFO } from './data/constants'
import ScrollIndicator from './components/ScrollIndicator'
import NavigationBar from './components/NavigationBar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProductsSection from './components/ProductsSection'
import GeoLandingSection from './components/GeoLandingSection'
import { useScrollSection } from './hooks/useScrollSection'
import { useLanguage } from './hooks/useLanguage'
import { useSeoMeta } from './hooks/useSeoMeta'
import './index.css'
import 'mdb-react-ui-kit/dist/mdb-react-ui-kit.cjs'

const PresentationSection = lazy(() => import('./components/PresentationSection'))
const GalleryCarousel = lazy(() => import('./components/GalleryCarousel'))
const DeliverySection = lazy(() => import('./components/DeliverySection'))
const ServiceAreasSection = lazy(() => import('./components/ServiceAreasSection'))
const GuidesSection = lazy(() => import('./components/GuidesSection'))
const FAQSection = lazy(() => import('./components/FAQSection'))
const ContactSection = lazy(() => import('./components/ContactSection'))
const Footer = lazy(() => import('./components/Footer'))

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const currentSection = useScrollSection()
  const { lang, route, toggleLanguage } = useLanguage()
  useSeoMeta({ lang, route })

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % gallery.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + gallery.length) % gallery.length)
  }

  return (
    <div className="app-container">
      <a
        href={`${CONTACT_INFO.whatsapp}?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20productos%20de%20le%C3%B1a`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        <MDBIcon fab icon="whatsapp" className="whatsapp-icon" />
      </a>
      <ScrollIndicator currentSection={currentSection} />
      <NavigationBar currentSection={currentSection} lang={lang} toggleLanguage={toggleLanguage} />
      <HeroSection lang={lang} />
      <GeoLandingSection lang={lang} landingPage={route.landingPage} />
      <AboutSection lang={lang} />
      <ProductsSection woods={woods} lang={lang} />
      <Suspense fallback={<div className="section-loading" />}>
        <PresentationSection lang={lang} />
        <GalleryCarousel
          gallery={gallery}
          currentSlide={currentSlide}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          lang={lang}
        />
        <DeliverySection lang={lang} />
        <ServiceAreasSection lang={lang} />
        <GuidesSection lang={lang} />
        <FAQSection lang={lang} />
        <ContactSection lang={lang} />
        <Footer lang={lang} />
      </Suspense>
    </div>
  )
}
