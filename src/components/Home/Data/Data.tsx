import React from 'react';
import { Hand, Plane } from '../../Icons';
import { NavSectionsEnum } from '../../../types/NavSectionsEnum.d';

export default function Data() {
  const URLactual = window.location;

  return (
    <div className="home__data">
      <h1 className="home__title">
        Agustin
        <Hand />
      </h1>
      <h3 className="home__subtitle">Full Stack Developer</h3>
      <p className="home__description">
        {URLactual.pathname === '/en'
          ? `I am Agustín Benitez, a Full Stack Developer. I specialize in the TypeScript ecosystem, building complete solutions with React, React Native, Node.js, and NestJS.

I combine my technical experience with strong discipline and resilience. Currently, I am complementing my profile by studying Data Science at UBA to integrate AI into  future applications.`
          : `Soy Agustín Benitez, Desarrollador Full Stack. Me especializo en el ecosistema TypeScript, creando soluciones completas con React, React Native, Node.js y NestJS.

Combino mi experiencia técnica con una fuerte disciplina y resiliencia. Actualmente, complemento mi perfil estudiando Ciencia de Datos en la UBA para integrar IA en aplicaciones futuras.`}
      </p>

      <a href={`#${NavSectionsEnum.CONTACT}`} className="button button--flex">
        {URLactual.pathname === '/en' ? `Contact Me` : `Contactame.`}
        <Plane />
      </a>
    </div>
  );
}
