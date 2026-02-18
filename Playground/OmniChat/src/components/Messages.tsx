import "./Messages.css";
export function Messages() {
  return (
    <>
      <div className="user-message-tile">
        <div className="user-message-header">You</div>
        <div className="user-message-container">
          <div className="message-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit
              amet consectetur adipiscing elit quisque faucibus.
            </p>
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc
              posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
              litora torquent per conubia nostra inceptos himenaeos. Lorem ipsum
              dolor sit amet consectetur adipiscing elit. Quisque faucibus ex
              sapien vitae pellentesque sem placerat. In id cursus mi pretium
              tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
              Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
              Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
              hendrerit semper vel class aptent taciti sociosqu. Ad litora
              torquent per conubia nostra inceptos himenaeos.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
