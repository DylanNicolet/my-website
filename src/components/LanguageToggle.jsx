import React, { useContext } from "react";
import englishFlag from "../images/english.png";
import frenchFlag from "../images/french.png";
import LightModeContext from "../context/context";

export default function LanguageToggle(){
    const {french, setFrench} = useContext(LightModeContext)

    return(
        <section className="language-toggle" onClick={() => setFrench(prev => !prev)}>
            <img src={!french? englishFlag : frenchFlag} alt="" />
        </section>
    )
}