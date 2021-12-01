import React from "react";
import HotelContent from "./HotelContent/HotelContent";
import FlightContent from "./FlightContent/FlightContent";
import RentalContent from "./RentalContent/RentalContent";
import ToursContent from "./ToursContent/ToursContent";
import Welcome from "./Welcome/Welcome";
import { AnimatePresence } from "framer-motion";

const MainContent = (props) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="main-content">
        {props.activePage === "welcome" && <Welcome />}
        {props.activePage === "hotels" && <HotelContent />}
        {props.activePage === "flights" && (
          <FlightContent activePage={props.activePage} />
        )}
        {props.activePage === "rentals" && (
          <RentalContent activePage={props.activePage} />
        )}
        {props.activePage === "tours" && (
          <ToursContent activePage={props.activePage} />
        )}
      </div>
    </AnimatePresence>
  );
};

export default MainContent;
