import robotProfileImage from "../assets/robot.png";
import userProfileImage from "../assets/pfp.jpeg";
import "./ChatMessage.css";

export function ChatMessage({ message, sender, sent_at }) {
  return (
    <div
      className={sender === "clanker" ? "clanker-container" : "user-container"}
    >
      {sender === "clanker" && (
        <img src={robotProfileImage} className="profile-image" />
      )}
      <text class="message-text-box">
        {message}
        <div className="message-subtitle">{sent_at}</div>
      </text>
      {sender === "user" && (
        <img src={userProfileImage} className="profile-image" />
      )}
    </div>
  );
}
