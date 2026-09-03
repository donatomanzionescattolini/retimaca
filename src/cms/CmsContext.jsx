import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth, firebaseConfigured, firebaseConfigError } from '../config/firebase'
import { CONTACT_INFO, woods as staticWoods, gallery as staticGallery, reviews as staticReviews, CITY_LANDING_PAGES } from '../data/constants'
import { saveSiteContent, subscribeSiteContent } from '../services/cms'

const CmsContext = createContext(null)

const fallback = {
  contact: CONTACT_INFO,
  woods: staticWoods,
  gallery: staticGallery,
  reviews: staticReviews,
  cities: CITY_LANDING_PAGES,
}

function mergeContent(remote) {
  if (!remote) return fallback
  return {
    contact: { ...CONTACT_INFO, ...(remote.contact || {}) },
    woods: Array.isArray(remote.woods) ? remote.woods : staticWoods,
    gallery: Array.isArray(remote.gallery) ? remote.gallery : staticGallery,
    reviews: Array.isArray(remote.reviews) ? remote.reviews : staticReviews,
    cities: Array.isArray(remote.cities) ? remote.cities : CITY_LANDING_PAGES,
  }
}

export function CmsProvider({ children }) {
  const [content, setContent] = useState(fallback)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(firebaseConfigured)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(firebaseConfigError)

  useEffect(() => {
    if (!auth) {
      setLoading(false)
      return undefined
    }
    return onAuthStateChanged(auth, setUser)
  }, [])

  useEffect(() => {
    if (!firebaseConfigured) return undefined
    return subscribeSiteContent(
      (remote) => {
        setContent(mergeContent(remote))
        setLoading(false)
        setError(null)
      },
      (err) => {
        setError(err?.message || 'Unable to load CMS content.')
        setLoading(false)
      },
    )
  }, [])

  const value = useMemo(() => ({
    ...content,
    user,
    loading,
    saving,
    error,
    firebaseConfigured,
    login: async (email, password) => {
      if (!auth) throw new Error(firebaseConfigError || 'Firebase is not configured.')
      await signInWithEmailAndPassword(auth, email.trim(), password)
    },
    logout: () => auth ? signOut(auth) : Promise.resolve(),
    save: async (next) => {
      if (!user) throw new Error('You must be signed in to publish changes.')
      setSaving(true)
      setError(null)
      try {
        await saveSiteContent(next)
        setContent(mergeContent(next))
      } catch (err) {
        setError(err?.message || 'Unable to save changes.')
        throw err
      } finally {
        setSaving(false)
      }
    },
  }), [content, user, loading, saving, error])

  return <CmsContext.Provider value={value}>{children}</CmsContext.Provider>
}

export function useCms() {
  const value = useContext(CmsContext)
  if (!value) throw new Error('useCms must be used inside CmsProvider')
  return value
}
