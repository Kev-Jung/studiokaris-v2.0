import Button from "../Button/Button";
import "./CartDropdown.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="checkout-btn-container">
        <Button buttonType="default">Checkout</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
