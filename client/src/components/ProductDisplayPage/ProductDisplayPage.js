import "./ProductDisplayPage.scss";

import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { ProductsContext } from "../../contexts/ProductsContext";
import { CartContext } from "../../contexts/CartContext";
import { ModalContext } from "../../contexts/ModalContext";

import Dropdown from "../ui/Dropdown/Dropdown";
import Button from "../ui/Button/Button";
import Modal from "../ui/Modal/Modal";
import TopSeller from "../TopSeller/TopSeller";

const ProductDisplayPage = () => {
  const { findProduct } = useContext(ProductsContext);

  const id = useParams().id;
  const {
    img,
    name,
    price,
    type,
    defaultSetOption,
    personalizedSetOption,
    collection,
    ribbonColor,
    envelopeColor,
    packSize,
    length,
    personalized,
    customName,
    bulk,
  } = findProduct(id);

  const PDPDropdownTypes = [
    { id, label: "Set Option", options: defaultSetOption },
    { id, label: "Set Option", options: personalizedSetOption },
    { id, label: "Ribbon Color", options: ribbonColor },
    { id, label: "Envelope Color", options: envelopeColor },
    { id, label: "Pack Size", options: packSize },
    { id, label: "Length", options: length },
  ];

  const initialProductSpecValue = {
    id,
    img,
    name,
    price,
    Quantity: 1,
    AddYourPersonalization: "",
    total: 0,
    // dynamically adds SetOption, PackSize, or Length depending on if the dropdown has it
  };

  const { addCartItem } = useContext(CartContext);
  const { isModalOpen, openModal } = useContext(ModalContext);
  const [productPrice, setProductPrice] = useState(price);
  const [productSpecs, setProductSpecs] = useState(initialProductSpecValue);

  // Updates PDP price based on custom option (SetOption, PackSize, Length) user selects
  useEffect(() => {
    productSpecs.SetOption && setProductPrice(productSpecs.SetOption.price);
    productSpecs.PackSize && setProductPrice(productSpecs.PackSize.price);
    productSpecs.Length && setProductPrice(productSpecs.Length.price);
  }, [productSpecs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate that required dropdowns are selected, should not read default 'Select an option'
    const productDropdownValues = Array.from(e.target.elements);
    // remove the button element from array
    productDropdownValues.pop();
    const values = productDropdownValues.map((select) => select.value);
    if (values.some((value) => value === "Select an option" || value === "")) {
      alert("Please fill out required fields");
    } else {
      openModal();
      addCartItem({
        id: uuid(),
        ...productSpecs,
        price: productPrice,
        total: productPrice * Number(productSpecs.Quantity),
      });
    }
  };

  // updating productSpecs will trigger useEffect to update productPrice resulting in 2 renders for every select option change
  const handleChange = (e) => {
    const { name, value } = e.target;
    // This is required because select option values only take strings. But the SetOption, PackSize, Length takes in
    // an object which we converted to JSON. So we need to use JSON.parse to convert back into an object so we can access
    // the properties.
    const containsDropdownAttribute = [
      "SetOption",
      "PackSize",
      "Length",
    ].includes(name);

    containsDropdownAttribute
      ? setProductSpecs({
          ...productSpecs,
          [name]: JSON.parse(value),
        })
      : setProductSpecs({
          ...productSpecs,
          [name]: value,
        });
  };

  return (
    <>
      {isModalOpen && <Modal productId={productSpecs.id} />}
      <section id="product-display-page">
        <img className="product-image" src={img} alt={name} />

        <div className="product-description">
          <h3 className="name">{name}</h3>
          <h3 className="price">{`$${productPrice}.00`}</h3>

          <form className="dropdown-container" onSubmit={handleSubmit}>
            {/* ---------- Variable Product Dropdowns ----------  */}
            {PDPDropdownTypes.map((dropdown, id) => {
              return (
                dropdown.options && (
                  <Dropdown
                    key={id}
                    label={dropdown.label}
                    options={dropdown.options}
                    onChange={handleChange}
                    value="Select an option"
                    required={true}
                  />
                )
              );
            })}

            {/* ----- Custom Personalizations ----- */}
            {/* Vow Books */}
            {collection === "vowbooks" && personalized === true && (
              <Dropdown
                label="Add Your Personalization"
                instructions={
                  customName
                    ? "Please enter your names and date in this format: Dominic, Janet, 05.21.2022"
                    : "Please enter your wedding date for personalization. For ex: 10.15.2022"
                }
                onChange={handleChange}
                value={productSpecs.AddYourPersonalization}
                required={true}
              />
            )}

            {/* Cards */}
            {collection === "cards" &&
              personalized === true &&
              type === "wedding" && (
                <Dropdown
                  label="Add Your Personalization"
                  instructions={
                    customName
                      ? "Please enter the names and titles for personalization. For ex: maid of honor - Iris, bridesmaid - Alaina, Hazel"
                      : "Please enter the titles and quantities for your cards. For ex: maid of honor - 1, bridesmaid - 3"
                  }
                  onChange={handleChange}
                  value={productSpecs.AddYourPersonalization}
                  required={true}
                />
              )}

            {collection === "cards" &&
              personalized === true &&
              type === "thank you" && (
                <Dropdown
                  label="Add Your Personalization"
                  instructions="Please enter your names and wedding date for your cards."
                  onChange={handleChange}
                  value={productSpecs.AddYourPersonalization}
                  required={true}
                />
              )}
            {/* -------------------------------------------------- */}

            {/* Quantity */}
            {!bulk && (
              <Dropdown
                label="Quantity"
                required={false}
                options={[...Array(25 + 1).keys()].slice(1)}
                onChange={handleChange}
              />
            )}

            <div className="add-to-cart-btn">
              <Button buttonType="addToCart">Add to Cart</Button>
            </div>
          </form>
        </div>
      </section>
      <TopSeller />
    </>
  );
};

export default ProductDisplayPage;
