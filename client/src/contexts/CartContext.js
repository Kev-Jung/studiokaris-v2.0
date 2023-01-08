import { createContext, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  isCartOpen: false,
  setIsCartOpen: () => {},
  findCartItem: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  editCartItem: () => {},
  cartSubtotal: 0,
});

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleIsCartOpen = (e) => {
    e.stopPropagation();
    setIsCartOpen(!isCartOpen);
  };

  const numCartItems = cartItems.length;

  const cartSubtotal = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.total;
  }, 0);

  const findCartItem = (productToFind) => {
    return cartItems.find((cartItem) => cartItem.id === productToFind);
  };

  const addCartItem = (productToAdd) => {
    setCartItems([...cartItems, productToAdd]);
  };

  const removeCartItem = (productToRemove) => {
    setCartItems(
      cartItems.filter((cartItem) => cartItem.id !== productToRemove)
    );
  };

  const editCartItem = (productToEdit, key, value) => {
    setCartItems(
      cartItems.map((cartItem) => {
        if (cartItem.id === productToEdit) {
          return { ...cartItem, [key]: value };
        } else {
          return cartItem;
        }
      })
    );
  };

  const value = {
    cartItems,
    numCartItems,
    findCartItem,
    addCartItem,
    removeCartItem,
    isCartOpen,
    setIsCartOpen,
    toggleIsCartOpen,
    setCartItems,
    editCartItem,
    cartSubtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
