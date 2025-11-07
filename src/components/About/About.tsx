import React from 'react';
import Info from './Info/Info';
import AboutImg from '../../assets/profile.jpg';
import cvEnglish from '../../assets/pdf/curriculum_english.pdf';
import cvSpanish from '../../assets/pdf/curriculum_spanish.pdf';
import './About.css';
import { NavSectionsEnum } from '../../types/NavSectionsEnum.d';
import { Doc } from '../Icons';

export default function About() {
  const URLactual = window.location;

  return (
    <section className="about section" id={NavSectionsEnum.ABOUT}>
      <h2 className="section__title">
        {URLactual.pathname === '/en' ? 'About Me' : 'Sobre Mi'}
      </h2>
      <span className="section__subtitle nocopy">
        {URLactual.pathname === '/en' ? 'More About Me' : 'Mas Sobre mi'}
      </span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="Agustin Benitez" className="about__img" />

        <div className="about__data">
          <Info />
          <p className="about__description">
            {URLactual.pathname === '/en'
              ? `My passion for programming began at 17. Ever since, my career has been defined by a total dedication to continuous improvement.

This focus applies to everything: from my technical skills and work tools to my personal and professional development.`
              : `Mi pasión por la programación comenzó a los 17 años. Desde entonces, mi carrera se ha definido por una dedicación total a la mejora continua.

Este enfoque se aplica a todo: desde mis habilidades técnicas y herramientas de trabajo hasta mi desarrollo personal y profesional.`}
          </p>
          <br />

          <a
            download="Agustin_Benitez_CV"
            href={URLactual.pathname === '/en' ? cvEnglish : cvSpanish}
            className="button button--flex"
          >
            {URLactual.pathname === '/en' ? 'Download CV' : 'Descargar CV'}
            <Doc />
          </a>
        </div>
      </div>
    </section>
  );
}
