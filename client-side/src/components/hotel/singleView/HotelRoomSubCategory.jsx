/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export default function HotelRoomSubCategory({
  hotelInfo,
  category,
  subCategory,
}) {
  const navigate = useNavigate();
  const { _id, title, rentPerPerson, keyFeatures, facilities, maxAllowed } =
    subCategory || {};
  const handleBookNow = () => {
    navigate(`/user/hotel-booking/${hotelInfo.slug}`, {
      state: {
        hotelName: hotelInfo.name,
        hotelId: hotelInfo._id,
        category: category.name,
        roomCategoryId: category._id,
        subCategory: title,
        roomSubCategoryId: _id,
      },
    });
  };
  const calculateCost = Number(rentPerPerson) * Number(maxAllowed);
  return (
    <tr>
      <td className="ro">
        <h6>{title}</h6>
        <ul className="un-styled-list">
          <li>
            Max {maxAllowed || 0} Guest
            {maxAllowed ? (maxAllowed > 1 ? "s" : "") : ""} Per Room Allowed
          </li>
          {keyFeatures?.length > 0 &&
            keyFeatures.map((kFeature, i) => <li key={i}>{kFeature}</li>)}
        </ul>
      </td>
      <td className="fac">
        <ul>
          {facilities?.length > 0 &&
            facilities.map((facility, i) => (
              <li key={i}>
                <i className="fa-solid fa-check" style={{ color: "green" }}></i>{" "}
                {facility}
              </li>
            ))}
        </ul>
      </td>
      <td className="price">
        <div className="rate">
          <span className="amount">${calculateCost}</span>{" "}
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
      </td>
    </tr>
  );
}
