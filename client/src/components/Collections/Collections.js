import "./Collections.scss";
import Reel from "../../assets/collections/reel.mov";
import Button from "../ui/Button/Button";
import { Link } from "react-router-dom";

const Collections = () => {
  return (
    <section id="collections">
      <h3>Collections</h3>
      <div className="collections-container">
        <div className="collection vowbooks">
          <div className="reel-container">
            <video className="reel" src={Reel} loop muted autoPlay></video>
            <Link to="vowbooks">
              <div className="browse-btn">
                <Button buttonType="default">Vow Books</Button>
              </div>
            </Link>
          </div>
        </div>
        <div className="collection cards">
          <Link to="cards">
            <div className="browse-btn">
              <Button buttonType="default">Cards</Button>
            </div>
          </Link>
        </div>
        <div className="collection paper-ribbon">
          <Link to="paper">
            <div className="browse-btn">
              <Button buttonType="default">Paper & Ribbons</Button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Collections;
