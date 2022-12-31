import CollectionsDisplayPage from "../components/CollectionsDisplayPage/CollectionsDisplayPage";
import data from "../data/products/paper";

const Paper = () => {
  return (
    <CollectionsDisplayPage data={data} title="Handmade Paper & Ribbons" />
  );
};

export default Paper;
