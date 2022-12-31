import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { NavMenuContextProvider } from "./contexts/NavMenuContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavMenuContextProvider>
        <App />
      </NavMenuContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
