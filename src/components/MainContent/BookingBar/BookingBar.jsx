import React from "react";
import Button from "../Button/Button";

const BookingBar = () => {
  return (
    <div className="booking-bar">
      <h2 className="heading-secondary">
        Good news! We have 4 free rooms for your selected dates!
      </h2>
      <Button visible="Book now" hidden="Only 4 rooms left" />
    </div>
  );
};

export default BookingBar;
