// eslint-disable-next-line react/prop-types
export default function HotelRoomSubCategory({ index }) {
  const keyFeaturesLength = 3;
  const facilitiesLength = 8;
  return (
    <tr>
      <td className="ro">
        <h6>Sub Category {index + 2}</h6>
        <ul className="un-styled-list">
          {Array.apply(null, { length: keyFeaturesLength - 1 }).map((x, i) => (
            <li key={i}>Key Feature {i + 1}</li>
          ))}
        </ul>
      </td>
      <td className="fac">
        <ul className="styled-list-two">
          {Array.apply(null, { length: facilitiesLength - 1 }).map((x, i) => (
            <li key={i}>Facility {i + 1}</li>
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
  );
}
