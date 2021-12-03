import React from "react";
import { ReactComponent as Home } from "../../../img/SVG/home.svg";
import { ReactComponent as Flight } from "../../../img/SVG/aircraft-take-off.svg";
import { ReactComponent as Key } from "../../../img/SVG/key.svg";
import { ReactComponent as Map } from "../../../img/SVG/map.svg";
import { Link } from "react-router-dom";

const SidebarLink = (props) => {
  return (
    <Link to={`/${props.link}`} className="sidebar-link">
      <span className="sidebar-link__icon">
        {props.icon === "home" && <Home />}
        {props.icon === "flight" && <Flight />}
        {props.icon === "key" && <Key />}
        {props.icon === "map" && <Map />}
      </span>
      <span>{props.text}</span>
    </Link>
  );
};

//WITHOUT REACT-ROUTER

// const SidebarLink = (props) => {
//   return (
//     <a href="#" className="sidebar-link">
//       <span className="sidebar-link__icon">
//         {props.icon === "home" && <Home />}
//         {props.icon === "flight" && <Flight />}
//         {props.icon === "key" && <Key />}
//         {props.icon === "map" && <Map />}
//       </span>
//       <span>{props.text}</span>
//     </a>
//   );
// };

export default SidebarLink;
