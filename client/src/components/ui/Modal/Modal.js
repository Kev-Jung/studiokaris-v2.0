import "./Modal.scss";

import { useContext } from "react";
import { ModalContext } from "../../../contexts/ModalContext";
import { CartContext } from "../../../contexts/CartContext";
import { Link } from "react-router-dom";

import CloseBtn from "../CloseBtn/CloseBtn";
import Button from "../Button/Button";
import CartItem from "../../Cart/CartItem/CartItem";

const Modal = ({ productId }) => {
  const { closeModal } = useContext(ModalContext);
  const { numCartItems, findCartItem } = useContext(CartContext);

  const { img, name, Quantity } = findCartItem(productId);

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <span className="close-btn" onClick={closeModal}>
          <CloseBtn className="dark" />
        </span>
        <h3 className="modal-title">Added to Cart!</h3>
        <CartItem
          img={img}
          name={name}
          quantity={Quantity}
          otherProps={false}
        />
        <div className="modal-btn-group">
          <Link to="/cart">
            <Button buttonType="addToCart" onClick={closeModal}>
              View Cart ({numCartItems})
            </Button>
          </Link>
          <Button buttonType="default" onClick={closeModal}>
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
