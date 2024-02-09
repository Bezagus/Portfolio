import React from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../../assets/Logo-Chico.svg';
import './Nav.css';

export default function Nav() {
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');

    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
  });

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  var URLactual = window.location;

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          <img src={Logo} alt="Agustin Benitez" className="img__logo" />
        </a>
        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <p>
            {URLactual.pathname === '/en' ? 'Lenguages' : 'Idiomas'} :{' '}
            <b>
              <a href="/es">Español</a> | <a href="/en">English</a>
            </b>
          </p>
          <ul className="nav__list grid">
            <li className="nav__item nocopy">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={() => setActiveNav('#home')}
                className={
                  activeNav === '#home' ? 'nav__link active-link' : 'nav__link'
                }
              >
                <i className="uil uil-estate nav__icon"></i>
                {URLactual.pathname === '/en' ? 'Home' : 'Inicio'}
              </Link>
            </li>

            <li className="nav__item nocopy">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={() => setActiveNav('#about')}
                className={
                  activeNav === '#about' ? 'nav__link active-link' : 'nav__link'
                }
              >
                <i className="uil uil-user nav__icon"></i>
                {URLactual.pathname === '/en' ? 'About Me' : 'Sobre Mi'}
              </Link>
            </li>

            <li className="nav__item nocopy">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={() => setActiveNav('#skills')}
                className={
                  activeNav === '#skills'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className="uil uil-file-alt nav__icon"></i>
                {URLactual.pathname === '/en' ? 'Skills' : 'Habilidades'}
              </Link>
            </li>

            <li className="nav__item nocopy">
              <Link
                to="Studies"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={() => setActiveNav('#Studies')}
                className={
                  activeNav === '#services'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className="uil uil-book-alt nav__icon"></i>
                {URLactual.pathname === '/en' ? 'Studies' : 'Estudios'}
              </Link>
            </li>

            <li className="nav__item nocopy">
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={() => setActiveNav('#portfolio')}
                className={
                  activeNav === '#portfolio'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className="uil uil-scenery nav__icon"></i>
                Portfolio
              </Link>
            </li>

            <li className="nav__item nocopy">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={() => setActiveNav('#contact')}
                className={
                  activeNav === '#contact'
                    ? 'nav__link active-link'
                    : 'nav__link'
                }
              >
                <i className="uil uil-message nav__icon"></i>
                {URLactual.pathname === '/en' ? 'Contact' : 'Contacto'}
              </Link>
            </li>
          </ul>

          <i
            class="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}
