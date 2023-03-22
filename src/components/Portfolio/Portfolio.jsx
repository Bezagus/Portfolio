import React from "react";
import { useState } from 'react'
import img1 from '../../assets/cards.jpg'
import img2 from '../../assets/landingpage.jpg'
import img3 from '../../assets/portfolio.jpg'
import img4 from '../../assets/P-Proyectos.jpg'
import './Portfolio.css'

export default function Portfolio(){

    const [modal, setModal] = useState(0)

    function handleClick(index){
        setModal(index)
    }

    return(
        <div id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle nocopy">Mis Proyectos</span>
            
            <div className="portfolio__container container grid">

                <div className="portfolio__content">
                    <a href="https://youtu.be/gUPLw4EThp4" target='_blank'><img src={img2} alt='Book Recipes' className="portfolio__content-img"/></a>
                    <div className="portfiolio__content">
                        <div>
                            <i className="uil uil-laptop services__icon"></i>
                            <h3 className="services__title">Fullstack <br/> Book Recipes</h3>
                        </div>

                        <span className="services__button" onClick={()=> handleClick(1)}>
                            Ver Mas 
                            <i className="uil uil-arrow-right services__button-icon"></i>
                        </span>
                    </div>
                </div>
                
            </div>

            <div className={modal === 1? "services__modal modal__active":"services__modal"} >
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close" onClick={()=>handleClick(0)}></i>
                    <h3 className="services__modal-title">Proyecto individual (Book Recipes)</h3>
                    <p className="services__modal-description">
                        Aplicación realizada de cero utilizando, React-Redux, HTML, CSS puro, SQL postgres, Sequelize.
                        Esta aplicación fue creada desde cero, base de datos, back-end, front-end. 
                        Desarrolle esta aplicación como full Stack la cual se puede ver 100 recetas las cuales se pueden filtrar, ordenar por saludable o alfabéticamente, también se puede crear y eliminar recetas propias.</p>      
                     <a href="https://youtu.be/gUPLw4EThp4" target='_blank' className="services__button" onClick={()=> handleClick(1)}>
                         Ver Proyecto
                         <i className="uil uil-arrow-right services__button-icon"></i>
                     </a>
                </div>

            </div>

            <div className="portfolio__container container grid">

                <div className="portfolio__content">
                    <a href="https://henrybienesraices.vercel.app/" target='_blank'><img src={img1} alt='Henry Bienes Raices' className="portfolio__content-img"/></a>
                    <div className="portfiolio__content">
                        <div>
                            <i className="uil uil-laptop services__icon"></i>
                            <h3 className="services__title">Fullstack <br/> Bienes Raices</h3>
                        </div>

                        <span className="services__button" onClick={()=> handleClick(2)}>
                            Ver Mas 
                            <i className="uil uil-arrow-right services__button-icon"></i>
                        </span>
                    </div>
                    
                </div>
                
            </div>

            <div className={modal === 2? "services__modal modal__active":"services__modal"} onClick={()=>handleClick(0)}>
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Proyecto Grupla (Henry Bienes Raices)</h3>
                    <p className="services__modal-description">Este proyecto fue creado en conjunto con un grupo de 8 integrantes, el proyecto está basado en una plataforma para la realización de compras, alquileres y propuestas de venta en el ámbito de bienes raíces.
                        En la plataforma encontraras opciones como filtrado de propiedades, una sección de favorito, una posibilidad de loguearte, enviar datos de tu casa para que la inmobiliaria venda tu casa.<br/>

                        Rol Asignado: Full Stack<br/>

                        Lenguaje: <br/>
                         JavaScript<br/>
                        Tecnologías Utilizadas:<br/>
                         Front-End:<br/>
                         React,
                         Redux,
                         Formik,
                         Auth0,
                         Sweetalert2,
                         MercadoPago,
                         Entre Otras<br/>
                         Back-End:<br/>
                         Expeess,
                         Jsonwebtoken,
                         MercadoPago,
                         Cookies,
                         Entre Otras<br/>
                         Base de Datos: <br/>
                         SQL (Postgres)
                         Sequielize<br/>
                        Herramientas: <br/>
                         Metodologia Scrum,
                          Figma,
                         Trello,
                         Discord,
                         Github</p>
                         <a href="https://henrybienesraices.vercel.app/" target='_blank' className="services__button" onClick={()=> handleClick(1)}>
                            Ver Proyecto
                            <i className="uil uil-arrow-right services__button-icon"></i>
                        </a>

                            
                </div>
            </div>

            <div className="portfolio__container container grid">

                <div className="portfolio__content">
                    <a href="#home"><img src={img3} alt='Portfolio' className="portfolio__content-img"/></a>
                    <div className="portfiolio__content">
                        <div>
                            <i className="uil uil-laptop services__icon"></i>
                            <h3 className="services__title">Front-End <br/> Portfolio</h3>
                        </div>

                        <span className="services__button"  onClick={()=> handleClick(3)}>
                            Ver Mas 
                            <i className="uil uil-arrow-right services__button-icon"></i>
                        </span>
                    </div>
                </div>
                
            </div>

            <div className={modal === 3? "services__modal modal__active":"services__modal"} onClick={()=>handleClick(0)}>
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Portfolio Personal</h3>
                    <p className="services__modal-description">Este proyecto esta creado con el fin de potenciar mi marca personal y que las empresas puedan ver mi trabajo, tomando el rol de front-End Developer.<br/>

                    Tecnologias Utilizadas:<br/>
                     JavaScript,
                     React JS,
                     HTML,
                     CSS,
                     React Icon,
                     Email Js<br/>

                    Librerias:<br/>
                     IconScout,
                     Iconbox</p>
                </div>
            </div>

            <div className="portfolio__container container grid">

                <div className="portfolio__content">
                    <a href="https://youtu.be/gUPLw4EThp4" target='_blank'><img src={img4} alt='Book Recipes' className="portfolio__content-img"/></a>
                    <div className="portfiolio__content">
                        <div>
                            <i className="uil uil-laptop services__icon"></i>
                            <h3 className="services__title">Front-End <br/> Portfolio de Proyectos</h3>
                        </div>

                        <span className="services__button" onClick={()=> handleClick(4)}>
                            Ver Mas 
                            <i className="uil uil-arrow-right services__button-icon"></i>
                        </span>
                    </div>
                </div>

                <div className={modal === 4? "services__modal modal__active":"services__modal"} >
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close" onClick={()=>handleClick(0)}></i>
                    <h3 className="services__modal-title">Portfolio de Proyectos</h3>
                    <p className="services__modal-description">
                        Este Pryecto esta creado con el objetivo de Mostrar Mis Habilidades en Accion, Anteriormente Mencione 
                        las tecnologias que domino ahora con este proyecto busco poder mostrar diversos proyecto, desde lo mas simple a 
                        los Proyectos que requieren de mas de una Tecnologia. <br/>
                    </p>      
                     <a href="https://agustin-benitez-proyectos.vercel.app/" target='_blank' className="services__button" onClick={()=> handleClick(1)}>
                         Ver Proyecto
                         <i className="uil uil-arrow-right services__button-icon"></i>
                     </a>
                </div>

            </div>
                
            </div>
        </div>
    )
}