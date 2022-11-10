import React from 'react'
import { useState } from 'react'

export default function Alert() {

    const [modal, setModal] = useState(1)

    function handleClick(index){
        setModal(index)
    }
  return (
    <section className="services section" id="services">
        <div className="services__container container grid">
                <div className="services__content">
                    <div className={modal === 1? "services__modal modal__active":"services__modal"}>
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close" onClick={()=>handleClick(0)}></i>

                            <h3 className="services__modal-title">Portfolio En Proceso</h3>
                            <p className="services__modal-description">Este Portfolio actualmente se encuentra en Procesos de Elaboracion</p>

                            
                        </div>
                    </div>
                </div>
        </div>
    </section>
  )
}