import React from "react";
import ImageBanner from "../ImageBanner/ImageBanner";
import TitleBar from "../TitleBar/TitleBar";
import SectionDescription from "../SectionDescription/SectionDescription";
import ReviewCard from "../ReviewCard/ReviewCard";
import BookingBar from "../BookingBar/BookingBar";
import { HotelsData } from "../../../data/hotels";
import { motion } from "framer-motion";

const HotelContent = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <ImageBanner hotelsData={HotelsData} />
      <TitleBar hotelsData={HotelsData} />
      <div className="hotels__body">
        <div className="hotels__description">
          <SectionDescription hotelsData={HotelsData} />
        </div>
        <figure className="hotels__reviews">
          <ReviewCard hotelsData={HotelsData} />
          <ReviewCard hotelsData={HotelsData} />
          <a href="#" className="text-link">
            Test &rarr;
          </a>
        </figure>
      </div>
      <BookingBar hotelsData={HotelsData} />
    </motion.div>
  );
};

export default HotelContent;
