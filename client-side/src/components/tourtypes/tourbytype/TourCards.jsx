import { IoLocationSharp } from "react-icons/io5";
import { MdAccessTimeFilled } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaNoteSticky } from "react-icons/fa6";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./tourbytype.css";
import TourCheckBox from "./TourCheckBox";
import { useData } from "../../../context/dataContext";
import { useEffect, useState } from "react";
import { TourByTypeAPI } from "../../../backend-services/api";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlockLoader from "./../../screenloader/BlockLoader";
import { Link } from "react-router-dom";
import { useSearchData } from "../../../context/searchDataContext";

const TourCards = ({ tourType }) => {
	const [fetchData, setFetchData] = useData();
	const [searchData, setSearchData] = useSearchData();
	const dataToUse = searchData.total > 0 ? searchData : fetchData;
	const [loading, setLoading] = useState(true);
	let tourTypeData;
	let totalTourData;

	useEffect(() => {
		const typeData = async () => {
			try {
				const data = await TourByTypeAPI(tourType);
				if (data.status === "Success") {
					setFetchData({
						...fetchData,
						total: data.totalCount,
						tourData: data.tourLists,
					});
					setLoading(false);
				}
			} catch (error) {
				if (error.response) {
					console.error(
						"Server responded with an error:",
						error.response.data
					);
					toast.error(error.response.data.message || "Server Error");
				} else if (error.request) {
					console.error("No response received from the server");
					toast.error("No response received from the server");
				} else {
					console.error(
						"An unexpected error occurred:",
						error.message
					);
					toast.error("An unexpected error occurred");
				}
			}
		};
		typeData();
	}, [tourType, setFetchData]);

	tourTypeData = dataToUse.tourData;
	totalTourData = dataToUse.total;

	return (
		<div className="container-fluid px-5 mt-5 mb-5">
			<div className="ms-3">
				<h6>
					{totalTourData > 1
						? `Destination: ${totalTourData} places found`
						: `Destination: ${totalTourData} place found`}
				</h6>
			</div>
			<div className="row">
				<TourCheckBox tourType={tourType} />
				<div className="col-lg-9 tour-cards">
					{loading ? (
						<BlockLoader />
					) : (
						<>
							{tourTypeData &&
								tourTypeData.map((tour) => (
									<Link
										to={`/tour-package/${tour.tourInfoId.toLowerCase()}`}
									>
										<div
											className="card pt-4 pb-4 mt-3"
											key={tour._id}
										>
											<div className="container">
												<div className="row">
													<div className="col-lg-4">
														<img
															src={tour.image}
															className="tourtype-image"
														/>
													</div>
													<div className="col-lg-8">
														<div className="row">
															<div className="col-lg-9">
																<h5>
																	{tour.title}
																</h5>
																<p className="mb-5">
																	<IoLocationSharp />{" "}
																	{
																		tour.locationName
																	}
																</p>
																<p className="duration-p">
																	<MdAccessTimeFilled />{" "}
																	{
																		tour.durations
																	}
																	nights
																	<span
																		style={{
																			paddingLeft:
																				"16px",
																			fontSize:
																				"1rem",
																		}}
																	>
																		<IoIosPeople className="max-people-icon" />
																		{tour?.maxPeople >
																		3
																			? `From 2 to ${tour.maxPeople} people`
																			: `For ${tour.maxPeople} people`}
																	</span>
																</p>
																<p>
																	<FaNoteSticky className="note-icon" />
																	{tour.notes}
																</p>
															</div>
															<div className="col-lg-3">
																<p className="p-small">
																	Starting
																	Form
																</p>
																<p className="p-big">{`$ ${tour.startingPrice}`}</p>
																<p className="p-small">
																	per person
																</p>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</Link>
								))}
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default TourCards;
