import RoomImage from "../../../assets/images/resources/destinations/hotels/hotel-room-5.jpg";
import HotelRoomSubCategory from "./HotelRoomSubCategory";

// eslint-disable-next-line react/prop-types
export default function HotelRoomCategory({ hotelCategory }) {
  const { name, shortDesc, roomSize, features, thumbnail, subCategories } =
    hotelCategory || {};
  const subCategoriesLength = subCategories.length;
  const firstSub = subCategories[0] || {};
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
                <span className="amount">${firstSub?.rentPerPerson} </span>{" "}
                <span className="duration">/ Per Night</span>
              </div>
              <div className="p-for">Price for 1 room</div>
              <div className="book-link">
                <a href="#" className="theme-btn btn-style-two">
                  <span>Book Now</span>
                </a>
              </div>
            </>
          )}
        </td>
      </tr>
      {subCategories.slice(1).map((el, i) => (
        <HotelRoomSubCategory key={i} index={i} />
      ))}
    </>
  );
}
