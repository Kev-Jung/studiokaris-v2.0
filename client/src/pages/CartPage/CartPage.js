import "./CartPage.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CheckoutItem from "../../components/Cart/CheckoutItem/CheckoutItem";
import TopSeller from "../../components/TopSeller/TopSeller";
import EmptyCart from "../../components/Cart/EmptyCart/EmptyCart";
import Button from "../../components/ui/Button/Button";
import CheckoutSummary from "../../components/Cart/CheckoutSummary/CheckoutSummary";

const Cart = () => {
  const { numCartItems, cartItems } = useContext(CartContext);

  return (
    <>
      {numCartItems === 0 ? (
        <EmptyCart />
      ) : (
        <section id="cart-page">
          <div className="cart-checkout-container">
            <h3 className="checkout-title">
              Cart <hr />
            </h3>
            {cartItems.map((checkoutItem) => {
              return (
                <CheckoutItem
                  key={checkoutItem.id}
                  checkoutItem={checkoutItem}
                />
              );
            })}
          </div>
          <div className="cart-summary-container">
            <h3 className="checkout-title">Summary</h3>
            <CheckoutSummary />
            <Button
              buttonType="addToCart"
              onClick={() => alert("Thanks for viewing the demo!")}
            >
              Checkout
            </Button>
          </div>
        </section>
      )}
      <TopSeller />
    </>
  );
};

export default Cart;
