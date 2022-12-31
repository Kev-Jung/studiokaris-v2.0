import "./Card.scss";

const Card = ({ product }) => {
  const { name, img, price } = product;
  return (
    <div className="card">
      <img src={img} alt={name} title={name} />
      <div className="product-info">
        <h4 className="name">{name}</h4>
        <span className="price">{`$${price}.00`}</span>
      </div>
    </div>
  );
};

export default Card;
