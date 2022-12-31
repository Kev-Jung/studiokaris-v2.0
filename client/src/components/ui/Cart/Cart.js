import "./Cart.scss";
import CartIcon from "../../../assets/svgs/cart.svg";

const Cart = () => {
  return (
    <div className="cart-container">
      <img className="cart" src={CartIcon} alt="checkout-cart" />
      <div className="cart-items">0</div>
    </div>
  );
};

export default Cart;
