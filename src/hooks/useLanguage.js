import { useState } from 'react'

export function useLanguage() {
  const [lang, setLang] = useState('es')
  
  const toggleLanguage = () => {
    setLang(prev => prev === 'es' ? 'en' : 'es')
  }
  
  return { lang, toggleLanguage }
}
