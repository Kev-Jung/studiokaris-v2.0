import Button from "../ui/Button/Button";
import "./Footer.scss";
import { ReactComponent as Instagram } from "../../assets/svgs/instagram.svg";
import { ReactComponent as Email } from "../../assets/svgs/email.svg";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="col">
        <h4 className="footer-title">Studio Karis | Est. 2018</h4>
        <div className="footer-body">
          <p>Made with love from California</p>
          <span className="contact-email">hello@studiokaris.com</span>
          <div className="social">
            <Email className="email" />
            <a href="https://www.instagram.com/studio.karis/" target="_blank">
              <Instagram className="instagram" />
            </a>
          </div>
        </div>
      </div>

      <div className="col">
        <h4 className="footer-title">Stay Connected @StudioKaris</h4>
        <div className="footer-body">
          <p>Contact Us</p>
        </div>
      </div>

      <div className="col">
        <h4 className="footer-title">The Newsletter</h4>
        <div className="footer-body">
          <p>
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <form className="news-letter-subscription">
            <input type="email" placeholder="Enter your email address" />
            <Button buttonType="inverted">Subscribe</Button>
          </form>
        </div>
      </div>

      <span className="copyright">
        Copyright &copy; 2018-{new Date().getFullYear()} Studio Karis. All
        rights reserved
      </span>
    </footer>
  );
};

export default Footer;
