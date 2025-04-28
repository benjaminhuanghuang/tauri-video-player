import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";
import { ThemeContextProvider } from "./contexts/ThemeContextProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
