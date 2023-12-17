import { createContext, useContext, useEffect, useState } from "react";

const SearchContext = createContext();

// eslint-disable-next-line react/prop-types
const SearchProvider = ({ children }) => {
  const [locationId, setLocationId] = useState("");
  const [hotelGuests, setHotelGuests] = useState("");

  useEffect(() => {
    const foundLocationId = localStorage.getItem("search-hotel");
    const foundHotelGuests = localStorage.getItem("search-hotel-guests");
    if (foundLocationId) {
      setLocationId(JSON.parse(foundLocationId));
      localStorage.removeItem("search-hotel");
    }
    if (foundHotelGuests) {
      setHotelGuests(JSON.parse(foundHotelGuests));
      localStorage.removeItem("search-hotel-guests");
    }
  }, []);
  return (
    <SearchContext.Provider
      value={[locationId, setLocationId, hotelGuests, setHotelGuests]}
    >
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => {
  return useContext(SearchContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export { useSearch, SearchProvider };
