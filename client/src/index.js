import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { NavMenuContextProvider } from "./contexts/NavMenuContext";
import { ProductsContextProvider } from "./contexts/ProductsContext";
import { CartContextProvider } from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <NavMenuContextProvider>
      <ProductsContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ProductsContextProvider>
    </NavMenuContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
