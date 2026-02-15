import { useState } from "react";
import "./TextFields.css"

export function TextField(props) {
  return (
    <div>
      <input placeholder={props.placeholder} className="TextField" />
    </div>
  );
}
export function PasswordTextField(props) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  function togglePasswordVisible() {
    setPasswordVisible(!passwordVisible);
  }
  return (
    <div>
      <input
        placeholder={props.placeholder}
        className="TextField"
        type={passwordVisible ? "text" : "password"}
      />
      <button onClick={togglePasswordVisible}>
        {passwordVisible ? "Hide" : "Show"}
      </button>
    </div>
  );
}
