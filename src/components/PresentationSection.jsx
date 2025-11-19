import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBIcon } from 'mdb-react-ui-kit'

export default function PresentationSection() {
  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #f8f4e6 0%, #ede4d3 100%)",
      }}
    >
      <MDBContainer>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{ color: "#8B4513" }}>
            <MDBIcon fas icon="boxes" className="me-3 text-warning" />
            Formas de Presentación
          </h2>
          <div className="underline mx-auto mb-4"></div>
          <p className="lead text-muted">
            Adaptamos nuestros productos a tus necesidades
          </p>
        </div>
        <MDBRow className="justify-content-center g-4">
          <MDBCol lg="5" md="6">
            <MDBCard className="presentation-card h-100 border-0 shadow-lg">
              <div className="presentation-image-container">
                <MDBCardImage
                  src="/pallet.jpg"
                  alt="Pallet de leña seca"
                  className="presentation-image"
                />
                <div className="presentation-badge">
                  <span className="badge-text">MAYOREO</span>
                </div>
              </div>
              <MDBCardBody className="text-center p-4">
                <MDBCardTitle className="presentation-title mb-3">
                  Pallet (1.5 cubic yards)
                </MDBCardTitle>
                <MDBCardText className="presentation-description mb-4">
                  Leña seleccionada, cortada y apilada cuidadosamente. Ideal
                  para alto consumo.
                </MDBCardText>
                <div className="presentation-features">
                  <div className="feature-badge mb-2">
                    Ideales para pizzerías, parrillas, restaurantes latinos,
                    carne en vara y pollos a la brasa.
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="5" md="6">
            <MDBCard className="presentation-card h-100 border-0 shadow-lg">
              <div className="presentation-image-container">
                <MDBCardImage
                  src="/bundle.jpg"
                  alt="Paquete de leña"
                  className="presentation-image"
                />
                <div className="presentation-badge">
                  <span className="badge-text">MENUDEO</span>
                </div>
              </div>
              <MDBCardBody className="text-center p-4">
                <MDBCardTitle className="presentation-title mb-3">
                  Paquetes (5 piezas de 15")
                </MDBCardTitle>
                <MDBCardText className="presentation-description mb-4">
                  Presentación compacta, ideal para viviendas o negocios con
                  espacio limitado.
                </MDBCardText>
                <div className="presentation-features">
                  <div className="feature-badge mb-2">
                    Perfectos para pizza casera, BBQ de domingo o parrilladas
                    familiares.
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}
