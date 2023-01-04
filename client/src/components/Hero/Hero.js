import Button from "../ui/Button/Button";
import "./Hero.scss";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-background">
        <div className="hero-message-container">
          <h1 className="hero-title">
            Let's Commemorate Your Relationship From Heart to Paper
          </h1>
          <Link to="/vowbooks">
            <div className="shop-btn">
              <Button buttonType="default">Shop Keepsakes</Button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
