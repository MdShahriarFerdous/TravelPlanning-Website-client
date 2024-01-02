import moment from "moment";
import { Modal } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
export default function HotelBookingModal({ show, onHide, data }) {
  const {
    checkIn,
    checkOut,
    guests,
    rooms,
    totalCost,
    nid,
    nationality,
    phone,
    email,
    firstName,
    lastName,
    additional,
    guestsInfo,
    hotelId,
    roomCategoryId,
    roomSubCategoryId,
  } = data || {};

  const arr = additional ? Object.values(additional) : [];
  const additionals = [];
  arr.map((el) => {
    if ((el.status === true || el.status === undefined) && !!el.value) {
      if (el.value === "non_smoking") {
        additionals.push({
          value: "Non Smoking Room",
        });
      } else if (el.value === "smoking") {
        additionals.push({
          value: "Smoking Room",
        });
      } else if (el.value === "twin_beds") {
        additionals.push({
          value: "Twin Beds",
        });
      } else if (el.value === "large_bed") {
        additionals.push({
          value: "Large Bed",
        });
      } else {
        additionals.push(el);
      }
    }
    return el;
  });
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{hotelId?.name || ""}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <h5>Booking Details:</h5>
            <ul className="guests-list">
              <li>
                <i className="fa fa-calendar"></i>
                <span>
                  Check-in Date: {moment(checkIn).format("Do MMMM, YYYY")}
                </span>
              </li>
              <li>
                <i className="fa fa-calendar"></i>
                <span>
                  Check-out Date: {moment(checkOut).format("Do MMMM, YYYY")}
                </span>
              </li>
              <li>
                <i className="fa fa-users"></i>
                <span>Total Guests: {guests}</span> ,
                <i className="fa fa-bed ms-3"></i>
                <span>Total Rooms: {rooms}</span>
              </li>
              <li>
                <i className="fa fa-credit-card-alt"></i>
                <span>Total Rent: {totalCost}</span>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-12">
            <h5>Room Details:</h5>
            <ul className="guests-list">
              <li>
                <i className="fa-solid fa-chevron-right"></i>
                <span>Room Type: {roomCategoryId?.name}</span>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i>
                <span>Room Option: {roomSubCategoryId?.title}</span>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-12">
            <h5>Primary Contact:</h5>
            <ul className="guests-list">
              <li>
                <i className="fa-solid fa-arrow-right"></i>
                <span>
                  Name: {firstName} {lastName}
                </span>
              </li>
              <li>
                <i className="fa-solid fa-arrow-right"></i>
                <span>Phone: {phone}</span>
              </li>
              <li>
                <i className="fa-solid fa-arrow-right"></i>
                <span>Email: {email}</span>
              </li>
              <li>
                <i className="fa-solid fa-arrow-right"></i>
                <span>Nationality: {nationality}</span>
              </li>
              <li>
                <i className="fa-solid fa-arrow-right"></i>
                <span>NID: {nid}</span>
              </li>
            </ul>
          </div>
          {guestsInfo && guestsInfo.length > 0 && (
            <div className="col-sm-12 col-md-12">
              <h5>Guests List:</h5>
              <ul className="guests-list">
                {guestsInfo.map((el, i) => {
                  return (
                    <li key={i}>
                      {i + 1 + ")"}
                      <span>Given Name: {el.givenName}</span>,
                      <span>Surname: {el.surname}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {additionals && additionals.length > 0 && (
            <div className="col-sm-12 col-md-6">
              <h5>Additional Requests:</h5>
              <ul className="guests-list">
                {additionals.map((el, i) => {
                  return (
                    <li key={i}>
                      <i className="fa-solid fa-check"></i>
                      <span>{el.value}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}
