import { NavLink } from "react-router-dom";
import Speciality from "./Speciality";
import Rating from "./Rating";
import Bookmark from "./Bookmark";

// eslint-disable-next-line react/prop-types
export default function HotelCard({ hotelId, hotel }) {
  const { thumbnail, location, name, rentPerPerson, isFeatured, isTopRated } =
    hotel || {};
  const { location_name } = location || {};
  return (
    <div className="inner-box">
      <div className="image-box">
        <div className="image">
          <NavLink to={`/hotels/${hotelId}`}>
            <img src={thumbnail} alt="Beach Hotel" />
          </NavLink>
        </div>
        <Speciality isFeatured={isFeatured} isTopRated={isTopRated} />
        <Bookmark />
      </div>
      <div className="lower-box">
        <div className="location">{location_name || ""}</div>
        <h5>
          <NavLink to={`/hotels/${1}`}>{name || ""}</NavLink>
        </h5>
        <div className="bottom-box clearfix">
          <Rating />
          <div className="price">
            Start from &ensp;
            <span className="amount">${rentPerPerson}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
