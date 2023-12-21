import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./tourbytype.css";

import { prices } from "./prices";
import { useEffect, useState } from "react";
import {
	CheckBoxAPI,
	SearchAPI,
	TourByTypeAPI,
} from "../../../backend-services/api";
import { useSearchData } from "../../../context/searchDataContext";
import { useData } from "../../../context/dataContext";

const TourCheckBox = ({ tourType }) => {
	const [checked, setChecked] = useState([]);
	const [searchData, setSearchData] = useSearchData();
	const [fetchData, setFetchData] = useData();

	useEffect(() => {
		const loadFilteredTours = async () => {
			if (checked.length > 0) {
				const data = await CheckBoxAPI(1, 5, checked, tourType);
				setSearchData({
					...searchData,
					total: data.total,
					tourData: data.tourCardData,
				});
			}
			if (checked.length === 0) {
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

		loadFilteredTours();
	}, [checked, tourType]);

	const handleCheck = async (value) => {
		const arr = value.split(",");
		const arrForChecked = arr.map(Number);
		setChecked((prevChecked) =>
			prevChecked.length > 0 &&
			JSON.stringify(prevChecked) === JSON.stringify(arrForChecked)
				? []
				: arrForChecked
		);
	};

	return (
		<div className="col-lg-3">
			<div className="card p-3 ps-4 pt-4 mt-3">
				<p>Price Range</p>
				<div>
					{prices &&
						prices?.map((priceRange) => (
							<div
								className="form-check py-2"
								key={priceRange._id}
							>
								<input
									className="form-check-input"
									type="checkbox"
									id="flexCheckChecked"
									value={priceRange.array}
									onChange={(e) =>
										handleCheck(e.target.value)
									}
								/>
								<label
									className="form-check-label"
									htmlFor="flexCheckChecked"
								>
									{priceRange.name}
								</label>
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default TourCheckBox;
