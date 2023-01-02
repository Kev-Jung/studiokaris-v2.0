import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  const { id, name, img, price } = product;
  return (
    <Link to={id} className="card" onClick={() => console.log(id)}>
      <img src={img} alt={name} title={name} />
      <div className="product-info">
        <h4 className="name">{name}</h4>
        <span className="price">{`$${price}.00`}</span>
      </div>
    </Link>
  );
};

export default Card;
