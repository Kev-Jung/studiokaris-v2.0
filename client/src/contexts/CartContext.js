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

  console.log(cartItems);

  const toggleIsCartOpen = () => {
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
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
