/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { hotelBookingCreate } from "../../../../../backend-services/hotelsApi";
import { useHotelBooking } from "../../../../../context/hotelBookingContext";
import Header from "./Header";
import { toast } from "react-toastify";
import Alert from "./Alert";
import MiniLoader from "../../../../screenloader/MiniLoader";
import HotelBookingSummaryModal from "./HotelBookingSummaryModal";
export default function Summary() {
  const { incrementStep, setCurrentStep, bookingInfo, setBookingInfo } =
    useHotelBooking();
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [summaryData, setSummaryData] = useState(null);

  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(null);
  const handleCloseModal = () => {
    setModalShow(false);
  };
  const handleView = (e) => {
    e.preventDefault();
    setModalShow(true);
    setModalData(bookingInfo);
  };

  const handleNext = async () => {
    try {
      setIsLoading(true);
      const response = await hotelBookingCreate(bookingInfo);
      if (response) {
        if (response?.data?.error) {
          toast.error(response?.data?.error);
          setAlert(response?.data?.error);
        } else {
          setBookingInfo({
            newlyCreatedId: response?.data?.data?._id,
            hotelId: null,
            roomCategoryId: null,
            roomSubCategoryId: null,
            guests: 1,
            rooms: 1,
            checkIn: new Date(),
            checkOut: new Date(),
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            nationality: "Bangladeshi",
            nid: "",
            guestsInfo: [{ givenName: "", surname: "" }],
            additional: {
              airport: {
                value: "Airport Transfer",
                status: false,
              },
              extraBed: {
                value: "Extra Bed",
                status: false,
              },
              higherFloor: {
                value: "Room On a Higher Floor",
                status: false,
              },
              decoration: {
                value: "Decorations in Room",
                status: false,
              },
              bedType: {
                value: "",
              },
              roomPreference: {
                value: "",
              },
            },
          });
          toast.success("Hotel Booking Created, Please Pay to Confirm");
          incrementStep();
        }
      }
      setIsLoading(false);
    } catch (error) {
      // Handle general error scenarios
      console.error("Error:", error.message);
    }
  };
  const handleBack = () => {
    setBookingInfo({
      ...bookingInfo,
      summary: null,
    });
    setCurrentStep(1);
  };
  const headerData = {
    title: "Finishing up",
    description: "Double-check Everything before Confirm Hotel Booking",
  };

  useEffect(() => {
    setSummaryData(bookingInfo.summary);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookingInfo?.summary]);

  const {
    startDate,
    endDate,
    roomsNumber,
    guestsNumber,
    rentPerGuest,
    totalCost,
  } = summaryData || {};
  return (
    <div className="container">
      <Header {...headerData} />
      {!!alert && <Alert text={alert} handleClick={() => setAlert("")} />}
      {summaryData ? (
        <div className="summary">
          <div className="head">
            <div>
              <h6 className="plan">Stay Between:</h6>
              <p className="plan my-3">
                Click{" "}
                <span className="plan-toggler" onClick={handleView}>
                  Here
                </span>{" "}
                to View Detailed Booking Informations
              </p>
              <HotelBookingSummaryModal
                show={!!modalShow}
                onHide={handleCloseModal}
                data={modalData}
              />
            </div>
            <h6 className="price">
              {startDate || ""} - {endDate || ""}
            </h6>
          </div>
          <div className="body">
            <div className="selectedAddOn">
              <p className="label">Total Rooms</p>
              <p className="price">{roomsNumber}</p>
            </div>
            <div className="selectedAddOn">
              <p className="label">Total Guests</p>
              <p className="price">{guestsNumber}</p>
            </div>
            <div className="selectedAddOn">
              <p className="label">Rent Per Guest</p>
              <p className="price">$ {rentPerGuest}</p>
            </div>
          </div>
          <div className="total">
            <p className="label">Total (Guests X Rent Per Guest)</p>
            <h4>$ {totalCost}</h4>
          </div>
        </div>
      ) : (
        <MiniLoader />
      )}

      <footer>
        <button className="go-back btn" onClick={handleBack}>
          Change
        </button>
        <button
          disabled={isLoading}
          className="next-step confirm btn"
          onClick={handleNext}
        >
          <span>{isLoading ? "Loading ..." : "Confirm"}</span>
        </button>
      </footer>
    </div>
  );
}
