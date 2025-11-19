import PropTypes from 'prop-types'
import { MDBContainer, MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
import { translations } from '../data/translations'

export default function HeroSection({ lang }) {
  const t = translations[lang].hero

  return (
    <section id="inicio" className="hero-section position-relative">
      <div className="hero-overlay">
        <MDBContainer className="text-center py-5">
          <div className="hero-content">
            <h1 className="display-3 fw-bold mb-4 text-white hero-title">
              {t.title}{" "}
              <span className="d-block text-warning">
                {t.subtitle}
              </span>
            </h1>
            <p className="lead mb-5 text-light fs-4">
              {t.description}
            </p>
            <div className="hero-buttons">
              <MDBBtn
                color="warning"
                size="lg"
                href="#contacto"
                className="me-3 px-5 py-3 fw-bold"
                style={{ borderRadius: "50px" }}
              >
                <MDBIcon fas icon="phone" className="me-2" />
                {t.contactBtn}
              </MDBBtn>
              <MDBBtn
                outline
                color="light"
                size="lg"
                href="#productos"
                className="px-5 py-3 fw-bold"
                style={{ borderRadius: "50px" }}
              >
                <MDBIcon fas icon="leaf" className="me-2" />
                {t.productsBtn}
              </MDBBtn>
            </div>
          </div>
        </MDBContainer>
      </div>
    </section>
  )
}

HeroSection.propTypes = {
  lang: PropTypes.string.isRequired,
}
