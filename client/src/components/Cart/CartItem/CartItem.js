import "./CartItem.scss";
import CartAttributes from "../CartAttributes/CartAttributes";

const CartItem = ({ img, name, quantity, otherProps }) => {
  const { id, price } = otherProps;

  return (
    <div className="cart-item-container">
      <img src={img} alt={name} />
      <div className="cart-item-details-container">
        <h5 className="cart-item-name">{name}</h5>
        {price && <p>Price: ${price}.00</p>}
        <p>Quantity: {quantity}</p>
        <CartAttributes id={id} product={otherProps} />
      </div>
    </div>
  );
};

export default CartItem;
