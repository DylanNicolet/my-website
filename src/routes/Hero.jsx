import React, { useContext } from "react";
import DarkModeContext from "../context/context";

export default function Hero(){
    const {darkMode} = useContext(DarkModeContext)

    const styles = {
        backgroundColor:darkMode? "grey" : "lightblue"
    }

    return(
        <section className="hero" style={styles}>

        </section>
    )
}