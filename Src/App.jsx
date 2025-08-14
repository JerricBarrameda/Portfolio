import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
// You can create Projects.jsx and Services.jsx similarly
import Projects from "./Projects";
import Services from "./Services";

export default function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <Router>
      {/* Navigation Bar */}
      <nav className="w-full bg-white dark:bg-gray-800 shadow-md py-4 px-6 flex justify-center gap-8 sticky top-0 z-50">
        <Link className="text-gray-800 dark:text-white hover:text-blue-500" to="/">Home</Link>
        <Link className="text-gray-800 dark:text-white hover:text-blue-500" to="/projects">Projects</Link>
        <Link className="text-gray-800 dark:text-white hover:text-blue-500" to="/services">Services</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      {/* Dark/Light Mode Switch */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 px-4 py-2 rounded-full shadow-md"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </Router>
  );
}
