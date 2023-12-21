/* eslint-disable no-unused-vars */
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { check } from "../../../backend-services/hotelsApi";
import AvailablityModal from "../common/AvailablityModal";
import { Formik, Field, Form } from "formik";
import DatePicker from "react-datepicker";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import MiniLoader from "../../screenloader/MiniLoader";

// eslint-disable-next-line react/prop-types
export default function HotelBookingCart({ hotelInfo }) {
  const { _id, name, rentPerPerson } = hotelInfo || {};
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [guestsInput, setGuestsInput] = useState(1);
  const [roomsInput, setRoomsInput] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Initial Form Values
  const initialValues = {
    checkInDate: new Date(),
    checkOutDate: new Date(),
  };
  // Handler for Input Change
  const handleChange = (e) => {
    const { name, value } = e.target || {};
    if (name === "guests") setGuestsInput(value);
    if (name === "rooms") setRoomsInput(value);
  };
  const handleCloseModal = () => {
    setModalShow(false);
  };
  const handleSubmit = async (values) => {
    const { checkInDate, checkOutDate } = values;
    const checkInDateMoment = moment(checkInDate).format("YYYY-MM-DD");
    const checkOutDateMoment = moment(checkOutDate).format("YYYY-MM-DD");
    setIsLoading(true);
    const response = await check({
      hotelId: _id,
      guests: Number(guestsInput),
      rooms: Number(roomsInput),
      checkIn: checkInDateMoment,
      checkOut: checkOutDateMoment,
    });
    if (response) {
      if (response?.data?.error) {
        toast.error(response?.data?.error);
      } else {
        setModalShow(true);
        if (response?.data) {
          setModalData(response?.data?.data);
        }
      }
    }
    setIsLoading(false);
  };
  return (
    <div className="sidebar-side col-xl-4 col-lg-8 col-md-12 col-sm-12">
      <div className="sidebar-inner">
        <div className="dsp-widget t-book-widget">
          <div className="inner-box">
            <div className="t-book-header">
              <span className="st-txt">
                Start <br />
                From
              </span>
              <span className="amount">${rentPerPerson}</span>
              <span className="qty">/ Per Person</span>
            </div>
            <div className="lower-box">
              <div className="form-box site-form">
                <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                  <Form>
                    <div className="fields">
                      <div className="form-group">
                        <div className="field-label">Check in</div>
                        <div className="field-inner">
                          <Field name="checkInDate">
                            {({ field, form }) => (
                              <DatePicker
                                id="checkInDate"
                                wrapperClassName="datepicker"
                                selected={field.value}
                                onChange={(date) =>
                                  form.setFieldValue(field.name, date)
                                }
                                minDate={new Date()}
                              />
                            )}
                          </Field>
                          <FontAwesomeIcon
                            icon={faCalendarDays}
                            className="alt-icon"
                            fixedWidth
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="field-label">Check out</div>
                        <div className="field-inner">
                          <Field name="checkOutDate">
                            {({ field, form }) => (
                              <DatePicker
                                id="checkOutDate"
                                wrapperClassName="datepicker"
                                selected={field.value}
                                onChange={(date) =>
                                  form.setFieldValue(field.name, date)
                                }
                                minDate={new Date()}
                              />
                            )}
                          </Field>
                          <FontAwesomeIcon
                            icon={faCalendarDays}
                            className="alt-icon"
                            fixedWidth
                          />
                        </div>
                      </div>
                    </div>
                    <h6>Guests</h6>
                    <div className="tickets">
                      <div className="ticket-block clearfix">
                        <div className="tick-ttl">Person</div>
                        <div className="tick-sel">
                          <div className="quantity-box">
                            <div className="item-quantity">
                              <Field
                                type="text"
                                name="guests"
                                placeholder="1"
                                value={guestsInput}
                                onChange={handleChange}
                                className="qty-spinner"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ticket-block clearfix">
                        <div className="tick-ttl">Room</div>
                        <div className="tick-sel">
                          <div className="quantity-box">
                            <div className="item-quantity">
                              <Field
                                type="text"
                                name="rooms"
                                placeholder="1"
                                value={roomsInput}
                                onChange={handleChange}
                                className="qty-spinner"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {isLoading ? (
                      <MiniLoader />
                    ) : (
                      <div className="proceed-link">
                        <button
                          disabled={isLoading}
                          type="submit"
                          className="theme-btn btn-style-two"
                        >
                          <span>Check Availability</span>
                        </button>
                      </div>
                    )}
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
        <div className="dsp-widget get-help-widget">
          <div className="inner">
            <h6>Get Help</h6>
            <h3>Need Help to Book?</h3>
            <div className="travilo-text">
              If youre eager to experience the epitome of luxury at {name}, our
              dedicated team of travel experts is here to assist you in making
              your reservation. Whether youre planning a romantic getaway, a
              family vacation, or a business trip, we can tailor your stay to
              meet your specific preferences and needs.
            </div>
            <div className="call-to">
              <a href="tel:+96899999000">
                <i className="icon fa-solid fa-phone"></i> Call Us
                <span className="nmbr">+968 99999000</span>
              </a>
            </div>
          </div>
        </div>

        <div className="dsp-widget dsp-stat-widget">
          <div className="inner">
            <h3>Property Highlights</h3>
            <div className="stats">
              <ul>
                <li className="clearfix">
                  <span className="ttl">Established</span>
                  <span className="dtl">1970</span>
                </li>
                <li className="clearfix">
                  <span className="ttl">Renovation</span>
                  <span className="dtl">2020</span>
                </li>
                <li className="clearfix">
                  <span className="ttl">Total Floor</span>
                  <span className="dtl">50</span>
                </li>
                <li className="clearfix">
                  <span className="ttl">Total Rooms</span>
                  <span className="dtl">240</span>
                </li>
                <li className="clearfix">
                  <span className="ttl">Total Restaurants</span>
                  <span className="dtl">5</span>
                </li>
                <li className="clearfix">
                  <span className="ttl">Total Bars</span>
                  <span className="dtl">3</span>
                </li>
                <li className="clearfix">
                  <span className="ttl">Total Stuff</span>
                  <span className="dtl">5200</span>
                </li>
                <li className="clearfix">
                  <span className="ttl">Total Branch</span>
                  <span className="dtl">3</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {!isLoading && (
        <AvailablityModal
          show={!!modalShow}
          onHide={handleCloseModal}
          data={modalData}
        />
      )}
    </div>
  );
}
