import React from "react";
import ModeToggle from "../components/ModeToggle";
import LanguageToggle from "../components/LanguageToggle";

export default function Header(){

    return (
        <header>
            <h2>Dylan Nicolet</h2>
            <LanguageToggle />
            <ModeToggle />
        </header>
    )
}