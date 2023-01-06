import CartItem from "../../CartItem/CartItem";
import "./Modal.scss";
import { useContext } from "react";
import { ModalContext } from "../../../contexts/ModalContext";
import CloseBtn from "../CloseBtn/CloseBtn";
import Button from "../Button/Button";
import { CartContext } from "../../../contexts/CartContext";

const Modal = ({ cartItem }) => {
  const { closeModal } = useContext(ModalContext);
  const { cartItems } = useContext(CartContext);

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <span className="modal-close-btn" onClick={closeModal}>
          <CloseBtn className="dark" />
        </span>
        <h3 className="modal-title">Added to Cart!</h3>
        <CartItem cartItem={cartItem} />
        <div className="modal-btn-group">
          <Button buttonType="addToCart">View Cart ({cartItems.length})</Button>
          <Button buttonType="default" onClick={closeModal}>
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
