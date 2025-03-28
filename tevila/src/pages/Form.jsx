import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import '../styles/form.css';
import Popup from '../components/PopUp';

emailjs.init('ry0ptOJWBtnRMfPbF');

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

    emailjs.send('service_f82b2ev', 'template_c46c3k9', formData)
      .then(() => {
        console.log('Email sent successfully');
        
        setPopup({
          show: true,
          message: `Información procesada! <br> Pronto nos estaremos comunicando así arreglamos lo mejor para usted!`,
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
        <label className="form-label">¿Cómo prefieres ser contactado?</label>
        <div className="button-group">
          <button
            type="button"
            className={`option-button ${formData.contactPreference === 'email' ? 'selected' : ''}`}
            onClick={() => setFormData({ ...formData, contactPreference: 'email' })}
            disabled={isLoading}
          >
            Email
          </button>
          <button
            type="button"
            className={`option-button ${formData.contactPreference === 'phone' ? 'selected' : ''}`}
            onClick={() => setFormData({ ...formData, contactPreference: 'phone' })}
            disabled={isLoading}
          >WhatsApp
          </button>
        </div>
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