import { MDBContainer, MDBBtn, MDBIcon } from "mdb-react-ui-kit";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <MDBContainer className="text-center py-5">
          <div className="hero-content">
            <h1 className="display-3 fw-bold mb-4 text-white hero-title">
              Leña Natural Premium
              <span className="d-block text-warning">Para Tu Negocio</span>
            </h1>
            <p className="lead mb-5 text-light fs-4">
              Productos seleccionados, secados al sol y listos para uso profesional
            </p>
            <div className="hero-buttons">
              <MDBBtn 
                color="warning" 
                size="lg" 
                href="#contacto" 
                className="me-3 px-5 py-3 fw-bold"
                style={{ borderRadius: "50px" }}
              >
                <MDBIcon fas icon="phone" className="me-2" />
                Contáctanos
              </MDBBtn>
              <MDBBtn 
                outline 
                color="light" 
                size="lg" 
                href="#productos"
                className="px-5 py-3 fw-bold"
                style={{ borderRadius: "50px" }}
              >
                <MDBIcon fas icon="leaf" className="me-2" />
                Ver Productos
              </MDBBtn>
            </div>
          </div>
        </MDBContainer>
      </div>
    </section>
  );
}