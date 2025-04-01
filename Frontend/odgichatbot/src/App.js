import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Chatbot from "./Component/Chatbot";
import "./App.css"

function App() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  return (
    <Router>
      {/* Toggle Button for Chatbot */}
      <button className="chatbot-toggle-btn" onClick={toggleChatbot}>
        {isChatbotVisible ? "✖ Close Chatbot" : "💬 Open Chatbot"}
      </button>

      {/* Chatbot Display Based on State */}
      {isChatbotVisible && (
        <div className="chatbot-wrapper">
          <Chatbot />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dcc" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;