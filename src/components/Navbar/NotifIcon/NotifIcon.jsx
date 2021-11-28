import React from "react";
import Bookmark from "../../../img/SVG/bookmark.svg";
import Chat from "../../../img/SVG/chat.svg";

const NotifIcon = (props) => {
  return (
    <>
      {props.type === "bookmark" && (
        <>
          <img
            src={Bookmark}
            alt="bookmark notifications"
            className="notif-icon__icon"
          />
          <span className="notif-icon__notification">7</span>
        </>
      )}
      {props.type === "message" && (
        <>
          <img
            src={Chat}
            alt="chat notifications"
            className="notif-icon__icon"
          />
          <span className="notif-icon__notification">13</span>
        </>
      )}
    </>
  );
};

export default NotifIcon;
