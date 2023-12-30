import HighFiveImg from "../../../../../assets/images/welcome/high-five.png";
import { FaArrowLeft } from "react-icons/fa";
import LogoImgs from "../../../../../assets/images/logo-nav.png";
import "../../../../../pages/tourbooking/tourbooking.css";
import { NavLink } from "react-router-dom";
const HotelBookingPaymentStatus = () => {
  return (
    <div className="container">
      <div className="home-back-btn mt-5 mb-5">
        <NavLink to="/">
          <button type="button" className="btn btn-outline-secondary btn-back">
            <FaArrowLeft className="back-arrow" /> Back to Home
          </button>
        </NavLink>
      </div>
      <div className="row">
        <div className="col-lg-6 m-auto">
          <div className="card p-5 status-card">
            <div className="m-auto mt-4 mb-4">
              <img
                src={HighFiveImg}
                style={{ width: "64px", height: "64px" }}
              />
            </div>
            <div className="container text-center">
              <h3 className="mb-4">Hotel Booking Payment Successfully Done</h3>
              <p className="mb-4">
                Our developers are building payment functionalities. After the
                job done we will surely provide you this service.
              </p>
              <p className="p-query mb-4">
                If you have any questions or quiries feel free to contact us.
              </p>
              <p className="">Happy Travel</p>
            </div>
            <div className="text-center mt-4">
              <img src={LogoImgs} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelBookingPaymentStatus;
