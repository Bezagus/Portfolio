import React from 'react';
import { useState } from 'react';

export default function Alert() {
  const [modal, setModal] = useState(0);

  function handleClick(index) {
    setModal(index);
  }

  setTimeout(function () {
    handleClick(0);
  }, 2000);
  return (
    <div
      className={
        modal === 1 ? 'services__modal modal__active' : 'services__modal'
      }
      onClick={() => handleClick(0)}
    >
      <div className="services__modal-content">
        <i className="uil uil-times services__modal-close"></i>

        <h3 className="services__modal-title">Portfolio En Proceso</h3>
        <p className="services__modal-description">
          Este Portfolio actualmente se encuentra en Procesos de Elaboracion
        </p>
      </div>
    </div>
  );
}
