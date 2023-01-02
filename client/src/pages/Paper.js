import CollectionsDisplayPage from "../components/CollectionsDisplayPage/CollectionsDisplayPage";
import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

const Paper = () => {
  const { products } = useContext(ProductsContext);
  const data = products.filter((product) => product.collection === "paper");
  return (
    <CollectionsDisplayPage data={data} title="Handmade Paper & Ribbons" />
  );
};

export default Paper;
