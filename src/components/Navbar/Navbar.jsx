import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import NotifIcon from "./NotifIcon/NotifIcon";
import ProfileButton from "./ProfileButton/ProfileButton";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <Link to="/" onClick={() => props.setPage("welcome")}>
        <img
          src={require("../../img/logo.png").default}
          alt="Trillo logo"
          class="navbar__logo"
        />
      </Link>
      <SearchBar activePage={props.activePage} />
      <div className="user-nav">
        <div className="user-nav__icon-box">
          <NotifIcon type="bookmark" />
        </div>
        <div className="user-nav__icon-box">
          <NotifIcon type="message" />
        </div>
        <div className="user-nav__user">
          <ProfileButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
