import { useState, createContext } from "react";

export const NavMenuContext = createContext({});

export const NavMenuContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const value = {
    isMenuOpen,
    openMenu,
    closeMenu,
  };

  return (
    <NavMenuContext.Provider value={value}>{children}</NavMenuContext.Provider>
  );
};
