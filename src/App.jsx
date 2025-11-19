import { useState } from 'react'
import { MDBIcon } from 'mdb-react-ui-kit'
import { woods, gallery, reviews, CONTACT_INFO } from './data/constants'
import ScrollIndicator from './components/ScrollIndicator'
import GalleryCarousel from './components/GalleryCarousel'
import NavigationBar from './components/NavigationBar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProductsSection from './components/ProductsSection'
import PresentationSection from './components/PresentationSection'
import ReviewsSection from './components/ReviewsSection'
import DeliverySection from './components/DeliverySection'
import GuidesSection from './components/GuidesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import { useScrollSection } from './hooks/useScrollSection'
import { useLanguage } from './hooks/useLanguage'
import './index.css'
import 'mdb-react-ui-kit/dist/mdb-react-ui-kit.cjs'

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const currentSection = useScrollSection()
  const { lang, toggleLanguage } = useLanguage()

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
      <AboutSection lang={lang} />
      <ProductsSection woods={woods} lang={lang} />
      <PresentationSection lang={lang} />
      <GalleryCarousel
        gallery={gallery}
        currentSlide={currentSlide}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
      {/*<ReviewsSection reviews={reviews} lang={lang} />*/}
      <DeliverySection lang={lang} />
      <GuidesSection lang={lang} />
      <ContactSection lang={lang} />
      <Footer lang={lang} />
    </div>
  )
}
