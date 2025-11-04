import React from "react";
import "./App.css";
import QuoteGenerator from "./components/QuoteGenerator";
import CurrencyConverter from "./components/CurrencyConverter";
import WeatherModule from "./components/WeatherModule";

function App() {
  return (
    <div className="App">
      <h1>🌍 InfoHub Dashboard</h1>
      <div className="modules">
        <QuoteGenerator />
        <CurrencyConverter />
        <WeatherModule />
      </div>
    </div>
  );
}

export default App;
