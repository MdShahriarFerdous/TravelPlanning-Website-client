import AppLayout from "../../components/applayout/AppLayout";
import BookingDetails from "../../components/flight/BookingDetails";
import './FlightBookingPage.css'
import FlightPrice from "../../components/flight/FlightPrice.jsx";

const FlightBookingPage = () => {
  return (
    <AppLayout>
      <section
        className="hotels-section"
        style={{ padding: "120px 80px 0 80px",  }}
      >
        <div className="flight-booking-container">
          <div className="auto-container">
            <div className="row">
                <BookingDetails />
              <div className="col-lg-4">
                  <FlightPrice/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default FlightBookingPage;
