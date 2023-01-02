import CollectionsDisplayPage from "../components/CollectionsDisplayPage/CollectionsDisplayPage";
import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

const Vowbooks = () => {
  const { products } = useContext(ProductsContext);
  const data = products.filter((product) => product.collection === "vowbooks");

  return <CollectionsDisplayPage data={data} title="Vow Books" />;
};

export default Vowbooks;
