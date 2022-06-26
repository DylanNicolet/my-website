import React, { useContext } from "react";
import LightModeContext from "../context/context";
import moon from "../images/moon.png";
import sun from "../images/sun.png";
import space from "../images/space.jpg";

export default function ModeToggle(){
    const {lightMode, setLightMode} = useContext(LightModeContext)

    const switchStyles = {
        //backgroundColor:darkMode? "grey" : "yellow"
        backgroundImage: lightMode? "url(" + sun + ")": "url(" + moon + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    const toggleStyles = {
        backgroundImage: "url(" + space + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return(
        <section className={"mode-toggle"} onClick={() => setLightMode(prev => !prev)} style={toggleStyles}>
            <section className={`mode-toggle__switch  ${lightMode && "mode-toggle--night"}`} style={switchStyles}>
            </section>
        </section>
    )
}