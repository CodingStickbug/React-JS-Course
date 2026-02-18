import { Routes, Route } from "react-router";
import "./App.css";

import { YouTubePage } from "./pages/YouTubePage";
import { OmniChat } from "./pages/ChatPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<OmniChat />} />
        <Route path="/youtube" element={<YouTubePage />}/>
      </Routes>
    </>
  );
}

export default App;
