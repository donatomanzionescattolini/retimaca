import { useState } from "react";
import { MDBInput, MDBTextArea, MDBBtn, MDBIcon, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

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

  return (
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
  );
}