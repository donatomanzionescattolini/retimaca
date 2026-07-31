import PropTypes from 'prop-types'
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit'
import { translations } from '../data/translations'

export default function DeliverySection({ lang }) {
  const t = translations[lang].delivery

  return (
    <section
      id="delivery"
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #fffaf2 0%, #f4e4c1 100%)",
      }}
    >
      <MDBContainer>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{ color: "#8B4513" }}>
            <MDBIcon fas icon="truck" className="me-3 text-primary" />
            {t.title}
          </h2>
          <div className="underline mx-auto mb-4"></div>
          <p className="lead text-muted">
            {t.subtitle}
          </p>
        </div>
        <MDBRow className="justify-content-center align-items-center">
          <MDBCol lg="6" className="mb-4">
            <div className="delivery-info p-4">
              <div className="delivery-feature mb-4">
                <MDBIcon fas icon="clock" className="feature-icon me-3" />
                <div>
                  <h5 className="mb-2">{t.schedule}</h5>
                  <p className="text-muted mb-0">
                    {t.scheduleText}
                  </p>
                </div>
              </div>
              <div className="delivery-feature mb-4">
                <MDBIcon
                  fas
                  icon="map-marker-alt"
                  className="feature-icon me-3"
                />
                <div>
                  <h5 className="mb-2">{t.coverage}</h5>
                  <p className="text-muted mb-0">
                    {t.coverageText}
                  </p>
                </div>
              </div>
              <div className="delivery-feature">
                <MDBIcon
                  fas
                  icon="shield-alt"
                  className="feature-icon me-3"
                />
                <div>
                  <h5 className="mb-2">{t.quality}</h5>
                  <p className="text-muted mb-0">
                    {t.qualityText}
                  </p>
                </div>
              </div>
            </div>
          </MDBCol>
          <MDBCol lg="6" className="mb-4">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps?q=12750+NW+17th+St+%23222,+Miami,+FL+33182&output=embed"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Retimaca Location - 12750 NW 17th St #222"
              ></iframe>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

DeliverySection.propTypes = {
  lang: PropTypes.string.isRequired,
}
