import PropTypes from 'prop-types'
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit'
import { CONTACT_INFO } from '../data/constants'
import { translations } from '../data/translations'

export default function Footer({ lang }) {
  const t = translations[lang].footer

  return (
    <footer className="footer-custom py-5">
      <MDBContainer>
        <MDBRow className="justify-content-center align-items-center">
          <MDBCol lg="6" className="text-center mb-4">
            <h5 className="footer-brand mb-3">
              <MDBIcon fas icon="fire" className="me-2" />
              Retimaca
            </h5>
            <p className="footer-text mb-3">
              {t.tagline}
            </p>
            <div className="footer-social">
              <a
                href={CONTACT_INFO.whatsapp}
                className="social-link me-3"
              >
                <MDBIcon fab icon="whatsapp" />
              </a>
              <a
                href={CONTACT_INFO.instagram}
                className="social-link"
              >
                <MDBIcon fab icon="instagram" />
              </a>
            </div>
          </MDBCol>
          <MDBCol lg="6" className="text-center">
            <div className="footer-info">
              <div className="info-item mb-2">
                <MDBIcon fas icon="map-marker-alt" className="me-2" />
                {CONTACT_INFO.address}
              </div>
              <div className="info-item mb-2">
                <MDBIcon fas icon="clock" className="me-2" />
                {CONTACT_INFO.hours}
              </div>
              <div className="info-item">
                <MDBIcon fas icon="phone" className="me-2" />
                +1 ({CONTACT_INFO.phone.slice(1, 4)}) {CONTACT_INFO.phone.slice(4, 7)}-{CONTACT_INFO.phone.slice(7)}
              </div>
            </div>
          </MDBCol>
        </MDBRow>
        <hr className="footer-divider my-4" />
        <div className="text-center">
          <p className="footer-copyright mb-0">
            © {new Date().getFullYear()} Retimaca. {t.rights}
          </p>
        </div>
      </MDBContainer>
    </footer>
  )
}

Footer.propTypes = {
  lang: PropTypes.string.isRequired,
}
