import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Star.css";

const StarRating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const handleRatingClick = (ratingValue) => {
    setRating(ratingValue);
    onRatingChange(ratingValue);
  };

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleRatingClick(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "orange" : "#e4e5e9"}
              size={30}
              onMouseEnter={() => {
                setHover(ratingValue);
              }}
              onMouseLeave={() => {
                setHover(null);
              }}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;
