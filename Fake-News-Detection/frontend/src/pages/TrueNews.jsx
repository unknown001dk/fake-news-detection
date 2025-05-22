import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function TrueNews() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/true_news")
      .then(response => {
        setNews(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error fetching true news.");
        setLoading(false);
      });
  }, []);

  return (
    <div style={styles.container}>
      <h1>✅ Verified True News</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={styles.error}>{error}</p>}
      <ul style={styles.list}>
        {news.map((article, index) => (
          <li key={index} style={styles.item}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
      <Link to="/" style={styles.button}>🏠 Back to Home</Link>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  list: {
    textAlign: "left",
    listStyleType: "none",
    padding: "0",
  },
  item: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
    marginBottom: "10px",
  },
  error: {
    color: "red",
  },
  button: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    background: "#28A745",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
  },
};

export default TrueNews;
