import CartItemDetails from "../CartItemDetails/CartItemDetails";

const CartAttributes = ({ id, product }) => {
  const { SetOption, PackSize, RibbonColor, Length, EnvelopeColor } = product;

  const cartItemAttributes = [
    { id, attribute: "Set Option", value: SetOption },
    { id, attribute: "Pack Size", value: PackSize },
    { id, attribute: "Length", value: Length },
    { id, attribute: "Ribbon Color", value: RibbonColor },
    { id, attribute: "Envelope Color", value: EnvelopeColor },
  ];

  return (
    <>
      {cartItemAttributes.map((cartItem) => {
        const { attribute, value } = cartItem;
        return (
          value &&
          (value === (SetOption || PackSize || Length) ? (
            <CartItemDetails key={id} attribute={attribute} value={value.set} />
          ) : (
            <CartItemDetails key={id} attribute={attribute} value={value} />
          ))
        );
      })}
    </>
  );
};

export default CartAttributes;
