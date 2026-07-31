import { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { MDBBtn, MDBIcon, MDBInput, MDBTextArea } from 'mdb-react-ui-kit'
import { translations } from '../data/translations'
import { SITE_CHAT_EVENT } from '../utils/chat'
import { submitContactMessage } from '../utils/contactApi'

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
  company: '',
}

export default function ChatWidget({ lang }) {
  const t = translations[lang].chat
  const [isOpen, setIsOpen] = useState(false)
  const [status, setStatus] = useState('')
  const [formData, setFormData] = useState(initialFormData)

  useEffect(() => {
    const handleOpenChat = (event) => {
      const nextPrefill = event.detail?.prefill?.trim()

      setIsOpen(true)
      setStatus('')
      if (nextPrefill) {
        setFormData((current) => ({
          ...current,
          message: current.message || nextPrefill,
        }))
      }
    }

    window.addEventListener(SITE_CHAT_EVENT, handleOpenChat)

    return () => window.removeEventListener(SITE_CHAT_EVENT, handleOpenChat)
  }, [])

  const statusClassName = useMemo(() => {
    if (!status) {
      return ''
    }

    if (status === t.sending) {
      return 'alert-info'
    }

    return status === t.success ? 'alert-success' : 'alert-danger'
  }, [status, t.sending, t.success])

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!formData.email.trim() && !formData.phone.trim()) {
      setStatus(t.replyRequired)
      return
    }

    setStatus(t.sending)

    try {
      await submitContactMessage({
        ...formData,
        source: 'chat-widget',
        lang,
        pageUrl: window.location.href,
      })

      setFormData(initialFormData)
      setStatus(t.success)
    } catch {
      setStatus(t.error)
    }
  }

  return (
    <>
      {isOpen && <button className="chat-overlay" onClick={() => setIsOpen(false)} aria-label={t.close} type="button" />}
      <div className={`site-chat-widget ${isOpen ? 'open' : ''}`}>
        {isOpen && (
          <div className="site-chat-panel shadow-lg">
            <div className="site-chat-header">
              <div>
                <p className="site-chat-kicker mb-1">{t.kicker}</p>
                <h2 className="site-chat-title mb-1">{t.title}</h2>
                <p className="site-chat-subtitle mb-0">{t.subtitle}</p>
              </div>
              <button type="button" className="site-chat-close" onClick={() => setIsOpen(false)} aria-label={t.close}>
                <MDBIcon fas icon="times" />
              </button>
            </div>
            <form className="site-chat-form" onSubmit={handleSubmit}>
              <MDBInput
                label={t.name}
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mb-3"
              />
              <MDBInput
                type="email"
                label={t.email}
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mb-3"
              />
              <MDBInput
                type="tel"
                label={t.phone}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mb-3"
              />
              <MDBTextArea
                label={t.message}
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mb-3"
              />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="site-chat-honeypot"
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
              />
              <p className="site-chat-note">{t.note}</p>
              <MDBBtn type="submit" color="success" className="w-100 fw-bold py-3" style={{ borderRadius: '18px' }}>
                <MDBIcon fas icon="paper-plane" className="me-2" />
                {t.send}
              </MDBBtn>
              {status && (
                <div className={`alert ${statusClassName} mt-3 mb-0`} role="alert" aria-live="polite">
                  {status}
                </div>
              )}
            </form>
          </div>
        )}
        <button
          type="button"
          className="whatsapp-float"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? t.close : t.open}
        >
          <MDBIcon fas icon={isOpen ? 'times' : 'comments'} className="whatsapp-icon" />
        </button>
      </div>
    </>
  )
}

ChatWidget.propTypes = {
  lang: PropTypes.string.isRequired,
}
