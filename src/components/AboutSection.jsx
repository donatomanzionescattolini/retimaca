import { MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit'

export default function AboutSection() {
  return (
    <section
      className="py-5"
      id="sobre-nosotros"
      style={{
        background: "linear-gradient(135deg, #fffaf2 0%, #f4e4c1 100%)",
      }}
    >
      <MDBContainer>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{ color: "#8B4513" }}>
            <MDBIcon fas icon="leaf" className="me-3 text-success" />
            Sobre Nosotros
          </h2>
          <div className="underline mx-auto mb-4"></div>
        </div>
        <MDBRow className="justify-content-center align-items-center">
          <MDBCol lg="6" className="mb-4">
            <div className="about-content p-4">
              <p
                className="lead mb-4"
                style={{ color: "#4a2c0a", lineHeight: "1.8" }}
              >
                En <strong className="text-warning">Retimaca</strong>, nos
                especializamos en el suministro de leña natural de alta
                calidad para restaurantes, viviendas, hornos y negocios.
              </p>
              <p
                className="mb-4"
                style={{ color: "#6b4423", lineHeight: "1.7" }}
              >
                Cada pieza es seleccionada, cortada y secada cuidadosamente
                para garantizar una combustión uniforme y un aroma agradable.
                Nos enorgullece trabajar de forma sostenible y ofrecer un
                servicio confiable y puntual.
              </p>
              <div className="features-list">
                <div className="feature-item mb-2">
                  <MDBIcon
                    fas
                    icon="check-circle"
                    className="text-success me-2"
                  />
                  <span>Productos 100% naturales</span>
                </div>
                <div className="feature-item mb-2">
                  <MDBIcon
                    fas
                    icon="check-circle"
                    className="text-success me-2"
                  />
                  <span>Entrega puntual garantizada</span>
                </div>
                <div className="feature-item">
                  <MDBIcon
                    fas
                    icon="check-circle"
                    className="text-success me-2"
                  />
                  <span>Servicio personalizado</span>
                </div>
                <div className="feature-item">
                  <MDBIcon
                    fas
                    icon="check-circle"
                    className="text-success me-2"
                  />
                  <span>
                    Ofrecemos paletas de 40 x 48 x 36 pulgadas
                    <br />
                    <i>o </i>1.5 yardas cúbicas
                  </span>
                </div>
              </div>
            </div>
          </MDBCol>
          <MDBCol lg="6">
            <div className="about-image-container">
              <img
                src="/pallet.jpg"
                alt="Retimaca leña premium"
                className="img-fluid rounded-4 shadow-lg"
                style={{ transform: "rotate(-2deg)" }}
              />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  )
}
