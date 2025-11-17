import React, { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const handle = (e) => setState({ ...state, [e.target.name]: e.target.value });

  function validate() {
    return (
      state.name.trim() &&
      /\S+@\S+\.\S+/.test(state.email) &&
      state.message.trim()
    );
  }

  function submit(e) {
    e.preventDefault();
    if (!validate())
      return alert("Por favor completa nombre, email válido y mensaje.");
    // Placeholder: Replace with real API endpoint
    console.log("Contacto enviado", state);
    setSent(true);
  }

  if (sent)
    return (
      <div className="notice">
        Gracias — su mensaje fue recibido. Nos pondremos en contacto pronto.
      </div>
    );

  return (
    <form onSubmit={submit} className="contact-form">
      <label>
        Nombre
        <input name="name" value={state.name} onChange={handle} />
      </label>
      <label>
        Email
        <input name="email" value={state.email} onChange={handle} />
      </label>
      <label>
        Mensaje
        <textarea
          name="message"
          value={state.message}
          onChange={handle}
          rows={5}
        />
      </label>
      <div className="form-actions">
        <button className="btn" type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
}
