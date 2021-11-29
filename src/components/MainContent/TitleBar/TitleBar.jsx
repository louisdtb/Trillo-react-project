import React from "react";
import Stars from "./Stars/Stars";
import TextLink from "./TextLink/TextLink";
import ScoreTile from "./ScoreTile/ScoreTile";
import { ReactComponent as LocationIcon } from "../../../img/SVG/location-pin.svg";

const TitleBar = (props) => {
  return (
    <div className="title-bar">
      <h1 className="heading-primary title-bar__heading">
        {props.hotelsData[0].name}
      </h1>
      <span className="title-bar__stars">
        <Stars hotelsData={props.hotelsData} />
      </span>
      <span className="title-bar__location">
        <LocationIcon className="title-bar__location-icon" />
        <TextLink
          location={props.hotelsData[0].location}
          country={props.hotelsData[0].country}
        />
      </span>
      <ScoreTile hotelsData={props.hotelsData} />
    </div>
  );
};

export default TitleBar;
