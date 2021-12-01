import React from "react";
import ImageBanner from "../ImageBanner/ImageBanner";
import TitleBar from "../TitleBar/TitleBar";
import SectionDescription from "../SectionDescription/SectionDescription";
import Reviews from "../Reviews/Reviews";
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
      <SectionDescription hotelsData={HotelsData} />
      <Reviews hotelsData={HotelsData} />
      <BookingBar hotelsData={HotelsData} />
    </motion.div>
  );
};

export default HotelContent;
