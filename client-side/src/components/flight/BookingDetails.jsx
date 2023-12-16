import "./BookingDetails.css";
import {useState} from "react";
import {formatDate} from "../../utils/formatedDate.js";
import {calculateDuration} from "../../utils/calculateDuration.js";
import {comaFormatNumber} from "../../utils/comaFormattedNumber.js";
import {BookingFlight} from "../../_api/FlightBookingApi.js";

const BookingDetails = ({flightData, traveler}) => {

    const [collapsedSections, setCollapsedSections] = useState({
        flight: false,
        flightDetails: false,
        passengerDetails: false,
    });
    const [activeTab, setActiveTab] = useState('baggage');

    const toggleCollapse = (section) => {
        setCollapsedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const [formData, setFormData] = useState({
        flight_id: flightData._id,
        first_name: '',
        last_name: '',
        phone: '',
        nationality: '',
        email: '',
        nid: '',
        seats: traveler,
        saveToTravelerList: true,
        total_fare: ((flightData?.fare * traveler) + flightData?.tax)
    });

    const handleInputChange = (field, value) => {
        setFormData(prevData => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleContinueClick = async () => {
        const response = await BookingFlight(formData);
        console.log(response);
        console.log(formData);
        // Perform additional actions with the form data as needed
    };

    return (flightData &&
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
                        <div className={`booking-flight-card ${collapsedSections.flight ? 'collapsed' : ''}`}>
                            <div className="booking-card-header" onClick={() => toggleCollapse('flight')}>
                                <h6 className="text-uppercase">{flightData?.sourceLocation?.location_name}-{flightData?.destinationLocation?.location_name}</h6>
                                <div id="toggle-0"
                                     className={`toggle-icon flat-icon ${collapsedSections.flight ? 'collapsed' : ''}`}/>
                            </div>
                            <div id="flight-0" className={`collapse ${collapsedSections.flight ? '' : 'show'}`}>
                                <div className="detail-accordion">
                                    <div className="flight-booking-detail">
                                        <div className="flight-airlines-info">
                                            <div className="airplane-info-wrapper">
                                                <div className="airplane-info">
                                                    <div className="image-placeholder">
                                                        <img src={flightData?.airlineInfo?.logo}/>
                                                    </div>
                                                    <div className="airplane-info-text">
                                                        <span
                                                            className="airplane-name text-uppercase"> {flightData?.airlineInfo?.airline_name} </span>
                                                        <span className="airplane-model text-uppercase">
                              {flightData?.planeInfo?.plane_model}
                            </span>
                                                    </div>
                                                </div>
                                                <div className="airplane-amenities">
                                                    <span
                                                        className="flight-type text-capitalize">({flightData?.flight_class})</span>
                                                    <div className="amenity-icons"/>
                                                </div>
                                            </div>
                                            <div className="flight-time detail-time">
                                                <div className="start-time">
                                                    <span className="time-text">{flightData?.departure_time}</span>
                                                    <span
                                                        className="day-text"> {formatDate(flightData?.journey_date)} </span>
                                                    <span
                                                        className="destination-text text-uppercase">{flightData?.sourceLocation?.location_name}</span>
                                                </div>
                                                <div className="stops-info">
                                                    <div className="stop-names">
                                                        <span>Non Stop</span>
                                                    </div>
                                                    <div className="arrow-pointer"/>
                                                    <div className="stop-names">
                                                        <span
                                                            className="duration-text">{calculateDuration(flightData?.departure_time ? flightData?.departure_time : "", flightData?.arrival_time ? flightData?.arrival_time : "")}</span>
                                                    </div>
                                                </div>
                                                <div className="end-time">
                                                    <span className="time-text"> {flightData?.arrival_time} </span>
                                                    <span
                                                        className="day-text"> {formatDate(flightData?.journey_date)} </span>
                                                    <span
                                                        className="destination-text text-uppercase">{flightData?.destinationLocation?.location_name}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`booking-flight-card ${collapsedSections.flightDetails ? 'collapsed' : ''}`}>
                        <div className="booking-card-header" onClick={() => toggleCollapse('flightDetails')}>
                            <h6>Flight Details</h6>
                            <div
                                className={`toggle-icon flat-icon ${collapsedSections.flightDetails ? 'collapsed' : ''}`}/>
                        </div>
                        <div className={`collapse ${collapsedSections.flightDetails ? '' : 'show'}`}>
                            <div className="detail-accordion">
                                <div className="flight-booking-detail">
                                    <div className="flight-details">
                                        <div className="rules-section">
                                            <div className="rule-header">
                                                <ul className="rules-tab">
                                                    <li className={activeTab === 'baggage' ? 'active' : ''}
                                                        onClick={() => handleTabChange('baggage')}>Baggage
                                                    </li>
                                                    <li className={activeTab === 'fare' ? 'active' : ''}
                                                        onClick={() => handleTabChange('fare')}>Fare
                                                    </li>
                                                    <li className={activeTab === 'policy' ? 'active' : ''}
                                                        onClick={() => handleTabChange('policy')}>Policy
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="rules-content">
                                                {activeTab === 'baggage' && (
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
                                  <span className="segment-loc text-uppercase">
                                    {flightData?.sourceLocation?.location_name} - {flightData?.destinationLocation?.location_name}
                                  </span>
                                                                        <span className="baggage-weight">
                                    7 KGS
                                  </span>
                                                                        <span className="check-in-baggage">
                                    20 KGS
                                  </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                {activeTab === 'fare' && (
                                                    <div className="fare-info">
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
                                Adult x {traveler}
                              </span>
                                                                <span className="flight-price text-center">
                                BDT {comaFormatNumber(flightData?.fare)}
                              </span>
                                                                <span className="flight-price text-right">
                                BDT {comaFormatNumber(flightData?.tax)}
                              </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                {activeTab === 'policy' && (
                                                    <div
                                                        className="fare-rules-info"
                                                    >
                                                        <div className="rule-wrapper">
                                                            <div className="fare-rule-header">
                                                                <h6 className="text-uppercase">{flightData?.sourceLocation?.location_name}-{flightData?.destinationLocation?.location_name}</h6>
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
                                                )}
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
            <div className={`card ${collapsedSections.passengerDetails ? 'collapsed' : ''}`}>
              <span>
                <div className="form-header" onClick={() => toggleCollapse('passengerDetails')}>
                  <div className="passenger-header">
                    <h6>Passenger 1</h6>
                    <span className="passenger-type">Adult</span>
                    <span className="primary-contact"> Primary Contact </span>
                  </div>
                  <div className={`toggle-icon flat-icon ${collapsedSections.passengerDetails ? 'collapsed' : ''}`}/>
                </div>
                <div className={`collapse ${collapsedSections.passengerDetails ? '' : 'show'}`}>
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
                            First Name
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
                                    onChange={(e) => handleInputChange('first_name', e.target.value)}
                                />
                              </div>
                              <small className="text-danger"/>
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
                                    onChange={(e) => handleInputChange('last_name', e.target.value)}
                                />
                              </div>
                              <small className="text-danger"/>
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
                          <div>
                            <span>
                              <div role="group" className="input-group">
                                <input
                                    id="last-name-0"
                                    type="text"
                                    autoComplete="family-name"
                                    className="form-control"
                                    onChange={(e) => handleInputChange('nationality', e.target.value)}
                                />
                              </div>
                              <small className="text-danger"/>
                            </span>
                          </div>
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
                            NID Number
                          </legend>
                          <div>
                            <div role="group" className="input-group">
                              <input
                                  id="frequent-flyer-0"
                                  type="text"
                                  className="form-control"
                                  onChange={(e) => handleInputChange('nid', e.target.value)}
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
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                />
                              </div>
                              <small className="text-danger"/>
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
                              <div role="group" className="input-group">
                                <input
                                    id="last-name-0"
                                    type="text"
                                    autoComplete="family-name"
                                    className="form-control"
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                />
                              </div>
                              <small className="text-danger"/>
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
                              onChange={(e) => handleInputChange('saveToTravelerList', e.target.value)}
                          />
                          <label
                              className="custom-control-label"
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
                    style={{marginTop: "20px"}}
                    onClick={handleContinueClick}
                >
                    <span>Continue</span>
                </button>
            </div>
        </>
    );
};
export default BookingDetails;
