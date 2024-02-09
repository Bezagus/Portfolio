import React from "react";

export default function Backend(){

    var URLactual = window.location;

    return(
        <div className="skills__content">
            <h3 className="skills__title">{URLactual.pathname === '/en'? 'Data Science and Artificial Intelligence':'Data Science e Inteligencia Artificial'}</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name"><a href="https://www.postgresql.org/" target='_blank' rel="noreferrer">NumPy</a></h3>
                        </div>
                        
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name"><a href="https://sequelize.org/" target='_blank' rel="noreferrer">Pandas</a></h3>
                        </div>
                        
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>

                        <div>
                            <h3 className="skills__name"><a href="https://expressjs.com/es/" target='_blank' rel="noreferrer">MatplotLib</a></h3>
                        </div>
                        
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name"><a href="https://nodejs.org/en/" target='_blank' rel="noreferrer">Seaborn</a></h3>
                        </div>
                        
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name"><a href="https://nodejs.org/en/" target='_blank' rel="noreferrer">Anaconda</a></h3>
                        </div>
                        
                    </div>

                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name"><a href="https://nodejs.org/en/" target='_blank' rel="noreferrer">Sklearn</a></h3>
                        </div>
                        
                    </div>
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name"><a href="https://nodejs.org/en/" target='_blank' rel="noreferrer">Machine Learning</a></h3>
                        </div>
                        
                    </div>
                    <div className="skills__data">
                        <i className='bx bx-badge-check'></i>
                        <div>
                            <h3 className="skills__name"><a href="https://nodejs.org/en/" target='_blank' rel="noreferrer">Deep Learning</a></h3>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}