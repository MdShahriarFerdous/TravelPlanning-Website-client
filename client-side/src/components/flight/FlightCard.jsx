import {useEffect, useState} from "react";
import {getFilterFlight} from "../../_api/FlightApi.js";
import "./FlightCard.css";
import {calculateDuration} from "../../utils/calculateDuration.js";
import MiniLoader from "../screenloader/MiniLoader.jsx";
import Timer from "./Timer.jsx";
import {Link} from "react-router-dom";
import {comaFormatNumber} from "../../utils/comaFormattedNumber.js";

const FlightCard = ({formData, onResetFormData}) => {
        const [flightData, setFlightData] = useState([]);
        const [timer, setTimer] = useState({minutes: 1, seconds: 59});
        const [showModal, setShowModal] = useState(false);
        const [isLoading, setIsLoading] = useState(false);

        const fetchFlight = async () => {
            setIsLoading(true);
            try {
                const response = await getFilterFlight(formData);
                if (response.error) {
                    // If the API returns an error, set flightData to an empty array
                    setFlightData([]);
                } else {
                    // If the API returns data, set flightData to the response data
                    setFlightData(response.data);
                }
            } catch (error) {
                // Handle any other errors that might occur during the API call
                console.error('Error fetching flight data:', error);
                setFlightData([]);
            } finally {
                setIsLoading(false);
            }
        };

        useEffect(() => {
            if (formData.source_destination_id && formData.destination_id && formData.journey_date && formData.total_travellers) {
                fetchFlight();
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [formData.source_destination_id, formData.destination_id, formData.journey_date, formData.total_travellers]);


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
                        setTimer({minutes: timer.minutes - 1, seconds: 59});
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
            setTimer({ minutes: 0, seconds: 10 });
            onResetFormData();
        };

        return (
            <>
                {isLoading ? <MiniLoader /> : flightData.length > 0 ?
                    (<div className="row">
                    <div className="col-lg-9">
                        {flightData.length > 0 && flightData.map((flight, index) => {
                            return (
                                <div key={index}>
                                    <div className="flight-card">
                                        <div className="flight-airlines-wrapper">
                                            <div className="airline-info-container">
                                                <div className="flight-airlines-info">
                                                    <div className="airplane-info">
                                                        <div className="image-placeholder">
                                                            <img src={flight?.airlineInfo?.logo}/>
                                                        </div>
                                                        <div className="airplane-info-text">
                                                            <span
                                                                className="airplane-name text-uppercase">{flight?.airlineInfo?.airline_name}</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="flight-time">
                                                            <div className="start-time">
                                                                <span className="time-text">{flight?.departure_time}</span>
                                                                <span
                                                                    className="destination-text text-uppercase">{flight?.sourceLocation?.location_name}</span>
                                                            </div>
                                                            <div className="stops-info">
                                                                <div className="stop-numbers">
                                                                    <span>Non-stop</span>
                                                                </div>
                                                                <div className="arrow-pointer"></div>
                                                            </div>
                                                            <div className="end-time">
                                                                <span className="time-text">{flight?.arrival_time}</span>
                                                                <span
                                                                    className="destination-text text-uppercase">{flight?.destinationLocation?.location_name}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flight-duration-text">
                                                        <span>{calculateDuration(flight?.departure_time, flight?.arrival_time)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="price-info-wrapper">
                                                <div className="price-texts">
                                                    <span className="discount-info">{flight?.flight_number}</span>
                                                    <div>
                                                        <span className="actual-price"></span>
                                                        <span className="discount-price">BDT {comaFormatNumber(flight?.fare * formData.total_travellers)}</span>
                                                    </div>
                                                </div>
                                                <Link to={`/flight/booking/${flight._id}/${formData.total_travellers}`} >
                                                    <button
                                                        type="button"
                                                        className="btn selection-btn btn-block btn-secondary btn-sm"
                                                    >
                                                        Select
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="col-lg-3">
                        <Timer flightData={flightData}  handleSearchAgain={handleSearchAgain}/>
                        {/*Help Section*/}
                        <div className="support-card-wrapper support-desktop-view">
                            <div className="support-header-text">
                                <span>Need Help?</span>
                            </div>
                            <div className="support-card-body">
                                <div className="support-content">
                                    <img src="https://www.gozayaan.com/img/icon-hotline.bd938336.svg"/>
                                    <a href="tel:+8809678332211">+88 09678 553399</a>
                                </div>
                                <div className="support-content">
                                    <img src="https://www.gozayaan.com/img/icon-messenger.6388a61d.svg"/>
                                    <a href="#" target="_blank">
                                        wetravel.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
                    : (
                        <div className="flight-card-placeholder">
                            <img src="https://res.cloudinary.com/shakhawat15/image/upload/v1702629792/23823469_r8zh_rcsk_141001-_Converted_tqfhfk.png" alt="Plane Image" />
                            <h4>No Flight Available</h4>
                        </div>
                    )}
            </>
        );
    }
;

export default FlightCard;
