import { Modal } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
export default function AvailablityModal({ show, onHide, data }) {
  const {
    endDate,
    guestsNumber,
    rentPerGuest,
    roomsNumber,
    startDate,
    totalCost,
  } = data || {};

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header>
        <Modal.Title>Hotel Booking Info</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <p>
              Check In Date: <br />
              <span>{startDate}</span>
            </p>
            <p>
              Check Out Date: <br />
              <span>{endDate}</span>
            </p>
            <p>
              Room{guestsNumber > 1 ? "s" : ""} Needed: <br />
              <span>{roomsNumber}</span>
            </p>
          </div>
          <div className="col-sm-12 col-md-6">
            <p>
              Guest{guestsNumber > 1 ? "s" : ""} Number: <br />
              <span>{guestsNumber}</span>
            </p>
            <p>
              Rent Per Guest: <br />
              <span>{rentPerGuest}</span>
            </p>
            <p>
              Total Cost: <br />
              <span>{totalCost}</span>
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
