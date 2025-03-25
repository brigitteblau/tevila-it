import React from 'react';
import "../styles/whats.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const Whats = () => {
    const handleWhatsApp = () => {
        const phoneNumber = '5491165958082'; 
        const message = 'Hola, quiero más información.';
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
      };
    return (
       <div className="div-what">
           <button onClick={handleWhatsApp} className="whatsapp-button">
             <FontAwesomeIcon icon={faWhatsapp} className='whats'/>
           </button>
           </div>
    );
};

export default Whats;