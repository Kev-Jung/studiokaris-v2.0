import "./TopSeller.scss";
import popular from "../../data/popular";
import Card from "../ui/Card/Card";

const TopSeller = () => {
  return (
    <section id="top-seller">
      <h3>Top Sellers</h3>
      <div className="carousel">
        {popular.map((item) => {
          return <Card key={item.name} product={item} />;
        })}
      </div>
    </section>
  );
};

export default TopSeller;
