import { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
// <HiBookmark />   <HiOutlineBookmark /> <TiTick /> <RxCross2 />
import { useParams } from "react-router-dom";
import { TourByIdAPI } from "../../backend-services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./singletour.css";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ScreenLoader from "./../../components/screenloader/ScreenLoader";
import TourPackageForm from "./TourPackageForm";
import AddTourBookmark from "../../components/bookmark/tour/AddTourBookmark";
import Review from "../../components/review/Review";

const SingleTourPackage = () => {
	const [tourDetails, setTourDetails] = useState({});
	const [loading, setLoading] = useState(true);

	const [toggle, setToggle] = useState(false);
	// const [bookmarkToggle, setBookmarkToggle] = useState(false);
	const [durationToggle, setDurationToggle] = useState(false);
	const [distanceToggle, setDistanceToggle] = useState(false);
	const [descriptionToggle, setDescriptionToggle] = useState(false);
	const [additionalToggle, setAdditionalToggle] = useState(false);
	const [optionsToggle, setOptionsToggle] = useState(false);
	const [incluExcluToggle, setIncluExcluToggle] = useState(false);
	const [tourTipsToggle, setTourTipsToggle] = useState(false);

	const { tourInfoId } = useParams();

	useEffect(() => {
		const fetchTourInfo = async () => {
			try {
				const data = await TourByIdAPI(tourInfoId);
				if (!data) {
					console.error("Tour info Data fetching fail", data.message);
				} else if (data.status === "Success") {
					setTourDetails(data?.tourDetails);
				}
			} catch (error) {
				console.error(error);
				toast.error(
					error.response?.data?.error?.message || "An error occurred"
				);
			} finally {
				setLoading(false);
			}
		};

		fetchTourInfo();
	}, [tourInfoId]);

	const handleToggleClick = () => {
		setToggle(!toggle);
	};
	// const handleBookmarkClick = () => {
	// 	setBookmarkToggle(!bookmarkToggle);
	// };
	const handleDurationToggle = () => {
		setDurationToggle(!durationToggle);
	};
	const handleDistanceToggle = () => {
		setDistanceToggle(!distanceToggle);
	};
	const handleDescriptionToggle = () => {
		setDescriptionToggle(!descriptionToggle);
	};
	const handleAdditionalToggle = () => {
		setAdditionalToggle(!additionalToggle);
	};
	const handleOptionsToggle = () => {
		setOptionsToggle(!optionsToggle);
	};
	const handleIncluExcluToggle = () => {
		setIncluExcluToggle(!incluExcluToggle);
	};
	const handleTourTipsToggle = () => {
		setTourTipsToggle(!tourTipsToggle);
	};

	return (
		<>
			{loading ? (
				<ScreenLoader />
			) : (
				<>
					<Navbar />
					<div
						className="container single-tour"
						style={{ marginTop: "180px", marginBottom: "180px" }}
					>
						<div className="container">
							<div className="d-flex  mb-4">
								<h3
									className="mb-4"
									style={{ letterSpacing: "0.8px" }}
								>
									{tourDetails?.getTourInfo?.title}
								</h3>
								<AddTourBookmark />
							</div>

							{tourDetails &&
								tourDetails?.getTourInfo?.images && (
									<div className="row g-2">
										<div className="col-lg-8">
											{/* Display the first image in col-lg-8 */}
											<img
												src={
													tourDetails.getTourInfo
														.images[0]
												}
												style={{
													width: "100%",
													height: "100%",
													display: "block",
													borderRadius: "6px",
												}}
												alt="First Image"
											/>
										</div>
										<div className="col-lg-4">
											{/* Display the next two images in col-lg-4 */}
											{tourDetails.getTourInfo.images
												.slice(1)
												.map((singleImage, index) => (
													<img
														key={index + 1}
														src={singleImage}
														style={{
															width: "100%",
															display: "block",
															borderRadius: "6px",
															marginBottom:
																index === 0
																	? "7px"
																	: "0",
														}}
														alt={`Image ${
															index + 2
														}`}
													/>
												))}
										</div>
									</div>
								)}
						</div>

						{/* <div className="container mt-5"> */}
						<div className="row mt-5 g-0">
							<div className="col-lg-8 ps-3">
								<div className="card p-4 mx-2">
									<h6 className="fw-bold">About</h6>
									<p className="text-muted">
										{tourDetails?.getTourInfo?.about}
									</p>
									<hr></hr>

									<h6 className="fw-bold mb-2">
										Locations
										<button
											style={{
												background: "transparent",
											}}
											onClick={handleToggleClick}
											className="toggle-button"
										>
											{toggle ? (
												<IoIosArrowUp className="arrow" />
											) : (
												<IoIosArrowDown className="arrow" />
											)}
										</button>
									</h6>
									{toggle && (
										<ul>
											{tourDetails?.getTourInfo?.locations.map(
												(area, index) => (
													<li key={index + 1}>
														<p>
															{" "}
															<TiTick className="tick" />
															{area}
														</p>
													</li>
												)
											)}
										</ul>
									)}
									<hr></hr>

									<h6 className="fw-bold">
										Durations
										<button
											style={{
												background: "transparent",
											}}
											onClick={handleDurationToggle}
											className="toggle-button"
										>
											{durationToggle ? (
												<IoIosArrowUp className="arrow" />
											) : (
												<IoIosArrowDown className="arrow" />
											)}
										</button>
									</h6>
									{durationToggle && (
										<p>
											{tourDetails?.getTourInfo?.duration}
										</p>
									)}
									<hr></hr>

									<h6 className="fw-bold">
										Distance
										<button
											style={{
												background: "transparent",
											}}
											onClick={handleDistanceToggle}
											className="toggle-button"
										>
											{distanceToggle ? (
												<IoIosArrowUp className="arrow" />
											) : (
												<IoIosArrowDown className="arrow" />
											)}
										</button>
									</h6>
									{distanceToggle && (
										<p>
											{tourDetails?.getTourInfo?.distance}
										</p>
									)}
									<hr></hr>

									<h6 className="fw-bold">
										Detailed Description
										<button
											style={{
												background: "transparent",
											}}
											onClick={handleDescriptionToggle}
											className="toggle-button"
										>
											{descriptionToggle ? (
												<IoIosArrowUp className="arrow" />
											) : (
												<IoIosArrowDown className="arrow" />
											)}
										</button>
									</h6>
									{descriptionToggle && (
										<>
											{tourDetails?.description.map(
												(item, index) => (
													<div key={index + 3}>
														<p
															key={`details-${
																index + 3
															}`}
														>
															{item?.details}
														</p>
														<p
															className="p-bold"
															key={`l1-${
																index + 3
															}`}
														>
															Locations that will
															be covered in this
															tour are:
														</p>
														{item?.coveredLocations.map(
															(location, i) => (
																<p key={i + 4}>
																	<TiTick />
																	{location}
																</p>
															)
														)}
														<p
															className="p-bold"
															key={`l2-${
																index + 3
															}`}
														>
															Rooms will be
															allotted from the
															following Resorts
															only:
														</p>
														<p
															key={`lis-${
																index + 3
															}`}
														>
															{" "}
															Premium Package:{" "}
															{
																item?.premiumResorts
															}
														</p>
														<p
															key={`l3-${
																index + 3
															}`}
														>
															{" "}
															Economy Package:{" "}
															{
																item?.economyResorts
															}
														</p>
														<p
															className="p-bold"
															key={`l4-${
																index + 3
															}`}
														>
															Max number:{" "}
															{
																tourDetails
																	?.getTourInfo
																	?.maxGroupSize
															}{" "}
														</p>

														<p
															className="p-bold"
															key={`l5-${
																index + 3
															}`}
														>
															Food Menu
														</p>
														{tourDetails?.foodmenu?.map(
															(food, index) => (
																<>
																	<p
																		key={
																			index +
																			1
																		}
																	>
																		Day
																		{
																			food.dayNo
																		}
																	</p>
																	<ul>
																		<li
																			key={`l6-${
																				index +
																				3
																			}`}
																		>
																			<p
																				key={`l7-${
																					index +
																					3
																				}`}
																			>
																				Breakfast:{" "}
																				{food.breakfast.join()}
																			</p>
																		</li>
																		<li
																			key={`l7-${
																				index +
																				4
																			}`}
																		>
																			<p
																				key={`l8-${
																					index +
																					3
																				}`}
																			>
																				Lunch:{" "}
																				{food.lunch.join()}
																			</p>
																		</li>
																		<li
																			key={`l9-${
																				index +
																				3
																			}`}
																		>
																			<p
																				key={`l10-${
																					index +
																					3
																				}`}
																			>
																				Dinner:{" "}
																				{food.dinner.join()}
																			</p>
																		</li>
																	</ul>
																</>
															)
														)}
													</div>
												)
											)}
										</>
									)}
									<hr></hr>

									<h6 className="fw-bold">
										Additional Information
										<button
											style={{
												background: "transparent",
											}}
											onClick={handleAdditionalToggle}
											className="toggle-button"
										>
											{additionalToggle ? (
												<IoIosArrowUp className="arrow" />
											) : (
												<IoIosArrowDown className="arrow" />
											)}
										</button>
									</h6>
									{additionalToggle &&
										tourDetails?.getTourInfo?.additionalInfo.map(
											(info, index) => (
												<>
													<ul>
														<li key={index + 1}>
															<p>
																<TiTick />
																{info}
															</p>
														</li>
													</ul>
												</>
											)
										)}
									<hr></hr>

									<h6 className="fw-bold mb-3">
										Options and Prices
										<button
											style={{
												background: "transparent",
											}}
											onClick={handleOptionsToggle}
											className="toggle-button"
										>
											{optionsToggle ? (
												<IoIosArrowUp className="arrow" />
											) : (
												<IoIosArrowDown className="arrow" />
											)}
										</button>
									</h6>
									{optionsToggle &&
										tourDetails?.packages.map(
											(eachPackage, index) => (
												<>
													<p
														className="p-bold"
														key={index + 1}
														style={{
															marginTop: "8px",
														}}
													>
														{
															eachPackage?.packageName
														}
													</p>
													<p>
														<TiTick />
														{
															eachPackage?.packageDetails
														}
													</p>
													<p>
														<TiTick />
														Price Start: &nbsp;{" "}
														{
															eachPackage?.packagePrice
														}
														$ each adult person
													</p>
													<p>
														Transportation Options
													</p>
													{eachPackage?.vehicleDetails.map(
														(vehicle, i) => (
															<p key={i + 1}>
																<TiTick />
																&nbsp; {vehicle}
															</p>
														)
													)}
												</>
											)
										)}
									<hr></hr>

									<h6 className="fw-bold mb-3">
										Inclusions and Exclusions
										<button
											style={{
												background: "transparent",
											}}
											onClick={handleIncluExcluToggle}
											className="toggle-button"
										>
											{incluExcluToggle ? (
												<IoIosArrowUp className="arrow" />
											) : (
												<IoIosArrowDown className="arrow" />
											)}
										</button>
									</h6>
									{incluExcluToggle &&
										tourDetails?.includeExclude.map(
											(item, i) => (
												<>
													<p
														key={i + 1}
														className="p-bold"
													>
														Inclusions
													</p>
													{item?.inclusions.map(
														(inclu, i) => (
															<p key={i + 1}>
																<TiTick className="tick" />
																{inclu}
															</p>
														)
													)}
													<p
														key={i + 2}
														className="p-bold"
														style={{
															marginTop: "8px",
														}}
													>
														Exclusions
													</p>
													{item?.exclusions.map(
														(exclu, i) => (
															<p key={i + 3}>
																<RxCross2 className="cross" />
																{exclu}
															</p>
														)
													)}
												</>
											)
										)}
									<hr></hr>

									<h6 className="fw-bold mb-3">
										Tour Tips
										<button
											style={{
												background: "transparent",
											}}
											onClick={handleTourTipsToggle}
											className="toggle-button"
										>
											{tourTipsToggle ? (
												<IoIosArrowUp className="arrow" />
											) : (
												<IoIosArrowDown className="arrow" />
											)}
										</button>
									</h6>
									{tourTipsToggle &&
										tourDetails?.tourTips.map((tip, i) => (
											<>
												<p
													className="p-bold"
													key={i + 4}
													style={{
														marginTop: "8px",
													}}
												>
													Things Should Do:
												</p>
												{tip.thingsCandDo.map(
													(can, i) => (
														<p key={i + 5}>
															<TiTick className="tick" />
															{can}
														</p>
													)
												)}
												<p
													className="p-bold"
													style={{
														marginTop: "8px",
													}}
												>
													Things to Avoid:
												</p>
												{tip?.thingsToAvoid.map(
													(avoid, i) => (
														<p key={i + 6}>
															<RxCross2 className="cross" />
															{avoid}
														</p>
													)
												)}
											</>
										))}
								</div>
							</div>

							<div className="col-lg-4 ">
								<TourPackageForm
									journeyDate={
										tourDetails?.getTourInfo?.tourDate
									}
									groupSize={
										tourDetails?.getTourInfo?.maxGroupSize
									}
									price={tourDetails?.getTourInfo?.price}
									tourMatchingCode={tourInfoId}
									tourInfoId={tourDetails?.getTourInfo?._id}
									vehicleDetailes={
										tourDetails?.tourVehiclePrice
									}
									packages={tourDetails?.packages}
								/>
							</div>
							<Review tourInfoId={tourInfoId} />
						</div>
					</div>
					<Footer />
				</>
			)}
		</>
	);
};

export default SingleTourPackage;
