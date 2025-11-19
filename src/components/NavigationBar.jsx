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
} from 'mdb-react-ui-kit'
import PropTypes from 'prop-types'

export default function NavigationBar({ currentSection }) {
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
  )
}

NavigationBar.propTypes = {
  currentSection: PropTypes.string,
}
