import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import "./ChatMessages.css";

function ChatMessages({ chatMessages }) {
  //  const [chatMessages, setChatMessages] = array;
  const chatMessagesRef = useRef(null);
  useAutoScroll();
  function useAutoScroll(dependancies) {
    useEffect(() => {
      const containerElem = chatMessagesRef.current;
      if (containerElem) {
        containerElem.scrollTop = containerElem.scrollHeight;
      }
    }, dependancies);
    return chatMessagesRef;
  }
  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {" "}
      {chatMessages.map((message) => {
        return (
          <ChatMessage
            message={message.message}
            sender={message.sender}
            key={message.id}
          />
        );
      })}{" "}
    </div>
  );
}

export default ChatMessages;
