import { createContext, useState } from "react";

import VowbooksData from "../data/products/vowbooks";
import CardsData from "../data/products/cards";
import PaperRibbonData from "../data/products/paper";

export const ProductsContext = createContext({
  products: [],
  findProduct: () => {},
});

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([
    ...VowbooksData,
    ...CardsData,
    ...PaperRibbonData,
  ]);

  const findProduct = (id) => {
    return products.find((product) => product.id === id);
  };

  const value = {
    products,
    findProduct,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
