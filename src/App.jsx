import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBInput,
  MDBTextArea,
  MDBBtn,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarItem,
} from "mdb-react-ui-kit";

import "./index.css";
import "mdb-react-ui-kit/dist/mdb-react-ui-kit.cjs";
export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const woods = [
    {
      name: "Casuarina",
      description:
        "Ideal para restaurantes que buscan una flama duradera y aroma suave.",
      image: "/casuarina.jpg",
    },
    {
      name: "Oak Blanco",
      description:
        "Leña densa, perfecta para parrillas y hornos de alta temperatura.",
      image: "/oak-blanco.jpg",
    },
  ];

  const gallery = [
    { src: "/pallet.jpg", title: "Pallet completo de leña seca" },
    { src: "/bundle.jpg", title: "Paquete de 5 piezas" },
    { src: "/casuarina.jpg", title: "Leña Casuarina lista para entrega" },
    { src: "/oak-blanco.jpg", title: "Leña Oak Blanco premium" },
  ];

  const reviews = [
    {
      name: "Restaurante La Flama",
      text: "Excelente calidad y puntualidad en las entregas. La Casuarina tiene una combustión perfecta.",
      rating: 5,
    },
    {
      name: "Parrilla El Roble",
      text: "El mejor proveedor de leña que hemos tenido. Productos secos y bien cortados.",
      rating: 5,
    },
    {
      name: "Horno Artesano",
      text: "Nos encanta su atención personalizada y la consistencia del producto.",
      rating: 4,
    },
  ];

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    try {
      const response = await fetch("https://formspree.io/f/mwppvrrg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Mensaje enviado con éxito. ¡Gracias por contactarnos!");
        const whatsappMsg = encodeURIComponent(
          `Nuevo mensaje de ${formData.name} (${formData.email}): ${formData.message}`
        );
        window.open(`https://wa.me/18001234567?text=${whatsappMsg}`, "_blank");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Hubo un error al enviar el mensaje. Intenta nuevamente.");
      }
    } catch {
      setStatus("No se pudo enviar el mensaje. Verifica tu conexión.");
    }
  };

  const renderStars = (count) =>
    Array.from({ length: 5 }, (_, i) => (
      <MDBIcon
        key={i}
        fas
        icon="star"
        className={i < count ? "text-warning" : "text-muted"}
      />
    ));
  const [openNavNoTogglerThird, setOpenNavNoTogglerThird] = useState(false);

  return (
    <div className="app-container">
      
      <MDBNavbar expand="lg" light bgColor="dark" style={{color: "rgb(244, 228, 193)"}}>
        <MDBContainer fluid>
          {" "}
          <MDBNavbarBrand
          type="logo"
            className="fw-bold fs-3 d-flex align-items-center"
            style={{ color: "#f4e4c1" }}
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="me-2 img-fluid"
              style={{ width: "40px", height: "40px" }}
            />
            Retimaca
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNavNoTogglerThird(!openNavNoTogglerThird)}
            color="light"
          >
            <MDBIcon icon="bars" className="light-hamburger" fas />
          </MDBNavbarToggler>
          
          <MDBCollapse navbar open={openNavNoTogglerThird}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="#sobre-nosotros"
                  className="nav-link-custom mx-2"
                >
                  Sobre Nosotros
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="#productos"
                  className="nav-link-custom mx-2"
                >
                  Productos
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="#delivery"
                  className="nav-link-custom mx-2"
                >
                  Delivery
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="#guias"
                  className="nav-link-custom mx-2"
                >
                  Guías
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="#contacto"
                  className="nav-link-custom mx-2"
                >
                  Contacto
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-overlay">
          <MDBContainer className="text-center py-5">
            <div className="hero-content">
              <h1 className="display-3 fw-bold mb-4 text-white hero-title">
                Leña Natural Premium{" "}
                <span className="d-block text-warning">Para Tu Negocio</span>
              </h1>
              <p className="lead mb-5 text-light fs-4">
                Productos seleccionados, secados al sol y listos para uso
                profesional
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

      {/* Sobre Nosotros */}
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
                  calidad para restaurantes, hornos y negocios.
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

      {/* Products */}
      <section className="py-5" id="productos">
        <MDBContainer>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: "#8B4513" }}>
              <MDBIcon fas icon="tree" className="me-3 text-success" />
              Nuestros Tipos de Leña
            </h2>
            <div className="underline mx-auto mb-4"></div>
            <p className="lead text-muted">
              Selección premium para uso comercial
            </p>
          </div>
          <MDBRow className="g-4 justify-content-center">
            {woods.map((wood) => (
              <MDBCol lg="5" md="6" key={wood.name}>
                <MDBCard className="product-card h-100 border-0 shadow-lg">
                  <div className="product-image-container">
                    <MDBCardImage
                      src={wood.image}
                      alt={wood.name}
                      className="product-image"
                    />
                    <div className="product-overlay">
                      <MDBIcon fas icon="fire" className="overlay-icon" />
                    </div>
                  </div>
                  <MDBCardBody className="p-4">
                    <MDBCardTitle className="product-title mb-3">
                      {wood.name}
                    </MDBCardTitle>
                    <MDBCardText className="product-description">
                      {wood.description}
                    </MDBCardText>
                    <MDBBtn
                      color="warning"
                      className="mt-3 fw-bold"
                      style={{ borderRadius: "25px" }}
                    >
                      <MDBIcon fas icon="info-circle" className="me-2" />
                      Más Info
                    </MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Presentation */}
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
                      <MDBIcon fas icon="truck" className="me-2" />
                      Entrega incluida
                    </div>
                    <div className="feature-badge">
                      <MDBIcon fas icon="certificate" className="me-2" />
                      Calidad garantizada
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
                    Presentación compacta, ideal para restaurantes o negocios
                    con espacio limitado.
                  </MDBCardText>
                  <div className="presentation-features">
                    <div className="feature-badge mb-2">
                      <MDBIcon fas icon="hand-holding" className="me-2" />
                      Fácil manejo
                    </div>
                    <div className="feature-badge">
                      <MDBIcon fas icon="clock" className="me-2" />
                      Entrega rápida
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Gallery */}
      <section className="py-5">
        <MDBContainer>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: "#8B4513" }}>
              <MDBIcon fas icon="images" className="me-3 text-info" />
              Galería de Productos
            </h2>
            <div className="underline mx-auto mb-4"></div>
            <p className="lead text-muted">
              Conoce la calidad de nuestros productos
            </p>
          </div>
          <MDBRow className="g-4">
            {gallery.map((item, index) => (
              <MDBCol lg="3" md="6" key={index}>
                <MDBCard className="gallery-card border-0 shadow-lg">
                  <div className="gallery-image-container">
                    <MDBCardImage
                      src={item.src}
                      alt={item.title}
                      className="gallery-image"
                    />
                    <div className="gallery-overlay">
                      <MDBIcon
                        fas
                        icon="search-plus"
                        className="overlay-icon"
                      />
                    </div>
                  </div>
                  <MDBCardBody className="p-3">
                    <MDBCardText className="text-center gallery-title">
                      {item.title}
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Reviews */}
      <section
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
            {reviews.map((rev, i) => (
              <MDBCol lg="4" md="6" key={i}>
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

      {/* Delivery Section */}
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
            <MDBCol lg={3}className="mb-4"></MDBCol>
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
            {/* <MDBCol lg="6">
              <div className="delivery-image-container text-center">
                <MDBIcon
                  fas
                  icon="shipping-fast"
                  className="delivery-icon mb-3"
                />
                <h4 className="mb-3" style={{ color: "#8B4513" }}>
                  ¡Entrega Gratuita!
                </h4>
                <p className="text-muted">En pedidos mayores a 1 pallet</p>
              </div>
            </MDBCol> */}
            <MDBCol md={3} className="mb-4"></MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Guides Section */}
      <section className="py-5" id="guias" style={{ background: "linear-gradient(135deg, #2c1810 0%, #4a2c0a 100%)" }}>
        <MDBContainer>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 text-white">
              <MDBIcon fas icon="book-open" className="me-3 text-warning" />
              Guías Rápidas
            </h2>
            <div className="underline-light mx-auto mb-4"></div>
            <p className="lead text-light">Aprende más sobre la leña y su uso profesional</p>
          </div>
          <MDBRow className="g-4 justify-content-center">
            <MDBCol lg="5" md="6">
              <MDBCard className="guide-card h-100 border-0 shadow-lg">
                <MDBCardBody className="text-center p-4">
                  <div className="guide-icon mb-3">
                    <MDBIcon fas icon="sun" className="guide-icon-large text-warning" />
                  </div>
                  <MDBCardTitle className="guide-title mb-3">
                    Secado de Leña
                  </MDBCardTitle>
                  <MDBCardText className="guide-description mb-4">
                    Descubre por qué es importante secar la leña, los diferentes métodos de secado y cómo afecta la calidad de combustión.
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
                    <MDBIcon fas icon="map-marked-alt" className="guide-icon-large text-info" />
                  </div>
                  <MDBCardTitle className="guide-title mb-3">
                    Hardwood en Miami
                  </MDBCardTitle>
                  <MDBCardText className="guide-description mb-4">
                    Guía express sobre los tipos de leña dura disponibles en Miami y sus mejores usos para restaurantes y negocios.
                  </MDBCardText>
                  <MDBBtn 
                    color="info" 
                    href="/guides/guia-express-hardwood-miami.pdf"
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

      {/* Contact */}
      <section
        id="contacto"
        className="py-5"
        style={{
          background: "linear-gradient(135deg, #f8f4e6 0%, #ede4d3 100%)",
        }}
      >
        <MDBContainer>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: "#8B4513" }}>
              <MDBIcon fas icon="envelope" className="me-3 text-danger" />
              ¿Listo para hacer tu pedido?
            </h2>
            <div className="underline mx-auto mb-4"></div>
            <p className="lead text-muted">
              Contáctanos y recibe tu leña premium
            </p>
          </div>
          <MDBRow className="justify-content-center">
            <MDBCol lg="8">
              <MDBCard className="contact-card border-0 shadow-lg">
                <MDBCardBody className="p-5">
                  <form onSubmit={handleSubmit}>
                    <MDBRow>
                      <MDBCol md="6">
                        <MDBInput
                          label="Tu nombre"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mb-4 contact-input"
                        />
                      </MDBCol>
                      <MDBCol md="6">
                        <MDBInput
                          type="email"
                          label="Tu correo electrónico"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mb-4 contact-input"
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBTextArea
                      label="Mensaje o pedido"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mb-4 contact-input"
                    />
                    <div className="text-center">
                      <MDBBtn
                        type="submit"
                        color="warning"
                        size="lg"
                        className="px-5 py-3 fw-bold"
                        style={{ borderRadius: "50px" }}
                      >
                        <MDBIcon fas icon="paper-plane" className="me-2" />
                        Enviar Mensaje
                      </MDBBtn>
                    </div>
                    {status && (
                      <div className="text-center mt-4">
                        <div className="alert alert-info" role="alert">
                          {status}
                        </div>
                      </div>
                    )}
                  </form>

                  <div className="contact-divider my-5">
                    <span className="divider-text">
                      O contáctanos directamente
                    </span>
                  </div>

                  <div className="contact-buttons text-center">
                    <MDBBtn
                      color="success"
                      size="lg"
                      href="https://wa.me/17868507247"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="me-3 mb-3 px-4 py-3 fw-bold"
                      style={{ borderRadius: "50px" }}
                    >
                      <MDBIcon fab icon="whatsapp" className="me-2" />
                      WhatsApp
                    </MDBBtn>
                    <MDBBtn
                      color="danger"
                      size="lg"
                      href="https://www.instagram.com/hardwoodretimaca/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mb-3 px-4 py-3 fw-bold"
                      style={{ borderRadius: "50px" }}
                    >
                      <MDBIcon fab icon="instagram" className="me-2" />
                      Instagram
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      {/* Footer */}
      <footer className="footer-custom py-5">
        <MDBContainer>
          <MDBRow className="justify-content-center align-items-center">
            <MDBCol lg="6" className="text-center mb-4">
              <h5 className="footer-brand mb-3">
                <MDBIcon fas icon="fire" className="me-2" />
                Retimaca
              </h5>
              <p className="footer-text mb-3">
                Leña natural premium para tu negocio
              </p>
              <div className="footer-social">
                <a
                  href="https://wa.me/17868507247"
                  className="social-link me-3"
                >
                  <MDBIcon fab icon="whatsapp" />
                </a>
                <a
                  href="https://www.instagram.com/hardwoodretimaca/"
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
                  Miami, FL
                </div>
                <div className="info-item mb-2">
                  <MDBIcon fas icon="clock" className="me-2" />
                  Lunes - Viernes: 8:00 am - 6:00 pm
                </div>
                <div className="info-item">
                  <MDBIcon fas icon="phone" className="me-2" />
                  +1 (786) 850-7247
                </div>
              </div>
            </MDBCol>
          </MDBRow>
          <hr className="footer-divider my-4" />
          <div className="text-center">
            <p className="footer-copyright mb-0">
              © {new Date().getFullYear()} Retimaca. Todos los derechos
              reservados.
            </p>
          </div>
        </MDBContainer>
      </footer>
    </div>
  );
}
