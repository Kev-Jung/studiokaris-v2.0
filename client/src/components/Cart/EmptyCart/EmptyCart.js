import "./EmptyCart.scss";

import { Link } from "react-router-dom";

import Button from "../../ui/Button/Button";

const EmptyCart = () => {
  return (
    <div className="empty-checkout">
      <h3 className="checkout-title">Your Cart is Empty</h3>
      <p>Let's find the Keepsake you'll love.</p>
      <Link to="/vowbooks">
        <Button buttonType="addToCart">Back to Shopping</Button>
      </Link>
    </div>
  );
};

export default EmptyCart;
