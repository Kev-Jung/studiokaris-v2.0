import "./Button.scss";

const BUTTON_TYPE_CLASSES = {
  default: "default",
  inverted: "inverted",
  addToCart: "add-to-cart",
};

const Button = ({ children, buttonType }) => {
  return (
    <button className={`button ${BUTTON_TYPE_CLASSES[buttonType]}`}>
      {children}
    </button>
  );
};

export default Button;
