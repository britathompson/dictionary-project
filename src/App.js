import React from "react";
import detective from "./detective.jpeg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          
            <img
              src={detective}
              className="App-logo img-fluid"
              alt="black and white detective logo"
            />
            <h1>
            DICTIONARY SEARCH
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
