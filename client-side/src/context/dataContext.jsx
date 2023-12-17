import { createContext, useContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
	const [fetchData, setFetchData] = useState({
		total: [],
		tourData: [],
	});

	return (
		<DataContext.Provider value={[fetchData, setFetchData]}>
			{children}
		</DataContext.Provider>
	);
};

const useData = () => {
	return useContext(DataContext);
};
export { useData, DataProvider };
