import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>
      <h1>📰 Welcome to Fake News Detection</h1>
      <p style={styles.description}>
        This AI-powered application helps detect **fake news** using **machine
        learning models**. Simply enter news text and get instant
        **predictions** on whether the news is **real or fake**.
      </p>

      {/* Image Section */}
      <img
        src="fake_news.jpg"
        alt="Fake News Detection"
        style={styles.image}
      />
      <div style={styles.flex}>
        <div style={styles.card}>
          {/* Why Fake News Detection? */}
          <h2>❓ Why Fake News Detection?</h2>
          <p style={styles.text}>
            Misinformation spreads rapidly on social media, causing confusion
            and harm. Our tool helps identify **misleading or false
            information**, ensuring you trust only reliable sources.
          </p>
        </div>

        <div style={styles.card}>
          {/* Features Section */}
          <h2>⚡ Key Features</h2>
          <ul style={styles.list}>
            <li>
              🔍 **Instant News Verification** – Get quick results with high
              accuracy.
            </li>
            <li>
              🤖 **AI & Machine Learning** – Uses NLP models for prediction.
            </li>
            <li>
              📊 **Multiple Model Support** – Compare results from different AI
              models.
            </li>
            <li>
              🌎 **User-Friendly Interface** – Simple & intuitive design for
              easy use.
            </li>
          </ul>
        </div>
      </div>

      <div style={styles.glassCard}>
        {/* How It Works */}
        <h2>🛠️ How It Works?</h2>
        <ol style={styles.list}>
          <li>📌 Enter the news text into the input box.</li>
          <li>
            📡 The AI model processes the text using **Natural Language
            Processing (NLP).**
          </li>
          <li>📊 You receive a **real vs. fake** prediction instantly.</li>
        </ol>
      </div>

      <div style={styles.glassCard}>

      {/* Technology Used */}
      <h2>🚀 Technologies Used</h2>
      <ul style={styles.list}>
        <li>
          ⚙️ **Machine Learning Models** – Logistic Regression, Naive Bayes,
          LSTM
        </li>
        <li>🧠 **Natural Language Processing (NLP)** – TF-IDF, Word2Vec</li>
        <li>📡 **Flask API** – Backend service for news classification</li>
        <li>🎨 **React.js** – Frontend development</li>
      </ul>
      </div>

      {/* Call-to-Action Button */}
      <Link to="/check-news" style={styles.button}>
        🔎 Check News Now
      </Link>
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
  description: {
    fontSize: "18px",
    margin: "20px 0",
    lineHeight: "1.6",
  },
  text: {
    fontSize: "16px",
    marginBottom: "20px",
    lineHeight: "1.5",
  },
  card: {
    backgroundColor: "#F8F9FA",
    height: "auto",
    width: "450px",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
  },
  glassCard: {
    backgroundColor: "#F8F9FA",
    height: "auto",
    // width: "450px",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    border: "1px solid #E9ECEF",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    padding: "20px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    lineHeight: "1.5",
    textAlign: "center",
    cursor: "pointer",
  },
  flex: {
    display: "flex",
    gap: "50px",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    margin: "20px 0",
  },
  list: {
    textAlign: "left",
    listStyleType: "none",
    padding: "0",
    margin: "20px auto",
  },
  button: {
    display: "inline-block",
    padding: "12px 20px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fff",
    background: "#007BFF",
    borderRadius: "5px",
    textDecoration: "none",
    marginTop: "20px",
  },
};

export default Home;
