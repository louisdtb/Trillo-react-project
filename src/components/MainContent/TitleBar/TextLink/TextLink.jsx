import React from "react";

const TextLink = (props) => {
  return (
    <a href="#" className="text-link">
      {props.location}, {props.country}
    </a>
  );
};

export default TextLink;
