import "./ProductDisplayPage.scss";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import Dropdown from "../ui/Dropdown/Dropdown";
import Button from "../ui/Button/Button";
import { CartContext } from "../../contexts/CartContext";

const ProductDisplayPage = () => {
  const { products } = useContext(ProductsContext);
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
  } = products.find((product) => product.id === id);

  const dropdownTypes = [
    { label: "Set Option", options: defaultSetOption },
    { label: "Set Option", options: personalizedSetOption },
    { label: "Ribbon Color", options: ribbonColor },
    { label: "Envelope Color", options: envelopeColor },
    { label: "Pack Size", options: packSize },
    { label: "Length", options: length },
  ];

  const { addCartItem } = useContext(CartContext);

  const [productPrice, setProductPrice] = useState(price);
  const [productSpecs, setProductSpecs] = useState({
    id,
    img,
    name,
    defaultPrice: price,
    Quantity: 1,
  });
  const [personalizationMessage, setPersonalizationMessage] = useState("");

  const handlePersonalizationMessageChange = (e) => {
    setPersonalizationMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    personalizationMessage !== ""
      ? addCartItem({ ...productSpecs, personalizationMessage })
      : addCartItem({ ...productSpecs });
  };

  // updating productSpecs will trigger useEffect to update productPrice resulting in 2 renders for every select option change
  const handleDropdownChange = (e, key) => {
    setProductSpecs({ ...productSpecs, [key]: JSON.parse(e.target.value) });
  };

  // Updates PDP price based on custom option (SetOption, PackSize, Length) user selects
  useEffect(() => {
    productSpecs.SetOption && setProductPrice(productSpecs.SetOption.price);
    productSpecs.PackSize && setProductPrice(productSpecs.PackSize.price);
    productSpecs.Length && setProductPrice(productSpecs.Length.price);
  }, [productSpecs]);

  return (
    <section id="product-display-page">
      <div className="product-image">
        <img src={img} alt={name} />
      </div>

      <div className="product-description">
        <h3 className="name">{name}</h3>
        <h3 className="price">{`$${productPrice}.00`}</h3>
        <form className="dropdown-container" onSubmit={handleSubmit}>
          {/* ---------- Variable Product Dropdowns ----------  */}
          {dropdownTypes.map((dropdown, index) => {
            return (
              dropdown.options && (
                <Dropdown
                  key={index}
                  label={dropdown.label}
                  options={dropdown.options}
                  handleDropdownChange={handleDropdownChange}
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
              handleDropdownChange={handleDropdownChange}
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
                handleDropdownChange={handleDropdownChange}
                handlePersonalizationMessageChange={
                  handlePersonalizationMessageChange
                }
                personalizationMessage={personalizationMessage}
              />
            )}

          {collection === "cards" &&
            personalized === true &&
            type === "thank you" && (
              <Dropdown
                label="Add Your Personalization"
                instructions="Please enter your names and wedding date for your cards."
                handleDropdownChange={handleDropdownChange}
                handlePersonalizationMessageChange={
                  handlePersonalizationMessageChange
                }
                personalizationMessage={personalizationMessage}
              />
            )}
          {/* -------------------------------------------------- */}

          {/* Quantity */}
          {!bulk && (
            <Dropdown
              label="Quantity"
              optionDefaultValue={1}
              options={[...Array(50 + 1).keys()].slice(1)}
              handleDropdownChange={handleDropdownChange}
            />
          )}

          <div className="add-to-cart-btn">
            <Button buttonType="addToCart">Add to Cart</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProductDisplayPage;
