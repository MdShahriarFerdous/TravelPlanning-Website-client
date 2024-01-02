/* eslint-disable react/prop-types */
import "./HotelBooking.css";
export default function Alert({ text, handleClick }) {
  return (
    <div className="alert">
      {text}
      <h2 className="close" onClick={handleClick}>
        &times;
      </h2>
    </div>
  );
}
