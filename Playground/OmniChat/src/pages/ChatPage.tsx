import { Chats } from "../components/Chats";
import { Messages } from "../components/Messages";
import "./ChatPage.css";
export function OmniChat() {
  return (
    <div className="main-content">
      <div className="chats-section">
        <div className="chats-header">
          <h1>Chats</h1>
          <input />
          <button>+</button>
        </div>
        <Chats />
      </div>
      <div className="conversation-section">
        <div className="conversation-header">
          <img src="donut.png" alt="Profile Picture" />
          <h1>Pietie Pooh</h1>
          <button>
            <h1>...</h1>
          </button>
        </div>
        <div className="conversation-body">
            <Messages />
          <div className="conversation-input-section">
            <input placeholder="your message here" />
            <button>{"-->"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
