import { NavLink } from "react-router-dom";
import UserSideNavbar from "../../navbar/UserSideNavbar";
import "../../commonCSS/common.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "../../dashboard/Dashboard.css";
import "./bookings.css";
import NodataImg from "../../../../assets/images/welcome/no-data.svg";
import { FaArrowLeft } from "react-icons/fa";

const BookingCards = () => {
  return (
    <div className="parent_content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 fixed-start">
            <UserSideNavbar />
          </div>

          <div className="col-lg-9 animated  fixed-end">
            <div className="pt-5">
              <NavLink to="/" className="mt-8">
                <button type="button" style={{ background: "none" }}>
                  <FaArrowLeft className="back-arrow" /> Back to Home
                </button>
              </NavLink>
              <h1 className="card-title heading mt-5 text-start">
                Booking Overview
              </h1>
            </div>
            <div className="booking_card d-flex mb-5 mt-5">
              <img
                src={NodataImg}
                style={{
                  height: "20%",
                  width: "20%",
                  marginLeft: "100px",
                  marginRight: "80px",
                }}
              />
              <h3
                className="title-for-welcome"
                style={{
                  width: "40%",
                  marginLeft: "48px",
                  marginTop: "8px",
                }}
              >
                Oops! You have no Bookings Yet
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCards;
