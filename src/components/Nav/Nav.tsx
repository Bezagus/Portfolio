import React from 'react';
import { Link } from 'react-scroll';
import Logo from '../../assets/Logo-Chico.svg';
import { useNav } from './useNav';
import './Nav.css';

export default function Nav() {
  const presenter = useNav();

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          <img src={Logo} alt="Agustin Benitez" className="img__logo" />
        </a>
        <div className={presenter.Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <p>
            {presenter.currentURL.pathname === '/en' ? 'Lenguages' : 'Idiomas'}{' '}
            :{' '}
            <b>
              <a href="/es">Español</a> | <a href="/en">English</a>
            </b>
          </p>
          <ul className="nav__list grid">
            {presenter.HASH_SECTIONS.map((section, index) => (
              <li key={`${index}-${section.key}`} className="nav__item nocopy">
                <Link
                  to={section.to}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  onClick={() => presenter.setActiveNav(section.key)}
                  className={
                    presenter.activeNav === section.key
                      ? 'nav__link active-link'
                      : 'nav__link'
                  }
                >
                  <i className="uil uil-estate nav__icon"></i>
                  {presenter.currentURL.pathname === '/en'
                    ? section.pathEn
                    : section.pathEn}
                </Link>
              </li>
            ))}
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => presenter.showMenu(!presenter.Toggle)}
          ></i>
        </div>

        <div
          className="nav__toggle"
          onClick={() => presenter.showMenu(!presenter.Toggle)}
        >
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
}
