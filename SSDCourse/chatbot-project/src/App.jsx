import { useState, useEffect } from "react";
import { Chatbot } from "supersimpledev";
import { ChatInput } from "./componants/ChatInput";
import ChatMessages from "./componants/ChatMessages";
import "./App.css";

function App() {
  const inputAbove = false;
  const [chatMessages, setChatMessages] = useState([]);
  useEffect(() => {
    console.log("Executed");
    Chatbot.addResponses({ Clanker: "That's mean!" });
  }, []);
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
      <ChatMessages chatMessages={chatMessages} />
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
