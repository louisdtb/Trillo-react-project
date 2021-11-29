import React from "react";
import SidebarLink from "./SidebarLink/SidebarLink";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item">
          <SidebarLink icon="home" text="Hotel" />
        </li>
        <li className="side-nav__item">
          <SidebarLink icon="flight" text="Flight" />
        </li>
        <li className="side-nav__item">
          <SidebarLink icon="key" text="Car rental" />
        </li>
        <li className="side-nav__item">
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
