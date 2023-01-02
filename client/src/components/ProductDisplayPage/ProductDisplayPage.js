import "./ProductDisplayPage.scss";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import DropDown from "../ui/DropDown/DropDown";
import Button from "../ui/Button/Button";

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

  const [productPrice, setProductPrice] = useState(price);
  const [productSpecs, setProductSpecs] = useState({ Quantity: 1 });

  console.log(productSpecs);

  // updating productSpecs will trigger useEffect to update productPrice resulting in 2 renders for every select option change
  const handleDropdownChange = (e, key) => {
    setProductSpecs({ ...productSpecs, [key]: e.target.value });
  };

  // Updates PDP price based on custom option (SetOption, PackSize, Length) user selects
  useEffect(() => {
    productSpecs.SetOption && setProductPrice(productSpecs.SetOption);
    productSpecs.PackSize && setProductPrice(productSpecs.PackSize);
    productSpecs.Length && setProductPrice(productSpecs.Length);
  }, [productSpecs]);

  return (
    <section id="product-display-page">
      <div className="product-image">
        <img src={img} alt={name} />
      </div>

      <div className="product-description">
        <h3 className="name">{name}</h3>
        <h3 className="price">{`$${productPrice}.00`}</h3>
        <form className="dropdown-container">
          {/* ---------- Variable Product Dropdowns ----------  */}

          {/* Set Option */}
          {defaultSetOption && (
            <DropDown
              label="Set Option"
              options={defaultSetOption}
              handleDropdownChange={handleDropdownChange}
            />
          )}

          {/* Personalized Set Option */}
          {personalizedSetOption && (
            <DropDown
              label="Set Option"
              options={personalizedSetOption}
              handleDropdownChange={handleDropdownChange}
            />
          )}

          {/* Ribbon Color */}
          {ribbonColor && (
            <DropDown
              label="Ribbon Color"
              options={ribbonColor}
              handleDropdownChange={handleDropdownChange}
            />
          )}

          {/* Envelope Color */}
          {envelopeColor && (
            <DropDown
              label="Enveloper Color"
              options={envelopeColor}
              handleDropdownChange={handleDropdownChange}
            />
          )}

          {/* Pack Size */}
          {packSize && (
            <DropDown
              label="Pack Size"
              options={packSize}
              handleDropdownChange={handleDropdownChange}
            />
          )}

          {/* Length */}
          {length && (
            <DropDown
              label="Length"
              options={length}
              handleDropdownChange={handleDropdownChange}
            />
          )}

          {/* ----- Custom Personalizations ----- */}

          {/* Vow Books */}
          {collection === "vowbooks" && personalized === true && (
            <DropDown
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
              <DropDown
                label="Add Your Personalization"
                instructions={
                  customName
                    ? "Please enter the names and titles for personalization. For ex: maid of honor - Iris, bridesmaid - Alaina, Hazel"
                    : "Please enter the titles and quantities for your cards. For ex: maid of honor - 1, bridesmaid - 3"
                }
                handleDropdownChange={handleDropdownChange}
              />
            )}

          {collection === "cards" &&
            personalized === true &&
            type === "thank you" && (
              <DropDown
                label="Add Your Personalization"
                instructions="Please enter your names and wedding date for your cards."
                handleDropdownChange={handleDropdownChange}
              />
            )}

          {/* -------------------------------------------------- */}

          {/* Quantity */}
          {!bulk && (
            <DropDown
              label="Quantity"
              optionDefaultValue={1}
              options={[...Array(50 + 1).keys()].slice(1)}
              handleDropdownChange={handleDropdownChange}
            />
          )}
          <Button buttonType="addToCart">Add to Cart</Button>
        </form>
      </div>
    </section>
  );
};

export default ProductDisplayPage;
