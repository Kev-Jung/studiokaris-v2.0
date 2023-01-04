import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";
import CartItem from "../../CartItem/CartItem";
import Button from "../Button/Button";
import "./CartDropdown.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div id="cart-dropdown">
      {cartItems.length === 0 && (
        <span className="empty-cart">Your cart is currently empty.</span>
      )}

      <div className="cart-items-container">
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />;
        })}
      </div>

      <div className="checkout-btn">
        <Button buttonType="addToCart">Checkout</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
