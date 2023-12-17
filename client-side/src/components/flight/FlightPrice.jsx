import './FlightPrice.css'
import {comaFormatNumber} from "../../utils/comaFormattedNumber.js";
const FlightPrice = ({flightData, traveler}) => {
    return (<div>
            <div className="fare-summary-wrapper flight sticky">
                <div className="fare-modal-header text-center">
                    <h4 className="mb-0 font-weight-bolder">Price Summary</h4>
                    <i className="fas fa-times fa-lg"/>
                </div>
                <div className="fare-wrapper">
                    <div className="fare-box">
                        <div className="fare-header">
                            <div className="wrapper">
                                <div className="img-placeholder">
                                    <img
                                        src={flightData?.airlineInfo?.logo}
                                    />
                                </div>
                                <div className="header-summary">
                                    <div className="fare-type">
                                        <img src="https://www.gozayaan.com/img/flight.27f98987.svg" alt="airplane icon"/>
                                        <span>Flight</span>
                                    </div>
                                    <span className="name text-uppercase">{flightData?.sourceLocation?.location_name} - {flightData?.destinationLocation?.location_name}</span>
                                    <span className="subtitle">One Way</span>
                                </div>
                            </div>
                        </div>
                        <div className="fare-info collapse show" >
                            <div className="fare-info-header">Fare Summary</div>
                            <div className="fare-content">
                                <div className="fare-info-content">
                                    <div className="passenger-items">
                                        <span className="passenger-type">Adult ({traveler} travelers)</span>
                                    </div>
                                    <div className="fare-item">
                                        <span className="fare">Base Fare</span>
                                        <span className="fare-price">
                                            <span className="sm-text">BDT</span>
                                            <span className="lg-text">{comaFormatNumber(flightData?.fare * traveler)}</span>
                                        </span>
                                    </div>
                                    <div className="fare-item">
                                        <span className="fare">Tax</span>
                                        <span className="fare-price">
                                            <span className="sm-text">BDT</span>
                                            <span className="lg-text">{comaFormatNumber(flightData?.tax)}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fare-breakdown">
                            <div className="fare-content">
                                <div className="fare-info-content">
                                    <div className="fare-item">
                                        <span className="fare">Sub-Total</span>
                                        <span className="fare-price">
                                            <span className="sm-text">BDT</span>
                                            <span className="lg-text">{comaFormatNumber(flightData?.total_price)}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="total-price">
                        <div className="price-wrapper">
                            <div>
                                <span className="text-blue">You Pay</span>
                                <span className="subtext-grey">(for {traveler} Travelers)</span>
                            </div>
                            <span className="text-blue">
                              <span className="sm-text">BDT</span>
                              <span className="lg-text">{comaFormatNumber(flightData?.total_price)}</span>
                            </span>
                        </div>
                        {/*<div className="price-wrapper savings">*/}
                        {/*    <div>*/}
                        {/*        <span className="text-green">You Save</span>*/}
                        {/*    </div>*/}
                        {/*    <span className="text-green">*/}
                        {/*      <span className="sm-text">BDT</span>*/}
                        {/*      <span className="lg-text">994</span>*/}
                        {/*    </span>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>);
};

export default FlightPrice;