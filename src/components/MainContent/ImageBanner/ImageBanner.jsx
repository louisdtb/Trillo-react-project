import React from "react";
import ImageOne from "../../../img/hotel-1.jpg";
import ImageTwo from "../../../img/hotel-2.jpg";
import ImageThree from "../../../img/hotel-3.jpg";

const ImageBanner = () => {
  return (
    <div className="image-banner">
      <figure className="image-banner__item">
        <img src={ImageOne} alt="" className="image-banner__photo" />
      </figure>
      <figure className="image-banner__item">
        <img src={ImageTwo} alt="" className="image-banner__photo" />
      </figure>
      <figure className="image-banner__item">
        <img src={ImageThree} alt="" className="image-banner__photo" />
      </figure>
    </div>
  );
};

export default ImageBanner;
