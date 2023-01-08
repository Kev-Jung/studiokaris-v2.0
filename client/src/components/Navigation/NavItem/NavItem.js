import "./NavItem.scss";

import { useState } from "react";
import { Link } from "react-router-dom";

const NavItem = ({ name, link, containsCategories, subCategories }) => {
  const [expand, setExpand] = useState(false);

  window.addEventListener("resize", () => {
    window.innerWidth >= 1024 && setExpand(false);
  });

  return (
    <li className={`nav-item ${containsCategories && "category"}`}>
      <div className="link-container" onClick={() => setExpand(!expand)}>
        <Link to={link} className="link">
          {name}
        </Link>
        {/* {containsCategories && (
          <span
            className="expand-btn"
            style={{ transform: expand && "rotate(135deg)" }}
          >
            +
          </span>
        )} */}
      </div>
      {/* {containsCategories && (
        <ul className="sub-category">
          {subCategories.map((category) => (
            <li style={{ display: expand && "block" }}>{category}</li>
          ))}
        </ul>
      )} */}
    </li>
  );
};

export default NavItem;
