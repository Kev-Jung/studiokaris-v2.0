import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navigation/Navbar/Navbar";

const Layout = () => {
  return (
    <>
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
