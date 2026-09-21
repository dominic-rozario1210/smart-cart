import React from "react";

import bannerImage from "../assets/banner.png";

const Banner = () => {

  return (

    <div className="banner">

      <img
        src={bannerImage}
        alt="Smart Cart promotional banner"
      />

    </div>

  );
};

export default Banner;