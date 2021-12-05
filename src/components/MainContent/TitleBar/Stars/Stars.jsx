import React from "react";
import { ReactComponent as Star } from "../../../../img/SVG/star.svg";
import { ReactComponent as HalfStar } from "../../../../img/SVG/half-star.svg";

const Stars = (props) => {
  let score = props.hotelsData[0].score / 2;
  console.log(score % Math.round(score));

  const stars = Array(Math.floor(score)).fill(<Star className="stars__star" />);

  if (score % Math.round(score) > 0.25 && score % Math.round(score) < 0.75) {
    stars.push(<span className="stars__star stars__half"></span>);
  }
  return <div className="stars">{stars}</div>;
};

export default Stars;
