import BasicInfo from "./BasicInfo";
import GuestDetails from "./GuestDetails";
import PrimaryContact from "./PrimaryContact";
import AdditionalRequest from "./AdditionalRequest";
import Summary from "./Summary";
import ThankYou from "./ThankYou";
import { useHotelBooking } from "../../../../../context/hotelBookingContext";

export default function Main() {
  const { currentStep } = useHotelBooking();

  let DynamicComponent;
  switch (currentStep) {
    case 1:
      DynamicComponent = BasicInfo;
      break;
    case 2:
      DynamicComponent = GuestDetails;
      break;
    case 3:
      DynamicComponent = PrimaryContact;
      break;
    case 4:
      DynamicComponent = AdditionalRequest;
      break;
    case 5:
      DynamicComponent = Summary;
      break;
    case 6:
      DynamicComponent = ThankYou;
      break;
    default:
      DynamicComponent = BasicInfo;
      break;
  }

  return (
    <main>
      <DynamicComponent />
    </main>
  );
}
