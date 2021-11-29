import { React } from "react";
import SidebarLink from "./SidebarLink/SidebarLink";

const Sidebar = (props) => {
  console.log(props);

  return (
    <div className="sidebar">
      <ul className="side-nav">
        <li
          className={`side-nav__item ${
            props.activePage === "hotels" && "side-nav__item--active"
          }`}
          onClick={() => {
            props.setPage("hotels");
            console.log("test");
          }}
        >
          <SidebarLink icon="home" text="Hotel" />
        </li>
        <li
          className={`side-nav__item ${
            props.activePage === "flights" && "side-nav__item--active"
          }`}
          onClick={() => props.setPage("flights")}
        >
          <SidebarLink icon="flight" text="Flight" />
        </li>
        <li
          className={`side-nav__item ${
            props.activePage === "rentals" && "side-nav__item--active"
          }`}
          onClick={() => props.setPage("rentals")}
        >
          <SidebarLink icon="key" text="Car rental" />
        </li>
        <li
          className={`side-nav__item ${
            props.activePage === "tours" && "side-nav__item--active"
          }`}
          onClick={() => props.setPage("tours")}
        >
          <SidebarLink icon="map" text="Tours" />
        </li>
      </ul>
      <div className="sidebar__legal">
        &copy; 2017 by Trillo. All rights reserved.
      </div>
    </div>
  );
};

export default Sidebar;
