import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navigation/Navbar/Navbar";
import FreeShippingBanner from "../components/FreeShippingBanner/FreeShippingBanner";

const Layout = () => {
  return (
    <>
      <FreeShippingBanner />
      <Navbar />
      <div
        className="navbar-padding"
        style={{
          paddingTop: "95px",
          backgroundColor: "#fff",
        }}
      ></div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
