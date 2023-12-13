import { createContext, useContext, useEffect, useState } from "react";

const SearchContext = createContext();

// eslint-disable-next-line react/prop-types
const SearchProvider = ({ children }) => {
  const [locationId, setLocationId] = useState('');
  
	useEffect(() => {
		const data = localStorage.getItem("search-hotel");
    
		if (data) {
			const parsedData = JSON.parse(data);
			setLocationId(parsedData);
		}
	}, []);
  return (
    <SearchContext.Provider value={[locationId, setLocationId]}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => {
  return useContext(SearchContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export { useSearch, SearchProvider };
