const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.trim() || '/api/contact'

export async function submitContactMessage(payload) {
  const response = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  })

  const responseBody = await response.json().catch(() => null)

  if (!response.ok || responseBody?.success === false) {
    throw new Error(responseBody?.message || 'Request failed.')
  }

  return responseBody
}
