import PropTypes from 'prop-types'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardSubTitle, MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
import { translations } from '../data/translations'

export default function GuidesSection({ lang }) {
  const t = translations[lang].guides

  return (
    <section
      className="py-5"
      id="guias"
      style={{
        background: "linear-gradient(135deg, #2c1810 0%, #4a2c0a 100%)",
      }}
    >
      <MDBContainer>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3 text-white">
            <MDBIcon fas icon="book-open" className="me-3 text-warning" />
            {t.title}
          </h2>
          <div className="underline-light mx-auto mb-4"></div>
          <p className="lead text-light">
            {t.subtitle}
          </p>
        </div>
        <MDBRow className="g-4 justify-content-center">
          <MDBCol lg="5" md="6">
            <MDBCard className="guide-card h-100 border-0 shadow-lg">
              <MDBCardBody className="text-center p-4">
                <div className="guide-icon mb-3">
                  <MDBIcon
                    fas
                    icon="sun"
                    className="guide-icon-large text-warning"
                  />
                </div>
                <MDBCardTitle className="guide-title mb-3">
                  {t.drying.title}
                </MDBCardTitle>
                <MDBCardText className="guide-description mb-4">
                  {t.drying.description}
                </MDBCardText>
                <MDBBtn
                  color="warning"
                  href="/guides/secado-de-lena.pdf"
                  target="_blank"
                  className="fw-bold"
                  style={{ borderRadius: "25px" }}
                >
                  <MDBIcon fas icon="download" className="me-2" />
                  {t.download}
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="5" md="6">
            <MDBCard className="guide-card h-100 border-0 shadow-lg">
              <MDBCardBody className="text-center p-4">
                <div className="guide-icon mb-3">
                  <MDBIcon
                    fas
                    icon="tree"
                    className="guide-icon-large text-success"
                  />
                </div>
                <MDBCardTitle className="guide-title mb-3">
                  {t.types.title}
                </MDBCardTitle>
                <MDBCardSubTitle className="guide-description mb-4">
                  {t.types.subtitle}
                </MDBCardSubTitle>
                <MDBCardText className="guide-description mb-4">
                  {t.types.description}
                </MDBCardText>
                <MDBBtn
                  color="info"
                  href="/guides/guia-express-miami-firewood.pdf"
                  target="_blank"
                  className="fw-bold"
                  style={{ borderRadius: "25px" }}
                >
                  <MDBIcon fas icon="download" className="me-2" />
                  {t.download}
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

GuidesSection.propTypes = {
  lang: PropTypes.string.isRequired,
}
