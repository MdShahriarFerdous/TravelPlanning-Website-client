/* eslint-disable no-unused-vars */
import { useHotelBooking } from "../../../../../context/hotelBookingContext";
import { useState } from "react";
import Header from "./Header";
import Alert from "./Alert";
import { toast } from "react-toastify";
import { isEmpty } from "../../../../../utils/inputValidator";

export default function PrimaryContact() {
  const { incrementStep, decrementStep, bookingInfo, setBookingInfo } =
    useHotelBooking();
  const [alert, setAlert] = useState("");

  // Handler for Input Change
  const handleInput = (e) => {
    const { name, value } = e.target || {};
    setBookingInfo({
      ...bookingInfo,
      [name]: value,
    });
  };

  // Handler for Going to Next Step
  const handleNext = (e) => {
    e.preventDefault();
    const required =
      isEmpty(bookingInfo.firstName) ||
      isEmpty(bookingInfo.lastName) ||
      isEmpty(bookingInfo.email) ||
      isEmpty(bookingInfo.nationality) ||
      isEmpty(bookingInfo.phone) ||
      isEmpty(bookingInfo.nid);
    if (required) {
      toast.error("Please Fill All Fields Properly");
      setAlert("Please Fill All Fields Properly");
    } else {
      incrementStep();
    }
  };

  const headerData = {
    title: "Primary Contact",
    description: "Please enter the contact details of the person who would like to receive the confirmation and be contacted if required",
  };

  // written in refactoring
  return (
    <div className="container">
      <Header {...headerData} />
      {!!alert && <Alert text={alert} handleClick={() => setAlert("")} />}
      <div className="plan">
        <div className="row">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="form-group">
                <div className="field-inner">
                  <input
                    type="text"
                    className="text-input"
                    placeholder={`Enter First Name`}
                    value={bookingInfo.firstName}
                    name={`firstName`}
                    onChange={handleInput}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="form-group">
                <div className="field-inner">
                  <input
                    type="text"
                    className="text-input"
                    placeholder={`Enter Last Name`}
                    value={bookingInfo.lastName}
                    name={`lastName`}
                    onChange={handleInput}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="form-group">
                <div className="field-inner">
                  <input
                    type="email"
                    className="text-input"
                    placeholder={`Enter Valid Email Address`}
                    value={bookingInfo.email}
                    name={`email`}
                    onChange={handleInput}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="form-group">
                <div className="field-inner">
                  <input
                    type="text"
                    className="text-input"
                    placeholder={`Enter Nationality`}
                    value={bookingInfo.nationality}
                    name={`nationality`}
                    onChange={handleInput}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="form-group">
                <div className="field-inner">
                  <input
                    type="text"
                    className="text-input"
                    placeholder={`Enter Phone Number`}
                    value={bookingInfo.phone}
                    name={`phone`}
                    onChange={handleInput}
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="form-group">
                <div className="field-inner">
                  <input
                    type="text"
                    className="text-input"
                    placeholder={`Enter NID Number`}
                    value={bookingInfo.nid}
                    name={`nid`}
                    onChange={handleInput}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <button className="go-back btn" onClick={decrementStep}>
          Go Back
        </button>
        <button className="next-step btn" onClick={handleNext}>
          Next Step
        </button>
      </footer>
    </div>
  );
}
