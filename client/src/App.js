import "./App.scss";

import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import { NavMenuContext } from "./contexts/NavMenuContext";
import { CartContext } from "./contexts/CartContext";

import Home from "./pages/Home";
import Layout from "./pages/Layout";
import ScrollToTop from "./components/helpers/ScrollToTop";
import Vowbooks from "./pages/Vowbooks";
import Cards from "./pages/Cards";
import Paper from "./pages/Paper";
import ProductDisplayPage from "./components/ProductDisplayPage/ProductDisplayPage";
import CartPage from "./pages/CartPage/CartPage";
import useWindowSize from "./hooks/useWindowSize";

function App() {
  const { isMenuOpen, closeMenu } = useContext(NavMenuContext);
  const { setIsCartOpen } = useContext(CartContext);
  const { width } = useWindowSize();

  document.body.addEventListener("click", () => {
    closeMenu();
    setIsCartOpen(false);
  });

  useEffect(() => {
    width >= 1024 && closeMenu();
  }, [width]);

  return (
    <>
      <ScrollToTop />
      <div className={isMenuOpen ? "overlay" : ""}></div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="vowbooks" element={<Vowbooks />}></Route>
          <Route path="vowbooks/:id" element={<ProductDisplayPage />} />

          <Route path="cards" element={<Cards />}></Route>
          <Route path="cards/:id" element={<ProductDisplayPage />} />

          <Route path="paper-ribbon" element={<Paper />}></Route>
          <Route path="paper-ribbon/:id" element={<ProductDisplayPage />} />

          <Route path="cart" element={<CartPage />} />

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
