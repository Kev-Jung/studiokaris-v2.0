import "./Cart.scss";
import CartIcon from "../../../assets/svgs/cart.svg";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";

const Cart = () => {
  const { cartItems, toggleIsCartOpen } = useContext(CartContext);

  return (
    <div className="cart-container" onClick={toggleIsCartOpen}>
      <img className="cart" src={CartIcon} alt="checkout-cart" />
      <div className="cart-items">{cartItems.length}</div>
    </div>
  );
};

export default Cart;
