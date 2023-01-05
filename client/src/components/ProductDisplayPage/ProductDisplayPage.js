import "./ProductDisplayPage.scss";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import Dropdown from "../ui/Dropdown/Dropdown";
import Button from "../ui/Button/Button";
import { CartContext } from "../../contexts/CartContext";
import TopSeller from "../TopSeller/TopSeller";

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
    { id, label: "Set Option", options: defaultSetOption },
    { id, label: "Set Option", options: personalizedSetOption },
    { id, label: "Ribbon Color", options: ribbonColor },
    { id, label: "Envelope Color", options: envelopeColor },
    { id, label: "Pack Size", options: packSize },
    { id, label: "Length", options: length },
  ];

  const { addCartItem } = useContext(CartContext);
  const [productPrice, setProductPrice] = useState(price);
  const [productSpecs, setProductSpecs] = useState({
    id,
    img,
    name,
    defaultPrice: price,
    Quantity: 1,
    // SetOption: undefined,
    // RibbonColor: undefined,
    // EnveloperColor: undefined,
    // PackSize: undefined,
    // Length: undefined,
    AddYourPersonalization: "",
    // dynamically adds SetOption, PackSize, or Length depending on if the dropdown has it
  });
  const [addedToCart, setAddedToCart] = useState(false);

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
    values.some((value) => value === "Select an option" || value === "")
      ? alert("Please fill out required fields")
      : addCartItem({ ...productSpecs });
  };

  // updating productSpecs will trigger useEffect to update productPrice resulting in 2 renders for every select option change
  const handleChange = (e) => {
    const { name, value } = e.target;
    // This is required because select option values only take strings. But the SetOption, PackSize, Length takes in
    // an object which we converted to JSON. So we need to use JSON.parse to convert back into an object so we can access
    // the properties.
    ["SetOption", "PackSize", "Length"].includes(name)
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
      <section id="product-display-page">
        <div className="product-image">
          <img src={img} alt={name} />
        </div>

        <div className="product-description">
          <h3 className="name">{name}</h3>
          <h3 className="price">{`$${productPrice}.00`}</h3>
          <form className="dropdown-container" onSubmit={handleSubmit}>
            {/* ---------- Variable Product Dropdowns ----------  */}
            {dropdownTypes.map((dropdown, id) => {
              return (
                dropdown.options && (
                  <Dropdown
                    key={id}
                    label={dropdown.label}
                    options={dropdown.options}
                    handleChange={handleChange}
                    defaultValue="Select an option"
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
                handleChange={handleChange}
                value={productSpecs.AddYourPersonalization}
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
                  handleChange={handleChange}
                  value={productSpecs.AddYourPersonalization}
                />
              )}

            {collection === "cards" &&
              personalized === true &&
              type === "thank you" && (
                <Dropdown
                  label="Add Your Personalization"
                  instructions="Please enter your names and wedding date for your cards."
                  handleChange={handleChange}
                  value={productSpecs.AddYourPersonalization}
                />
              )}
            {/* -------------------------------------------------- */}

            {/* Quantity */}
            {!bulk && (
              <Dropdown
                label="Quantity"
                optionDefaultValue={1}
                options={[...Array(50 + 1).keys()].slice(1)}
                handleChange={handleChange}
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
