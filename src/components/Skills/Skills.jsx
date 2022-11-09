import React from "react";
import Backend from "./Backend/Backend";
import Frontend from "./Fontend/Frontend";
import './Skills.css'

export default function Skills(){
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Habilidades</h2>
            <span className="section__subtitle">Tecnologias / Herramientas</span>

            <div className="skills__container container grid">
                <Frontend/>
                <Backend/>
            </div>
        </section>
    )
}