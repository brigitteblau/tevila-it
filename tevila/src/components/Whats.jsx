import React, { useState } from 'react';
import "../styles/whats.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import FormularioTevila from './FormWhats'; // Asegurate de que esté en el mismo folder

const Whats = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const toggleFormulario = () => {
    setMostrarFormulario(prev => !prev);
  };

  return (
    <div className="div-what">
      <button onClick={toggleFormulario} className="whatsapp-button">
        <FontAwesomeIcon icon={faWhatsapp} className='whats' />
      </button>
      {mostrarFormulario && <FormularioTevila cerrarFormulario={() => setMostrarFormulario(false)} />}
    </div>
  );
};

export default Whats;
