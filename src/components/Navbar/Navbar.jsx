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
        <div className="navbar__profile-dropdown">
          <div className="dropdown">
            <div className="dropdown__user">
              <span className="dropdown__photo"></span>
              <div className="dropdown__user-info">
                <div className="dropdown__name">Jonas Schmedtmann</div>
                <div className="dropdown__email">jonas@jonas.io</div>
              </div>
            </div>
            <ul className="dropdown__items">
              <li className="dropdown__item">
                <a>My reservations</a>
              </li>
              <li className="dropdown__item">
                <a>Account Settings</a>
              </li>
              <li className="dropdown__item">
                <a>Feedback & Support</a>
              </li>
              <li className="dropdown__item dropdown__sign-out">
                <a>Sign Out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
