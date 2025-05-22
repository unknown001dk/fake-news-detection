import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CheckNews from "./pages/CheckNews";
import TrueNews from "./pages/TrueNews";
import FakeNews from "./pages/FakeNews";
import AddNews from "./pages/AddTrueNews";


function App() {
  return (
    <Router>
      <div style={styles.container}>
        <nav style={styles.navbar}>
          <h2>Fake News Detection</h2>
          <div>
            <Link to="/" style={styles.link}>
              Home
            </Link>
            <Link to="/check-news" style={styles.link}>
              Check News
            </Link>
            <Link to="/true-news" style={styles.link}>
              ✅ View True News
            </Link>
            <Link to="/fake-news" style={styles.link}>
              🚨 View Fake News
            </Link>
            <Link to="/add-news" style={styles.link}>
              🚨 ADd News
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/check-news" element={<CheckNews />} />
          <Route path="/true-news" element={<TrueNews />} />
          <Route path="/fake-news" element={<FakeNews />} />
          <Route path="/add-news" element={<AddNews />} />

        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignitems: "center",
    padding: "15px 30px",
    background: "#007BFF",
    color: "#fff",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    margin: "0 15px",
    fontSize: "18px",
  },
};

export default App;
