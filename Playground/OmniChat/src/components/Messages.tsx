import "./Messages.css";
export function Messages() {
  return (
    <>
      <div className="user-message-tile">
        <div className="user-message-header">You</div>
        <div className="user-message-container">
          <div className="message-content">
            <p>Hello There</p>
          </div>
          <div className="sender-pfp">
            <img src="pfp.jpeg" />
          </div>
        </div>
      </div>
      <div className="message-tile">
        <div className="message-header">Pietie Pooh</div>
        <div className="message-container">
          <div className="sender-pfp">
            <img src="donut.png" />
          </div>
          <div className="message-content">
            <p>Latest Message</p>
          </div>
        </div>
      </div>
    </>
  );
}
