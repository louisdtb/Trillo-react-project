import React from "react";

const Button = (props) => {
  return (
    <button className="btn">
      <span className="btn-visible">{props.visible}</span>
      <span className="btn-hidden">{props.hidden}</span>
    </button>
  );
};

export default Button;
