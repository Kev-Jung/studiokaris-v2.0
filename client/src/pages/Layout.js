import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div
        className="navbar-padding"
        style={{ paddingTop: "100px", backgroundColor: "#fff" }}
      ></div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
