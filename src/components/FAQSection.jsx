import { useState } from 'react'
import { MDBContainer, MDBIcon, MDBCollapse } from 'mdb-react-ui-kit'
import PropTypes from 'prop-types'
import { translations } from '../data/translations'

export default function FAQSection({ lang }) {
  const t = translations[lang].faq
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-5" id="faq" style={{ background: 'white' }}>
      <MDBContainer>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{ color: "#8B4513" }}>
            <MDBIcon fas icon="question-circle" className="me-3 text-warning" />
            {t.title}
          </h2>
          <div className="underline mx-auto mb-4"></div>
          <p className="lead text-muted">{t.subtitle}</p>
        </div>
        <div className="faq-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          {t.questions.map((item, index) => (
            <div key={index} className="faq-item mb-3" style={{ 
              background: '#f8f9fa', 
              borderRadius: '15px',
              overflow: 'hidden',
              border: '2px solid #e9ecef'
            }}>
              <button
                onClick={() => toggleFAQ(index)}
                className="w-100 text-start p-4 border-0 bg-transparent d-flex justify-content-between align-items-center"
                style={{ cursor: 'pointer' }}
              >
                <span style={{ fontWeight: '600', color: '#8B4513', fontSize: '1.1rem' }}>
                  {item.question}
                </span>
                <MDBIcon 
                  fas 
                  icon={openIndex === index ? "chevron-up" : "chevron-down"} 
                  style={{ color: '#ffc107' }}
                />
              </button>
              <MDBCollapse open={openIndex === index}>
                <div className="p-4 pt-0" style={{ color: '#6b4423', lineHeight: '1.7' }}>
                  {item.answer}
                </div>
              </MDBCollapse>
            </div>
          ))}
        </div>
      </MDBContainer>
    </section>
  )
}

FAQSection.propTypes = {
  lang: PropTypes.string.isRequired,
}
