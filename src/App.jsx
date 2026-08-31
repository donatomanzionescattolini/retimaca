import { Suspense, lazy, useState } from 'react'
import { woods, gallery } from './data/constants'
import ScrollIndicator from './components/ScrollIndicator'
import NavigationBar from './components/NavigationBar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProductsSection from './components/ProductsSection'
import GeoLandingSection from './components/GeoLandingSection'
import ChatWidget from './components/ChatWidget'
import { useScrollSection } from './hooks/useScrollSection'
import { useLanguage } from './hooks/useLanguage'
import { useSeoMeta } from './hooks/useSeoMeta'
import './index.css'
import 'mdb-react-ui-kit/dist/mdb-react-ui-kit.cjs'

const PresentationSection = lazy(() => import('./components/PresentationSection'))
const GalleryCarousel = lazy(() => import('./components/GalleryCarousel'))
const DeliverySection = lazy(() => import('./components/DeliverySection'))
const GuidesSection = lazy(() => import('./components/GuidesSection'))
const FAQSection = lazy(() => import('./components/FAQSection'))
const ContactSection = lazy(() => import('./components/ContactSection'))
const Footer = lazy(() => import('./components/Footer'))

function SectionFallback() {
  return <div className="section-loading" aria-hidden="true" />
}

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
      <ChatWidget lang={lang} />
      <ScrollIndicator currentSection={currentSection} />
      <NavigationBar currentSection={currentSection} lang={lang} toggleLanguage={toggleLanguage} />
      <HeroSection lang={lang} />
      <GeoLandingSection lang={lang} landingPage={route.landingPage} />
      <AboutSection lang={lang} />
      <ProductsSection woods={woods} lang={lang} />
      <Suspense fallback={<SectionFallback />}>
        <PresentationSection lang={lang} />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <GalleryCarousel
          gallery={gallery}
          currentSlide={currentSlide}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          lang={lang}
        />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <DeliverySection lang={lang} />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <GuidesSection lang={lang} />
        <FAQSection lang={lang} />
        <ContactSection lang={lang} />
        <Footer lang={lang} />
      </Suspense>
    </div>
  )
}
