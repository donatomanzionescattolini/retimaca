import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit'
import PropTypes from 'prop-types'
import { translations } from '../data/translations'

export default function TrustSection({ lang }) {
  const t = translations[lang].trust

  return (
    <section className="py-4" style={{ background: 'linear-gradient(135deg, #8B4513 0%, #6b3410 100%)' }}>
      <MDBContainer>
        <MDBRow className="text-center text-white">
          <MDBCol md="3" sm="6" className="mb-3 mb-md-0">
            <MDBIcon fas icon="users" size="2x" className="mb-2" style={{ color: '#ffc107' }} />
            <h4 className="fw-bold mb-0">100+</h4>
            <p className="mb-0">{t.clients}</p>
          </MDBCol>
          <MDBCol md="3" sm="6" className="mb-3 mb-md-0">
            <MDBIcon fas icon="truck" size="2x" className="mb-2" style={{ color: '#ffc107' }} />
            <h4 className="fw-bold mb-0">{t.sameDay}</h4>
            <p className="mb-0">{t.delivery}</p>
          </MDBCol>
          <MDBCol md="3" sm="6" className="mb-3 mb-md-0">
            <MDBIcon fas icon="star" size="2x" className="mb-2" style={{ color: '#ffc107' }} />
            <h4 className="fw-bold mb-0">5.0</h4>
            <p className="mb-0">{t.rating}</p>
          </MDBCol>
          <MDBCol md="3" sm="6">
            <MDBIcon fas icon="shield-alt" size="2x" className="mb-2" style={{ color: '#ffc107' }} />
            <h4 className="fw-bold mb-0">100%</h4>
            <p className="mb-0">{t.quality}</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

TrustSection.propTypes = {
  lang: PropTypes.string.isRequired,
}
