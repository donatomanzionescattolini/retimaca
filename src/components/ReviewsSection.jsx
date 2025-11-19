import PropTypes from 'prop-types'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from 'mdb-react-ui-kit'

export default function ReviewsSection({ reviews }) {
  const renderStars = (count) =>
    Array.from({ length: 5 }, (_, i) => (
      <MDBIcon
        key={`star-${i}`}
        fas
        icon="star"
        className={i < count ? "text-warning" : "text-muted"}
      />
    ))

  return (
    <section
      id="opiniones"
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #2c1810 0%, #4a2c0a 100%)",
      }}
    >
      <MDBContainer>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3 text-white">
            <MDBIcon fas icon="star" className="me-3 text-warning" />
            Opiniones de Nuestros Clientes
          </h2>
          <div className="underline-light mx-auto mb-4"></div>
          <p className="lead text-light">
            La satisfacción de nuestros clientes nos respalda
          </p>
        </div>
        <MDBRow className="g-4 justify-content-center">
          {reviews.map((rev) => (
            <MDBCol lg="4" md="6" key={rev.name}>
              <MDBCard className="review-card h-100 border-0 shadow-lg">
                <MDBCardBody className="text-center p-4">
                  <div className="review-avatar mb-3">
                    <MDBIcon fas icon="user-circle" className="avatar-icon" />
                  </div>
                  <h5 className="review-name mb-3">{rev.name}</h5>
                  <p className="review-text mb-4">"{rev.text}"</p>
                  <div className="review-stars mb-3">
                    {renderStars(rev.rating)}
                  </div>
                  <div className="review-rating">
                    <span className="rating-text">
                      {rev.rating}/5 estrellas
                    </span>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </section>
  )
}

ReviewsSection.propTypes = {
  reviews: PropTypes.array.isRequired,
}
