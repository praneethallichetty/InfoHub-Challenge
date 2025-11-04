// Load environment variables from .env
require("dotenv").config();

// Import required packages
const express = require("express");
const cors = require("cors");
const axios = require("axios");

// Create an Express app
const app = express();
app.use(cors());

// Define port (from .env or default)
const PORT = process.env.PORT || 3001;

// ----- QUOTE API -----
app.get("/api/quote", (req, res) => {
  const quotes = [
    "Believe you can and you're halfway there.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Dream bigger. Do bigger.",
    "Success doesn’t just find you. You have to go out and get it.",
  ];

  // Pick a random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: randomQuote });
});

// ----- WEATHER API -----
app.get("/api/weather", async (req, res) => {
  try {
    const city = req.query.city || "Bangalore"; // Default city if none provided
    const apiKey = process.env.OPENWEATHER_API_KEY;

    // API URL with query
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url);
    const data = response.data;

    res.json({
      city: data.name,
      temperature: data.main.temp,
      condition: data.weather[0].description,
    });
  } catch (error) {
    console.error("Weather API error:", error.message);
    res.status(500).json({ error: "Could not fetch weather data." });
  }
});

// ----- CURRENCY API -----
app.get("/api/currency", async (req, res) => {
  try {
    const amount = req.query.amount || 1;
    const response = await axios.get("https://api.exchangerate-api.com/v4/latest/INR");
    const rates = response.data.rates;

    const usd = (amount * rates.USD).toFixed(2);
    const eur = (amount * rates.EUR).toFixed(2);

    res.json({ usd, eur });
  } catch (error) {
    console.error("Currency API error:", error.message);
    res.status(500).json({ error: "Could not fetch currency data." });
  }
});

// ----- START SERVER -----
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
