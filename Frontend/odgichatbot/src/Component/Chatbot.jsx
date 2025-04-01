import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./css/Chatbot.css";

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([
    {
      sender: "bot",
      text: "Hello! I'm Omdayal Group of Institutions assistant chatbot, how can I help you today?",
      suggestions: ["About Omdayal Group of Institutions", "Messege from HOI","Admission Inquiry", "Infrastructure","Contact Us", "Program offers"]
    },
  ]);
  const [userInput, setUserInput] = useState("");

  const apiKey = process.env.REACT_APP_GEMINI_API_KEY || "API_KEY_NOT_FOUND";
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const fetchOpenAIResponse = async (input) => {
    try {
      const parts = [
        {
          text: `You are a chatbot for Omdayal Group of Institution. Here is the college information:
          College Name: Omdayal Group of Institution
          Principal: Dr. Yogesh Kumar Sinha
          Courses:
          - Computer Science Engineering: Fees ₹4,00,000
          - Civil Engineering: Fees ₹4,00,000
          - Electrical Engineering: Fees ₹4,00,000
          - Bachelor of Computer Application (BCA): Fees ₹2,50,000
          Answer only related to this college details. 
          Here is the user's query: ${input}`,
        },
      ];
      const result = await model.generateContent({
        contents: [{ role: "user", parts }],
        generationConfig: {
          temperature: 1,
          topP: 0.95,
          topK: 40,
          maxOutputTokens: 8192,
          responseMimeType: "text/plain",
        },
      });
      
      const responseText = result.response.text() || "I'm sorry, I couldn't fetch the response.";
      
      let newSuggestions = [];
      if (responseText.toLowerCase().includes("admission")) {
        newSuggestions = ["Admission Requirements", "Fee Structure", "Application Process"];
      } else if (responseText.toLowerCase().includes("courses")) {
        newSuggestions = ["Computer Science Engineering", "Civil Engineering", "BCA Details"];
      } else if (responseText.toLowerCase().includes("contact")) {
        newSuggestions = ["Email", "Phone Number", "Campus Location"];
      }
      
      return { text: responseText, suggestions: newSuggestions };
    } catch (error) {
      console.error("Error generating response:", error);
      return { text: "Sorry, there was an error processing your request.", suggestions: [] };
    }
  };

  const handleSend = async (inputText) => {
    if (!inputText.trim()) return;
    
    const userMessage = { sender: "user", text: inputText };
    const botResponse = await fetchOpenAIResponse(inputText);
    
    setChatHistory((prev) => [...prev, userMessage, { sender: "bot", text: botResponse.text, suggestions: botResponse.suggestions }]);
    setUserInput("");
  };

  return (
    <div className="chatbot-container">
      <div className="chatbox">
        {chatHistory.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
            {message.suggestions && message.suggestions.length > 0 && (
              <div className="button-container">
                {message.suggestions.map((buttonText, btnIndex) => (
                  <button key={btnIndex} onClick={() => handleSend(buttonText)}>{buttonText}</button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend(userInput)}
        />
        <button onClick={() => handleSend(userInput)}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
