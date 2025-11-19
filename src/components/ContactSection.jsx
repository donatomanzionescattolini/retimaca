import { useState } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBTextArea, MDBBtn, MDBIcon } from 'mdb-react-ui-kit'
import { CONTACT_INFO } from '../data/constants'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    message: "",
  })
  const [status, setStatus] = useState("")

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("Enviando...")

    try {
      const formDataWithRecipients = {
        ...formData,
        _to: "info@retimaca.com,support@retimaca.com",
      }

      const response = await fetch("https://formspree.io/f/mwppvrrg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDataWithRecipients),
      })

      if (response.ok) {
        setStatus("Mensaje enviado con éxito. ¡Gracias por contactarnos!")
        const whatsappMsg = encodeURIComponent(
          `Nuevo mensaje de ${formData.name} (${formData.email}): ${formData.message}`
        )
        window.open(
          `${CONTACT_INFO.whatsapp}?text=${whatsappMsg}`,
          "_blank"
        )
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          zipCode: "",
          message: "",
        })
      } else {
        setStatus("Hubo un error al enviar el mensaje. Intenta nuevamente.")
      }
    } catch {
      setStatus("No se pudo enviar el mensaje. Verifica tu conexión.")
    }
  }

  return (
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
                  <MDBRow>
                    <MDBCol md="6">
                      <MDBInput
                        type="tel"
                        label="Número de teléfono"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="mb-4 contact-input"
                        placeholder="Ej: (786) 123-4567"
                      />
                    </MDBCol>
                    <MDBCol md="6">
                      <MDBInput
                        label="Dirección"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="mb-4 contact-input"
                        placeholder="Ej: 123 SW 8th St"
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol md="6">
                      <MDBInput
                        label="Ciudad"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="mb-4 contact-input"
                        placeholder="Ej: Miami"
                      />
                    </MDBCol>
                    <MDBCol md="6">
                      <MDBInput
                        label="Código postal"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        required
                        className="mb-4 contact-input"
                        placeholder="Ej: 33173"
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
                    href={CONTACT_INFO.whatsapp}
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
                    href={CONTACT_INFO.instagram}
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
  )
}
