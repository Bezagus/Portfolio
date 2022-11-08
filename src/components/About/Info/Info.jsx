import React from "react";

export default function Info(){
    return(
        <div className="about__info grid">
            <div className="about__box">
                <i class='bx bx-briefcase-alt about__icon'></i>
                <h3 className="about__title">Proyectos</h3>
                <span className="about__subtitle">3 Proyectos</span>
            </div>

            <div className="about__box">
                <i class='bx bx-bar-chart-alt-2 about__icon'></i>
                <h3 className="about__title">Habilidades</h3>
                <span className="about__subtitle">Full Stack</span>
            </div>

            <div className="about__box">
                <i class='bx bx-support about__icon'></i>
                <h3 className="about__title">Soporte</h3>
                <span className="about__subtitle">Online 24/7</span>
            </div>
        </div>
    )
}