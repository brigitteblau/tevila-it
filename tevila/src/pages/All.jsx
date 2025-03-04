import React from 'react';
import Form from './Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Importa el ícono de WhatsApp
import '../styles/all.css';

const All = () => {
  const handleWhatsApp = () => {
    const phoneNumber = '549XXXXXXXXXX'; // Reemplaza con el número real
    const message = 'Hola, quiero más información.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className='div'>
      <h1 className='h1'>Completa este form o escribinos al WhatsApp!</h1>
      <div className='div-all'>
      <Form />
      <button onClick={handleWhatsApp} className="whatsapp-button">
        <FontAwesomeIcon icon={faWhatsapp} /> Mandanos un mensaje por WhatsApp
      </button>
      </div>
    
      <span className='son'>   Si podes hace llegas este hermoso proyecto a mas gente</span>
    </div>
  );
};

export default All;


