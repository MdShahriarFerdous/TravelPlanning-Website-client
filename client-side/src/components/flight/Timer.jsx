import {useEffect, useState} from "react";

const Timer = ({flightData, handleSearchAgain}) => {
    const [timer, setTimer] = useState({minutes: 0, seconds: 10});
    const [showModal, setShowModal] = useState(false);

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
    return (
        <div>
            <div id="flight-timer" className="timer-container">
                <div className="timer-container">
                    <div className="timer-text-wrapper">
                        <span></span>
                        <div className="timer-number">
                            <i className="fa fa-clock"/>
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
            {showModal && (
                <div
                    className="modal fade show"
                    tabIndex="-1"
                    role="dialog"
                    style={{display: "block"}}
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
        </div>
    );
};

export default Timer;