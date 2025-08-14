import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Services from "./Services";
import Contact from "./Contact";

export default function App() {
  const [dark, setDark] = useState(false);

  // Inject Ko-fi widget script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.kofiWidgetOverlay) {
        window.kofiWidgetOverlay.draw("jerricbarrameda", {
          type: "floating-chat",
          "floating-chat.donateButton.text": "Support me",
          "floating-chat.donateButton.background-color": "#323842",
          "floating-chat.donateButton.text-color": "#fff",
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={dark ? "dark" : ""}>
      <Router>
        {/* Top Navigation Bar */}
        <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex justify-center p-4 space-x-6">
            <Link to="/" className="text-blue-600 dark:text-blue-400 hover:text-blue-500">Home</Link>
            <Link to="/projects" className="text-blue-600 dark:text-blue-400 hover:text-blue-500">Projects</Link>
            <Link to="/services" className="text-blue-600 dark:text-blue-400 hover:text-blue-500">Services</Link>
            <Link to="/contact" className="text-blue-600 dark:text-blue-400 hover:text-blue-500">Contact</Link>
          </div>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Bottom Controls */}
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-2">
          {/* Dark/Light Mode Switch */}
          <button
            onClick={() => setDark(!dark)}
            className={`w-12 h-6 rounded-full relative transition-colors ${dark ? "bg-gray-600" : "bg-blue-600"}`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform ${dark ? "translate-x-6" : "translate-x-0"}`}
            ></span>
          </button>
          {/* Ko-fi widget will appear automatically */}
        </div>
      </Router>
    </div>
  );
}
