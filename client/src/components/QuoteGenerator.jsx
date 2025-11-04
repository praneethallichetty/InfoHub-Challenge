import React, { useState } from "react";
import axios from "axios";

function QuoteGenerator() {
  const [quote, setQuote] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/quote");
      setQuote(response.data.quote);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  return (
    <div className="card">
      <h2>💬 Quote Generator</h2>
      <button onClick={fetchQuote}>Get a Quote</button>
      {quote && <p className="result">"{quote}"</p>}
    </div>
  );
}

export default QuoteGenerator;
