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
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Lorem. <br/> Lorem.</h3>
                    </div>

                    <span className="services__button" onClick={()=>handleClick(1)}>
                        Ver Mas 
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={modal === 1? "services__modal modal__active":"services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={()=>handleClick(0)}></i>

                            <h3 className="services__modal-title">Lorem. 1</h3>
                            <p className="services__modal-description">Lorem ipsum dolor, sit amet 
                            consectetur adipisicing elit. Nobis suscipit cumque, vitae explicabo 
                            distinctio ullam ipsam ex quam omnis quia.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Lorem. <br/> Lorem.</h3>
                    </div>

                    <span className="services__button" onClick={()=>handleClick(2)}>
                        Ver Mas 
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={modal === 2? "services__modal modal__active":"services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={()=>handleClick(0)}></i>

                            <h3 className="services__modal-title">Lorem. 2</h3>
                            <p className="services__modal-description">Lorem ipsum dolor, sit amet 
                            consectetur adipisicing elit. Nobis suscipit cumque, vitae explicabo 
                            distinctio ullam ipsam ex quam omnis quia.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"></i>
                        <h3 className="services__title">Lorem. <br/> Lorem.</h3>
                    </div>

                    <span className="services__button" onClick={()=>handleClick(3)}>
                        Ver Mas 
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={modal === 3? "services__modal modal__active":"services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={()=>handleClick(0)}></i>

                            <h3 className="services__modal-title">Lorem. 3</h3>
                            <p className="services__modal-description">Lorem ipsum dolor, sit amet 
                            consectetur adipisicing elit. Nobis suscipit cumque, vitae explicabo 
                            distinctio ullam ipsam ex quam omnis quia.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Lorem ipsum dolor sit amet.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}