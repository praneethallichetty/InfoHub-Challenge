import React, { useState } from "react";
import axios from "axios";

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState({ usd: "", eur: "" });

  const convertCurrency = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/currency?amount=${amount}`
      );
      setResult(response.data);
    } catch (error) {
      console.error("Error fetching currency:", error);
    }
  };

  return (
    <div className="card">
      <h2>💱 Currency Converter (INR → USD & EUR)</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount in INR"
      />
      <button onClick={convertCurrency}>Convert</button>

      {result.usd && (
        <p className="result">
          {amount} INR = {result.usd} USD | {result.eur} EUR
        </p>
      )}
    </div>
  );
}

export default CurrencyConverter;
