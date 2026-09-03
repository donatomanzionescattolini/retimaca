import { doc, getDoc, onSnapshot, setDoc } from 'firebase/firestore'
import { db } from '../config/firebase'

const CONTENT_DOC = doc(db, 'retimacaCms', 'site')

export function subscribeSiteContent(onChange, onError) {
  if (!db) return () => {}
  return onSnapshot(CONTENT_DOC, (snapshot) => onChange(snapshot.exists() ? snapshot.data() : null), onError)
}

export async function saveSiteContent(content) {
  if (!db) throw new Error('Firebase is not configured.')
  await setDoc(CONTENT_DOC, { ...content, updatedAt: new Date().toISOString() }, { merge: true })
}

export async function readSiteContent() {
  if (!db) return null
  const snapshot = await getDoc(CONTENT_DOC)
  return snapshot.exists() ? snapshot.data() : null
}
