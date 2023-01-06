import "./Button.scss";

const BUTTON_TYPE_CLASSES = {
  default: "default",
  inverted: "inverted",
  addToCart: "add-to-cart",
};

const Button = ({ children, buttonType, onClick }) => {
  return (
    <button
      className={`button ${BUTTON_TYPE_CLASSES[buttonType]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
