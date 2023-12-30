import { hotelBookingPayment } from "../../../../../backend-services/hotelsApi";
import { useHotelBooking } from "../../../../../context/hotelBookingContext";
import thanksIcon from "../../../../../assets/images/icon-thank-you.svg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ThankYou() {
  const navigate = useNavigate();
  const { bookingInfo, setBookingInfo } = useHotelBooking();
  const payNow = async (e) => {
    e.preventDefault();
    const response = await hotelBookingPayment(bookingInfo?.newlyCreatedId);
    if (response?.url) {
      window.location.replace(response.url);
    } else {
      toast.error("SSL COMMERCE ERROR");
      navigate("/user/hotel-booking-lists");
    }
  };
  const payLater = (e) => {
    e.preventDefault();
    setBookingInfo({
      ...bookingInfo,
      newlyCreatedId: null,
    });
    navigate("/user/hotel-booking-lists");
  };
  return (
    <div className="container">
      <div className="thanks">
        <div className="icon">
          <img src={thanksIcon} alt="Thank You" />
        </div>
        <h1>Thank You !</h1>
        <p>
          Thanks for Creating Hotel booking! We hope you have fun using our
          platform. If you ever need support, please feel free to email us at
          support@wetravel.com.
        </p>
        <p>You Can Pay Now or Later to Confirm Hotel Booking.</p>
      </div>
      <footer>
        <button type="button" className="go-back btn" onClick={payLater}>
          Pay Later
        </button>
        <button type="button" className="next-step btn" onClick={payNow}>
          Pay Now
        </button>
      </footer>
    </div>
  );
}
