const WEB3FORMS_URL = 'https://api.web3forms.com/submit'
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function sanitizeField(value) {
  return typeof value === 'string' ? value.trim() : ''
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0
}

function getAccessKey() {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY?.trim()

  if (!accessKey) {
    throw new Error('VITE_WEB3FORMS_KEY is not configured.')
  }

  return accessKey
}

function validatePayload(payload) {
  const source = payload.source === 'chat-widget' ? 'chat-widget' : 'contact-form'
  const normalized = {
    source,
    lang: payload.lang === 'en' ? 'en' : 'es',
    name: sanitizeField(payload.name),
    email: sanitizeField(payload.email),
    phone: sanitizeField(payload.phone),
    address: sanitizeField(payload.address),
    city: sanitizeField(payload.city),
    zipCode: sanitizeField(payload.zipCode),
    message: sanitizeField(payload.message),
    pageUrl: sanitizeField(payload.pageUrl),
    company: sanitizeField(payload.company),
  }

  if (normalized.company) {
    throw new Error('Spam detected.')
  }

  if (!isNonEmptyString(normalized.name) || !isNonEmptyString(normalized.message)) {
    throw new Error('Name and message are required.')
  }

  if (normalized.email && !EMAIL_REGEX.test(normalized.email)) {
    throw new Error('Invalid email address.')
  }

  if (source === 'contact-form') {
    const requiredFields = ['email', 'phone', 'address', 'city', 'zipCode']

    for (const field of requiredFields) {
      if (!isNonEmptyString(normalized[field])) {
        throw new Error('Missing required contact details.')
      }
    }
  } else if (!normalized.email && !normalized.phone) {
    throw new Error('Email or phone is required for chat follow-up.')
  }

  return normalized
}

function buildSubject(payload) {
  if (payload.source === 'chat-widget') {
    return payload.lang === 'en' ? 'New chat - retimaca.com' : 'Nuevo chat - retimaca.com'
  }

  return payload.lang === 'en' ? 'New contact form - retimaca.com' : 'Nuevo formulario - retimaca.com'
}

export async function submitContactMessage(payload) {
  const accessKey = getAccessKey()
  const normalized = validatePayload(payload)
  const response = await fetch(WEB3FORMS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: buildSubject(normalized),
      from_name: normalized.name,
      ...(normalized.email ? { replyto: normalized.email } : {}),
      source: normalized.source,
      language: normalized.lang,
      name: normalized.name,
      email: normalized.email,
      phone: normalized.phone,
      address: normalized.address,
      city: normalized.city,
      zipCode: normalized.zipCode,
      pageUrl: normalized.pageUrl,
      message: normalized.message,
    }),
  })

  const responseBody = await response.json().catch(() => null)

  if (!response.ok || responseBody?.success === false) {
    throw new Error(responseBody?.message || 'Request failed.')
  }

  return responseBody
}
