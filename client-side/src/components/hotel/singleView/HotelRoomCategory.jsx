/* eslint-disable react/prop-types */
import RoomImage from "../../../assets/images/resources/destinations/hotels/hotel-room-5.jpg";
import HotelRoomSubCategory from "./HotelRoomSubCategory";
import { useNavigate } from "react-router-dom";

export default function HotelRoomCategory({ hotelCategory, hotelInfo }) {
  const navigate = useNavigate();
  const { _id, name, shortDesc, roomSize, features, thumbnail, subCategories } =
    hotelCategory || {};
  const subCategoriesLength = subCategories.length;
  const firstSub = subCategories[0] || {};
  const handleBookNow = () => {
    navigate(`/user/hotel-booking/${hotelInfo.slug}`, {
      state: {
        hotelName: hotelInfo.name,
        hotelId: hotelInfo._id,
        category: name,
        roomCategoryId: _id,
        subCategory: firstSub?.title,
        roomSubCategoryId: firstSub?._id,
      },
    });
  };
  const calculateCost = Number(firstSub?.rentPerPerson) * Number(firstSub?.maxAllowed);
  return (
    <>
      <tr>
        <td className="rt" rowSpan={subCategoriesLength}>
          <div className="type-block">
            <div className="image">
              <img src={thumbnail || RoomImage} alt="" />
            </div>
            <h5>{name}</h5>
            {/* Later Fix the div */}
            <div className="travilo-text">{!shortDesc || ""}</div>
            <span>
              {" "}
              <i className="icon flaticon-expand-1"></i> Room Size: {roomSize} m
              <sup>2</sup>
            </span>
            <ul
              className="room-specs"
              style={{ paddingLeft: "1rem", paddingTop: "1rem" }}
            >
              {features?.length > 0 &&
                features.map((feature, i) => (
                  <li key={i}>
                    <i className="fa-solid fa-caret-right"></i> {feature}
                  </li>
                ))}
            </ul>
          </div>
        </td>
        <td className="ro">
          <h6>{firstSub?.title}</h6>
          <ul className="un-styled-list">
            <li>
              Max {firstSub?.maxAllowed || 0} Guest
              {firstSub?.maxAllowed
                ? firstSub?.maxAllowed > 1
                  ? "s"
                  : ""
                : ""}{" "}
              Per Room Allowed
            </li>
            {firstSub?.keyFeatures?.length > 0 &&
              firstSub.keyFeatures.map((kFeature, i) => (
                <li key={i}>{kFeature}</li>
              ))}
          </ul>
        </td>
        <td className="fac">
          <ul>
            {firstSub?.facilities?.length > 0 &&
              firstSub.facilities.map((facility, i) => (
                <li key={i}>
                  <i
                    className="fa-solid fa-check"
                    style={{ color: "green" }}
                  ></i>{" "}
                  {facility}
                </li>
              ))}
          </ul>
        </td>
        <td className="price">
          {firstSub?.rentPerPerson && (
            <>
              <div className="rate">
                <span className="amount">${calculateCost} </span>{" "}
                <span className="duration">/ Per Night</span>
              </div>
              <div className="p-for">Price for 1 room</div>
              <div className="book-link">
                <span
                  className="theme-btn btn-style-two"
                  onClick={handleBookNow}
                  style={{ cursor: "pointer" }}
                >
                  Book Now
                </span>
              </div>
            </>
          )}
        </td>
      </tr>
      {subCategories.slice(1).map((subCategory, i) => (
        <HotelRoomSubCategory
          key={i}
          category={hotelCategory}
          hotelInfo={hotelInfo}
          subCategory={subCategory}
        />
      ))}
    </>
  );
}
