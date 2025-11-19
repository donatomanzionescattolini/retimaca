import PropTypes from 'prop-types'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBIcon } from 'mdb-react-ui-kit'
import { translations } from '../data/translations'

export default function PresentationSection({ lang }) {
  const t = translations[lang].presentation

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #f8f4e6 0%, #ede4d3 100%)",
      }}
    >
      <MDBContainer>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{ color: "#8B4513" }}>
            <MDBIcon fas icon="boxes" className="me-3 text-warning" />
            {t.title}
          </h2>
          <div className="underline mx-auto mb-4"></div>
          <p className="lead text-muted">
            {t.subtitle}
          </p>
        </div>
        <MDBRow className="justify-content-center g-4">
          <MDBCol lg="5" md="6">
            <MDBCard className="presentation-card h-100 border-0 shadow-lg">
              <div className="presentation-image-container">
                <MDBCardImage
                  src="/pallet.jpg"
                  alt="Pallet de leña seca"
                  className="presentation-image"
                />
                <div className="presentation-badge">
                  <span className="badge-text">{t.pallet.badge}</span>
                </div>
              </div>
              <MDBCardBody className="text-center p-4">
                <MDBCardTitle className="presentation-title mb-3">
                  {t.pallet.title}
                </MDBCardTitle>
                <MDBCardText className="presentation-description mb-4">
                  {t.pallet.description}
                </MDBCardText>
                <div className="presentation-features">
                  <div className="feature-badge mb-2">
                    {t.pallet.use}
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="5" md="6">
            <MDBCard className="presentation-card h-100 border-0 shadow-lg">
              <div className="presentation-image-container">
                <MDBCardImage
                  src="/bundle.jpg"
                  alt="Paquete de leña"
                  className="presentation-image"
                />
                <div className="presentation-badge">
                  <span className="badge-text">{t.bundle.badge}</span>
                </div>
              </div>
              <MDBCardBody className="text-center p-4">
                <MDBCardTitle className="presentation-title mb-3">
                  {t.bundle.title}
                </MDBCardTitle>
                <MDBCardText className="presentation-description mb-4">
                  {t.bundle.description}
                </MDBCardText>
                <div className="presentation-features">
                  <div className="feature-badge mb-2">
                    {t.bundle.use}
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

PresentationSection.propTypes = {
  lang: PropTypes.string.isRequired,
}
