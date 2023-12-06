import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import Bookmark from './Bookmark';

const HotelCard = ({ hotel }) => {
  return (
    <div className="hotel-card">
      <img src={hotel.image} alt={hotel.name} />
      <h3>{hotel.name}</h3>
      <p>{hotel.description}</p>
      {/* <button className="bookmark-button">
        <FontAwesomeIcon icon={faBookmark} />
      </button> */}
       <Bookmark hotelId={hotel.id} />
    </div>
  );
};

export default HotelCard;
