import React from 'react';

export default function Extra() {
  const URLactual = window.location;

  return (
    <div className="skills__content">
      <h3 className="skills__title">
        {URLactual.pathname == '/en' ? `Tools` : `Herramientas`}
      </h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">
                <a href="https://trello.com/" target="_blank">
                  Tello
                </a>
              </h3>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">
                <a href="https://git-scm.com/" target="_blank">
                  Git
                </a>
              </h3>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">
                <a href="https://github.com/" target="_blank">
                  GitHub
                </a>
              </h3>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">
                <a
                  href="https://www.adobe.com/ar/products/photoshop.html"
                  target="_blank"
                >
                  Photoshop
                </a>
              </h3>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">
                <a
                  href="https://www.adobe.com/ar/products/illustrator.html"
                  target="_blank"
                >
                  Illustrator
                </a>
              </h3>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">
                <a
                  href="https://www.adobe.com/ar/products/illustrator.html"
                  target="_blank"
                >
                  Linux
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
