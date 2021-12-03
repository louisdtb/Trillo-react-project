import React from "react";
import FriendOne from "../../../img/user-1.jpg";
import FriendTwo from "../../../img/user-2.jpg";
import FriendThree from "../../../img/user-3.jpg";
import FriendFour from "../../../img/user-4.jpg";

const SectionDescription = () => {
  return (
    <div className="section-description">
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
        dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut
        corporis incidunt deserunt quae architecto voluptate.
      </p>
      <p className="paragraph">
        Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto
        voluptate delectus, inventore iure aliquid aliquam.
      </p>
      <ul className="list">
        <li className="list-item">Close to the beach</li>
        <li className="list-item">Breakfast included</li>
        <li className="list-item">Free airport shuttle</li>
        <li className="list-item">Free wifi in all rooms</li>
        <li className="list-item">Air conditioning and heating</li>
        <li className="list-item">Pets allowed</li>
        <li className="list-item">We speak all languages</li>
        <li className="list-item">Perfect for families</li>
      </ul>
      <div className="recommend">
        <p className="recommend__count">
          Lucy and 3 other friends recommend this hotel.
        </p>
        <div className="recommend__friends">
          <img src={FriendOne} alt="Friend 1" className="recommend__photo" />
          <img src={FriendTwo} alt="Friend 2" className="recommend__photo" />
          <img src={FriendThree} alt="Friend 3" className="recommend__photo" />
          <img src={FriendFour} alt="Friend 4" className="recommend__photo" />
        </div>
      </div>
    </div>
  );
};

export default SectionDescription;
