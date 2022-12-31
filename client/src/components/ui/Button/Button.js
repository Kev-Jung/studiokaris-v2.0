import "./Button.scss";

const BUTTON_TYPE_CLASSES = {
  default: "default",
  inverted: "inverted",
};

const Button = ({ children, buttonType }) => {
  return (
    <button className={`button ${BUTTON_TYPE_CLASSES[buttonType]}`}>
      {children}
    </button>
  );
};

export default Button;
