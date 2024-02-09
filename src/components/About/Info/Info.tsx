import React from "react";

export default function Info(){

    var URLactual = window.location;

    return(
        <div className="about__info grid">
            <div className="about__box">
                <i className='bx bx-briefcase-alt about__icon'></i>
                <h3 className="about__title">{URLactual.pathname === '/en'? `Highlighted Projects`: `Proyectos Destacados`}</h3>
                <span className="about__subtitle nocopy">{URLactual.pathname === '/en'? `4 Projects`: `4 Proyectos`}</span>
            </div>

            <div className="about__box">
                <i className='bx bx-bar-chart-alt-2 about__icon'></i>
                <h3 className="about__title">{URLactual.pathname === '/en'? `Skills`: `Habilidades`}</h3>
                <span className="about__subtitle nocopy">Full Stack</span>
            </div>

            <div className="about__box">
                <i className='bx bx-support about__icon'></i>
                <h3 className="about__title">{URLactual.pathname === '/en'? `Work Experience`: `Experiencia Laboral`}</h3>
                <span className="about__subtitle nocopy"><a href="https://www.linkedin.com/in/agustin-david-benitez/"  target="_blank" rel="noreferrer">{URLactual.pathname === '/en'? `See`: `Ver`}</a></span>
            </div>
        </div>
    )
}