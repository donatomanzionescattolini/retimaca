import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
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
  MDBNavbarLink,
  MDBIcon,
  MDBNavbarNav,
  MDBCollapse,
  MDBNavbarItem,
  MDBNavbarToggler,
  MDBCardSubTitle,
} from "mdb-react-ui-kit";

import "./index.css";
import "mdb-react-ui-kit/dist/mdb-react-ui-kit.cjs";

// Mobile scroll indicator component (visible on small screens)
function ScrollIndicator({ currentSection }) {
  const sections = [
    'inicio',
    'sobre-nosotros',
    'productos',
    'videos',
    'galeria',
    'opiniones',
    'delivery',
    'guias',
    'contacto',
  ];

  return (
    <div className="section-indicator d-block d-md-none" aria-hidden="false">
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className={`indicator-dot ${currentSection === section ? 'active' : ''}`}
          aria-label={`Go to ${section} section`}
        />
      ))}
    </div>
  );
}
ScrollIndicator.propTypes = {
  currentSection: PropTypes.string,
};

// Extracted gallery carousel into its own component to reduce App complexity
// Helper to compute gallery item layout
function computeGalleryLayout(index, currentSlide, galleryLength, isMobile) {
  const position = (index - currentSlide + galleryLength) % galleryLength;

  const centerScale = isMobile ? 0.9 : 1;
  const sideScale = isMobile ? 0.6 : 0.8;
  const smallScale = isMobile ? 0.5 : 0.7;

  const layouts = {
    0: { transform: 'translateX(0)', opacity: 1, zIndex: 3, scale: centerScale },
    1: { transform: `translateX(${isMobile ? '60%' : '80%'})`, opacity: isMobile ? 0.4 : 0.6, zIndex: 2, scale: sideScale },
    2: { transform: `translateX(${isMobile ? '120%' : '160%'})`, opacity: isMobile ? 0.2 : 0.3, zIndex: 1, scale: smallScale },
    [-1 + galleryLength]: { transform: `translateX(${isMobile ? '-60%' : '-80%'})`, opacity: isMobile ? 0.4 : 0.6, zIndex: 2, scale: sideScale },
    [-2 + galleryLength]: { transform: `translateX(${isMobile ? '-120%' : '-160%'})`, opacity: isMobile ? 0.2 : 0.3, zIndex: 1, scale: smallScale },
  };

  // Try exact position keys first
  if (layouts[position]) return layouts[position];

  // fallback for others
  return { transform: `translateX(${isMobile ? '200%' : '220%'})`, opacity: 0, zIndex: 0, scale: isMobile ? 0.45 : 0.6 };
}

function GalleryCarousel({ gallery, currentSlide, prevSlide, nextSlide }) {
  let isMobile = false;
  if (globalThis.window) {
    isMobile = globalThis.window.innerWidth < 768;
  }

  return (
    <section id="galeria" className="py-5">
      <MDBContainer>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{ color: "#8B4513" }}>
            <MDBIcon fas icon="images" className="me-3 text-info" />
            Galería de Fotos
          </h2>
          <div className="underline mx-auto mb-4"></div>
          <p className="text-muted"
             style={{
               fontSize: "1rem",
               maxWidth: "600px",
               margin: "0 auto",
               lineHeight: "1.6",
               opacity: "0.9"
             }}>
            Descubre nuestra pasión por la calidad y excelencia a través de nuestra galería de imágenes
          </p>
        </div>
        <div
          className="position-relative"
          style={{
            height: isMobile ? "350px" : "400px",
            overflow: "hidden",
          }}
        >
          <div className="d-flex align-items-center justify-content-center h-100">
            {gallery.map((item, index) => {
              const { transform, opacity, zIndex, scale } = computeGalleryLayout(index, currentSlide, gallery.length, isMobile);

              return (
                <div
                  key={item.src}
                  className="position-absolute"
                  style={{
                    transform: `${transform} scale(${scale})`,
                    opacity,
                    zIndex,
                    transition: "all 0.5s ease-in-out",
                    width: isMobile ? "220px" : "280px",
                  }}
                >
                  <MDBCard className="gallery-card border-0 shadow-lg">
                    <div className="gallery-image-container">
                      {item.type === "video" ? (
                        <video
                          src={item.src}
                          className="gallery-image"
                          controls
                          playsInline
                          preload="metadata"
                          style={{ pointerEvents: 'auto', zIndex: 10 }}
                        />
                      ) : (
                        <>
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
                        </>
                      )}
                    </div>
                    <MDBCardBody className="p-3">
                      <MDBCardText
                        className="text-center gallery-title"
                        style={{ fontSize: isMobile ? "0.9rem" : "1rem" }}
                      >
                        {item.title}
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              );
            })}
          </div>
          <button
            type="button"
            className="shadow-0 btn position-absolute start-0 top-50 translate-middle-y gallery-arrow-left z-5"
            onClick={prevSlide}
            onKeyDown={(e) => e.key === 'Enter' && prevSlide()}
            aria-label="Previous slide"
          ></button>
          <button
            type="button"
            className="shadow-0 btn position-absolute end-0 top-50 translate-middle-y gallery-arrow-right "
            onClick={nextSlide}
            onKeyDown={(e) => e.key === 'Enter' && nextSlide()}
            aria-label="Next slide"
          ></button>
        </div>
      </MDBContainer>
    </section>
  );
}

GalleryCarousel.propTypes = {
  gallery: PropTypes.array.isRequired,
  currentSlide: PropTypes.number.isRequired,
  prevSlide: PropTypes.func.isRequired,
  nextSlide: PropTypes.func.isRequired,
};
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
    { src: "/pallet.jpg", title: "Pallet completo de leña seca", type: "image" },
    { src: "/bundle.jpg", title: "Paquete de 5 piezas", type: "image" },
    { src: "/casuarina.jpg", title: "Leña Casuarina lista para entrega", type: "image" },
    { src: "/oak-blanco.jpg", title: "Leña Oak Blanco premium", type: "image" },
    { src: "/video (1).mp4", title: "Servicio bajo la lluvia", type: "video" },
    { src: "/video (2).mp4", title: "El secreto de la pizza bien hecha", type: "video" },
    { src: "/video (3).mp4", title: "Nuestros trabajadores en accin", type: "video" },
    { src: "/video (4).mp4", title: "Ejemplo de uso", type: "video" },
    { src: "/video (5).mp4", title: "Tip para que el carbon dure mas", type: "video" },
    { src: "/video (6).mp4", title: "Tip para encender", type: "video" },
    { src: "/video (7).mp4", title: "Ejemplo de uso", type: "video" },
  
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
      const formDataWithRecipients = {
        ...formData,
        _to: "info@retimaca.com,support@retimaca.com",
      };

      const response = await fetch("https://formspree.io/f/mwppvrrg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataWithRecipients),
      });

      if (response.ok) {
        setStatus("Mensaje enviado con éxito. ¡Gracias por contactarnos!");
        const whatsappMsg = encodeURIComponent(
          `Nuevo mensaje de ${formData.name} (${formData.email}): ${formData.message}`
        );
        window.open(`https://wa.me/17868507247?text=${whatsappMsg}`, "_blank");
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
        key={`star-${i}`}
        fas
        icon="star"
        className={i < count ? "text-warning" : "text-muted"}
      />
    ));
  const [openNavNoTogglerThird, setOpenNavNoTogglerThird] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSection, setCurrentSection] = useState("");

  // Function to update current section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-nosotros', 'productos', 'galeria', 'opiniones', 'delivery', 'guias', 'contacto'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) { // Adjusted for sticky header
            current = section;
          }
        }
      }
      
      setCurrentSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % gallery.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  // (ScrollIndicator is defined at top-level)

  return (
    <div className="app-container">
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/17868507247?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20productos%20de%20le%C3%B1a"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        <MDBIcon fab icon="whatsapp" className="whatsapp-icon" />
      </a>
      <ScrollIndicator currentSection={currentSection} />
      <MDBNavbar
        expand="lg"
        light
        bgColor="dark"
        style={{ color: "rgb(244, 228, 193)", position: "sticky", top: 0, zIndex: 1000 }}
      >
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
            <span className="brand-text">Retimaca</span>
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
                  className={`nav-link-custom mx-2 ${currentSection === 'sobre-nosotros' ? 'active' : ''}`}
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
                <MDBNavbarLink href="#guias" className="nav-link-custom mx-2">
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
      <section id="inicio" className="hero-section position-relative">
        {/* Hero background video removed per request (was covering hero text) */}
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

      {/* Additional videos from public folder */}
      {/* <section aria-hidden="true">
        <MDBContainer>
          <MDBRow className="g-4 justify-content-center mt-4">
            <MDBCol lg="6" md="12">
              <div className="video-card h-100 position-relative rounded-4 overflow-hidden shadow-lg">
                <div className="ratio ratio-16x9">
                  <video src="/video (5).mp4" className="rounded-4" controls playsInline preload="metadata">
                    <track kind="captions" src="/captions/video5.vtt" srcLang="es" label="Spanish" />
                  </video>
                </div>
             
              </div>
            </MDBCol>

            <MDBCol lg="6" md="12">
              <div className="video-card h-100 position-relative rounded-4 overflow-hidden shadow-lg">
                <div className="ratio ratio-16x9">
                  <video src="/video (6).mp4" className="rounded-4" controls playsInline preload="metadata">
                    <track kind="captions" src="/captions/video6.vtt" srcLang="es" label="Spanish" />
                  </video>
                </div>
              </div>
            </MDBCol>
          </MDBRow>

          <MDBRow className="g-4 justify-content-center mt-4">
            <MDBCol lg="6" md="12">
              <div className="video-card h-100 position-relative rounded-4 overflow-hidden shadow-lg">
                <div className="ratio ratio-16x9">
                  <video src="/video (7).mp4" className="rounded-4" controls playsInline preload="metadata">
                    <track kind="captions" src="/captions/video7.vtt" srcLang="es" label="Spanish" />
                  </video>
                </div>
              </div>
            </MDBCol>

            <MDBCol lg="6" md="12">
              <div className="video-card h-100 position-relative rounded-4 overflow-hidden shadow-lg">
                <div className="ratio ratio-16x9">
                  <video src="/video (8).mp4" className="rounded-4" controls playsInline preload="metadata">
                    <track kind="captions" src="/captions/video8.vtt" srcLang="es" label="Spanish" />
                  </video>
                </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section> */}

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
                    Presentación compacta, ideal para restaurantes o negocios
                    con espacio limitado.
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

      {/* Videos */}

      {/* Gallery */}
      <GalleryCarousel gallery={gallery} currentSlide={currentSlide} prevSlide={prevSlide} nextSlide={nextSlide} />

      {/* Reviews */}
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.8!2d-80.3344!3d25.6929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9c0a659e91c5b%3A0x123456789!2s9230%20SW%2071st%20St%2C%20Miami%2C%20FL%2033173!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: "10px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Retimaca Location"
                ></iframe>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section> 

      {/* Guides Section */}
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
                    Miami y sus mejores usos para restaurantes y negocios.
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
                          placeholder="Ej: Juan Pérez"
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
                      placeholder="Ej: Necesito 2 pallets de leña Casuarina para mi restaurante. ¿Cuándo pueden entregar?"
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
                  8781 SW 72nd St, Miami, FL 33173
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
