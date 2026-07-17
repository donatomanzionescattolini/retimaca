import PropTypes from 'prop-types'
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBRow } from 'mdb-react-ui-kit'
import { CITY_LANDING_PAGES } from '../data/constants'
import { translations } from '../data/translations'
import { buildPath } from '../utils/routing'

export default function ServiceAreasSection({ lang }) {
  const t = translations[lang].serviceAreas

  return (
    <section id="areas-servicio" className="py-5" style={{ background: "linear-gradient(135deg, #f8f4e6 0%, #fffaf2 100%)" }}>
      <MDBContainer>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{ color: "#8B4513" }}>
            <MDBIcon fas icon="map-marker-alt" className="me-3 text-danger" />
            {t.title}
          </h2>
          <div className="underline mx-auto mb-4"></div>
          <p className="lead text-muted">{t.subtitle}</p>
        </div>
        <MDBRow className="g-4">
          {CITY_LANDING_PAGES.map((page) => (
            <MDBCol md="6" lg="3" key={page.id}>
              <MDBCard className="h-100 border-0 shadow-sm service-area-card">
                <MDBCardBody className="d-flex flex-column">
                  <h3 className="h5 fw-bold mb-2">{page.city}</h3>
                  <p className="text-muted flex-grow-1 mb-4">{page.intents[lang]}</p>
                  <MDBBtn
                    color="warning"
                    href={buildPath(lang, page.slugs[lang])}
                    className="fw-bold"
                    style={{ borderRadius: '30px' }}
                  >
                    {t.cta}
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

ServiceAreasSection.propTypes = {
  lang: PropTypes.string.isRequired,
}
