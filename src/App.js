import React from "react";
import Loader from "react-loader-spinner";
import Weather from "./Weather.js";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Weather city="Brussels" />
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      </header>
    </div>
  );
}

export default App;
