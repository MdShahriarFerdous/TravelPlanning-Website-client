import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	IoIosPeople,
	IoIosArrowDropdownCircle,
	IoIosArrowDropupCircle,
} from "react-icons/io";
// <FaArrowLeft />
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./tourbooking.css";

import { useFormik } from "formik";
import { object, string } from "yup";

import {
	DeleteTourBookingAPI,
	GetBookingInfoAPI,
	GetPersonPayDataAPI,
	GetUserAPI,
	GetVehicleDataAPI,
	TourInfoByIdAPI,
	TourMakePayment,
	TourPaymentDataCreateAPI,
} from "../../backend-services/api";
import BlockLoader from "../../components/screenloader/BlockLoader";
import Navbar from "./../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ScreenLoader from "../../components/screenloader/ScreenLoader";
import { useAuth } from "../../context/authContext";

const TourBooking = () => {
	const { bookingId } = useParams();
	const navigate = useNavigate();
	const [bookingDetails, setBookingDetails] = useState();
	const [userDetails, setUserDetails] = useState();
	const [personPayDetails, setpersonPayDetails] = useState();
	const [vehicleDetails, setVehicleDetails] = useState();
	const [tourDetails, setTourDetails] = useState();
	const [loading, setLoading] = useState(false);
	const [count, setCount] = useState(3);
	const [screenLoader, setScreenLoader] = useState(true);
	const [toggle, setToggle] = useState(true);
	const [auth, setAuth] = useAuth();
	// console.log(auth);

	const tourId = bookingDetails && bookingDetails?.tourId;
	const packageName = bookingDetails && bookingDetails?.packageName;

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

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const bookingData = await GetBookingInfoAPI(bookingId);
				if (bookingData.status === "Success") {
					setBookingDetails(bookingData.tourBookingInfo);
				}

				const personPayData = await GetPersonPayDataAPI(
					tourId,
					packageName
				);
				if (personPayData.status === "Success") {
					setpersonPayDetails(personPayData.personPayData);
				}

				const vehicleData = await GetVehicleDataAPI(tourId);
				if (vehicleData.status === "Success") {
					setVehicleDetails(vehicleData.vehicleData);
				}

				if (bookingDetails && bookingDetails?.userId) {
					const userData = await GetUserAPI(bookingDetails?.userId);
					if (userData.status === "Success") {
						setUserDetails(userData.user);
					}
				}

				const tourData = await TourInfoByIdAPI(tourId);
				if (tourData.status === "Success") {
					setTourDetails(tourData.getTourInfo);
				}
			} catch (error) {
				toast.error(error);
				console.error(`Failed to fetch data: ${error}`);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [bookingId, tourId, bookingDetails?.userId, packageName]);

	const handleToggleClick = () => {
		setToggle(!toggle);
	};

	const handleDelete = async (e) => {
		e.preventDefault();
		try {
			Swal.fire({
				title: "Want to cancel this booking?",
				text: "You won't be able to revert this!",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#d33",
				cancelButtonColor: "#3085d6",
				confirmButtonText: "Yes, cancel it!",
				cancelButtonText: "No, don't cancel",
			}).then(async (result) => {
				if (result.isConfirmed) {
					const deleteBooking = await DeleteTourBookingAPI(
						bookingDetails?._id
					);
					if (deleteBooking?.status === "Success") {
						Swal.fire(
							"Cancelled!",
							"Your booking process cancelled."
						);
						navigate(
							`/tour-package/${
								bookingDetails && bookingDetails?.tourId
							}`
						);
					}
				}
			});
		} catch (error) {
			console.error(error);
			toast.error("Sorry! something went wrong");
		}
	};

	const formik = useFormik({
		initialValues: {
			tourBookingId: bookingId,
			firstName: "",
			lastName: "",
			userMail: auth?.user?.email,
			gender: "",
			phoneNumber: "",
		},
		validationSchema: object({
			firstName: string().required("First name is required"),
			lastName: string().required("Last name is required"),
			gender: string().required("Gender is required"),
			phoneNumber: string().required("Phone number is required"),
		}),
		onSubmit: async (values, { resetForm }) => {
			setScreenLoader(true);
			try {
				const data = await TourPaymentDataCreateAPI(
					values.tourBookingId,
					values.firstName,
					values.lastName,
					values.userMail,
					values.gender,
					values.phoneNumber
				);
				if (data?.createdPaymentData) {
					const response = await TourMakePayment(
						data?.createdPaymentData?._id
					);
					if (response?.url) {
						window.location.replace(response.url);
					}
				}
			} catch (error) {
				console.error("Error from payment:", error.message);
			}
		},
	});

	return (
		<div>
			{screenLoader ? (
				<ScreenLoader />
			) : (
				<>
					<Navbar />
					<div className="booking-bg-div">
						{loading ? (
							<div
								style={{
									paddigTop: "280px",
									paddingBottom: "300px",
								}}>
								<BlockLoader />
							</div>
						) : (
							<div
								className="container"
								style={{
									paddingTop: "200px",
									paddingBottom: "120px",
								}}>
								<h3>Review Your Tour Booking</h3>

								<div className="row g-2">
									<div className="col-lg-8">
										<div className="card p-3 mb-3 mt-2">
											<div className="row">
												<div className="col-10">
													<h5>
														{tourDetails ? (
															tourDetails.city
														) : (
															<p>Loading..</p>
														)}{" "}
														(
														{tourDetails
															? tourDetails.duration
															: "Loading.."}
														) |{" "}
														{bookingDetails &&
															moment(
																bookingDetails?.journeyDate
															).format(
																"MMMM Do YYYY"
															)}
													</h5>
												</div>
												<div className="col-2">
													<button
														style={{
															background:
																"transparent",
														}}
														className="toggle-btn-tour"
														onClick={
															handleToggleClick
														}>
														{toggle ? (
															<IoIosArrowDropupCircle className="arrow-toggle" />
														) : (
															<IoIosArrowDropdownCircle className="arrow-toggle" />
														)}
													</button>
												</div>
											</div>
											<hr></hr>
											{toggle && (
												<>
													{bookingDetails?.childrenParticipants !==
													0 ? (
														<p>
															<IoIosPeople className="people-icon" />
															{`${bookingDetails?.adultParticipants} Adults and 
										${bookingDetails?.childrenParticipants} Children`}
														</p>
													) : (
														<p>
															<IoIosPeople className="people-icon" />
															{`${bookingDetails?.adultParticipants} Adults`}
														</p>
													)}
													<hr></hr>
													<h5>Options</h5>
													<p>
														{
															bookingDetails?.packageName
														}
													</p>
													<hr></hr>
													<h5>Vehicle</h5>
													<p>
														{
															bookingDetails?.vehicleOption
														}
													</p>
												</>
											)}
										</div>

										<h3 className="mt-5">
											Enter Traveler Details
										</h3>
										<div className="card p-4 mb-3 mt-2">
											<h5 className="mt-2">
												Passenger: Adult (Primary
												Contact)
											</h5>

											<form
												className="form-group px-2"
												onSubmit={formik.handleSubmit}>
												<div className="row g-3">
													<div className="col-lg-6">
														<label>Username</label>
														<input
															type="text"
															className="form-control py-3"
															placeholder="Username"
															value={
																userDetails
																	? userDetails.username
																	: "Loading.."
															}
														/>
													</div>

													<div className="col-lg-6">
														<label>Email</label>
														<input
															type="email"
															className="form-control py-3"
															placeholder="email"
															name="userMail"
															value={
																formik.values
																	.userMail
															}
															onChange={
																formik.handleChange
															}
														/>
														{formik.touched
															.userMail &&
															formik.errors
																.userMail && (
																<span className="text-danger my-1 ms-2">
																	&#9432;{" "}
																	{
																		formik
																			.errors
																			.userMail
																	}
																</span>
															)}
													</div>
												</div>

												<div className="row g-3">
													<div className="col-lg-6">
														<label>
															First Name
														</label>
														<input
															type="text"
															className="form-control py-3"
															placeholder="First Name"
															name="firstName"
															value={
																formik.values
																	.firstName
															}
															onChange={
																formik.handleChange
															}
														/>
														{formik.touched
															.firstName &&
															formik.errors
																.firstName && (
																<span className="text-danger my-1 ms-2">
																	&#9432;{" "}
																	{
																		formik
																			.errors
																			.firstName
																	}
																</span>
															)}
													</div>
													<div className="col-lg-6">
														<label>Last Name</label>
														<input
															type="text"
															className="form-control py-3"
															placeholder="Last Name"
															name="lastName"
															value={
																formik.values
																	.lastName
															}
															onChange={
																formik.handleChange
															}
														/>
														{formik.touched
															.lastName &&
															formik.errors
																.lastName && (
																<span className="text-danger my-1 ms-2">
																	&#9432;{" "}
																	{
																		formik
																			.errors
																			.lastName
																	}
																</span>
															)}
													</div>
												</div>

												<div className="row g-3">
													<div className="col-lg-6">
														<label>
															Phone Number
														</label>
														<input
															type="text"
															className="form-control py-3"
															placeholder="Phone Number"
															name="phoneNumber"
															value={
																formik.values
																	.phoneNumber
															}
															onChange={
																formik.handleChange
															}
														/>
														{formik.touched
															.phoneNumber &&
															formik.errors
																.phoneNumber && (
																<span className="text-danger my-1 ms-2">
																	&#9432;{" "}
																	{
																		formik
																			.errors
																			.phoneNumber
																	}
																</span>
															)}
													</div>
													<div className="col-lg-6">
														<label>Gender</label>
														<select
															className="form-select form-select-lg py-3 booking-select"
															aria-label=".form-select-lg example"
															id="gender"
															name="gender"
															value={
																formik.values
																	.gender
															}
															onChange={
																formik.handleChange
															}
															onBlur={
																formik.handleBlur
															}>
															<option
																value=""
																disabled>
																Gender
															</option>
															<option value="male">
																Male
															</option>

															<option value="female">
																Female
															</option>
														</select>
														{formik.touched
															.gender &&
															formik.errors
																.gender && (
																<span className="text-danger my-1 ms-2">
																	&#9432;{" "}
																	{
																		formik
																			.errors
																			.gender
																	}
																</span>
															)}
													</div>
												</div>

												<div className="row px-2 g-2 mt-3">
													<button
														type="submit"
														className="btn bg-gradient-primary p-3 tour-form-continue-btn mt-2 mb-1">
														Continue to Payment
													</button>
													<button
														className="btn btn-outline-danger cancel-btn mt-2 mb-1 p-3"
														onClick={handleDelete}>
														No, Cancel this Booking
													</button>
												</div>
											</form>
										</div>
									</div>

									<div className="col-lg-4">
										<div className="card p-3 mb-3 mt-2 fare-card">
											<h6>Fare Summary</h6>
											<hr></hr>
											<div className="row">
												<div className="col-8">
													<p>
														{
															bookingDetails?.packageName
														}
													</p>
												</div>
												<div className="col-4">
													<p>
														{
															bookingDetails?.adultParticipants
														}{" "}
														X{" "}
														{`$ ${personPayDetails?.adultPay}`}
													</p>
												</div>
											</div>
											{bookingDetails?.childrenParticipants !==
												0 && (
												<div className="row">
													<div className="col-8">
														<p>Children Pay</p>
													</div>
													<div className="col-4">
														<p>
															{
																bookingDetails?.childrenParticipants
															}{" "}
															X{" "}
															{`$ ${personPayDetails?.childrenPay}`}
														</p>
													</div>
												</div>
											)}
											<div className="row">
												<div className="col-8">
													<p>
														{
															bookingDetails?.vehicleOption
														}
													</p>
												</div>
												<div className="col-4">
													<p>
														1 X{" "}
														{bookingDetails?.vehicleOption ===
														vehicleDetails?.vehicle1Name
															? `$ ${vehicleDetails?.vehicle1Price}`
															: bookingDetails?.vehicleOption ===
																  vehicleDetails?.vehicle2Name
																? `$ ${vehicleDetails?.vehicle2Price}`
																: "Null"}
													</p>
												</div>
											</div>
											<hr></hr>
											<div className="row">
												<div className="col-8">
													<p>Sub Total</p>
												</div>
												<div className="col-4">
													<p>
														${" "}
														{
															bookingDetails?.totalToPay
														}
													</p>
												</div>
											</div>

											<div>
												<div className="row mt-3">
													<div className="col-7">
														<h6>You Pay</h6>
													</div>
													<div className="col-5">
														<h6 className="ps-3">
															BDT{" "}
															{bookingDetails?.totalToPay *
																100}
														</h6>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
					<Footer />
				</>
			)}
		</div>
	);
};

export default TourBooking;
