import { createContext, useContext, useState } from "react";
const HotelBookingContext = createContext();

// eslint-disable-next-line react/prop-types
const HotelBookingProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingInfo, setBookingInfo] = useState({
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
    summary: null
  });
  const incrementStep = () => {
    setCurrentStep((prevStep) => {
      return prevStep <= 5 ? prevStep + 1 : 1;
    });
  };
  const decrementStep = () => {
    setCurrentStep((prevStep) => {
      return prevStep > 1 ? prevStep - 1 : 1;
    });
  };

  return (
    <HotelBookingContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        incrementStep,
        decrementStep,
        bookingInfo,
        setBookingInfo,
      }}
    >
      {children}
    </HotelBookingContext.Provider>
  );
};

const useHotelBooking = () => {
  return useContext(HotelBookingContext);
};
// eslint-disable-next-line react-refresh/only-export-components
export { useHotelBooking, HotelBookingProvider };
