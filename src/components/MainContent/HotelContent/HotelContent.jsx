import React from "react";
import ImageBanner from "../ImageBanner/ImageBanner";
import TitleBar from "../TitleBar/TitleBar";
import SectionDescription from "../SectionDescription/SectionDescription";
import Reviews from "../Reviews/Reviews";
import BookingBar from "../BookingBar/BookingBar";

const HotelContent = () => {
  return (
    <div>
      <ImageBanner />
      <TitleBar />
      <SectionDescription />
      <Reviews />
      <BookingBar />
    </div>
  );
};

export default HotelContent;
