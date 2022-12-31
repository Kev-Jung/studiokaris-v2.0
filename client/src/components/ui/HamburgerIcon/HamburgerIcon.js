import "./HamburgerIcon.scss";

const HamburgerIcon = ({ onClick }) => {
  return (
    <div className="hamburger-menu-icon" onClick={onClick}>
      <span className="line"></span>
    </div>
  );
};

export default HamburgerIcon;
