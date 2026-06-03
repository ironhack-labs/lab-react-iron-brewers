import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router
  future={{
    v7_relativeSplatPath:true,
    v7_startTransition: true,

  }}
  >
    <App />
  </Router>
);
