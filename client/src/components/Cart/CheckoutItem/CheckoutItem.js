import "./CheckoutItem.scss";

import { useContext, useEffect } from "react";
import { CartContext } from "../../../contexts/CartContext";

import CloseBtn from "../../ui/CloseBtn/CloseBtn";
import Dropdown from "../../ui/Dropdown/Dropdown";
import CartAttribute from "../CartAttributes/CartAttributes";

const CheckoutItem = ({ checkoutItem }) => {
  const { removeCartItem, editCartItem } = useContext(CartContext);

  const { id, img, name, price, total, Quantity } = checkoutItem;

  const onQuantityChange = (e) => {
    const newQty = Number(e.target.value);
    editCartItem(id, "Quantity", newQty);
  };

  useEffect(() => {
    editCartItem(id, "total", price * Quantity);
  }, [Quantity]);

  return (
    <div className="cart-checkout-item">
      <h4 className="cart-checkout-item-title">{name}</h4>
      <div className="checkout-details-container">
        <img src={img} alt={name} />
        <div className="checkout-details">
          <CartAttribute id={id} product={checkoutItem} />

          <div className="checkout-qty-container">
            <Dropdown
              value={Quantity}
              onChange={onQuantityChange}
              options={[...Array(25 + 1).keys()].slice(1)}
            />
          </div>
          <p className="item-total">${total}.00</p>
        </div>
      </div>
      <div className="close-btn" onClick={() => removeCartItem(id)}>
        <CloseBtn />
      </div>
    </div>
  );
};

export default CheckoutItem;
