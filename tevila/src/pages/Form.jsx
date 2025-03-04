import React, { useState } from 'react';
import emailjs from 'emailjs-com';

emailjs.init('your_user_id');

const Form = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    question: '',
    pickupVajilla: '',
    message: '',
    phone: '',
    contactPreference: 'email'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí agregas tu Template ID de EmailJS
    emailjs.send('service_f82b2ev', 'template_sf05gfi', formData)
      .then((response) => {
        console.log('Email enviado exitosamente', response);
      })
      .catch((error) => {
        console.log('Error al enviar el correo', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Pregunta:</label>
        <input
          type="text"
          name="question"
          value={formData.question}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>¿Pasar a buscar la vajilla?</label>
        <select
          name="pickupVajilla"
          value={formData.pickupVajilla}
          onChange={handleChange}
          required
        >
          <option value="sí">Sí</option>
          <option value="no">No</option>
        </select>
      </div>
      <div>
        <label>Mensaje (opcional):</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Teléfono:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>¿Cómo prefieres ser contactado?</label>
        <select
          name="contactPreference"
          value={formData.contactPreference}
          onChange={handleChange}
        >
          <option value="email">Email</option>
          <option value="phone">Teléfono</option>
        </select>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;


// <button onClick={handleWhatsApp} className="whatsapp-button">Mandanos un mensaje por WhatsApp</button>
//  const handleWhatsApp = () => {
//     const message = `Hola, quiero más información.`;
//     const url = `https://wa.me/549XXXXXXXXXX?text=${encodeURIComponent(message)}`;
//     window.open(url, "_blank");
//   };
