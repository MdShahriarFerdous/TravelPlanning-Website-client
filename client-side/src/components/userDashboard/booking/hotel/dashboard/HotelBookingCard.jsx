import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import moment from "moment";
import { useState } from "react";
import HotelBookingModal from "./HotelBookingModal";
import MiniLoader from "../../../../screenloader/MiniLoader";
import { hotelBookingsDetailedinfo } from "../../../../../backend-services/hotelsApi";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
export default function HotelBookingCard({ booking }) {
  const {
    _id,
    hotelId,
    roomCategoryId,
    roomSubCategoryId,
    guests,
    rooms,
    checkIn,
    checkOut,
    totalCost,
    createdAt,
    status,
  } = booking || {};

  const { name: hotelName } = hotelId || {};
  const { name: roomType } = roomCategoryId || {};
  const { title: roomOption } = roomSubCategoryId || {};

  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const handleCloseModal = () => {
    setModalShow(false);
  };
  const handleView = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await hotelBookingsDetailedinfo(_id);
    if (response) {
      if (response?.data?.error) {
        toast.error(response?.data?.error);
      } else {
        setModalShow(true);
        if (response?.data) {
          setModalData(response?.data?.data);
        }
      }
    }
    setIsLoading(false);
  };
  return (
    <div className="card border-primary mb-3 hotel-booking-card">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-10">
            <div className="card_items">
              <h4 className="font-weight-normal">{hotelName}</h4>
              <h6 className="font-weight-normal">
                Room: {roomType} ({roomOption})
              </h6>
              <p className="text-dark">
                Check-In Date: {moment(checkIn).format("Do MMMM, YYYY")},
                Check-Out Date: {moment(checkOut).format("Do MMMM, YYYY")}
              </p>
              <p className="text-dark">
                <span className="text-info">Total Guests: {guests}</span> ,
                <span className="text-success ms-2">
                  Rooms Occupied: {rooms}
                </span>{" "}
                ,
                <span className="text-dark ms-2">
                  Total Cost:{" "}
                  <span className="text-primary font-weight-normal">
                    ${totalCost}
                  </span>
                </span>
              </p>
              <p className="text-secondary">
                Hotel Booking Created{" "}
                <span className="font-weight-bold">
                  {moment(createdAt).fromNow()}
                </span>
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-2">
            <div className="mt-2">
              Status:
              {status === "pending" && (
                <span className="text-info"> Pending</span>
              )}
              {status === "failed" && (
                <span className="text-danger"> Failed</span>
              )}
              {status === "canceled" && (
                <span className="text-danger"> Canceled</span>
              )}
              {status === "confirmed" && (
                <span className="text-success"> Confirmed</span>
              )}
              {status === "completed" && (
                <span className="text-success"> Completed</span>
              )}
            </div>

            {isLoading ? (
              <MiniLoader />
            ) : (
              <button
                disabled={isLoading}
                type="button"
                className="btn view"
                onClick={handleView}
              >
                <span>View</span>
              </button>
            )}
            <HotelBookingModal
              show={!!modalShow}
              onHide={handleCloseModal}
              data={modalData}
            />
            {/* Later */}
            {/* {status === "pending" && (
              <button type="button" className="btn">
                Pay Now
              </button>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
