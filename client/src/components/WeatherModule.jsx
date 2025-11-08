import React, { useState } from "react";
import axios from "axios";

function WeatherModule() {
  const [city, setCity] = useState("Bangalore");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "66b2e5df245f2a5b643c36cf60e64151";

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      // Extract only the info you need
      const data = {
        city: response.data.name,
        temperature: response.data.main.temp,
        condition: response.data.weather[0].description,
      };

      setWeather(data);
      setError("");
    } catch (err) {
      console.error("Error fetching weather:", err);
      setError("Could not fetch weather data. Try again.");
      setWeather(null);
    }
  };

  return (
    <div className="card">
      <h2>🌦️ Weather Module</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {error && <p className="error">{error}</p>}

      {weather && (
        <p className="result">
          {weather.city}: {weather.temperature}°C, {weather.condition}
        </p>
      )}
    </div>
  );
}

export default WeatherModule;
