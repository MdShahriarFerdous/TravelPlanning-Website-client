import { useEffect, useState } from "react";
import { getFilterFlight } from "../../_api/FlightApi.js";
import "./FlightCard.css";

const FlightCard = ({ formData }) => {
  console.log("FlightCard", formData);
  const [flightData, setFlightData] = useState([]);
  const [timer, setTimer] = useState({ minutes: 0, seconds: 10 });
  const [showModal, setShowModal] = useState(false);

  const fetchFlight = async () => {
    const response = await getFilterFlight(formData);
    setFlightData(response.data);
  };

  useEffect(() => {
    if (formData.source_destination_id) {
      fetchFlight();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData.source_destination_id]);

  console.log("flightData", flightData);

  useEffect(() => {
    let timerInterval;

    if (flightData.length > 0) {
      timerInterval = setInterval(() => {
        if (timer.seconds > 0) {
          setTimer((prevTimer) => ({
            ...prevTimer,
            seconds: prevTimer.seconds - 1,
          }));
        } else if (timer.minutes > 0) {
          setTimer({ minutes: timer.minutes - 1, seconds: 59 });
        } else {
          clearInterval(timerInterval);
          setShowModal(true); // Show modal when timer reaches 00:00
        }
      }, 1000);
    }

    return () => clearInterval(timerInterval); // Clear the interval on component unmount

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer, flightData]);

  const handleSearchAgain = () => {
    setShowModal(false);
    setFlightData([]);
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-9">
          <div className="flight-card">
            <div className="flight-airlines-wrapper">
              <div className="airline-info-container">
                <div className="flight-airlines-info">
                  <div className="airplane-info">
                    <div className="image-placeholder">
                      <img src="https://storage.googleapis.com/gz-flight-prod-booking-data/carrier/logo/dfcbe726-30f3-478a-a062-731fdd91d0ee.png" />
                    </div>
                    <div className="airplane-info-text">
                      <span className="airplane-name">NOVOAIR</span>
                    </div>
                  </div>
                  <div>
                    <div className="flight-time">
                      <div className="start-time">
                        <span className="time-text">16:30</span>
                        <span className="destination-text">DAC</span>
                      </div>
                      <div className="stops-info">
                        <div className="stop-numbers">
                          <span>Non-stop</span>
                        </div>
                        <div className="arrow-pointer"></div>
                      </div>
                      <div className="end-time">
                        <span className="time-text">17:35</span>
                        <span className="destination-text">CXB</span>
                      </div>
                    </div>
                  </div>
                  <div className="flight-duration-text">
                    <span>1h 5m</span>
                  </div>
                </div>
              </div>
              <div className="price-info-wrapper">
                <div className="price-texts">
                  <span className="discount-info">EDOM1123</span>
                  <div>
                    <span className="actual-price">BDT 5,499</span>
                    <span className="discount-price">BDT 5,047</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn selection-btn btn-block btn-secondary btn-sm"
                >
                  Select
                </button>
              </div>
            </div>
          </div>
          <div className="flight-card">
            <div className="flight-airlines-wrapper">
              <div className="airline-info-container">
                <div className="flight-airlines-info">
                  <div className="airplane-info">
                    <div className="image-placeholder">
                      <img src="https://storage.googleapis.com/gz-flight-prod-booking-data/carrier/logo/dfcbe726-30f3-478a-a062-731fdd91d0ee.png" />
                    </div>
                    <div className="airplane-info-text">
                      <span className="airplane-name">NOVOAIR</span>
                    </div>
                  </div>
                  <div>
                    <div className="flight-time">
                      <div className="start-time">
                        <span className="time-text">16:30</span>
                        <span className="destination-text">DAC</span>
                      </div>
                      <div className="stops-info">
                        <div className="stop-numbers">
                          <span>Non-stop</span>
                        </div>
                        <div className="arrow-pointer"></div>
                      </div>
                      <div className="end-time">
                        <span className="time-text">17:35</span>
                        <span className="destination-text">CXB</span>
                      </div>
                    </div>
                  </div>
                  <div className="flight-duration-text">
                    <span>1h 5m</span>
                  </div>
                </div>
              </div>
              <div className="price-info-wrapper">
                <div className="price-texts">
                  <span className="discount-info">EDOM1123</span>
                  <div>
                    <span className="actual-price">BDT 5,499</span>
                    <span className="discount-price">BDT 5,047</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn selection-btn btn-block btn-secondary btn-sm"
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div id="flight-timer" className="timer-container">
            <div className="timer-container">
              <div className="timer-text-wrapper">
                <span></span>
                <div className="timer-number">
                  <i className="fa fa-clock" />
                  <div>
                    <div className="timer-value">
                      <div>
                        {String(timer.minutes).padStart(2, "0")}:
                        <span>min</span>
                      </div>
                      <div
                        style={{
                          width: "30px" /* Adjust this width as needed */,
                        }}
                      >
                        {String(timer.seconds).padStart(2, "0")}
                        <span>sec</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Help Section*/}
          <div className="support-card-wrapper support-desktop-view">
            <div className="support-header-text">
              <span>Need Help?</span>
            </div>
            <div className="support-card-body">
              <div className="support-content">
                <img src="https://www.gozayaan.com/img/icon-hotline.bd938336.svg" />
                <a href="tel:+8809678332211">+88 09678 553399</a>
              </div>
              <div className="support-content">
                <img src="https://www.gozayaan.com/img/icon-messenger.6388a61d.svg" />
                <a href="#" target="_blank">
                  wetravel.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body d-flex justify-content-between">
                <p>{`Time's up! Your 30-minute countdown has ended.`}</p>
                <button
                  className="btn"
                  onClick={handleSearchAgain}
                  style={{color: "#fff", backgroundColor: "#ff5522"}}
                >
                  Search Again
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FlightCard;
