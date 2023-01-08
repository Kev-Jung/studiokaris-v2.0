import "./CheckoutSummary.scss";

import { useContext } from "react";
import { CartContext } from "../../../contexts/CartContext";

import SummaryRow from "../SummaryRow/SummaryRow";

const CheckoutSummary = () => {
  const { cartSubtotal } = useContext(CartContext);

  return (
    <div className="summary">
      <SummaryRow item="Subtotal" value={cartSubtotal} />
      <SummaryRow item="Shipping" value="TBD" />
      <SummaryRow item="Tax" value="TBD" />
      <hr />
      <SummaryRow item="Total" value={cartSubtotal} />
    </div>
  );
};

export default CheckoutSummary;
