import { useState } from 'react';
import { NavSectionsEnum } from '../../types/NavSectionsEnum.d';

const HASH_SECTIONS = [
  {
    to: 'home',
    key: NavSectionsEnum.HOME,
    pathSp: 'Inicio',
    pathEn: 'Home',
  },
  {
    to: 'about',
    key: NavSectionsEnum.ABOUT,
    pathSp: 'Sobre Mi',
    pathEn: 'About Me',
  },
  {
    to: 'skills',
    key: NavSectionsEnum.SKILLS,
    pathSp: 'Habilidades',
    pathEn: 'Skills',
  },
  {
    to: 'Studies',
    key: NavSectionsEnum.STUDIES,
    pathSp: 'Estudios',
    pathEn: 'Studies',
  },
  {
    to: 'portfolio',
    key: NavSectionsEnum.PORTFOLIO,
    pathSp: 'Portfolio',
    pathEn: 'Portfolio',
  },
  {
    to: 'contact',
    key: NavSectionsEnum.CONTACT,
    pathSp: 'Contacto',
    pathEn: 'Contact',
  },
];

export const useNav = () => {
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');

    if (this.scrollY >= 80) header?.classList.add('scroll-header');
    else header?.classList.remove('scroll-header');
  });

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  const currentURL = window.location;

  return {
    Toggle,
    showMenu,
    activeNav,
    setActiveNav,
    currentURL,
    HASH_SECTIONS,
  };
};
