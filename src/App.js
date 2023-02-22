import React from "react";
import logo from "./logo.svg";

import "./App.css";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <header classname="App-Header">
        
        
        <a
          classname="App-link"
          href='https://reactjs.org'
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <Weather />
    </div>
  );
}

export default App;
