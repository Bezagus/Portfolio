import React from "react";
import img1 from '../../assets/cards.jpg'
import img2 from '../../assets/landingpage.jpg'
import img3 from '../../assets/portfolio.jpg'
import './Portfolio.css'

export default function Portfolio(){
    return(
        <div id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Mis Proyectos</span>
            
            <div className="portfolio__container container grid">

                <div className="portfolio__content">
                    <a href="https://henrybienesraices.vercel.app/" target='_blank'><img src={img1} alt='Henry Bienes Raices' className="portfolio__content-img"/></a>
                    <div className="portfiolio__content">
                        <div>
                            <i className="uil uil-laptop services__icon"></i>
                            <h3 className="services__title">Proyecto 1 <br/> Portfolio</h3>
                        </div>

                        <span className="services__button" >
                            Ver Mas 
                            <i className="uil uil-arrow-right services__button-icon"></i>
                        </span>
                    </div>
                </div>
                
            </div>

            <div className="portfolio__container container grid">

                <div className="portfolio__content">
                <a href="hthttps://www.youtube.com/watch?v=gUPLw4EThp4  " target='_blank'><img src={img2} alt='Henry Bienes Raices' className="portfolio__content-img"/></a>
                    <div className="portfiolio__content">
                        <div>
                            <i className="uil uil-laptop services__icon"></i>
                            <h3 className="services__title">Proyecto 1 <br/> Portfolio</h3>
                        </div>

                        <span className="services__button" >
                            Ver Mas 
                            <i className="uil uil-arrow-right services__button-icon"></i>
                        </span>
                    </div>
                    
                </div>
                
            </div>

            <div className="portfolio__container container grid">

                <div className="portfolio__content">
                    <a href="#home"><img src={img3} alt='Henry Bienes Raices' className="portfolio__content-img"/></a>
                    <div className="portfiolio__content">
                        <div>
                            <i className="uil uil-laptop services__icon"></i>
                            <h3 className="services__title">Proyecto 1 <br/> Portfolio</h3>
                        </div>

                        <span className="services__button" >
                            Ver Mas 
                            <i className="uil uil-arrow-right services__button-icon"></i>
                        </span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}