import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import "../Star.css";

const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let numbers = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="icon" />
        ) : stars >= numbers ? (
          <FaStarHalfAlt className="icon" />
        ) : (
          <FaRegStar className="icon" />
        )}
      </span>
    );
  });

  return (
    <div className="d-flex justify-content-center align-items-center pt-2">
      <h5>{ratingStar}</h5>
      <p className="total-reviews-count">({reviews} reviews)</p>
    </div>
  );
};

export default Star;
