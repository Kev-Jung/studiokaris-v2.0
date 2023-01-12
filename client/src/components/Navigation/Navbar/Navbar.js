import "./Navbar.scss";

import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { NavMenuContext } from "../../../contexts/NavMenuContext";
import { CartContext } from "../../../contexts/CartContext";
import { ModalContext } from "../../../contexts/ModalContext";

import Logo from "../../../assets/sk_logo.png";
import HamburgerIcon from "../../ui/HamburgerIcon/HamburgerIcon";
import CloseBtn from "../../ui/CloseBtn/CloseBtn";
import NavItem from "../NavItem/NavItem";
import CartIcon from "../../ui/CartIcon/CartIcon";
import CartDropdown from "../../Cart/CartDropdown/CartDropdown";

const Navbar = () => {
  const { isMenuOpen, openMenu, closeMenu } = useContext(NavMenuContext);
  const { isCartOpen } = useContext(CartContext);
  const { isModalOpen } = useContext(ModalContext);

  useEffect(() => {
    isModalOpen || isMenuOpen
      ? document.body.classList.add("noscroll")
      : document.body.classList.remove("noscroll");
  }, [isModalOpen, isMenuOpen]);

  return (
    <nav id="navbar" style={{ boxShadow: isMenuOpen && "none" }}>
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
        <div className="nav-menu-close-btn">
          <CloseBtn className="light" onClick={closeMenu} />
        </div>
      </ul>

      <CartIcon />
      {isCartOpen && <CartDropdown />}
    </nav>
  );
};

export default Navbar;
