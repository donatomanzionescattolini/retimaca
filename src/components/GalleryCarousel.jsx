/* eslint-disable */
import PropTypes from 'prop-types'
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBIcon, MDBCardText, MDBCardImage,
} from 'mdb-react-ui-kit';
import { translations } from '../data/translations'


function computeGalleryLayout(index, currentSlide, galleryLength, isMobile) {
  const position = (index - currentSlide + galleryLength) % galleryLength

  const centerScale = isMobile ? 0.9 : 1
  const sideScale = isMobile ? 0.6 : 0.8
  const smallScale = isMobile ? 0.5 : 0.7

  const layouts = {
    0: {
      transform: "translateX(0)",
      opacity: 1,
      zIndex: 3,
      scale: centerScale,
    },
    1: {
      transform: `translateX(${isMobile ? "60%" : "80%"})`,
      opacity: isMobile ? 0.4 : 0.6,
      zIndex: 2,
      scale: sideScale,
    },
    2: {
      transform: `translateX(${isMobile ? "120%" : "160%"})`,
      opacity: isMobile ? 0.2 : 0.3,
      zIndex: 1,
      scale: smallScale,
    },
    [-1 + galleryLength]: {
      transform: `translateX(${isMobile ? "-60%" : "-80%"})`,
      opacity: isMobile ? 0.4 : 0.6,
      zIndex: 2,
      scale: sideScale,
    },
    [-2 + galleryLength]: {
      transform: `translateX(${isMobile ? "-120%" : "-160%"})`,
      opacity: isMobile ? 0.2 : 0.3,
      zIndex: 1,
      scale: smallScale,
    },
  }

  if (layouts[position]) return layouts[position]

  return {
    transform: `translateX(${isMobile ? "200%" : "220%"})`,
    opacity: 0,
    zIndex: 0,
    scale: isMobile ? 0.45 : 0.6,
  }
}

export default function GalleryCarousel({ gallery, currentSlide, prevSlide, nextSlide, lang }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const t = translations[lang].gallery

  return (
    <section id="galeria" className="py-5">
      <MDBContainer>
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{ color: "#8B4513" }}>
            <MDBIcon fas icon="images" className="me-3 text-info" />
            {t.title}
          </h2>
          <div className="underline mx-auto mb-4"></div>
          <p
            className="text-muted"
            style={{
              fontSize: "1rem",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
              opacity: "0.9",
            }}
          >
            {t.description}
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
              const { transform, opacity, zIndex, scale } =
                computeGalleryLayout(
                  index,
                  currentSlide,
                  gallery.length,
                  isMobile
                )

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
                          style={{ pointerEvents: "auto", zIndex: 10 }}
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
              )
            })}
          </div>
          <button
            type="button"
            className="shadow-0 btn position-absolute start-0 top-50 translate-middle-y gallery-arrow-left z-5"
            onClick={prevSlide}
            onKeyDown={(e) => e.key === "Enter" && prevSlide()}
            aria-label="Previous slide"
          ></button>
          <button
            type="button"
            className="shadow-0 btn position-absolute end-0 top-50 translate-middle-y gallery-arrow-right"
            onClick={nextSlide}
            onKeyDown={(e) => e.key === "Enter" && nextSlide()}
            aria-label="Next slide"
          ></button>
        </div>
      </MDBContainer>
    </section>
  )
}

GalleryCarousel.propTypes = {
  gallery: PropTypes.array.isRequired,
  currentSlide: PropTypes.number.isRequired,
  prevSlide: PropTypes.func.isRequired,
  nextSlide: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
}