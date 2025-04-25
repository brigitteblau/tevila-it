import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import '../styles/form.css';
import Popup from '../components/PopUp';

emailjs.init('ry0ptOJWBtnRMfPbF');

function calcularFin(dateStr) {
  const inicio = new Date(dateStr);
  const fin = new Date(inicio.getTime() + 60 * 60 * 1000); // suma 1 hora
  return fin.toISOString();
}

const Form = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    question: '',
    pickupVajilla: '',
    message: '',
    phone: '',
    date: '', 
      logistica: 'retiro'
  });
  const [minDate, setMinDate] = useState('');
  useEffect(() => {
    const hoy = new Date();
    hoy.setDate(hoy.getDate() + 3); // suma 3 días
  
    const iso = hoy.toISOString().slice(0, 16); // formato YYYY-MM-DDTHH:mm
    setMinDate(iso);
  }, []);
  

  const [popup, setPopup] = useState({
    show: false,
    message: '',
    type: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('Popup state changed:', popup);
  }, [popup]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // emailjs.send('service_f82b2ev', 'template_c46c3k9', formData)'
    emailjs.send('service_f82b2ev', 'template_c46c3k9', formData, 'ry0ptOJWBbnRMfPbF')

      .then(() => {
        console.log('Email sent successfully');
        goEvent();
        setPopup({
          show: true,
          message: `Información procesada! <br> Ya esta todo arrelglado <br> Si cambias de opinion avisanos!`,
          type: 'success'
        });
  
        setFormData({
          email: '',
          name: '',
          question: '',
          pickupVajilla: '',
          message: '',
          phone: '',
          contactPreference: 'email'
        });
      })
      .catch((error) => {
        console.error('Email send error:', error);
        
        setPopup({
          show: true,
          message: `Disculpa tuvimos un inconveniente al mandarnos sus detalles, por favor contactate via whatsapp así podemos arreglar! <br>Detalles: ${error.text}`,
          type: 'error'
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  async function goEvent() {
    const tipo = formData.logistica === 'lleva' ? 'Entrega del cliente' : 'Retiro por Mirrow';
  
    await fetch('https://script.google.com/macros/s/AKfycbypz73xvNudtpAw4JjyhPouN8fusa6Ee_aj9Ici_Lb9H2ntgF2JCM9aZEpLM8MhSKNY/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        titulo: `${tipo} – ${formData.name}`,
        descripcion: `Tel: ${formData.phone} - Email: ${formData.email} - Comentarios: ${formData.message}`,
        inicio: formData.date,
        fin: calcularFin(formData.date)
      })
    });
  }
  
  
  

  const closePopup = () => {
    console.log('Closing popup');
    setPopup(prev => ({ ...prev, show: false }));
  };

  return (
    <div className="form-com"> 
      <div className="form-container">
        <h2 className="form-title">Completa este formulario para ponernos en contacto</h2>
        
        <Popup 
          show={popup.show}
          message={popup.message} 
          onClose={closePopup}
        />
  
  <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="name">Nombre:</label>
        <input
          className="form-input"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={isLoading}
          placeholder="David Cohen"
        />
      </div>
  
      <div className="form-group">
        <label className="form-label" htmlFor="email">Email:</label>
        <input
          className="form-input"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isLoading}
          placeholder="ejemplo@gmail.com"
        />
      </div>
  
      <div className="form-group">
        <label className="form-label" htmlFor="phone">Teléfono:</label>
        <input
          className="form-input"
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          disabled={isLoading}
          placeholder="549XXXXXXXXXX"
        />
      </div>
  
      <div className="form-group">
  <label className="form-label">¿Cómo preferís entregarla?</label>
  <div className="button-group">
    <button
      type="button"
      className={`option-button ${formData.logistica === 'retiro' ? 'selected' : ''}`}
      onClick={() => setFormData({ ...formData, logistica: 'retiro' })}
      disabled={isLoading}
    >
      Que la pasemos a buscar
    </button>
    <button
      type="button"
      className={`option-button ${formData.logistica === 'lleva' ? 'selected' : ''}`}
      onClick={() => setFormData({ ...formData, logistica: 'lleva' })}
      disabled={isLoading}
    >
      Yo la llevo a Once o Palermo
    </button>
  </div>
</div>
<div className="form-group">
  <label className="form-label" htmlFor="date">¿Cuándo podés acercarla o cuando la pasamos a buscar</label>
  <input
    className="form-input"
    type="datetime-local"
    id="date"
    name="date"
    value={formData.date || ''}
    onChange={handleChange}
    required
    disabled={isLoading}
    min= {minDate}
  />
</div>
  
      <div className="form-group">
        <label className="form-label" htmlFor="message">Detalles:</label>
        <textarea
          className="form-textarea"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          disabled={isLoading}
          placeholder="Consulta, cantidad de vajilla, comentario, etc."
        />
      </div>

  

      <div className="submit-div">
        <button 
          className="submit-button" 
          type="submit" 
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="loader">
              <div className="spinner"></div>
              Enviando...
            </div>
          ) : (
            'Enviar'
          )}
        </button>
      </div>
    </form>
      </div>
    </div>
  );
};

export default Form;