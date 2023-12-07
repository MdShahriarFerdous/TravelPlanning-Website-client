import React from "react";
import Bookmark from "./Bookmark";

const HotelCard = ({ hotel, handleBookmarkToggle }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4 d-flex align-items-center">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{hotel.name}</h5>
            <p className="card-text">{hotel.description}</p>
            <Bookmark
              hotelId={hotel.id}
              handleBookmarkToggle={handleBookmarkToggle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
