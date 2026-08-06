const DEFAULT_RECIPIENT = 'mauro4477@yahoo.com'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0
}

function sanitizeField(value) {
  return typeof value === 'string' ? value.trim() : ''
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function formatField(label, value) {
  return `${label}: ${value || 'No provisto'}`
}

function parseBody(body) {
  if (!body) {
    return {}
  }

  if (typeof body === 'string') {
    try {
      return JSON.parse(body)
    } catch {
      return {}
    }
  }

  return body
}

function readFirstEnv(env, keys) {
  for (const key of keys) {
    const value = env[key]
    if (typeof value === 'string' && value.trim()) {
      return value.trim()
    }
  }
  return ''
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
    return { valid: false, statusCode: 400, message: 'Spam detected.' }
  }

  if (!isNonEmptyString(normalized.name) || !isNonEmptyString(normalized.message)) {
    return { valid: false, statusCode: 400, message: 'Name and message are required.' }
  }

  if (normalized.email && !EMAIL_REGEX.test(normalized.email)) {
    return { valid: false, statusCode: 400, message: 'Invalid email address.' }
  }

  if (source === 'contact-form') {
    const requiredFields = ['email', 'phone', 'address', 'city', 'zipCode']

    for (const field of requiredFields) {
      if (!isNonEmptyString(normalized[field])) {
        return { valid: false, statusCode: 400, message: 'Missing required contact details.' }
      }
    }
  } else if (!normalized.email && !normalized.phone) {
    return { valid: false, statusCode: 400, message: 'Email or phone is required for chat follow-up.' }
  }

  return { valid: true, payload: normalized }
}

function buildEmailContent(payload) {
  const sourceLabel = payload.source === 'chat-widget'
    ? payload.lang === 'en'
      ? 'Website chat'
      : 'Chat del sitio web'
    : payload.lang === 'en'
      ? 'Website contact form'
      : 'Formulario de contacto web'

  const subjectPrefix = payload.source === 'chat-widget' ? 'Nuevo chat' : 'Nuevo formulario'
  const subject = `${subjectPrefix} - retimaca.com`
  const textLines = [
    formatField('Origen', sourceLabel),
    formatField('Nombre', payload.name),
    formatField('Email', payload.email),
    formatField('Telefono', payload.phone),
    formatField('Direccion', payload.address),
    formatField('Ciudad', payload.city),
    formatField('ZIP', payload.zipCode),
    formatField('Pagina', payload.pageUrl),
    '',
    'Mensaje:',
    payload.message,
  ]

  const htmlRows = [
    ['Origen', sourceLabel],
    ['Nombre', payload.name],
    ['Email', payload.email],
    ['Telefono', payload.phone],
    ['Direccion', payload.address],
    ['Ciudad', payload.city],
    ['ZIP', payload.zipCode],
    ['Pagina', payload.pageUrl],
  ].map(([label, value]) => `
    <tr>
      <td style="padding:8px 12px;border:1px solid #ddd;font-weight:600;">${escapeHtml(label)}</td>
      <td style="padding:8px 12px;border:1px solid #ddd;">${escapeHtml(value || 'No provisto')}</td>
    </tr>
  `).join('')

  const html = `
    <div style="font-family:Arial,sans-serif;color:#222;">
      <h2 style="margin-bottom:16px;">${escapeHtml(subject)}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:700px;margin-bottom:16px;">
        <tbody>${htmlRows}</tbody>
      </table>
      <h3 style="margin-bottom:8px;">Mensaje</h3>
      <p style="white-space:pre-wrap;line-height:1.5;">${escapeHtml(payload.message)}</p>
    </div>
  `

  return { subject, text: textLines.join('\n'), html }
}

async function sendWithResend({ payload, toEmail, fromEmail, resendApiKey }) {
  const { subject, text, html } = buildEmailContent(payload)
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: payload.email || undefined,
      subject,
      text,
      html,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(errorText || 'Unable to deliver email.')
  }
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ success: false, message: 'Method not allowed.' })
  }

  const env = globalThis.process?.env ?? {}
  const resendApiKey = readFirstEnv(env, ['RESEND_API_KEY'])
  const fromEmail = readFirstEnv(env, ['CONTACT_FROM_EMAIL', 'RESEND_FROM_EMAIL'])
  const toEmail = readFirstEnv(env, ['CONTACT_TO_EMAIL', 'RESEND_TO_EMAIL']) || DEFAULT_RECIPIENT

  if (!resendApiKey || !fromEmail) {
    const missing = []
    if (!resendApiKey) missing.push('RESEND_API_KEY')
    if (!fromEmail) missing.push('CONTACT_FROM_EMAIL (or RESEND_FROM_EMAIL)')

    return response.status(503).json({
      success: false,
      message: `Email service is not configured. Missing: ${missing.join(', ')}.`,
    })
  }

  const body = parseBody(request.body)
  const validation = validatePayload(body)

  if (!validation.valid) {
    return response.status(validation.statusCode).json({
      success: false,
      message: validation.message,
    })
  }

  try {
    await sendWithResend({
      payload: validation.payload,
      toEmail,
      fromEmail,
      resendApiKey,
    })

    return response.status(200).json({ success: true })
  } catch (error) {
    return response.status(502).json({
      success: false,
      message: error instanceof Error ? error.message : 'Unable to deliver email.',
    })
  }
}
