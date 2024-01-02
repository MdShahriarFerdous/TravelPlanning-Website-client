import { HotelBookingProvider } from "../../../../../context/hotelBookingContext";

import StepLabels from "./StepLabels";
import Main from "./Main";
import "./HotelBooking.css";

const labelsData = [
  {
    id: 1,
    small_heading: "Step 1",
    large_heading: "Basic Info",
  },
  {
    id: 2,
    small_heading: "Step 2",
    large_heading: "Guest Details",
  },
  {
    id: 3,
    small_heading: "Step 3",
    large_heading: "Primary Contact",
  },
  {
    id: 4,
    small_heading: "Step 4",
    large_heading: "Additional Request",
  },
  {
    id: 5,
    small_heading: "Step 5",
    large_heading: "Booking Summary",
  },
];
export default function HotelBooking() {
  return (
    <div className="hotelapp">
      <HotelBookingProvider>
        <aside>
          <div className="labels--container">
            {labelsData.map((data) => {
              return <StepLabels {...data} key={data.id} />;
            })}
          </div>
        </aside>
        <Main />
      </HotelBookingProvider>
    </div>
  );
}
