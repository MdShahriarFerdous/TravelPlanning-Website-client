import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { HiOutlineBookmark, HiBookmark } from "react-icons/hi2";
import { TiTick } from "react-icons/ti";
// <HiBookmark />   <HiOutlineBookmark /> <TiTick />
import { useParams } from "react-router-dom";
import { TourByIdAPI } from "../../backend-services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../../assets/css/style.css";
import "../../assets/css/sections/global-settings.css";
import "../../assets/css/responsive.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./singletour.css";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ScreenLoader from "./../../components/screenloader/ScreenLoader";

const SingleTourPackage = () => {
	const [tourDetails, setTourDetails] = useState({});
	const [loading, setLoading] = useState(true);

	const [toggle, setToggle] = useState(false);
	const [bookmarkToggle, setBookmarkToggle] = useState(false);
	const [durationToggle, setDurationToggle] = useState(false);
	const [distanceToggle, setDistanceToggle] = useState(false);
	const [descriptionToggle, setDescriptionToggle] = useState(false);
	const [additionalToggle, setAdditionalToggle] = useState(false);

	const { tourInfoId } = useParams();

	useEffect(() => {
		const fetchTourInfo = async () => {
			try {
				const data = await TourByIdAPI(tourInfoId);
				if (!data) {
					console.log("Tour info Data fetching fail", data.message);
				} else if (data.status === "Success") {
					setTourDetails(data?.tourDetails);
				}
			} catch (error) {
				console.log(error);
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
	const handleBookmarkClick = () => {
		setBookmarkToggle(!bookmarkToggle);
	};
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
	// console.log(tourDetails);
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
								<span
									className="span-bookmark"
									onClick={handleBookmarkClick}
								>
									{bookmarkToggle ? (
										<HiBookmark className="bookmark fill-bookmark" />
									) : (
										<HiOutlineBookmark className="bookmark" />
									)}
								</span>
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
							<div class="col-lg-8 ps-3">
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
													<div key={index + 1}>
														<p>{item?.details}</p>
														<p className="p-bold">
															Locations that will
															be covered in this
															tour are:
														</p>
														{item?.coveredLocations.map(
															(location, i) => (
																<p key={i + 1}>
																	<TiTick />
																	{location}
																</p>
															)
														)}
														<p className="p-bold">
															Rooms will be
															allotted from the
															following Resorts
															only:
														</p>
														<p>
															{" "}
															Premium Package:{" "}
															{
																item?.premiumResorts
															}
														</p>
														<p>
															{" "}
															Economy Package:{" "}
															{
																item?.economyResorts
															}
														</p>
														<p className="p-bold">
															Max number:{" "}
															{
																tourDetails
																	?.getTourInfo
																	?.maxGroupSize
															}{" "}
														</p>

														<p className="p-bold">
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
																		<li>
																			<p>
																				Breakfast:{" "}
																				{food.breakfast.join()}
																			</p>
																		</li>
																		<li>
																			<p>
																				Lunch:{" "}
																				{food.lunch.join()}
																			</p>
																		</li>
																		<li>
																			<p>
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
													<ul key={index + 1}>
														<li>
															<p>
																<TiTick />
																{info}
															</p>
														</li>
													</ul>
												</>
											)
										)}
								</div>
							</div>

							<div class="col-lg-4 ">
								<form className="form-group px-3">
									<div className="row d-flex justify-content-center pr-4">
										<div className="card p-4 pb-4">
											<fieldset disabled>
												<label htmlFor="disabledTextInput">
													Journey Date
												</label>
												<input
													value="23 Dec 2023"
													type="text"
													id="disabledTextInput"
													className="form-control my-2 py-3"
													placeholder="Disabled input"
												/>
											</fieldset>
											<select
												className="form-select form-select-lg my-2"
												aria-label=".form-select-lg example"
											>
												<option selected>
													Choose Package
												</option>
												<option value={1}>
													Premium Package
												</option>
												<option value={2}>
													Economy Package
												</option>
											</select>

											<select
												className="form-select form-select-lg my-2"
												aria-label=".form-select-lg example"
											>
												<option selected>
													Adult persons count
												</option>
												<option value={1}>1</option>
												<option value={2}>2</option>
											</select>
											<select
												className="form-select form-select-lg my-2"
												aria-label=".form-select-lg example"
											>
												<option selected>
													Choose vehicle option
												</option>
												<option value={1}>Auto</option>
												<option value={2}>CNG</option>
											</select>
											<p className="text-center">
												Start from $
												{
													tourDetails?.getTourInfo
														?.price
												}
											</p>
											<button
												type="submit"
												className="btn bg-gradient-primary my-2"
											>
												Continue
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
					<Footer />
				</>
			)}
		</>
	);
};

export default SingleTourPackage;
