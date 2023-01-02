import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  const value = { cart, isCartOpen, toggleIsCartOpen, cartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
