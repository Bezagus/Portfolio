import React from 'react';

export default function Social() {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/agustin-david-benitez/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://www.github.com/Bezagus"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github"></i>
      </a>

      <a
        href="https://www.youtube.com/channel/UC6JvQsrhTbVTeq3bb3gfP6Q"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-youtube"></i>
      </a>
    </div>
  );
}
