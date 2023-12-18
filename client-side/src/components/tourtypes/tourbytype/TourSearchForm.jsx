import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./tourbytype.css";

import { useState } from "react";
import { useData } from "../../../context/dataContext";
import { SearchAPI, TourByTypeAPI } from "../../../backend-services/api";
import { useSearchData } from "../../../context/searchDataContext";

const TourSearchForm = ({ tourType }) => {
	const [fetchData, setFetchData] = useData();
	const [searchData, setSearchData] = useSearchData();
	const [searchKeyword, setSearchKeyword] = useState("0");
	const perPage = 5;
	const page = 1;

	const searchHandleChange = async (event) => {
		if (event.target.value.length > 0) {
			setSearchKeyword(event.target.value);
			const data = await SearchAPI(page, perPage, event.target.value);
			setSearchData({
				...searchData,
				total: data.total,
				tourData: data.tourCardData,
			});
		} else if (event.target.value.length === 0) {
			setSearchKeyword("0");
			setSearchData({
				...searchData,
				total: [],
				tourData: [],
			});
			const data = await TourByTypeAPI(tourType);
			if (data.status === "Success") {
				setFetchData({
					...fetchData,
					total: data.totalCount,
					tourData: data.tourLists,
				});
			}
		}
	};
	const handleSearchData = async (event) => {
		event.preventDefault();
		const data = await SearchAPI(page, perPage, searchKeyword);
		setSearchData({
			...searchData,
			total: data.total,
			tourdata: data.tourCardData,
		});
	};

	return (
		<div className="container-fluid px-5 mt-4">
			<h4 className="mb-3 search-title">Search what you want in Tours</h4>
			<form className="form-group">
				<div className="d-flex align-items-center">
					<input
						type="text"
						placeholder="Italy/love/Explore/5 days.."
						className="form-control my-2 py-3 serach-input"
						onChange={searchHandleChange}
					/>
					<button
						onClick={handleSearchData}
						type="button"
						className="btn bg-gradient-primary my-2 button-search"
					>
						Search
					</button>
				</div>
			</form>
		</div>
	);
};

export default TourSearchForm;
