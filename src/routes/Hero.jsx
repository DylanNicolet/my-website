import React, { useContext } from "react";
import DarkModeContext from "../context/context";
import Header from "../layouts/Header.jsx";
import wave from "../images/wave.png"

export default function Hero(){
    const {darkMode} = useContext(DarkModeContext)

    return(
        <section className={`hero ${darkMode && "hero-bg--dark"}`} >
            <Header />
            <img src={wave} alt="" />
        </section>
    )
}