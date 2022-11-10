import React from 'react'
import { useState } from 'react'
import './Services.css'

export default function Services() {

    const [modal, setModal] = useState(0)

    function handleClick(index){
        setModal(index)
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Estudios</h2>
        <span className="section__subtitle">Mis Estudios</span>
        
        <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-java-script services__icon"></i>
                        <h3 className="services__title">Developer <br/> Fullstack</h3>
                    </div>

                    <span className="services__button" onClick={()=>handleClick(1)}>
                        Ver Mas 
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={modal === 1? "services__modal modal__active":"services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={()=>handleClick(0)}></i>

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

                    <div className={modal === 3? "services__modal modal__active":"services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={()=>handleClick(0)}></i>

                            <h3 className="services__modal-title">Tecnico en Energias Renovables</h3>
                            <p className="services__modal-description">Recibido en la E.P.E.T N° 21 San Martin de los Andes, recibido en 2021.</p>

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

                    <div className={modal === 2? "services__modal modal__active":"services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={()=>handleClick(0)}></i>

                            <h3 className="services__modal-title">Cursos</h3>
                            <p className="services__modal-description">Lorem ipsum dolor, sit amet 
                            consectetur adipisicing elit. Nobis suscipit cumque, vitae explicabo 
                            distinctio ullam ipsam ex quam omnis quia.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Diseño Grafico en Photoshop (Edutin)</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Diseño Grafico en Illustrator (Edutin)</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Desarrollo Web HTML (Google Activate)</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Desarrollo Web CSS (Google Activate)</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Desarrollo de APP'S Mobiles (Google Activate)</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                

            </div>
    </section>
  )
}