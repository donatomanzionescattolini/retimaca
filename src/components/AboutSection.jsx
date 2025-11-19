import PropTypes from 'prop-types'
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit'
import { translations } from '../data/translations'

export default function AboutSection({ lang }) {
  const t = translations[lang].about

  return (
    <section
      className="py-5"
      id="sobre-nosotros"
      style={{
        background: "linear-gradient(135deg, #fffaf2 0%, #f4e4c1 100%)",
      }}
    >
      <MDBContainer>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{ color: "#8B4513" }}>
            <MDBIcon fas icon="leaf" className="me-3 text-success" />
            {t.title}
          </h2>
          <div className="underline mx-auto mb-4"></div>
        </div>
        <MDBRow className="justify-content-center align-items-center">
          <MDBCol lg="6" className="mb-4">
            <div className="about-content p-4">
              <p
                className="lead mb-4"
                style={{ color: "#4a2c0a", lineHeight: "1.8" }}
              >
                {t.intro.split('Retimaca')[0]}
                <strong className="text-warning">Retimaca</strong>
                {t.intro.split('Retimaca')[1]}
              </p>
              <p
                className="mb-4"
                style={{ color: "#6b4423", lineHeight: "1.7" }}
              >
                {t.description}
              </p>
              <div className="features-list">
                {t.features.map((feature, i) => (
                  <div key={i} className="feature-item mb-2">
                    <MDBIcon
                      fas
                      icon="check-circle"
                      className="text-success me-2"
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </MDBCol>
          <MDBCol lg="6">
            <div className="about-image-container">
              <img
                src="/pallet.jpg"
                alt="Retimaca leña premium"
                className="img-fluid rounded-4 shadow-lg"
                style={{ transform: "rotate(-2deg)" }}
              />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

AboutSection.propTypes = {
  lang: PropTypes.string.isRequired,
}
