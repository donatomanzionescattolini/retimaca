import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit'

export default function DeliverySection() {
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
            Delivery en Miami
          </h2>
          <div className="underline mx-auto mb-4"></div>
          <p className="lead text-muted">
            Servicio de entrega confiable y puntual
          </p>
        </div>
        <MDBRow className="justify-content-center align-items-center">
          <MDBCol lg="6" className="mb-4">
            <div className="delivery-info p-4">
              <div className="delivery-feature mb-4">
                <MDBIcon fas icon="clock" className="feature-icon me-3" />
                <div>
                  <h5 className="mb-2">Horarios de Entrega</h5>
                  <p className="text-muted mb-0">
                    Lunes a viernes, 8:00 am a 6:00 pm
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
                  <h5 className="mb-2">Área de Cobertura</h5>
                  <p className="text-muted mb-0">
                    Todo el área metropolitana de Miami
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
                  <h5 className="mb-2">Garantía de Calidad</h5>
                  <p className="text-muted mb-0">
                    Nos encargamos de todos los palets y leña
                  </p>
                </div>
              </div>
            </div>
          </MDBCol>
          <MDBCol lg="6" className="mb-4">
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.5!2d-80.4167!3d25.7617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a1c5f5c5c5%3A0x1234567890abcdef!2s12750%20NW%2017th%20St%20%23222%2C%20Miami%2C%20FL%2033182!5e0!3m2!1sen!2sus!4v1234567890"
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
