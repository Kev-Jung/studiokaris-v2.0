import "./Banner.scss";

import BannerPic from "../../assets/banner.png";

const Banner = () => {
  return (
    <>
      <section id="banner">
        <h2 className="banner-title">
          Keepsakes You'll Cherish for a Lifetime
        </h2>
        <p>
          Here at Studio Karis, we specialize in creating thoughtful keepsakes
          to help you celebrate one of the biggest moments and most important
          relationships of your life: your marriage.
        </p>
      </section>
      <img
        className="banner-collage"
        src={BannerPic}
        alt="banner-tile-stills"
      />
    </>
  );
};

export default Banner;
