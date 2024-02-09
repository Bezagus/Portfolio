import React from 'react';
import Backend from './Backend/Backend';
import Extra from './Extra/Extra';
import Frontend from './Fontend/Frontend';
import './Skills.css';

export default function Skills() {
  const URLactual = window.location;

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">
        {URLactual.pathname === '/en' ? `Skills` : `Habilidades`}
      </h2>
      <span className="section__subtitle nocopy">
        {URLactual.pathname === '/en'
          ? `Technologies / Tools`
          : `Tecnologias / Herramientas`}
      </span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <Extra />
      </div>
    </section>
  );
}
