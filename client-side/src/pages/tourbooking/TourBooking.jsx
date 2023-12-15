import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowLeft } from "react-icons/fa";
// <FaArrowLeft />
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./tourbooking.css";

import {
	DeleteTourBookingAPI,
	GetBookingInfoAPI,
	GetPersonPayDataAPI,
	GetUserAPI,
	GetVehicleDataAPI,
	TourInfoByIdAPI,
} from "../../backend-services/api";
import BlockLoader from "../../components/screenloader/BlockLoader";

const TourBooking = () => {
	const { bookingId } = useParams();
	const navigate = useNavigate();
	const [bookingDetails, setBookingDetails] = useState();
	const [userDetails, setUserDetails] = useState();
	const [personPayDetails, setpersonPayDetails] = useState();
	const [vehicleDetails, setVehicleDetails] = useState();
	const [tourDetails, setTourDetails] = useState();
	const [loading, setLoading] = useState(false);

	const tourId = bookingDetails && bookingDetails?.tourId;
	const packageName = bookingDetails && bookingDetails?.packageName;

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

	return (
		<div className="container mt-5 mb-5">
			<div className="home-back-btn mb-5">
				<NavLink to="/">
					<button
						type="button"
						className="btn btn-outline-secondary btn-back"
					>
						{" "}
						<FaArrowLeft className="back-arrow" /> Back to Home
					</button>
				</NavLink>
			</div>

			<div className="row">
				<div className="col-lg-12">
					{loading ? (
						<BlockLoader />
					) : (
						<div className="card p-5 mt-3 mb-4 booking-card">
							<div className="">
								<h2 className="booking-head">
									Booking Overview
								</h2>
							</div>
							<hr></hr>

							<div className="d-flex justify-content-around">
								<p className="p-headline-details flex-grow-1">
									Details
								</p>
								<p className="p-headline-cost mx-5">Cost</p>
							</div>

							<div className="d-flex">
								<p className="p-headline">Username:</p>
								<p className="p-text ms-2">
									{userDetails
										? userDetails.username
										: "Loading.."}
								</p>
							</div>

							<div className="d-flex">
								<p className="p-headline">User Mail:</p>
								<p className="p-text ms-2">
									{userDetails
										? userDetails.email
										: "Loading.."}
								</p>
							</div>

							<div className="d-flex">
								<p className="p-headline">Journey Date:</p>
								<p className="p-text ms-2">
									{bookingDetails &&
										moment(
											bookingDetails?.journeyDate
										).format("MMMM Do YYYY")}
								</p>
							</div>

							<div className="d-flex">
								<p className="p-headline">Tour Location:</p>
								<p className="p-text ms-2">
									{tourDetails
										? tourDetails.city
										: "Loading.."}
								</p>
							</div>

							<div className="d-flex">
								<p className="p-headline">Tour Duration:</p>
								<p className="p-text ms-2">
									{tourDetails
										? tourDetails.duration
										: "Loading.."}
								</p>
							</div>

							<div className="d-flex">
								<p className="p-headline">Tour Package:</p>
								<p className="p-text ms-2">
									{bookingDetails?.packageName}
								</p>
								<p className="p-text ms-auto mx-5 px-2">{`$ ${personPayDetails?.adultPay}`}</p>
							</div>

							<div className="d-flex">
								<p className="p-headline">Adult Person Pay:</p>
								<p className="p-text ms-auto mx-5 px-2">
									{bookingDetails?.adultParticipants} X{" "}
									{`$ ${personPayDetails?.adultPay}`}
								</p>
							</div>
							{bookingDetails?.childrenParticipants !== 0 && (
								<div className="d-flex">
									<p className="p-headline">Children Pay:</p>
									<p className="p-text ms-auto mx-5 px-2">
										{bookingDetails?.childrenParticipants} X{" "}
										{`$ ${personPayDetails?.childrenPay}`}
									</p>
								</div>
							)}

							<div className="d-flex">
								<p className="p-headline">Vehicle Option:</p>
								<p className="p-text ms-2">
									{bookingDetails?.vehicleOption}
								</p>
								<p className="p-text ms-auto mx-5 px-2">
									{bookingDetails?.vehicleOption ===
									vehicleDetails?.vehicle1Name
										? `$ ${vehicleDetails?.vehicle1Price}`
										: bookingDetails?.vehicleOption ===
										  vehicleDetails?.vehicle2Name
										? `$ ${vehicleDetails?.vehicle2Price}`
										: "Null"}
								</p>
							</div>
							<hr></hr>

							<div className="d-flex justify-content-around">
								<p className="p-pay flex-grow-1">
									Total Payable
								</p>
								<p className="p-pay mx-5">
									$ {bookingDetails?.totalToPay}
								</p>
							</div>

							<div className="d-flex flex-row-reverse mt-5  align-items-center">
								<NavLink to="" className="mr-auto p-2">
									<button
										type="button"
										className="btn btn-lg payment-btn mx-4"
									>
										Proceed to Payment
									</button>
								</NavLink>

								<button
									type="button"
									className="btn btn-outline-danger cancel-btn mx-4 ml-auto p-3"
									onClick={handleDelete}
								>
									Cancel this Booking
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default TourBooking;
