/* eslint-disable no-unused-vars */
import { useHotelBooking } from "../../../../../context/hotelBookingContext";
import { useState } from "react";
import Header from "./Header";
import Alert from "./Alert";
import { useLocation } from "react-router-dom";

export default function AdditionalRequest() {
  const { incrementStep, decrementStep, bookingInfo, setBookingInfo } =
    useHotelBooking();
  const [alert, setAlert] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { state } = useLocation();
  const { hotelId, subCategoryId } = state;

  // Handler for Checkbox
  const handleCheck = (e) => {
    const { name, value } = e.target || {};
    setBookingInfo({
      ...bookingInfo,
      additional: {
        ...bookingInfo.additional,
        [name]: {
          ...bookingInfo.additional[name],
          status: !bookingInfo.additional[name].status,
        },
      },
    });
  };

  // Handler for Radio
  const handleRadio = (e) => {
    const { name, value } = e.target || {};
    setBookingInfo({
      ...bookingInfo,
      additional: {
        ...bookingInfo.additional,
        [name]: {
          ...bookingInfo.additional[name],
          value,
        },
      },
    });
  };

  // Handler for Going to Next Step
  const handleNext = async (e) => {
    e.preventDefault();
    incrementStep();
  };

  const headerData = {
    title: "Additional Request (Optional)",
    description: "Request will be passed to property,",
    descriptionBold: "fulfillment subject to availability",
  };

  const {
    airport,
    extraBed,
    higherFloor,
    decoration,
    bedType,
    roomPreference,
  } = bookingInfo.additional || {};
  return (
    <div className="container">
      <Header {...headerData} />
      {!!alert && <Alert text={alert} handleClick={() => setAlert("")} />}
      <div className="plan">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="form-group">
              <div className="field-inner">
                <div className="field-check">
                  <input
                    id="airport"
                    type="checkbox"
                    name="airport"
                    onChange={handleCheck}
                    checked={airport.status}
                    className="check-input"
                  />
                  <label htmlFor="airport" className="check-label">
                    {airport.value}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="form-group">
              <div className="field-inner">
                <div className="field-check">
                  <input
                    id="extraBed"
                    type="checkbox"
                    name="extraBed"
                    onChange={handleCheck}
                    checked={extraBed.status}
                    className="check-input"
                  />
                  <label htmlFor="extraBed" className="check-label">
                    {extraBed.value}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="form-group">
              <div className="field-inner">
                <div className="field-check">
                  <input
                    id="higherFloor"
                    type="checkbox"
                    name="higherFloor"
                    onChange={handleCheck}
                    checked={higherFloor.status}
                    className="check-input"
                  />
                  <label htmlFor="higherFloor" className="check-label">
                    {higherFloor.value}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="form-group">
              <div className="field-inner">
                <div className="field-check">
                  <input
                    id="decoration"
                    type="checkbox"
                    name="decoration"
                    onChange={handleCheck}
                    checked={decoration.status}
                    className="check-input"
                  />
                  <label htmlFor="decoration" className="check-label">
                    {decoration.value}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <h5 style={{ marginLeft: "15px", marginTop: "15px" }}>Bed Type</h5>
          <div className="col-sm-12 col-md-6">
            <div className="form-group">
              <div className="field-inner">
                <div className="field-radio">
                  <input
                    id="large_bed"
                    type="radio"
                    name="bedType"
                    className="radio-input"
                    value="large_bed"
                    checked={bedType.value === "large_bed"}
                    onChange={handleRadio}
                  />
                  <label htmlFor="large_bed" className="radio-label">
                    Large Bed
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="form-group">
              <div className="field-inner">
                <div className="field-radio">
                  <input
                    id="twin_beds"
                    type="radio"
                    name="bedType"
                    className="radio-input"
                    value="twin_beds"
                    checked={bedType.value === "twin_beds"}
                    onChange={handleRadio}
                  />
                  <label htmlFor="twin_beds" className="radio-label">
                    Twin Beds
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <h5 style={{ marginLeft: "15px", marginTop: "15px" }}>
            Room Preference
          </h5>
          <div className="col-sm-12 col-md-6">
            <div className="form-group">
              <div className="field-inner">
                <div className="field-radio">
                  <input
                    id="non_smoking"
                    type="radio"
                    name="roomPreference"
                    className="radio-input"
                    value="non_smoking"
                    checked={roomPreference.value === "non_smoking"}
                    onChange={handleRadio}
                  />
                  <label htmlFor="non_smoking" className="radio-label">
                    Non Smoking
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="form-group">
              <div className="field-inner">
                <div className="field-radio">
                  <input
                    id="smoking"
                    type="radio"
                    name="roomPreference"
                    className="radio-input"
                    value="smoking"
                    checked={roomPreference.value === "smoking"}
                    onChange={handleRadio}
                  />
                  <label htmlFor="smoking" className="radio-label">
                    Smoking
                  </label>
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
