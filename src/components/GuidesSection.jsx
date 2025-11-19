import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardSubTitle, MDBBtn, MDBIcon } from 'mdb-react-ui-kit'

export default function GuidesSection() {
  return (
    <section
      className="py-5"
      id="guias"
      style={{
        background: "linear-gradient(135deg, #2c1810 0%, #4a2c0a 100%)",
      }}
    >
      <MDBContainer>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3 text-white">
            <MDBIcon fas icon="book-open" className="me-3 text-warning" />
            Guías Rápidas
          </h2>
          <div className="underline-light mx-auto mb-4"></div>
          <p className="lead text-light">
            Aprende más sobre la leña y su uso profesional
          </p>
        </div>
        <MDBRow className="g-4 justify-content-center">
          <MDBCol lg="5" md="6">
            <MDBCard className="guide-card h-100 border-0 shadow-lg">
              <MDBCardBody className="text-center p-4">
                <div className="guide-icon mb-3">
                  <MDBIcon
                    fas
                    icon="sun"
                    className="guide-icon-large text-warning"
                  />
                </div>
                <MDBCardTitle className="guide-title mb-3">
                  Secado de Leña
                </MDBCardTitle>
                <MDBCardText className="guide-description mb-4">
                  Descubre por qué es importante secar la leña, los diferentes
                  métodos de secado y cómo afecta la calidad de combustión.
                </MDBCardText>
                <MDBBtn
                  color="warning"
                  href="/guides/secado-de-lena.pdf"
                  target="_blank"
                  className="fw-bold"
                  style={{ borderRadius: "25px" }}
                >
                  <MDBIcon fas icon="download" className="me-2" />
                  Descargar PDF
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="5" md="6">
            <MDBCard className="guide-card h-100 border-0 shadow-lg">
              <MDBCardBody className="text-center p-4">
                <div className="guide-icon mb-3">
                  <MDBIcon
                    fas
                    icon="tree"
                    className="guide-icon-large text-success"
                  />
                </div>
                <MDBCardTitle className="guide-title mb-3">
                  Leña en Miami
                </MDBCardTitle>
                <MDBCardSubTitle className="guide-description mb-4">
                  Conoce los diferentes tipos de leña en Miami y sus
                  características únicas.
                </MDBCardSubTitle>
                <MDBCardText className="guide-description mb-4">
                  Guía express sobre los tipos de leña dura disponibles en
                  Miami y sus mejores usos para restaurantes y viviendas.
                </MDBCardText>
                <MDBBtn
                  color="info"
                  href="/guides/guia-express-miami-hardwood.pdf"
                  target="_blank"
                  className="fw-bold"
                  style={{ borderRadius: "25px" }}
                >
                  <MDBIcon fas icon="download" className="me-2" />
                  Descargar PDF
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}
