import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { TourByIdAPI } from "../../backend-services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../../assets/css/style.css";
import "../../assets/css/sections/global-settings.css";
import "../../assets/css/responsive.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ScreenLoader from "./../../components/screenloader/ScreenLoader";

const SingleTourPackage = () => {
	const [tourDetails, setTourDetails] = useState({});
	const [loading, setLoading] = useState(true);
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

	return (
		<>
			{loading ? (
				<ScreenLoader />
			) : (
				<>
					<Navbar />
					<div
						className="container"
						style={{ marginTop: "180px", marginBottom: "180px" }}
					>
						<div className="container">
							<h3 className="mb-4">
								{tourDetails?.getTourInfo?.title}
							</h3>
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
									<p className="fw-bold">About</p>
									<p className="text-muted">
										{tourDetails?.getTourInfo?.about}
									</p>
									<hr></hr>
									<p className="fw-bold">Locations</p>
									{tourDetails?.getTourInfo?.locations.map(
										(area) => (
											<>
												<ul>
													<li>{area}</li>
												</ul>
											</>
										)
									)}
									<hr></hr>
									<p className="fw-bold">Durations</p>
									<p>{tourDetails?.getTourInfo?.duration}</p>
									<hr></hr>
									<p className="fw-bold">Distance</p>
									<p>{tourDetails?.getTourInfo?.distance}</p>
									<hr></hr>
									<p className="fw-bold">Group Size</p>
									<p>
										{tourDetails?.getTourInfo?.maxGroupSize}
									</p>
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
