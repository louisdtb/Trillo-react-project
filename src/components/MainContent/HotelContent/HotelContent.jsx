import React from "react";
import ImageBanner from "../ImageBanner/ImageBanner";
import TitleBar from "../TitleBar/TitleBar";
import SectionDescription from "../SectionDescription/SectionDescription";
import Reviews from "../Reviews/Reviews";
import BookingBar from "../BookingBar/BookingBar";
import { HotelsData } from "../../../data/hotels";

const HotelContent = () => {
  return (
    <div>
      <ImageBanner hotelsData={HotelsData} />
      <TitleBar hotelsData={HotelsData} />
      <SectionDescription hotelsData={HotelsData} />
      <Reviews hotelsData={HotelsData} />
      <BookingBar hotelsData={HotelsData} />
    </div>
  );
};

export default HotelContent;
