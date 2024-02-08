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

    const URLactual = window.location.pathname
    return(
        <div id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle nocopy">{URLactual === '/en'? `My Projects`: `Mis Proyectos`}</span>
            
            <div className="portfolio__container container grid">

                <div className="portfolio__content">
                    <a href="https://youtu.be/gUPLw4EThp4" target='_blank' rel="noreferrer"><img src={img2} alt='Book Recipes' className="portfolio__content-img"/></a>
                    <div className="portfiolio__content">
                        <div>
                            <i className="uil uil-laptop services__icon"></i>
                            <h3 className="services__title">Fullstack <br/> Book Recipes</h3>
                        </div>

                        <span className="services__button" onClick={()=> handleClick(1)}>
                            {URLactual === '/en'?`See more`:`Ver Mas`}
                            <i className="uil uil-arrow-right services__button-icon"></i>
                        </span>
                    </div>
                </div>
                
            </div>

            <div className={modal === 1? "services__modal modal__active":"services__modal"} >
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close" onClick={()=>handleClick(0)}></i>
                    <h3 className="services__modal-title">{URLactual === '/en'? `Individual project (Book Recipes)`: `Proyecto individual (Book Recipes)`}</h3>
                    <p className="services__modal-description">
                        {URLactual === '/en'?`This is a description of a project that was developed from scratch using React-Redux, pure HTML and CSS, SQL Postgres, and Sequelize. The application is a full-stack application that allows users to view 100 different recipes, filter and sort them by healthy or alphabetical order, and create and delete their own recipes. The project includes both the front-end and back-end development, with a database created from scratch using SQL Postgres and Sequelize as the ORM. The application was built with a focus on user experience and usability, making it easy and intuitive for users to navigate and interact with the recipes.`:
                        ` Aplicación realizada de cero utilizando, React-Redux, HTML, CSS puro, SQL postgres, Sequelize.
                        Esta aplicación fue creada desde cero, base de datos, back-end, front-end. 
                        Desarrolle esta aplicación como full Stack la cual se puede ver 100 recetas las cuales se pueden filtrar, ordenar por saludable o alfabéticamente, también se puede crear y eliminar recetas propias.`}
                       </p>      
                     <a href="https://youtu.be/gUPLw4EThp4" target='_blank' rel="noreferrer"className="services__button" onClick={()=> handleClick(1)}>
                         {URLactual === '/en'?`View project`:`Ver Proyecto`}
                         <i className="uil uil-arrow-right services__button-icon"></i>
                     </a>
                </div>

            </div>

            <div className="portfolio__container container grid">

                <div className="portfolio__content">
                    <a href="https://henrybienesraices.vercel.app/" target='_blank' rel="noreferrer"><img src={img1} alt='Henry Bienes Raices' className="portfolio__content-img"/></a>
                    <div className="portfiolio__content">
                        <div>
                            <i className="uil uil-laptop services__icon"></i>
                            <h3 className="services__title">Fullstack <br/> {URLactual === '/en'?`Real estate`: `Bienes Raices`}</h3>
                        </div>

                        <span className="services__button" onClick={()=> handleClick(2)}>
                            {URLactual === '/en'?`See more`:`Ver Mas`}
                            <i className="uil uil-arrow-right services__button-icon"></i>
                        </span>
                    </div>
                    
                </div>
                
            </div>

            <div className={modal === 2? "services__modal modal__active":"services__modal"} onClick={()=>handleClick(0)}>
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">{URLactual === '/en'? `Group Project (Henry Real Estate)`: `Proyecto Grupla (Henry Bienes Raices)`}</h3>
                    <p className="services__modal-description">{URLactual === '/en'?`This project was created in collaboration with a group of 8 members, and 
                    it is based on a platform for buying, renting, and selling real estate properties. On the platform, you will find options 
                    such as property filtering, a favorites section, a login feature, and the ability to submit details of your own house for the real estate agency to sell.`: 
                    `Este proyecto fue creado en conjunto con un grupo de 8 integrantes, el proyecto está basado en una plataforma para la realización de compras, alquileres y propuestas de venta en el ámbito de bienes raíces.
                    En la plataforma encontraras opciones como filtrado de propiedades, una sección de favorito, una posibilidad de loguearte, enviar datos de tu casa para que la inmobiliaria venda tu casa.`}<br/>

                        {URLactual === '/en'?`Assigned role`: `Rol Asignado`}: Full Stack<br/>

                        {URLactual === '/en'?`Language`: `Lenguaje`}: <br/>
                         JavaScript<br/>
                         {URLactual === '/en'?`The Technologies Used`: `Tecnologías Utilizadas`}:<br/>
                         Front-End:<br/>
                         React,
                         Redux,
                         Formik,
                         Auth0,
                         Sweetalert2,
                         MercadoPago,
                         {URLactual === '/en'?`among others`: `Entre Otras`}<br/>
                         Back-End:<br/>
                         Expeess,
                         Jsonwebtoken,
                         MercadoPago,
                         Cookies,
                         Entre Otras<br/>
                         {URLactual === '/en'?`Database`: `Base de Datos`}: <br/>
                         SQL (Postgres)
                         Sequielize<br/>
                         {URLactual === '/en'?`Tools`: `Herramientas`}: <br/>
                         {URLactual === '/en'?`Methodology`: `Metodologia`} Scrum,
                          Figma,
                         Trello,
                         Discord,
                         Github</p>
                         <a href="https://henrybienesraices.vercel.app/" target='_blank' rel="noreferrer" className="services__button" onClick={()=> handleClick(1)}>
                            {URLactual === '/en'?`View project`:`Ver Proyecto`}
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
                            {URLactual === '/en'?`See more`:`Ver Mas`}
                            <i className="uil uil-arrow-right services__button-icon"></i>
                        </span>
                    </div>
                </div>
                
            </div>

            <div className={modal === 3? "services__modal modal__active":"services__modal"} onClick={()=>handleClick(0)}>
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close"></i>

                    <h3 className="services__modal-title">Portfolio Personal</h3>
                    <p className="services__modal-description">{URLactual === '/en'? `This project is created with the purpose of enhancing my personal brand and showcasing my work to companies, taking on the role of a front-end developer.`:
                     `Este proyecto esta creado con el fin de potenciar mi marca personal y que las empresas puedan ver mi trabajo, tomando el rol de front-End Developer.`}<br/>

                    {URLactual === '/en'? `Technologies used`: `Tecnologias Utilizadas`}:<br/>
                     JavaScript,
                     React JS,
                     HTML,
                     CSS,
                     React Icon,
                     Email Js<br/>

                     {URLactual === '/en'? `Libraries`: `Librerias`}:<br/>
                     IconScout,
                     Iconbox</p>
                </div>
            </div>

            <div className="portfolio__container container grid">

                <div className="portfolio__content">
                    <a href="https://youtu.be/gUPLw4EThp4" target='_blank' rel="noreferrer"><img src={img4} alt='Book Recipes' className="portfolio__content-img"/></a>
                    <div className="portfiolio__content">
                        <div>
                            <i className="uil uil-laptop services__icon"></i>
                            <h3 className="services__title">Front-End <br/> {URLactual === '/en'?`Project Portfolio`: `Portfolio de Proyectos`}</h3>
                        </div>

                        <span className="services__button" onClick={()=> handleClick(4)}>
                            {URLactual === '/en'?`See more`:`Ver Mas`}
                            <i className="uil uil-arrow-right services__button-icon"></i>
                        </span>
                    </div>
                </div>

                <div className={modal === 4? "services__modal modal__active":"services__modal"} >
                <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close" onClick={()=>handleClick(0)}></i>
                    <h3 className="services__modal-title">Portfolio de Proyectos</h3>
                    <p className="services__modal-description">
                        {URLactual === '/en'? `This project is created with the aim of showcasing my skills in action. I previously mentioned the technologies I master, and now with this project, I aim to demonstrate various projects, from the simplest to those that require more than one technology.`:
                        `Este Pryecto esta creado con el objetivo de Mostrar Mis Habilidades en Accion, Anteriormente Mencione 
                        las tecnologias que domino ahora con este proyecto busco poder mostrar diversos proyecto, desde lo mas simple a 
                        los Proyectos que requieren de mas de una Tecnologia. `}<br/>
                    </p>      
                     <a href="https://agustin-benitez-proyectos.vercel.app/" target='_blank' rel="noreferrer" className="services__button" onClick={()=> handleClick(1)}>
                        {URLactual === '/en'?`View project`:`Ver Proyecto`}
                         <i className="uil uil-arrow-right services__button-icon"></i>
                     </a>
                </div>

            </div>
                
            </div>
        </div>
    )
}