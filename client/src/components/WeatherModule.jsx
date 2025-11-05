// import React, { useState } from "react";
// import axios from "axios";

// function WeatherModule() {
//   const [city, setCity] = useState("Bangalore");
//   const [weather, setWeather] = useState(null);
//   const [error, setError] = useState("");

//   const fetchWeather = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:3001/api/weather?city=${city}`
//       );
//       setWeather(response.data);
//       setError("");
//     } catch (err) {
//       console.error("Error fetching weather:", err);
//       setError("Could not fetch weather data. Try again.");
//     }
//   };

//   return (
//     <div className="card">
//       <h2>🌦️ Weather Module</h2>
//       <input
//         type="text"
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         placeholder="Enter city name"
//       />
//       <button onClick={fetchWeather}>Get Weather</button>

//       {error && <p className="error">{error}</p>}

//       {weather && !weather.error && (
//         <p className="result">
//           {weather.city}: {weather.temperature}°C, {weather.condition}
//         </p>
//       )}
//     </div>
//   );
// }

// export default WeatherModule;

import React, { useState } from "react";
import axios from "axios";

function WeatherModule() {
  const [city, setCity] = useState("Bangalore");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://info-hub-challenge-ten.vercel.app/api/weather?city=${city}`
      );
      setWeather(response.data);
      setError("");
    } catch (err) {
      console.error("Error fetching weather:", err);
      setError("Could not fetch weather data. Try again.");
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

      {weather && !weather.error && (
        <p className="result">
          {weather.city}: {weather.temperature}°C, {weather.condition}
        </p>
      )}
    </div>
  );
}

export default WeatherModule;
