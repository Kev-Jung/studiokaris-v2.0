import "./CartDropdown.scss";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";

import CartItem from "../CartItem/CartItem";
import Button from "../../ui/Button/Button";

const CartDropdown = () => {
  const { numCartItems, cartItems } = useContext(CartContext);
  return (
    <div id="cart-dropdown">
      {numCartItems === 0 && (
        <span className="empty-cart">Your cart is currently empty.</span>
      )}

      <div className="cart-items-container">
        {cartItems.map((cartItem) => {
          const { id, img, name, Quantity } = cartItem;
          return (
            <CartItem
              key={id}
              img={img}
              name={name}
              quantity={Quantity}
              otherProps={cartItem}
            />
          );
        })}
      </div>

      <Link to="/cart">
        <div className="checkout-btn">
          <Button buttonType="addToCart">View Cart</Button>
        </div>
      </Link>
    </div>
  );
};

export default CartDropdown;
