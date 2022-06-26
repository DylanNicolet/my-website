import React from "react";

const LightModeContext = React.createContext({
    lightMode: false,
    setDarkMode: () => {},
    french: false,
    setFrench: () => {}
})

export default LightModeContext