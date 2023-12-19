import RoomImage from "../../../assets/images/resources/destinations/hotels/hotel-room-5.jpg";
import HotelRoomSubCategory from "./HotelRoomSubCategory";

// eslint-disable-next-line react/prop-types
export default function HotelRoomCategory({ index }) {
  const subCategoriesLength = 2;
  return (
    <>
      <tr>
        <td className="rt" rowSpan={subCategoriesLength}>
          <div className="type-block">
            <div className="image">
              <img src={RoomImage} alt="" />
            </div>
            <h5>Category {index + 1}</h5>
            <span>
              {" "}
              <i className="icon flaticon-expand-1"></i> Room Size: 40 m
              <sup>2</sup>
            </span>
            <ul className="room-specs" style={{ paddingLeft: "1rem", paddingTop: "1rem" }}>
              {Array.apply(null, { length: 2 }).map((x, i) => (
                <li key={i}>
                  <i className="fa-solid fa-caret-right"></i> Category Feature{" "}
                  {i + 1}
                </li>
              ))}
            </ul>
          </div>
        </td>
        <td className="ro">
          <h6>Sub Category 1</h6>
          <ul className="un-styled-list">
            {Array.apply(null, { length: 2 }).map((x, i) => (
              <li key={i}>Key Feature {i + 1}</li>
            ))}
          </ul>
        </td>
        <td className="fac">
          <ul className="styled-list-two">
            {Array.apply(null, { length: 6 }).map((x, i) => (
              <li key={i}>Facilty {i + 1}</li>
            ))}
          </ul>
        </td>
        <td className="price">
          <div className="rate">
            <span className="amount">$1299</span>{" "}
            <span className="duration">/ Per Night</span>
          </div>
          <div className="p-for">Price for 1 room</div>
          <div className="book-link">
            <a href="#" className="theme-btn btn-style-two">
              <span>Book Now</span>
            </a>
          </div>
        </td>
      </tr>
      {Array.apply(null, { length: subCategoriesLength - 1 }).map((x, i) => (
        <HotelRoomSubCategory key={i} index={i} />
      ))}
    </>
  );
}
