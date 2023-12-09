import SampleHotel from "../../../assets/images/resources/destinations/istanbul-beach-hotel.jpg";
import { NavLink } from "react-router-dom";
import Speciality from "./Speciality";
import Rating from "./Rating";
import Bookmark from "./Bookmark";

// eslint-disable-next-line react/prop-types
export default function HotelCard({ index, hotelId }) {
  return (
    <div className="inner-box">
      <div className="image-box">
        <div className="image">
          <NavLink to={`/hotels/${hotelId}`}>
            <img src={SampleHotel} alt="Beach Hotel" />
          </NavLink>
        </div>
        <Speciality id={index} />
        <Bookmark />
      </div>
      <div className="lower-box">
        <div className="location">Istanbul</div>
        <h5>
          <NavLink to={`/hotels/${1}`}>Istanbul Beach Hotel</NavLink>
        </h5>
        <div className="bottom-box clearfix">
          <Rating />
          <div className="price">
            Start from &ensp;
            <span className="amount">
              ${Math.floor(Math.random() * (500 - 100 + 1) + 100)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
