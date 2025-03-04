import React from 'react';
import "../styles/loader.css";

const Loader = () => {  // Corregí la sintaxis de la arrow function
  return (
    <>
      <div className="newtons-cradle"> 
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
        <div className="newtons-cradle__dot"></div>
      </div>
    </>
  );
};

export default Loader;
