import "./CollectionsDisplayPage.scss";
import Card from "../ui/Card/Card";

const CollectionsDisplayPage = ({ data, title }) => {
  return (
    <section id="collections-display-page">
      <div className="collections-display-page-container">
        <h3 className="collection-display-page-title">{`${title} Collection`}</h3>
        <div className="collections-item-container">
          {data.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default CollectionsDisplayPage;
