import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Agustin Benitez</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">Sobre Mi</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Proyectos</a>
                </li>

                <li>
                    <a href="#services" className="footer__link">Estudios</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.linkedin.com/in/agustin-benitez-271b94241" className="footer__social-link" target="_blank">
                    <i class="bx bxl-linkedin"></i>
                </a>

                <a href="https://www.github.com/Bezagus" className="footer__social-link" target="_blank">
                    <i class="bx bxl-github"></i>
                </a>

                <a href="https://www.youtube.com/channel/UC6JvQsrhTbVTeq3bb3gfP6Q" className="footer__social-link" target="_blank">
                    <i class="bx bxl-youtube"></i>
                </a>
            </div>
            <span className='footer__copy nocopy'>
                    &#169; Agustin Benitez. Derechos Reservado.
            </span>
        </div>
    </footer>
  )
}