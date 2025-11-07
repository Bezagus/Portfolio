import React from 'react';
import { useState } from 'react';
import './Studies.css';

export default function Studies() {
  const [modal, setModal] = useState(0);

  function handleClick(index: number) {
    setModal(index);
  }

  const URLactual = window.location;

  return (
    <section className="services section" id="Studies">
      <h2 className="section__title">
        {URLactual.pathname === '/en' ? `Education` : `Formación`}
      </h2>
      <span className="section__subtitle nocopy">
        {URLactual.pathname === '/en'
          ? `My Academic & Professional Training`
          : `Mi Formación Académica y Profesional`}
      </span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-university services__icon"></i>
            <h3 className="services__title">
              {URLactual.pathname === '/en'
                ? `Data Science`
                : `Licenciatura en`}
              <br />{' '}
              {URLactual.pathname === '/en'
                ? `(UBA)`
                : `Ciencia de Datos (UBA)`}
            </h3>
          </div>

          <span className="services__button" onClick={() => handleClick(1)}>
            {URLactual.pathname === '/en' ? `See More` : `Ver Más`}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              modal === 1 ? 'services__modal modal__active' : 'services__modal'
            }
            onClick={() => handleClick(0)}
          >
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">
                {URLactual.pathname === '/en'
                  ? `Data Science Degree (In Progress)`
                  : `Lic. en Ciencia de Datos (En Curso)`}
              </h3>
              <p className="services__modal-description">
                {URLactual.pathname === '/en'
                  ? `Ongoing university studies, combining a solid foundation in software engineering with advanced data analysis, statistics, and AI.`
                  : `Formación de grado en curso, combinando una base sólida de ingeniería de software con análisis avanzado de datos, estadística e IA.`}
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Python</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {URLactual.pathname === '/en'
                      ? `Machine Learning`
                      : `Machine Learning`}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {URLactual.pathname === '/en'
                      ? `Advanced Mathematics & Statistics`
                      : `Matemática y Estadística Avanzada`}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {URLactual.pathname === '/en'
                      ? `Data Analysis (Pandas, NumPy)`
                      : `Análisis de Datos (Pandas, NumPy)`}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-brackets-curly services__icon"></i>
            <h3 className="services__title">
              Full Stack
              <br />
              Developer (Henry)
            </h3>
          </div>

          <span className="services__button" onClick={() => handleClick(2)}>
            {URLactual.pathname === '/en' ? `See More` : `Ver Más`}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              modal === 2 ? 'services__modal modal__active' : 'services__modal'
            }
            onClick={() => handleClick(0)}
          >
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Full Stack Developer</h3>
              <p className="services__modal-description">
                {URLactual.pathname === '/en'
                  ? `+800-hour intensive bootcamp focused on the PERN stack (PostgreSQL, Express, React, Node.js).`
                  : `Bootcamp intensivo de +800 horas con enfoque en el stack PERN (PostgreSQL, Express, React, Node.js).`}
                <br />
                {URLactual.pathname === '/en'
                  ? `Developed two key projects: an individual app and a final group project (Real Estate) using Scrum.`
                  : `Desarrollo de dos proyectos clave: una aplicación individual y un proyecto final grupal (Inmobiliaria) utilizando Scrum.`}
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">React.js & Redux</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Node.js & Express</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">PostgreSQL & Sequelize</p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {URLactual.pathname === '/en'
                      ? `Agile Methodologies (Scrum)`
                      : `Metodologías Ágiles (Scrum)`}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-atom services__icon"></i>
            <h3 className="services__title">
              {URLactual.pathname === '/en'
                ? `Software Development`
                : `Desarrollo de Software`}
              <br />
              (Platzi)
            </h3>
          </div>

          <span className="services__button" onClick={() => handleClick(3)}>
            {URLactual.pathname === '/en' ? `See More` : `Ver Más`}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              modal === 3 ? 'services__modal modal__active' : 'services__modal'
            }
            onClick={() => handleClick(0)}
          >
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">
                {URLactual.pathname === '/en'
                  ? `Software Development Career`
                  : `Carrera de Desarrollo de Software`}
              </h3>
              <p className="services__modal-description">
                {URLactual.pathname === '/en'
                  ? `Comprehensive training path covering the full stack, from frontend architecture to backend and databases.`
                  : `Formación integral que cubre el stack completo, desde arquitectura frontend hasta backend y bases de datos.`}
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {URLactual.pathname === '/en'
                      ? `Software Architecture`
                      : `Arquitectura de Software`}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {URLactual.pathname === '/en'
                      ? `Databases (SQL & NoSQL - MongoDB)`
                      : `Bases de Datos (SQL & NoSQL - MongoDB)`}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {URLactual.pathname === '/en'
                      ? `Data Science (Python)`
                      : `Ciencia de Datos (Python)`}
                  </p>
                </li>
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {URLactual.pathname === '/en'
                      ? `Advanced Frontend (React, Vite)`
                      : `Frontend Avanzado (React, Vite)`}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
