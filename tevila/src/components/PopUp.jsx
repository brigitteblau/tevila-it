import React from 'react';
import "../styles/pop.css";

const Popup = ({ message, onClose, show }) => {
  console.log('Popup render:', { message, show });
  
  const handleClose = (e) => {
    // This allows closing the popup from anywhere, including the overlay
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`popup ${show ? 'show' : ''}`}
      onClick={handleClose}
    >
      <div 
        className="popup-content" 
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the content
      >
        <div className="close">
          <button 
            className="close-button" 
            onClick={onClose} 
            aria-label="Cerrar"
          >
            &times;
          </button>
        </div>
        <div 
          className="popup-message" 
          dangerouslySetInnerHTML={{ __html: message }} 
        />
        <img src='/img/logos/logo.png' alt="Logo" />
      </div>
    </div>
  );
};

export default Popup;