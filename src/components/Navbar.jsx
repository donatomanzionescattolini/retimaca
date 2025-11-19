import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarLink } from "mdb-react-ui-kit";

export default function Navbar() {
  return (
    <MDBNavbar 
      expand="lg" 
      className="navbar-custom fixed-top shadow-lg"
      style={{
        background: "linear-gradient(135deg, #2c1810 0%, #4a2c0a 100%)",
        backdropFilter: "blur(10px)"
      }}
    >
      <MDBNavbarBrand href="#" className="fw-bold fs-3 d-flex align-items-center" style={{ color: "#f4e4c1" }}>
        <img src="/logo.png" alt="Logo" className="me-2 img-fluid" style={{ width: "40px", height: "40px" }} />
        Firewood Retimaca
      </MDBNavbarBrand>
      <MDBNavbarNav className="ms-auto">
        <MDBNavbarLink href="#sobre-nosotros" className="nav-link-custom mx-2">Sobre Nosotros</MDBNavbarLink>
        <MDBNavbarLink href="#productos" className="nav-link-custom mx-2">Productos</MDBNavbarLink>
        <MDBNavbarLink href="#delivery" className="nav-link-custom mx-2">Delivery</MDBNavbarLink>
        <MDBNavbarLink href="#contacto" className="nav-link-custom mx-2">Contacto</MDBNavbarLink>
      </MDBNavbarNav>
    </MDBNavbar>
  );
}