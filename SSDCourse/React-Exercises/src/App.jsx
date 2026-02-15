import { TextField, PasswordTextField } from "./Components/TextFields";
import "./App.css";

function App() {
  return (
    <>
      <p>Welcome to my AMAZING website</p>
      <div className="Text-Fields-Container">
        <TextField></TextField>
        <PasswordTextField></PasswordTextField>
      </div>
      <div>
        <button className="login-button">Login</button>
        <button className="login-button">Sign Up</button>
      </div>
    </>
  );
}

export default App;
