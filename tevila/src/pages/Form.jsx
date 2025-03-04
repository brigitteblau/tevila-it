import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/form.css';
import Popup from '../components/PopUp';

emailjs.init('ry0ptOJWBbnRMfPbF');

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
        setPopup({
          show: true,
          message: `Muchas gracias por confiar en nosotros, pronto nos estaremos comunciando asi arreglamos lo mejor para usted!.`,
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
        setPopup({
          show: true,
          message: `Disculpa tuvimos un inconveniente al mandarnos sus detallles, por favor contactate via whatsapp asi podemos arreglar! br>Detalles: ${error.text}`,
          type: 'error'
        });
        console.error('Error detallado:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const closePopup = () => {
    setPopup({ ...popup, show: false });
  };

  return (
    <div className="form-container">
      {popup.show && (
        <Popup 
          message={popup.message} 
          onClose={closePopup}
        />
      )}
      
      <form onSubmit={handleSubmit}>
      {/* form-group--required */}
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
          />
        </div>
        {/* form-group--required */}
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
          />
        </div>
        {/* form-group--required */}
        <div className="form-group">
  <label className="form-label">¿Tenemos que pasar a buscar la vajilla?</label>
  <div className="button-group">
    <button
      type="button"
      className={`option-button ${formData.pickupVajilla === 'sí' ? 'selected' : ''}`}
      onClick={() => setFormData({ ...formData, pickupVajilla: 'sí' })}
      disabled={isLoading}
    >
      Sí
    </button>
    <button
      type="button"
      className={`option-button ${formData.pickupVajilla === 'no' ? 'selected' : ''}`}
      onClick={() => setFormData({ ...formData, pickupVajilla: 'no' })}
      disabled={isLoading}
    >
      No
    </button>
  </div>
</div>

        <div className="form-group">
          <label className="form-label form-group--required" htmlFor="phone">Teléfono:</label>
          <input
            className="form-input"
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>
        <div className="form-group">
  <label className="form-label form-group--required">¿Cómo prefieres ser contactado?</label>
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
    >
      Teléfono
    </button>
  </div>
</div>

        <div className="form-group">
          <label className="form-label" htmlFor="message">Algo que nos queiras decir:</label>
          <textarea
            className="form-textarea"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            disabled={isLoading}
          />
        </div>

      

  
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
  
      </form>
    </div>
  );
};

export default Form;

