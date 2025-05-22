import React, { useState } from "react";
import axios from "axios";

function CheckNews() {
  const [newsText, setNewsText] = useState("");
  const [predictions, setPredictions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!newsText.trim()) {
      setError("Please enter news text.");
      return;
    }

    setLoading(true);
    setError("");
    setPredictions(null);
    setMessage("");

    try {
      const response = await axios.post("http://127.0.0.1:5000/predict", {
        text: newsText,
      });
      setPredictions(response.data);
    } catch (err) {
      setError("Error fetching prediction. Make sure the API is running.");
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h1>Check News Authenticity</h1>
      <textarea
        style={styles.textarea}
        rows="5"
        placeholder="Enter news text here..."
        value={newsText}
        onChange={(e) => setNewsText(e.target.value)}
      />
      <button style={styles.button} onClick={handleSubmit} disabled={loading}>
        {loading ? "Checking..." : "Check News"}
      </button>
      {error && <p style={styles.error}>{error}</p>}
      {message && <p style={styles.success}>{message}</p>}
      {predictions && (
        <div style={styles.result}>
          <h2>Predictions:</h2>
          <ul>
            {Object.entries(predictions).map(([model, result]) => (
              <li key={model}>
                <strong>{model}:</strong> {result}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    textAlign: "center",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    fontSize: "18px",
    cursor: "pointer",
    background: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    margin: "5px",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
  success: {
    color: "green",
    marginTop: "10px",
  },
  result: {
    marginTop: "20px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    textAlign: "left",
    background: "#f9f9f9",
  },
};

export default CheckNews;
