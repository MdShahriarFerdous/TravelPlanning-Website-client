import "./BookingDetails.css";

const BookingDetails = () => {
  return (
    <>
      <div className="col-lg-8">
        <div className="booking-header">
          <h4>Review Your Booking</h4>
          <ul className="stage-list">
            <li>Flight Selection</li>
            <li className="review">Booking</li>
            <li>Payment</li>
          </ul>
        </div>
        <div className="booking-flight-info">
          <div>
            <div className="booking-flight-card">
              <div className="booking-card-header">
                <h6>DAC-CXB</h6>
                <div id="toggle-0" className="toggle-icon flat-icon" />
              </div>
              <div id="flight-0" className="collapse show" style={{}}>
                <div className="detail-accordion">
                  <div className="flight-booking-detail">
                    <div className="flight-airlines-info">
                      <div className="airplane-info-wrapper">
                        <div className="airplane-info">
                          <div className="image-placeholder">
                            <img src="https://storage.googleapis.com/gz-flight-prod-booking-data/carrier/logo/dfcbe726-30f3-478a-a062-731fdd91d0ee.png" />
                          </div>
                          <div className="airplane-info-text">
                            <span className="airplane-name"> NOVOAIR </span>
                            <span className="airplane-model">
                              VQ 935 | ATR725{" "}
                            </span>
                          </div>
                        </div>
                        <div className="airplane-amenities">
                          <span className="flight-type">(Economy)</span>
                          <div className="amenity-icons" />
                        </div>
                      </div>
                      <div className="flight-time detail-time">
                        <div className="start-time">
                          <span className="time-text"> 16:30 </span>
                          <span className="day-text"> Tue, 19 Dec, 2023 </span>
                          <span className="destination-text">DAC </span>
                        </div>
                        <div className="stops-info">
                          <div className="stop-names">
                            <span>Non Stop</span>
                          </div>
                          <div className="arrow-pointer" />
                          <div className="stop-names">
                            <span className="duration-text">1h 5m</span>
                          </div>
                        </div>
                        <div className="end-time">
                          <span className="time-text"> 17:35 </span>
                          <span className="day-text"> Tue, 19 Dec, 2023 </span>
                          <span className="destination-text">CXB</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="booking-flight-card">
            <div className="booking-card-header">
              <h6>Flight Details</h6>
              <div className="toggle-icon flat-icon" />
            </div>
            <div className="collapse show">
              <div className="detail-accordion">
                <div className="flight-booking-detail">
                  <div className="flight-details">
                    <div className="rules-section">
                      <div className="rule-header">
                        <ul className="rules-tab">
                          <li className="active">Baggage</li>
                          <li className="">Fare</li>
                          <li className="">Policy</li>
                        </ul>
                      </div>
                      <div className="rules-content">
                        <div className="baggage-info">
                          <div className="baggage-header-info">
                            <span className="header-text">Flight</span>
                            <span className="header-text text-center">
                              Cabin
                            </span>
                            <span className="header-text text-right">
                              Check-in
                            </span>
                          </div>
                          <div className="info-content">
                            <div className="content-item">
                              <div>
                                <div className="content-item-text">
                                  <span className="segment-loc">
                                    {" "}
                                    DAC - CXB{" "}
                                  </span>
                                  <span className="baggage-weight">
                                    {" "}
                                    7 KGS{" "}
                                  </span>
                                  <span className="check-in-baggage">
                                    {" "}
                                    20 KGS{" "}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="fare-info" style={{ display: "none" }}>
                          <div className="fare-info-header">
                            <span className="header-text">Fare Summary</span>
                            <span className="header-text text-center">
                              Base Fare
                            </span>
                            <span className="header-text text-right">Tax</span>
                          </div>
                          <div className="fare-content-wrapper">
                            <div className="content-item">
                              <span className="passenger-type">
                                {" "}
                                Adult x 1{" "}
                              </span>
                              <span className="flight-price text-center">
                                BDT 5,274{" "}
                              </span>
                              <span className="flight-price text-right">
                                {" "}
                                BDT 975{" "}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          className="fare-rules-info"
                          style={{ display: "none" }}
                        >
                          <div className="rule-wrapper">
                            <div className="fare-rule-header">
                              <h6>DAC-CXB</h6>
                            </div>
                            <div className="fare-rule-content">
                              <div className="item-header">
                                <span>Cancellation</span>
                              </div>
                              <div className="fee-content">
                                <span>
                                  Refund Amount = Paid Amount - Airline's
                                  Cancellation Fee
                                </span>
                              </div>
                              <div className="item-header">
                                <span>Re-issue</span>
                              </div>
                              <div className="fee-content">
                                <span>
                                  Re-issue Fee = Airline's Fee + Fare Difference
                                </span>
                              </div>
                              <span className="cancellation-note">
                                *The airline's fee is indicative and per person.
                                Convenience fee is non-refundable.
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="booking-header">
          <h4>Enter Traveller Details</h4>
        </div>
        <span>
          <div>
            <div className="card">
              <span>
                <div className="form-header">
                  <div className="passenger-header">
                    <h6>Passenger 1</h6>
                    <span className="passenger-type">Adult</span>
                    <span className="primary-contact"> Primary Contact </span>
                  </div>
                  <div className="toggle-icon flat-icon" />
                </div>
                <div className="collapse show">
                  <div className="card-body">
                    <div className="row border-bottom pb-1 mb-2">
                      <div className="mb-3 col-12">
                        <h4 className="text-primary font-weight-bolder">
                          Personal Details
                        </h4>
                        <span>
                          <img
                            src="https://www.gozayaan.com/img/icon-info-light.9f5c93cb.svg"
                            alt="info-icon"
                          />
                          <small className="info-text">
                            As mentioned on your passport or government approved
                            IDs
                          </small>
                        </span>
                      </div>
                      <div className="mb-1 col-md-6">
                        <fieldset
                          className="form-group d-block"
                          htmlFor="first-name-0"
                        >
                          <legend
                            tabIndex={-1}
                            className="bv-no-focus-ring col-form-label pt-0"
                          >
                            Given Name / First Name
                          </legend>
                          <div>
                            <span>
                              <div
                                role="group"
                                className="input-group position-relative"
                              >
                                <input
                                  id="first-name-0"
                                  type="text"
                                  autoComplete="given-name"
                                  className="form-control"
                                />
                              </div>
                              <small className="text-danger" />
                            </span>
                          </div>
                        </fieldset>
                      </div>
                      <div className="mb-1 col-md-6">
                        <fieldset
                          className="form-group"
                          htmlFor="last-name-0"
                        >
                          <legend
                            tabIndex={-1}
                            className="bv-no-focus-ring col-form-label pt-0"
                          >
                            Last Name
                          </legend>
                          <div>
                            <span>
                              <div role="group" className="input-group">
                                <input
                                  id="last-name-0"
                                  type="text"
                                  autoComplete="family-name"
                                  className="form-control"
                                />
                              </div>
                              <small className="text-danger" />
                            </span>
                          </div>
                        </fieldset>
                      </div>
                      <div className="mb-1 col-md-6">
                        <legend className="bv-no-focus-ring col-form-label pt-0">
                          Nationality
                        </legend>
                        <div
                          dir="auto"
                          className="v-select mb-1 vs--single vs--searchable"
                          name="nationality"
                        >
                          <div
                            id="vs1__combobox"
                            role="combobox"
                            aria-expanded="false"
                            aria-owns="vs1__listbox"
                            aria-label="Search for option"
                            className="vs__dropdown-toggle"
                          >
                            <div className="vs__selected-options">
                              <span className="vs__selected"> Bangladesh </span>
                              <input
                                aria-autocomplete="list"
                                aria-labelledby="vs1__combobox"
                                aria-controls="vs1__listbox"
                                type="search"
                                autoComplete="off"
                                className="vs__search"
                              />
                            </div>
                            <div className="vs__actions">
                              <button
                                type="button"
                                title="Clear Selected"
                                aria-label="Clear Selected"
                                className="vs__clear"
                              >
                                <i className="fa fa-times" />
                              </button>
                              <i
                                className="fa fa-chevron-down vs__open-indicator"
                                role="presentation"
                              />
                              <div
                                className="vs__spinner"
                                style={{ display: "none" }}
                              >
                                Loading...
                              </div>
                            </div>
                          </div>
                          <ul
                            id="vs1__listbox"
                            role="listbox"
                            style={{ display: "none", visibility: "hidden" }}
                          />
                        </div>
                      </div>
                      <div className="mb-1 col-md-6">
                        <fieldset
                          className="form-group"
                          htmlFor="frequent-flyer-0"
                        >
                          <legend
                            tabIndex={-1}
                            className="bv-no-focus-ring col-form-label pt-0"
                          >
                            Frequent Flyer Number (Optional)
                          </legend>
                          <div>
                            <div role="group" className="input-group">
                              <input
                                id="frequent-flyer-0"
                                type="text"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                    <div className="row">
                      <div className="mb-1 col-12">
                        <h4 className="text-primary font-weight-bolder">
                          Contact Details
                        </h4>
                        <span>
                          <img
                            src="https://www.gozayaan.com/img/icon-info-light.9f5c93cb.svg"
                            alt="info-icon"
                          />
                          <small className="info-text">
                             Receive booking confirmation &amp; updates
                          </small>
                        </span>
                      </div>
                      <div className="col-md-6">
                        <fieldset
                          className="form-group"
                          htmlFor="email-0"
                          id="__BVID__75"
                        >
                          <legend
                            tabIndex={-1}
                            className="bv-no-focus-ring col-form-label pt-0"
                          >
                            Email
                          </legend>
                          <div>
                            <span>
                              <div role="group" className="input-group">
                                <input
                                  id="email-0"
                                  type="email"
                                  autoComplete="email"
                                  className="form-control"
                                />
                              </div>
                              <small className="text-danger" />
                            </span>
                          </div>
                        </fieldset>
                      </div>
                      <div className="mb-1 col-md-6">
                        <fieldset
                          className="form-group"
                          htmlFor="phone-number-0"
                        >
                          <legend
                            tabIndex={-1}
                            className="bv-no-focus-ring col-form-label pt-0"
                          >
                            Phone Number
                          </legend>
                          <div>
                            <span>
                              <div
                                className="vue-tel-input global-phone-input"
                                value=""
                              >
                                <div
                                  aria-label="Country Code Selector"
                                  aria-haspopup="listbox"
                                  role="button"
                                  tabIndex={0}
                                  className="vti__dropdown"
                                >
                                  <span className="vti__selection">
                                    <span className="vti__flag bd" />
                                    <span className="vti__country-code">
                                      {" "}
                                      +880{" "}
                                    </span>
                                    <i className="fas fa-chevron-down" />
                                  </span>
                                </div>
                                <input
                                  autoComplete="tel-national"
                                  id="phone-number-0"
                                  placeholder="1XXX XXXXXX"
                                  className="vti__input phone-input"
                                />
                              </div>
                              <small className="text-danger" />
                            </span>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            defaultValue="true"
                            id="__BVID__82"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="__BVID__82"
                          >
                            Save this to my traveler list.
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </span>
        <button
          id="bookButton"
          type="button"
          className="btn btn-block btn-secondary"
          style={{ marginTop: "20px" }}
        >
          <span>Continue</span>
        </button>
      </div>
    </>
  );
};
export default BookingDetails;
