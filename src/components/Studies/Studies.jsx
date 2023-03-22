import React from 'react'
import { useState } from 'react'
import './Studies.css'

export default function Studies() {

    const [modal, setModal] = useState(0)

    function handleClick(index){
        setModal(index)
    }
  return (
    <section className="services section" id="Studies">
        <h2 className="section__title">Estudios</h2>
        <span className="section__subtitle nocopy">Mis Estudios</span>

        
        
        
        <div className="services__container container grid">

        <div className="services__content">
                    <div>
                        <i class='bx bxs-school services__icon'></i>
                        <h3 className="services__title">Analista de <br/> Sistemas</h3>
                    </div>

                    <span className="services__button" onClick={()=>handleClick(4)}>
                        Ver Mas 
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={modal === 4? "services__modal modal__active":"services__modal"} onClick={()=>handleClick(0)}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Analista de Sistemas</h3>
                            <p className="services__modal-description">
                                Actualmente me encuentro cursando la carrera de Analista de Sistemas en la Universidad de Da Vinci, esta carrera
                                abarca el desarollo de software, Desarollo Web, Aplicaciones Moviles, Gestion de Proyectos, Administracion Empresarial,
                                y Mucho mas.
                            </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Java.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">C++.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">C#.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">JavaScript.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Android.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Linux.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-java-script services__icon"></i>
                        <h3 className="services__title">Developer <br/> Fullstack</h3>
                    </div>

                    <span className="services__button" onClick={()=>handleClick(1)}>
                        Ver Mas 
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={modal === 1? "services__modal modal__active":"services__modal"} onClick={()=>handleClick(0)}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Developer Fullstack</h3>
                            <p className="services__modal-description">Recibido en Soy Henry, un bootcamp de mas de 800horas  
                            Teoricas/Practicas.<br/> 5 meses intensos donde desarrolle una aplicacion de Recetas y un proyecto grupal para una inmobiliaria</p>

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
                        <h3 className="services__title">Tecnico<br/> Energias Renovables</h3>
                    </div>

                    <span className="services__button" onClick={()=>handleClick(3)}>
                        Ver Mas 
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={modal === 3? "services__modal modal__active":"services__modal"} onClick={()=>handleClick(0)}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" ></i>

                            <h3 className="services__modal-title">Tecnico en Energias Renovables</h3>
                            <p className="services__modal-description">Recibido en 2022 en la E.P.E.T N° 21 San Martin de los Andes, com tecnico en energias renovables.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Energia Solar.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Energia Eolica.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Energia Hidrulica.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Sustentabilidad.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Presupuestos.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-notebooks services__icon"></i>
                        <h3 className="services__title">Seminarios <br/> Cursos</h3>
                    </div>

                    <span className="services__button" onClick={()=>handleClick(2)}>
                        Ver Mas 
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={modal === 2? "services__modal modal__active":"services__modal"} onClick={()=>handleClick(0)}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" ></i>

                            <h3 className="services__modal-title">Cursos</h3>
                            <p className="services__modal-description">Estos son algunos de mis cursos realizados que mas destacan.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Diseño Grafico en Photoshop (Edutin).</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Diseño Grafico en Illustrator (Edutin).</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Desarrollo Web HTML (Google Activate).</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Desarrollo Web CSS (Google Activate).</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Desarrollo de APP'S Mobiles (Google Activate).</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Productividad Personal (Google Ativate).</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Tenico en Reparacion de Equipos Informaticos.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                

            </div>
    </section>
  )
}