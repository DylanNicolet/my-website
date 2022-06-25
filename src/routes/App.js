import React from "react";
import "../sass/App.css";
import Header from "../layouts/Header";
import DarkModeContext from "../context/context";
import Hero from "./Hero";

function App() {
  const [darkMode, setDarkMode] = React.useState(false)
  const value = {darkMode, setDarkMode}

  

  return (
    <DarkModeContext.Provider value={value}>
      <div className="App">
        <Header />
        <Hero />
      </div>
    </DarkModeContext.Provider>
   
  );
}

export default App;