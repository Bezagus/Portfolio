import React from 'react';
import { useState } from 'react';
import './Studies.css';

export default function Studies() {
  const [modal, setModal] = useState(0);

  function handleClick(index) {
    setModal(index);
  }

  var URLactual = window.location;

  return (
    <section className="services section" id="Studies">
      <h2 className="section__title">
        {URLactual.pathname === '/en' ? `Studies` : `Estudios`}
      </h2>
      <span className="section__subtitle nocopy">
        {URLactual.pathname === '/en' ? `My Estudies` : `Mis Estudios`}
      </span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-java-script services__icon"></i>
            <h3 className="services__title">
              Developer <br /> Fullstack
            </h3>
          </div>

          <span className="services__button" onClick={() => handleClick(1)}>
            {URLactual.pathname === '/en' ? `See More` : `Ver Mas`}
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

              <h3 className="services__modal-title">Developer Fullstack</h3>
              <p className="services__modal-description">
                {URLactual.pathname === '/en'
                  ? `Received training at Soy Henry, a bootcamp with more than 800 hours of theoretical and practical instruction`
                  : `Recibido en Soy Henry, un bootcamp de mas de 800horas  
                                Teoricas/Practicas.`}
                <br />{' '}
                {URLactual.pathname === '/en'
                  ? `Over the course of five intense months, I developed a Recipe application and a group project for a real estate company`
                  : `5 meses intensos donde desarrolle una aplicacion de Recetas y un proyecto grupal para una inmobiliaria`}
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">React JS.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Redux.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">HTML.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">CSS.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Node.js.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">SQL (Postgres).</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-wind-sun services__icon"></i>
            <h3 className="services__title">
              {URLactual.pathname === '/en'
                ? `Data Science and`
                : `Data Science e`}
              <br />{' '}
              {URLactual.pathname === '/en'
                ? `Artficial Intelligence`
                : `Inteligencia Artificial`}
            </h3>
          </div>

          <span className="services__button" onClick={() => handleClick(3)}>
            {URLactual.pathname === '/en' ? `See More` : `Ver Mas`}
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
                  ? `Data Science and Artificial Intelligence`
                  : `Data Science e Inteligencia Artificial`}
              </h3>
              <p className="services__modal-description">
                {URLactual.pathname === '/en'
                  ? `hola `
                  : `Academia de Inteligencia Artificial de Platzi, en la cual se ve temas muy completos como Machine Learning, Deep Learning, Algebra, Matematica, Estadistica, manejo de datos y mucho mas.`}
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Python</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Machine Learning</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Deep Learning</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Git | Github</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">SQL</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Linux</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-wind-sun services__icon"></i>
            <h3 className="services__title">
              {URLactual.pathname === '/en' ? `Technician` : `Tecnico`}
              <br />{' '}
              {URLactual.pathname === '/en'
                ? `Renewable Energy`
                : `Energias Renovables`}
            </h3>
          </div>

          <span className="services__button" onClick={() => handleClick(4)}>
            {URLactual.pathname === '/en' ? `See More` : `Ver Mas`}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              modal === 4 ? 'services__modal modal__active' : 'services__modal'
            }
            onClick={() => handleClick(0)}
          >
            <div className="services__modal-content">
              <i className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">
                {URLactual.pathname === '/en'
                  ? `Renewable Energy Technician`
                  : `Tecnico en Energias Renovables`}
              </h3>
              <p className="services__modal-description">
                {URLactual.pathname === '/en'
                  ? `Received a degree in Renewable Energy Technician in 2022 from E.P.E.T N° 21 San Martin de los Andes.`
                  : `Recibido en 2022 en la E.P.E.T N° 21 San Martin de los Andes, com tecnico en energias renovables.`}
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {URLactual.pathname === '/en'
                      ? `Solar Energy.`
                      : `Energia Solar.`}
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {URLactual.pathname === '/en'
                      ? `Wind energy.`
                      : `Energia Eolica.`}
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {URLactual.pathname === '/en'
                      ? `Hydraulic Energy.`
                      : `Energia Hidrulica.`}
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {URLactual.pathname === '/en'
                      ? `Sustainability.`
                      : `Sustentabilidad.`}
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {URLactual.pathname === '/en'
                      ? `Budgets.`
                      : `Presupuestos.`}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-notebooks services__icon"></i>
            <h3 className="services__title">
              {URLactual.pathname === '/en' ? `Seminars` : `Seminarios`} <br />{' '}
              {URLactual.pathname === '/en' ? `Courses` : `Cursos`}
            </h3>
          </div>

          <span className="services__button" onClick={() => handleClick(2)}>
            {URLactual.pathname === '/en' ? `See More` : `Ver Mas`}
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

              <h3 className="services__modal-title">
                {URLactual.pathname === '/en' ? `Courses` : `Cursos`}
              </h3>
              <p className="services__modal-description">
                {URLactual.pathname === '/en'
                  ? `These are some of my most notable completed courses`
                  : `Estos son algunos de mis cursos realizados que mas destacan.`}
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {URLactual.pathname === '/en'
                      ? `Graphic Design in Photoshop(Edutin).`
                      : `Diseño Grafico en Photoshop (Edutin).`}
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {URLactual.pathname === '/en'
                      ? `Graphic Design in Illustrator(Edutin).`
                      : `Diseño Grafico en Illustrator (Edutin).`}
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {URLactual.pathname === '/en'
                      ? `Web Development with HTML(Google Activate).`
                      : `Desarrollo Web HTML (Google Activate).`}
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {URLactual.pathname === '/en'
                      ? `Web Development with CSS(Google Activate).`
                      : `Desarrollo Web CSS (Google Activate).`}
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {URLactual.pathname === '/en'
                      ? `Mobile App Development (Google Activate)`
                      : `Desarrollo de APP'S Mobiles (Google Activate).`}
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {URLactual.pathname === '/en'
                      ? `Personal Productivity (Google Activate)`
                      : `Productividad Personal (Google Ativate).`}
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    {URLactual.pathname === '/en'
                      ? `Computer Equipment Repair Technician.`
                      : `Tenico en Reparacion de Equipos Informaticos.`}
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
