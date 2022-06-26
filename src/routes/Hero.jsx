import React, { useContext } from "react";
import LightModeContext from "../context/context";
import Header from "../layouts/Header.jsx";
import wave from "../images/wave.png"

export default function Hero(){
    const {lightMode, french} = useContext(LightModeContext)

    const title = !french? "Welcome to the web experience" : "Bienvenue dans une expérience web"

    return(
        <section className={`hero ${lightMode && "hero-bg--light"}`} >
            <Header />
            <h1 className="hero__title">{title}</h1>
            <img src={wave} alt="" />
        </section>
    )
}