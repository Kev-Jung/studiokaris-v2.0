import "./App.scss";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import ScrollToTop from "./components/helpers/ScrollToTop";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { NavMenuContext } from "./contexts/NavMenuContext";
import Vowbooks from "./pages/Vowbooks";
import Cards from "./pages/Cards";
import Paper from "./pages/Paper";

function App() {
  const { isMenuOpen } = useContext(NavMenuContext);

  return (
    <>
      <ScrollToTop />
      <div className={isMenuOpen ? "overlay" : ""}></div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="vowbooks" element={<Vowbooks />} />
          <Route path="cards" element={<Cards />} />
          <Route path="paper-ribbon" element={<Paper />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
