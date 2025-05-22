import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AddNews() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [label, setLabel] = useState("TRUE"); // Default is "TRUE"
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setError("Title and content cannot be empty.");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:5000/add_news", {
        title,
        content,
        label,
      });


      setMessage(response.data.message);
      setTitle("");
      setContent("");
      setError("");
    } catch (err) {
      setError("Error adding news. Try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h1>📰 Add News</h1>
      {message && <p style={styles.success}>{message}</p>}
      {error && <p style={styles.error}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter News Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />
        <textarea
          rows="4"
          placeholder="Enter News Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={styles.textarea}
        />

        {/* Dropdown for selecting True or False News */}
        <select
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          style={styles.select}
        >
          <option value="TRUE">✅ True News</option>
          <option value="FALSE">❌ Fake News</option>
        </select>

        <button type="submit" style={styles.button}>
          Add News
        </button>
      </form>

      <Link to="/" style={styles.backButton}>🏠 Back to Home</Link>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "10px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
  },
  select: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    marginTop: "10px",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    fontSize: "18px",
    cursor: "pointer",
    background: "#28A745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
  },
  backButton: {
    display: "inline-block",
    marginTop: "20px",
    padding: "10px 20px",
    background: "#007BFF",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
  },
  success: {
    color: "green",
    marginTop: "10px",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
};

export default AddNews;
