import "./CartItem.scss";

const cartItemDetails = (id, attribute, value) => {
  return <p key={id}>{`${attribute}: ${value}`}</p>;
};

const CartItem = ({ cartItem }) => {
  const {
    id,
    img,
    name,
    defaultPrice,
    Quantity,
    SetOption,
    RibbonColor,
    EnvelopeColor,
    PackSize,
    Length,
  } = cartItem;

  const cartItemAttributes = [
    { id, attribute: "Set Option", value: SetOption },
    { id, attribute: "Pack Size", value: PackSize },
    { id, attribute: "Length", value: Length },
    { id, attribute: "Ribbon Color", value: RibbonColor },
    { id, attribute: "Envelope Color", value: EnvelopeColor },
  ];

  return (
    <div className="cart-item-container">
      <img src={img} alt={name} />
      <div className="cart-item-details-container">
        <h5 className="cart-item-name">{name}</h5>
        <p>{`$${
          SetOption?.price || PackSize?.price || Length?.price || defaultPrice
        }.00 x ${Quantity}`}</p>
        {cartItemAttributes.map((cartItem) => {
          const { id, attribute, value } = cartItem;
          if (value) {
            if (value === (SetOption || PackSize || Length)) {
              return cartItemDetails(id, attribute, value.set);
            } else {
              return cartItemDetails(id, attribute, value);
            }
          }
        })}
      </div>
    </div>
  );
};

export default CartItem;
