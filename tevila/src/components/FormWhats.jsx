import React, { useState } from 'react';
import "../styles/whats.css";

const FormularioTevila = ({ cerrarFormulario }) => {
  const [step, setStep] = useState(0);
  const [respuesta1, setRespuesta1] = useState('');
  const [respuesta2, setRespuesta2] = useState('');
  const [respuesta3, setRespuesta3] = useState('');

  const phoneNumber = '5491165958082';

  const getMensaje = () => {
    if (respuesta1 && respuesta2 && respuesta3) {
      return `Hola, ${respuesta1.toLowerCase()}. Mi vajilla es ${respuesta2.toLowerCase()} y prefiero ${respuesta3.toLowerCase()}. ¿Coordinamos?`;
    }
    return '';
  };

  const handleEnviar = () => {
    const mensaje = getMensaje();
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
    cerrarFormulario();
    setStep(0);
    setRespuesta1('');
    setRespuesta2('');
    setRespuesta3('');
  };

  return (
    <div className="formulario-overlay" onClick={cerrarFormulario}>
      <div className="formulario-tevila" onClick={(e) => e.stopPropagation()}>
        
        {step === 0 && (
          <>
            <h2>¿Cómo podemos ayudarte?</h2>
            <div className="dot-buttons">
              <button onClick={() => { setRespuesta1('Ya tengo vajilla kosher y quiero más'); setStep(1); }}>
                📦 Ya tengo vajilla kosher y quiero más
              </button>
              <button onClick={() => { setRespuesta1('Quiero kasherizar mi vajilla'); setStep(1); }}>
                ✡️ Quiero kasherizar mi vajilla
              </button>
              <button onClick={() => { setRespuesta1('Quiero ser parte del equipo'); setStep(1); }}>
                🤝 Quiero ser parte del equipo
              </button>
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <p>Perfecto. ¿Qué tipo de vajilla es?</p>
            <div className="dot-buttons">
              <button onClick={() => { setRespuesta2('Grandes (ollas, platos, más de 4 cajas)'); setStep(2); }}>
                Grandes
              </button>
              <button onClick={() => { setRespuesta2('Poca (un par de platos y cubiertos)'); setStep(2); }}>
                Poca
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <p>¿Dónde preferís hacer la tevila?</p>
            <div className="dot-buttons">
              <button onClick={() => { setRespuesta3('Once'); setStep(3); }}>
                Once
              </button>
              <button onClick={() => { setRespuesta3('Palermo'); setStep(3); }}>
                Palermo
              </button>
              <button onClick={() => { setRespuesta3('Otro lugar'); setStep(3); }}>
                Otro
              </button>
              <button onClick={() => { setRespuesta3('Que la pasen a buscar'); setStep(3); }}>
                Que la pasen a buscar
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <p>Mensaje generado:</p>
            <p><em>{getMensaje()}</em></p>
            <button className="enviar-wts" onClick={handleEnviar}>Enviar por WhatsApp</button>
          </>
        )}
      </div>
    </div>
  );
};

export default FormularioTevila;
