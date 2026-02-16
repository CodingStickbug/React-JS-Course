import { useState } from "react";
import { Chatbot } from "supersimpledev";
import dayjs from "dayjs";
import "./ChatInput.css";

export function ChatInput({ setChatMessages, chatMessages }) {
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  function SaveInputText(event) {
    setInputText(event.target.value);
  }

  async function SendMessage() {
    if (loading || inputText === "") {
      return;
    } else {
      setLoading(true);
      const newChatMessages = [
        ...chatMessages,
        {
          message: inputText,
          sender: "user",
          id: crypto.randomUUID(),
          sent_at: dayjs(dayjs().valueOf()).format("HH:mm"),
        },
      ];
      setChatMessages(newChatMessages);
      setInputText("");

      setChatMessages([
        ...newChatMessages,
        {
          message: (
            <img
              src="https://supersimple.dev/images/loading-spinner.gif"
              className="loading-spinner"
            />
          ),
          sender: "clanker",
          id: crypto.randomUUID(),
        },
      ]);
      const response = await Chatbot.getResponseAsync(inputText);
      setChatMessages([
        ...newChatMessages,
        {
          message: response,
          sender: "clanker",
          id: crypto.randomUUID(),
          sent_at: dayjs(dayjs().valueOf()).format("HH:mm"),
        },
      ]);
    }
    setLoading(false);
  }
  
  function InputSubmitted(events) {
    if (events.key == "Enter" && !loading) {
      SendMessage();
    } else if (events.key == "Escape") {
      setInputText("");
    }
  }

  function ClearMessages() {
    localStorage.removeItem("messages");
    setChatMessages([]);
  }

  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        onKeyDown={InputSubmitted}
        value={inputText}
        placeholder="Message a Clanker"
        size="30"
        onChange={SaveInputText}
      />
      <button className="send-button" onClick={SendMessage}>
        Send
      </button>
      <button className="clear-button" onClick={ClearMessages}>
        Clear
      </button>
    </div>
  );
}
