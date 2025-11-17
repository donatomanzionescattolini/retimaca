import { useState, useEffect } from 'react'
import { SECTIONS } from '../data/constants'

export function useScrollSection() {
  const [currentSection, setCurrentSection] = useState('')

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          let current = ''

          for (const section of SECTIONS) {
            const element = document.getElementById(section)
            if (element) {
              const rect = element.getBoundingClientRect()
              if (rect.top <= 100) {
                current = section
              }
            }
          }

          setCurrentSection(current)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return currentSection
}