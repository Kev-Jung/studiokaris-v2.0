import "./FreeShippingBanner.scss";

import { useEffect, useState } from "react";

const FreeShippingBanner = () => {
  const [toggleBanner, setToggleBanner] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setToggleBanner(!toggleBanner);
    }, 2000);

    return () => clearInterval(interval);
  }, [toggleBanner]);

  return (
    <>
      <div className="tl-banner">
        {toggleBanner ? (
          "Free Shipping on orders $99+"
        ) : (
          <a href="https://www.etsy.com/shop/StudioKaris" target="_blank">
            <span>Shop our Etsy Store</span>
          </a>
        )}
      </div>
      ;<div className="tl-banner-padding"></div>
    </>
  );
};

export default FreeShippingBanner;
