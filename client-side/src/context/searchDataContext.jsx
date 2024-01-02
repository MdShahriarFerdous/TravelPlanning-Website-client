import { createContext, useContext, useState } from "react";

const SearchDataContext = createContext();

const SearchDataProvider = ({ children }) => {
	const [searchData, setSearchData] = useState({
		total: [],
		tourData: [],
	});

	return (
		<SearchDataContext.Provider value={[searchData, setSearchData]}>
			{children}
		</SearchDataContext.Provider>
	);
};

const useSearchData = () => {
	return useContext(SearchDataContext);
};
export { useSearchData, SearchDataProvider };
