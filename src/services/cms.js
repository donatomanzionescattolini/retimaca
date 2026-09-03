import { doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore'
import { db } from '../config/firebase'

function contentDoc() {
  if (!db) throw new Error('Firebase is not configured.')
  return doc(db, 'retimacaCms', 'site')
}

export function subscribeSiteContent(onChange, onError) {
  if (!db) return () => {}
  return onSnapshot(contentDoc(), (snapshot) => onChange(snapshot.exists() ? snapshot.data() : null), onError)
}

export async function saveSiteContent(content) {
  await setDoc(contentDoc(), { ...content, updatedAt: new Date().toISOString() }, { merge: true })
}

export async function readSiteContent() {
  if (!db) return null
  const snapshot = await getDoc(contentDoc())
  return snapshot.exists() ? snapshot.data() : null
}
