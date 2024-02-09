import React from 'react'
import './Footer.css'

export default function Footer() {

    var URLactual = window.location;

  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Agustin Benitez</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">{URLactual.pathname === '/en'? `About Me`: `Sobre Mi`}</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">{URLactual.pathname === '/en'? `Projects`: `Proyectos`}</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">{URLactual.pathname === '/en'? `Studies`: `Estudios`}</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/agustin-david-benitez/" className="footer__social-link" target="_blank" rel="noreferrer">
                    <i className="bx bxl-linkedin"></i>
                </a>

                <a href="https://www.github.com/Bezagus" className="footer__social-link" target="_blank" rel="noreferrer">
                    <i className="bx bxl-github"></i>
                </a>

                <a href="https://www.youtube.com/channel/UC6JvQsrhTbVTeq3bb3gfP6Q" className="footer__social-link" target="_blank" rel="noreferrer">
                    <i className="bx bxl-youtube"></i>
                </a>
            </div>
            <span className='footer__copy nocopy'>
                    &#169; Agustin Benitez. {URLactual.pathname === '/en'? `All rights reserved`: `Derechos Reservado.`}
            </span>
        </div>
    </footer>
  )
}