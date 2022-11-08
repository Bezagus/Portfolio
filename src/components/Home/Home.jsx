import React from "react";
import Social from "./Social/Social.jsx";
import Data from "./Data/Data.jsx";
import ScrollDown from "./ScrollDown/ScrollDown.jsx";
import './Home.css'

export default function Home(){
    return(
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social/>

                    <div className="home__img"></div>

                    <Data/>
                </div>

                <ScrollDown/>
            </div>
        </section>
    )
}