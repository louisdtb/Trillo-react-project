import React from "react";
import { ReactComponent as Bookmark } from "../../../img/SVG/bookmark.svg";
import { ReactComponent as Chat } from "../../../img/SVG/chat.svg";

const NotifIcon = (props) => {
  return (
    <>
      {props.type === "bookmark" && (
        <>
          <Bookmark
            src={Bookmark}
            alt="bookmark notifications"
            className="notif-icon__icon"
          />
          <span className="notif-icon__notification">7</span>
        </>
      )}
      {props.type === "message" && (
        <>
          <Chat
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
