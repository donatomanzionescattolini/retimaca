import { useState } from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit'
import PropTypes from 'prop-types'
import { translations } from '../data/translations'

export default function NavigationBar({ currentSection, lang, toggleLanguage }) {
  const t = translations[lang].nav
  const [openNav, setOpenNav] = useState(false)

  return (
    <MDBNavbar
      expand="lg"
      light
      bgColor="dark"
      style={{
        color: "rgb(244, 228, 193)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <MDBContainer fluid>
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
        <MDBBtn
          color="warning"
          size="sm"
          onClick={toggleLanguage}
          className="d-lg-none me-2"
          style={{ borderRadius: '20px' }}
        >
          <MDBIcon fas icon="language" className="me-1" />
          {lang === 'es' ? 'EN' : 'ES'}
        </MDBBtn>
        <MDBNavbarToggler
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpenNav(!openNav)}
          color="light"
        >
          <MDBIcon icon="bars" className="light-hamburger" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNav}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink
                href="#sobre-nosotros"
                className={`nav-link-custom mx-2 ${
                  currentSection === "sobre-nosotros" ? "active" : ""
                }`}
              >
                {t.about}
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                href="#productos"
                className="nav-link-custom mx-2"
              >
                {t.products}
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                href="#delivery"
                className="nav-link-custom mx-2"
              >
                {t.delivery}
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#guias" className="nav-link-custom mx-2">
                {t.guides}
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                href="#contacto"
                className="nav-link-custom mx-2"
              >
                {t.contact}
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="d-none d-lg-block">
              <MDBBtn
                color="warning"
                size="sm"
                onClick={toggleLanguage}
                className="ms-2"
                style={{ borderRadius: '20px' }}
              >
                <MDBIcon fas icon="language" className="me-1" />
                {lang === 'es' ? 'EN' : 'ES'}
              </MDBBtn>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  )
}

NavigationBar.propTypes = {
  currentSection: PropTypes.string,
  lang: PropTypes.string.isRequired,
  toggleLanguage: PropTypes.func.isRequired,
}
