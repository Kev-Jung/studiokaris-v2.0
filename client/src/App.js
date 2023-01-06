import "./App.scss";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import ScrollToTop from "./components/helpers/ScrollToTop";
import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import { NavMenuContext } from "./contexts/NavMenuContext";
import Vowbooks from "./pages/Vowbooks";
import Cards from "./pages/Cards";
import Paper from "./pages/Paper";
import ProductDisplayPage from "./components/ProductDisplayPage/ProductDisplayPage";
import { CartContext } from "./contexts/CartContext";

function App() {
  const { isMenuOpen, closeMenu } = useContext(NavMenuContext);
  const { setIsCartOpen } = useContext(CartContext);

  document.body.addEventListener("click", () => {
    closeMenu();
    setIsCartOpen(false);
  });

  return (
    <>
      <ScrollToTop />
      {/* Todo: Fix overlay persisting when screen size greater than 1024px */}
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
          {/* Create a Route for 404 */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
