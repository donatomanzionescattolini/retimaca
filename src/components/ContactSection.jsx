import { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBTextArea, MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
import { CONTACT_INFO } from '../data/constants'
import { translations } from '../data/translations'
import { submitContactMessage } from '../utils/contactApi'
import { openSiteChat } from '../utils/chat'

export default function ContactSection({ lang }) {
  const t = translations[lang].contact
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    interest: '',
    timeline: '',
    budget: '',
    message: '',
    company: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const statusClassName = useMemo(() => {
    if (!status) {
      return ''
    }

    if (status === t.sending) {
      return 'alert-info'
    }

    return status === t.success ? 'alert-success' : 'alert-danger'
  }, [status, t.sending, t.success])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(t.sending)

    try {
      await submitContactMessage({
        ...formData,
        source: 'contact-form',
        lang,
        pageUrl: window.location.href,
        subject: `Inquiry from ${formData.name}`,
        fromName: formData.name,
      })

      setStatus(t.success)
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
        interest: '',
        timeline: '',
        budget: '',
        message: '',
        company: '',
      })
    } catch {
      setStatus(t.error)
    }
  }

  return (
    <section
      id="contacto"
      className="py-5"
      style={{
        background: 'linear-gradient(135deg, #f8f4e6 0%, #ede4d3 100%)',
      }}
    >
      <MDBContainer>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{ color: '#8B4513' }}>
            <MDBIcon fas icon="envelope" className="me-3 text-danger" />
            {t.title}
          </h2>
          <div className="underline mx-auto mb-4"></div>
          <p className="lead text-muted">
            {t.subtitle}
          </p>
        </div>
        <MDBRow className="justify-content-center">
          <MDBCol lg="8">
            <MDBCard className="contact-card border-0 shadow-lg">
              <MDBCardBody className="p-5">
                <form onSubmit={handleSubmit}>
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
                  <MDBRow>
                    <MDBCol md="6">
                      <MDBInput
                        label={t.name}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mb-4 contact-input"
                      />
                    </MDBCol>
                    <MDBCol md="6">
                      <MDBInput
                        type="email"
                        label={t.email}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mb-4 contact-input"
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="6">
                      <MDBInput
                        type="tel"
                        label={t.phone}
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="mb-4 contact-input"
                      />
                    </MDBCol>
                    <MDBCol md="6">
                      <MDBInput
                        label={t.address}
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="mb-4 contact-input"
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="6">
                      <MDBInput
                        label={t.city}
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="mb-4 contact-input"
                      />
                    </MDBCol>
                    <MDBCol md="6">
                      <MDBInput
                        label={t.zipCode}
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                        className="mb-4 contact-input"
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="4">
                      <div className="mb-4">
                        <label className="form-label mb-2 text-muted">{t.interestLabel}</label>
                        <select
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className="form-select contact-select"
                        >
                          <option value="" disabled>{t.interestPlaceholder}</option>
                          {Object.entries(t.interestOptions).map(([value, label]) => (
                            <option key={value} value={value}>{label}</option>
                          ))}
                        </select>
                      </div>
                    </MDBCol>
                    <MDBCol md="4">
                      <div className="mb-4">
                        <label className="form-label mb-2 text-muted">{t.timelineLabel}</label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="form-select contact-select"
                        >
                          <option value="" disabled>{t.timelinePlaceholder}</option>
                          {Object.entries(t.timelineOptions).map(([value, label]) => (
                            <option key={value} value={value}>{label}</option>
                          ))}
                        </select>
                      </div>
                    </MDBCol>
                    <MDBCol md="4">
                      <div className="mb-4">
                        <label className="form-label mb-2 text-muted">{t.budgetLabel}</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="form-select contact-select"
                        >
                          <option value="" disabled>{t.budgetPlaceholder}</option>
                          {Object.entries(t.budgetOptions).map(([value, label]) => (
                            <option key={value} value={value}>{label}</option>
                          ))}
                        </select>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <MDBTextArea
                    label={t.message}
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mb-4 contact-input"
                  />
                  <div className="text-center">
                    <MDBBtn
                      type="submit"
                      color="warning"
                      size="lg"
                      className="px-5 py-3 fw-bold"
                      style={{ borderRadius: "50px" }}
                    >
                      <MDBIcon fas icon="paper-plane" className="me-2" />
                      {t.send}
                    </MDBBtn>
                  </div>
                  {status && (
                    <div className="text-center mt-4">
                      <div
                        className={`alert ${statusClassName}`}
                        role="alert"
                        aria-live="polite"
                      >
                        {status}
                      </div>
                    </div>
                  )}
                </form>

                <div className="contact-divider my-5">
                  <span className="divider-text">
                    {t.or}
                  </span>
                </div>

                <div className="contact-buttons text-center">
                  <MDBBtn
                    color="success"
                    size="lg"
                    type="button"
                    onClick={() => openSiteChat()}
                    className="me-3 mb-3 px-4 py-3 fw-bold"
                    style={{ borderRadius: '50px' }}
                  >
                    <MDBIcon fas icon="comments" className="me-2" />
                    {t.chatCta}
                  </MDBBtn>
                  <MDBBtn
                    color="danger"
                    size="lg"
                    href={CONTACT_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-3 px-4 py-3 fw-bold"
                    style={{ borderRadius: '50px' }}
                  >
                    <MDBIcon fab icon="instagram" className="me-2" />
                    Instagram
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

ContactSection.propTypes = {
  lang: PropTypes.string.isRequired,
}
