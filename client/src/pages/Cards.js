import CollectionsDisplayPage from "../components/CollectionsDisplayPage/CollectionsDisplayPage";
import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

const Cards = () => {
  const { products } = useContext(ProductsContext);
  const data = products.filter((product) => product.collection === "cards");

  return <CollectionsDisplayPage data={data} title="Cards" />;
};

export default Cards;
