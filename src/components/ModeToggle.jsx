import React, { useContext } from "react";
import DarkModeContext from "../context/context";
import moon from "../images/moon.png";
import sun from "../images/sun.png";
import space from "../images/space.jpg";

export default function ModeToggle(){
    const {darkMode, setDarkMode} = useContext(DarkModeContext)

    const switchStyles = {
        //backgroundColor:darkMode? "grey" : "yellow"
        backgroundImage: darkMode? "url(" + moon + ")": "url(" + sun + ")",
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
        <section className={"mode-toggle"} onClick={() => setDarkMode(prev => !prev)} style={toggleStyles}>
            <section className={`mode-toggle__switch  ${darkMode && "mode-toggle--night"}`} style={switchStyles}>
            </section>
        </section>
    )
}