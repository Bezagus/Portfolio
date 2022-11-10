import React from "react";

export default function Portfolio(){
    return(
        <div id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Mis Proyectos</span>
            
            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-laptop services__icon"></i>
                        <h3 className="services__title">Proyecto 1 <br/> Portfolio</h3>
                    </div>

                    <span className="services__button" >
                        Ver Mas 
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-laptop services__icon"></i>
                        <h3 className="services__title">Proyecto 2<br/> Henry Bienes Raices</h3>
                    </div>

                    <span className="services__button" >
                        Ver Mas 
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-laptop services__icon"></i>
                        <h3 className="services__title">Proyecto 3 <br/> Book Recipes</h3>
                    </div>

                    <span className="services__button">
                        Ver Mas 
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                </div>
                

            </div>
        </div>
    )
}