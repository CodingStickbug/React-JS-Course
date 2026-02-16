import { useState, useEffect, useRef } from "react";
import { Chatbot } from "supersimpledev";
import { ChatInput } from "./componants/ChatInput";
import ChatMessages from "./componants/ChatMessages";
import "./App.css";

function App() {
  const messagesRef = useRef(null);
  const inputAbove = false;
  const [chatMessages, setChatMessages] = useState(
    JSON.parse(localStorage.getItem("messages")) || [],
  );

  useEffect(() => {
    Chatbot.addResponses({ Clanker: "That's mean!" });
  }, []);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(chatMessages));
  }, chatMessages);

  return (
    <div className="main-app">
      {inputAbove && (
        <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      )}
      {chatMessages.length === 0 && (
        <div className="welcome-text">
          Welcome to the Chat-Bot project! Send a message to get started
        </div>
      )}
      <ChatMessages chatMessages={chatMessages} ref={messagesRef} />
      {!inputAbove && (
        <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      )}
    </div>
  );
}

export default App;
