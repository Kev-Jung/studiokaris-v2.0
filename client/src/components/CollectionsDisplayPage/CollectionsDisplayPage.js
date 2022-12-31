import "./CollectionsDisplayPage.scss";
import Card from "../ui/Card/Card";

const CollectionsDisplayPage = ({ data, title }) => {
  return (
    <section id="collections-display-page">
      <h3 className="collection-display-page-title">{`${title} Collection`}</h3>
      <div className="collections-display-page-container">
        {data.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
};

export default CollectionsDisplayPage;
