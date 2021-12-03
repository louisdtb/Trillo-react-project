import React from "react";
import User from "../../../img/user-1.jpg";

const ReviewCard = () => {
  return (
    <figure className="review-card">
      <blockquote className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
        doloremque architecto dicta animi, totam, itaque officia ex.
      </blockquote>
      <figcaption className="review-card__details">
        <img src={User} alt="" className="review-card__photo" />
        <div className="review-card__user-info">
          <p className="review-card__name">Nick Smith</p>
          <p className="review-card__date">Feb 23rd, 2021</p>
        </div>
        <div className="review-card__score">7.8</div>
      </figcaption>
    </figure>
  );
};

export default ReviewCard;
