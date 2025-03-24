import React from 'react';
import "../styles/pop.css";

const Popup = ({ message, onClose, show }) => {
  console.log('Popup render:', { message, show });
  
  return (
    <div 
      className={`popup ${show ? 'show' : ''}`} 
      onClick={onClose}
    >
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="close">
          <button className="close-button" onClick={onClose} aria-label="Cerrar">
            &times;
          </button>
        </div>
        <div className="popup-message" dangerouslySetInnerHTML={{ __html: message }} />
        <img src='/img/logos/logo.png' alt="Logo" />
      </div>
    </div>
  );
};

export default Popup;