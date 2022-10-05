import React from "react";
import detective from "./dictionary-pipe.jpeg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>
            <img
              src={detective}
              className="App-logo img-fluid"
              alt="black and white detective logo"
            />
            <span className="App-title">
            DICTIONARY
            </span>
          </h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Brita Thompson</small>
        </footer>
      </div>
    </div>
  );
}
