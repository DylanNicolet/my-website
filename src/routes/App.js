import React from "react";
import "../sass/App.css";
import LightModeContext from "../context/context";
import Hero from "./Hero";

function App() {
  const [lightMode, setLightMode] = React.useState(false)
  const [french, setFrench] = React.useState(false)
  const value = {lightMode, setLightMode, french, setFrench}

  

  return (
    <LightModeContext.Provider value={value}>
      <div className="App">
        <Hero />
      </div>
    </LightModeContext.Provider>
   
  );
}

export default App;