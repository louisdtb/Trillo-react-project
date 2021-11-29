import React from "react";
import HotelContent from "./HotelContent/HotelContent";
import FlightContent from "./FlightContent/FlightContent";
import RentalContent from "./RentalContent/RentalContent";
import ToursContent from "./ToursContent/ToursContent";

const MainContent = (props) => {
  return (
    <div className="main-content">
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
  );
};

export default MainContent;
