import React from 'react';
import "../styles/pop.css";

const Popup = ({ message, onClose }) => {
  return (
    <div className="popup" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}> 
        <div className="close"> 
          <button className="close-button" onClick={onClose} aria-label="Cerrar">
            &times;
          </button>
        </div> 
        <div className="popup-message" dangerouslySetInnerHTML={{ __html: message }} />
      </div>
    </div>
  );
};

export default Popup;
