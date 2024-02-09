import React from 'react';
import { Link } from 'react-scroll';
import './ScrollUp.css';

export default function ScrollUp() {
  window.addEventListener('scroll', function () {
    const scrollUp = document.querySelector('.scrollup');

    if (this.scrollY >= 560) scrollUp?.classList.add('show-scroll');
    else scrollUp?.classList.remove('show-scroll');
  });

  return (
    <Link
      to="home"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
      className="scrollup"
    >
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </Link>
  );
}
