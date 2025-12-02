import PropTypes from 'prop-types'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBIcon } from 'mdb-react-ui-kit'
import { translations } from '../data/translations'

export default function ProductsSection({ woods, lang }) {
  const t = translations[lang].products

  return (
    <section className="py-5" id="productos">
      <MDBContainer>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{ color: "#8B4513" }}>
            <MDBIcon fas icon="tree" className="me-3 text-success" />
            {t.title}
          </h2>
          <div className="underline mx-auto mb-4"></div>
          <p className="lead text-muted">
            {t.subtitle}
          </p>
        </div>
        <MDBRow className="g-4 justify-content-center">
          {woods.map((wood, i) => (
            <MDBCol lg="5" md="6" key={wood.name}>
              <MDBCard className="product-card h-100 border-0 shadow-lg">
                <div className="product-image-container">
                  <MDBCardImage
                    src={wood.image}
                    alt={`${i === 0 ? t.casuarinaName : t.oakName} - Premium ${i === 0 ? 'Australian Pine' : 'White Oak'} firewood for restaurants and pizza ovens in Miami`}
                    className="product-image"
                    loading="lazy"
                  />
                  <div className="product-overlay">
                    <MDBIcon fas icon="fire" className="overlay-icon" />
                  </div>
                </div>
                <MDBCardBody className="p-4">
                  <MDBCardTitle className="product-title mb-3">
                    {i === 0 ? t.casuarinaName : t.oakName}
                  </MDBCardTitle>
                  <MDBCardText className="product-description">
                    {i === 0 ? t.casuarina : t.oak}
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

ProductsSection.propTypes = {
  woods: PropTypes.array.isRequired,
  lang: PropTypes.string.isRequired,
}
