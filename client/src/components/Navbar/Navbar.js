import "./Navbar.scss";

import { Link } from "react-router-dom";
import { NavMenuContext } from "../../contexts/NavMenuContext";
import { useContext, useEffect } from "react";

import Logo from "../../assets/sk_logo.png";
import HamburgerIcon from "../ui/HamburgerIcon/HamburgerIcon";
import CloseBtn from "../ui/CloseBtn/CloseBtn";
import NavItem from "../NavItem/NavItem";
import Cart from "../ui/Cart/Cart";

const Navbar = () => {
  const { isMenuOpen, openMenu, closeMenu } = useContext(NavMenuContext);

  useEffect(() => {
    const body = document.body;
    // closes navigation menu when clicking on body
    body.addEventListener("click", closeMenu);
    // prevents page from scrolling when navigation menu is open
    isMenuOpen
      ? body.classList.add("noscroll")
      : body.classList.remove("noscroll");

    return () => body.removeEventListener("click", closeMenu);
  }, [isMenuOpen]);

  return (
    <nav id="navbar" style={{ boxShadow: isMenuOpen ? "none" : "" }}>
      <Link to="/">
        <div className="logo-container">
          <img className="logo" src={Logo} alt="studiokaris logo" />
        </div>
      </Link>
      <div className="hamburger-container">
        <HamburgerIcon onClick={(e) => openMenu(e)} />
      </div>

      <ul
        className={`nav-links-container ${isMenuOpen ? "visible" : "hidden"}`}
      >
        <NavItem name="Home" link="/" />
        <NavItem name="Vow Books" link="vowbooks" />
        <NavItem
          name="Cards"
          link="cards"
          // containsCategories={true}
          // subCategories={["Couple", "Family", "Wedding", "Thank You"]}
        />
        <NavItem
          name="Paper & Ribbons"
          link="paper-ribbon"
          // containsCategories={true}
          // subCategories={["Handmade Paper", "Ribbons"]}
        />

        <CloseBtn className="nav-menu" onClick={closeMenu} />
      </ul>

      <Cart />
    </nav>
  );
};

export default Navbar;
