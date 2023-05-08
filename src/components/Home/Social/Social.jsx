import React from "react";

export default function Social(){
    var URLactual = window.location;
    return(
        <div className="home__social">
            <a href="https://www.linkedin.com/in/agustin-david-benitez/" className="home__social-icon" target="_blank">
                <i class="uil uil-linkedin"></i>
            </a>

            <a href="https://www.github.com/Bezagus" className="home__social-icon" target="_blank">
                <i class="uil uil-github"></i>
            </a>

            <a href="https://www.youtube.com/channel/UC6JvQsrhTbVTeq3bb3gfP6Q" className="home__social-icon" target="_blank">
                <i class="uil uil-youtube"></i>
            </a>

            <a href={URLactual.pathname == '/en'? '/es' : '/en'} className="home__social-icon">
                <i class='bx bxs-comment-edit'></i>
            </a>
        </div>
    )
}
