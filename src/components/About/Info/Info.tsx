import React from 'react';

export default function Info() {
  const URLactual = window.location;

  return (
    <div className="about__info grid">
      <div className="about__box">
        <div>
          <i className="bx bx-briefcase-alt about__icon"></i>
          <h3 className="about__title">
            {URLactual.pathname === '/en'
              ? `Work Experience`
              : `Experiencia Laboral`}
          </h3>
        </div>
        <span className="about__subtitle nocopy">
          {URLactual.pathname === '/en' ? `2+ Years` : `2+ Años`}
        </span>
      </div>

      <div className="about__box">
        <div>
          <i className="bx bx-bar-chart-alt-2 about__icon"></i>
          <h3 className="about__title">
            {URLactual.pathname === '/en'
              ? `Completed Projects`
              : `Proyectos Completados`}
          </h3>
        </div>
        <span className="about__subtitle nocopy">
          {URLactual.pathname === '/en' ? `8+ Projects` : `8+ Proyectos`}
        </span>
      </div>

      <div className="about__box">
        <div>
          <i className="bx bx-book about__icon"></i>
          <h3 className="about__title">
            {URLactual.pathname === '/en'
              ? `Continuous Learning`
              : `Formación Continua`}
          </h3>
        </div>
        <span className="about__subtitle nocopy">UBA + Platzi + Henry</span>
      </div>
    </div>
  );
}
