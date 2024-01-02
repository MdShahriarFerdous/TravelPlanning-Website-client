import { useParams } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./tourbytype.css";
import TourSearchForm from "./TourSearchForm";
import TourCards from "./TourCards";
import { DataProvider } from "../../../context/dataContext";
import PaginationNav from "./PaginationNav";
import { SearchDataProvider } from "../../../context/searchDataContext";
import { useEffect, useState } from "react";
import ScreenLoader from "../../screenloader/ScreenLoader";

const TourByType = () => {
	const [count, setCount] = useState(3);
	const [screenLoader, setScreenLoader] = useState(true);
	const { tourType } = useParams();
	const convertTourTypeForMatch =
		tourType.charAt(0).toUpperCase() + tourType.slice(1).toLowerCase();

	useEffect(() => {
		const interval = setInterval(() => {
			setCount((prevValue) => {
				return --prevValue;
			});
		}, 1000);

		count === 0 && setScreenLoader(false);
		// cleanup
		return () => clearInterval(interval);
	}, [count]);

	return (
		<>
			{screenLoader ? (
				<ScreenLoader />
			) : (
				<>
					<Navbar />
					<SearchDataProvider>
						<DataProvider>
							<div
								className="container-fluid p-5 bg-div"
								style={{
									zIndex: "-100",
								}}
							>
								<TourSearchForm
									tourType={convertTourTypeForMatch}
								/>
								<TourCards tourType={convertTourTypeForMatch} />
								<PaginationNav />
							</div>
						</DataProvider>
					</SearchDataProvider>
					<Footer />
				</>
			)}
		</>
	);
};

export default TourByType;
