import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  isCartOpen: false,
  setIsCartOpen: () => {},
  addCartItem: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleIsCartOpen = (e) => {
    e.stopPropagation();
    setIsCartOpen(!isCartOpen);
  };

  const addCartItem = (productToAdd) => {
    setCartItems([...cartItems, productToAdd]);
  };

  const value = {
    cartItems,
    addCartItem,
    isCartOpen,
    toggleIsCartOpen,
    setIsCartOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
