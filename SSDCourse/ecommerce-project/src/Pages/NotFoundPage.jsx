import { AppBar } from "../components/AppBar";
import "./NotFoundPage.css";
export function NotFoundPage() {
  return (
    <>
      <AppBar />
      <title>404</title>
      <div className="main-content">
        <h1>404</h1>
        <p>Page not Found</p>
      </div>
    </>
  );
}
