/* eslint-disable react/prop-types */
import { useHotelBooking } from "../../../../../context/hotelBookingContext";
import { check } from "../../../../../backend-services/hotelsApi";
import { useLocation, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Header from "./Header";
import Alert from "./Alert";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { userInfo } from "../../../../../backend-services/profileApi";

export default function BasicInfo() {
  const navigate = useNavigate();
  const { incrementStep, bookingInfo, setBookingInfo } = useHotelBooking();
  const [alert, setAlert] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { state } = useLocation();
  const {
    hotelId,
    hotelName,
    category,
    subCategory,
    roomCategoryId,
    roomSubCategoryId,
  } = state;

  // Handler for Input Change
  const handleChange = (e) => {
    const { name, value } = e.target || {};
    let number = Number(value);
    if (!Number.isInteger(number)) {
      number = 1;
    }
    if (number < 0) {
      number = 1;
    }
    const guestsInfo = [];
    for (let i = 0; i < number; i++) {
      guestsInfo.push({ givenName: "", surname: "" });
    }
    setBookingInfo({
      ...bookingInfo,
      [name]: number,
      guestsInfo,
    });
  };

  // Handler for Going to Next Step
  const handleNext = async (e) => {
    e.preventDefault();
    if (!hotelId) {
      toast.error("Hotel is Unavailable, Choose Another Hotel");
      setAlert("Hotel is Unavailable, Choose Another Hotel");
      return;
    }
    if (!roomCategoryId) {
      toast.error("Hotel Room is Occupied, Choose Another Hotel");
      setAlert("Hotel Room is Occupied, Choose Another Hotel");
      return;
    }
    if (!roomSubCategoryId) {
      toast.error("Hotel Room is Occupied, Choose Another Hotel");
      setAlert("Hotel Room is Occupied, Choose Another Hotel");
      return;
    }
    const checkInDateMoment = moment(bookingInfo.checkIn).format("YYYY-MM-DD");
    const checkOutDateMoment = moment(bookingInfo.checkOut).format(
      "YYYY-MM-DD"
    );
    const payload = {
      hotelId,
      guests: Number(bookingInfo.guests),
      rooms: Number(bookingInfo.rooms),
      checkIn: checkInDateMoment,
      checkOut: checkOutDateMoment,
      roomSubCategoryId,
    };
    setIsLoading(true);
    const response = await check(payload);
    if (response) {
      if (response?.data?.error) {
        toast.error(response?.data?.error);
        setAlert(response?.data?.error);
      } else {
        setBookingInfo({
          ...bookingInfo,
          hotelId,
          roomCategoryId,
          roomSubCategoryId,
          summary: {
            ...response?.data?.data,
            hotelName,
            roomType:  category,
            roomOption: subCategory,
          }
        });
        incrementStep();
      }
    }
    setIsLoading(false);
  };

  // Set Basic Info Header Data
  const headerData = {
    title: "Basic Info",
    description:
      "Please Provide Hotel Room check-in, check-out date and Rooms Info",
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await userInfo();
      if (response) {
        if (response?.data?.error) {
          navigate("/login");
        }
      }
      setIsLoading(false);
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <Header {...headerData} />
      {!!alert && <Alert text={alert} handleClick={() => setAlert("")} />}
      <div className="form">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div style={{ padding: "0 15px" }}>
              <div className="d-flex align-items-center">
                <h6> Hotel Name:</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-8">
            <div style={{ padding: "0 15px" }}>
              <div className="d-flex align-items-center">
                <h6 className="text-info "> {hotelName}</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div style={{ padding: "0 15px" }}>
              <div className="d-flex align-items-center">
                <h6> Room Type:</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-8">
            <div style={{ padding: "0 15px" }}>
              <div className="d-flex align-items-center">
                <h6 className="text-info ">{category}</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-12 col-md-4">
            <div style={{ padding: "0 15px" }}>
              <div className="d-flex align-items-center">
                <h6> Room Option:</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-8">
            <div style={{ padding: "0 15px" }}>
              <div className="d-flex align-items-center">
                <h6 className="text-info ">{subCategory}</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-7">
            <div className="form-group">
              <div className="field-label">Check In</div>
              <div className="field-inner">
                <DatePicker
                  selected={bookingInfo.checkIn}
                  onChange={(date) => {
                    setBookingInfo({
                      ...bookingInfo,
                      checkIn: date,
                    });
                  }}
                  dateFormat="yyyy-MM-dd"
                  minDate={new Date()}
                  className="date-input"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-5 d-flex align-items-center">
            <div className="form-group">
              <div
                className="d-flex align-items-center"
                style={{ paddingTop: "28px", marginLeft: "15px" }}
              >
                <div className="tick-ttl">Total Guests</div>
                <div className="quantity-box">
                  <div className="item-quantity">
                    <input
                      type="number"
                      name="guests"
                      placeholder="1"
                      value={bookingInfo.guests}
                      onChange={handleChange}
                      className="qty-spinner"
                      min="1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-7">
            <div className="form-group">
              <div className="field-label">Check Out</div>
              <div className="field-inner">
                <DatePicker
                  selected={bookingInfo.checkOut}
                  onChange={(date) => {
                    setBookingInfo({
                      ...bookingInfo,
                      checkOut: date,
                    });
                  }}
                  dateFormat="yyyy-MM-dd"
                  minDate={new Date()}
                  className="date-input"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-5 d-flex align-items-center">
            <div className="form-group">
              <div
                className="d-flex align-items-center"
                style={{ paddingTop: "28px", marginLeft: "15px" }}
              >
                <div className="tick-ttl">Total Rooms</div>
                <div className="quantity-box">
                  <div className="item-quantity">
                    <input
                      type="number"
                      name="rooms"
                      placeholder="1"
                      value={bookingInfo.rooms}
                      onChange={handleChange}
                      min="1"
                      className="qty-spinner"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <button
          disabled={isLoading}
          type="button"
          onClick={handleNext}
          className="next-step btn end"
        >
          <span>{isLoading ? "Loading ..." : "Next Step"}</span>
        </button>
      </footer>
    </div>
  );
}
