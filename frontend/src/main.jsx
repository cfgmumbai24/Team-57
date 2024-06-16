import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { AuthContextProvider } from "./contexts/AuthContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
