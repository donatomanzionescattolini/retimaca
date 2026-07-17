import PropTypes from 'prop-types'
import { MDBBtn, MDBContainer, MDBIcon } from 'mdb-react-ui-kit'
import { CONTACT_INFO } from '../data/constants'

export default function GeoLandingSection({ lang, landingPage }) {
  if (!landingPage) {
    return null
  }

  const isSpanish = lang === 'es'
  const title = isSpanish
    ? `Leña premium en ${landingPage.city}`
    : `Premium firewood in ${landingPage.city}`
  const description = isSpanish
    ? `${landingPage.intents.es}. Entregamos Casuarina y Oak Blanco con disponibilidad para restaurantes, hornos de pizza y pedidos residenciales en ${landingPage.region}.`
    : `${landingPage.intents.en}. We deliver Australian Pine and White Oak for restaurants, pizza ovens, and residential orders across ${landingPage.region}.`

  const whatsappText = encodeURIComponent(
    isSpanish
      ? `Hola, quiero una cotización de leña en ${landingPage.city}.`
      : `Hi, I need a firewood quote in ${landingPage.city}.`
  )

  return (
    <section className="py-4" style={{ background: 'linear-gradient(135deg, #2c1810 0%, #4a2c0a 100%)' }}>
      <MDBContainer className="text-center text-white">
        <h2 className="h2 fw-bold mb-3">{title}</h2>
        <p className="lead mb-4">{description}</p>
        <MDBBtn
          color="warning"
          size="lg"
          href={`${CONTACT_INFO.whatsapp}?text=${whatsappText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fw-bold px-4"
          style={{ borderRadius: '40px' }}
        >
          <MDBIcon fab icon="whatsapp" className="me-2" />
          {isSpanish ? 'Cotizar por WhatsApp' : 'Get quote on WhatsApp'}
        </MDBBtn>
      </MDBContainer>
    </section>
  )
}

GeoLandingSection.propTypes = {
  lang: PropTypes.string.isRequired,
  landingPage: PropTypes.shape({
    city: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    intents: PropTypes.object.isRequired,
  }),
}
