/* eslint-disable no-unused-vars */
import { useHotelBooking } from "../../../../../context/hotelBookingContext";
import { isEmpty } from "../../../../../utils/inputValidator";
import { toast } from "react-toastify";
import { useState } from "react";
import Header from "./Header";
import Alert from "./Alert";

export default function GuestDetails() {
  const { incrementStep, decrementStep, bookingInfo, setBookingInfo } =
    useHotelBooking();
  const [alert, setAlert] = useState("");

  // Handler for Input Change
  const handleInput = (e) => {
    const { name, value } = e.target || {};
    const guest = name.split("-");
    const index = guest[0];
    const key = guest[1];
    const guestsInfo = bookingInfo.guestsInfo.map((el, i) => {
      if (i == index) {
        if (key === "givenName") {
          return {
            ...el,
            givenName: value,
          };
        }
        if (key === "surname") {
          return {
            ...el,
            surname: value,
          };
        }
      }
      return el;
    });
    setBookingInfo({
      ...bookingInfo,
      guestsInfo,
    });
  };

  // Handler for Going to Next Step
  const handleNext = (e) => {
    e.preventDefault();
    const required = !bookingInfo.guestsInfo.every(
      (guest) => !isEmpty(guest.givenName) && !isEmpty(guest.surname)
    );
    if (required) {
      toast.error("Please Fill All Fields Properly");
      setAlert("Please Fill All Fields Properly");
    } else {
      incrementStep();
    }
  };

  const headerData = {
    title: "Guest Details",
    description: "Please Provide Every Guests Detailed Info",
  };

  // written in refactoring
  return (
    <div className="container">
      <Header {...headerData} />
      {!!alert && <Alert text={alert} handleClick={() => setAlert("")} />}
      <div className="plan">
        <div className="row">
          {bookingInfo.guestsInfo.map((guest, i) => {
            return (
              <div className="row" key={i}>
                <div className="col-sm-12 col-md-6">
                  <div className="form-group">
                    <div className="field-label">Guest {i + 1} Information</div>
                    <div className="field-inner">
                      <input
                        type="text"
                        className="text-input"
                        placeholder={`Given Name`}
                        value={guest.givenName}
                        name={`${i}-givenName`}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="form-group">
                    <div className="field-inner" style={{ marginTop: "25px" }}>
                      <input
                        type="text"
                        className="text-input"
                        placeholder={`Surname`}
                        value={guest.surname}
                        name={`${i}-surname`}
                        onChange={handleInput}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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
