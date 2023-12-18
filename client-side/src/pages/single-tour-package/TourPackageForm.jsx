import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	CalculateTourPriceAPI,
	TourBookingAPI,
} from "../../backend-services/api";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./singletour.css";

import { useFormik } from "formik";
import { object, number, string } from "yup";
import { useAuth } from "../../context/authContext";
import { useLoader } from "../../context/loaderContext";

const TourPackageForm = ({
	journeyDate,
	groupSize,
	price,
	tourMatchingCode,
	tourInfoId,
	vehicleDetailes,
	packages,
}) => {
	const [calculatedPrice, setCalculatedPrice] = useState(null);
	const [auth, setAuth] = useAuth();
	const [loader, setLoader] = useLoader();
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			tourInfoId: tourInfoId,
			tourId: tourMatchingCode,
			adultNo: 1,
			childrenNo: 0,
			packageName: "",
			vehicleOption: "",
		},
		validationSchema: object({
			adultNo: number()
				.min(1, "Adult count must be at least 1")
				.max(groupSize || 1, "Exceeds maximum group size")
				.required(),

			childrenNo: number()
				.min(0, "Children count cannot be negative")
				.max(4, "Exceeds maximum children count")
				.required("Children count is required"),

			packageName: string().required("Package name is required"),
			vehicleOption: string().required("Vehicle option is required"),
		}),
		onSubmit: async (values, { resetForm }) => {
			setLoader(true);
			if (!auth?.token) {
				setLoader(false);
				toast.error("Please login first to continue!");
				setCalculatedPrice(price);
				resetForm({
					values: "",
				});
			} else {
				setLoader(true);
				try {
					const data = await TourBookingAPI(
						values.tourInfoId,
						values.tourId,
						values.adultNo,
						values.childrenNo,
						values.packageName,
						values.vehicleOption
					);
					if (data.status === "Success") {
						resetForm({
							values: "",
						});
						setLoader(false);
						navigate(
							`/user/tour-booking/${data?.createdBooking?._id}`
						);
					}
				} catch (error) {
					toast.error(error);
					console.error("Data Booking Failed!", error);
				}
			}
		},
	});

	useEffect(() => {
		const calculateTourPrice = async () => {
			try {
				const data = await CalculateTourPriceAPI({
					tourId: tourMatchingCode,
					adultNo: formik.values.adultNo || 1,
					childrenNo: formik.values.childrenNo || 0,
					packageName: formik.values.packageName || "Economy Package",
					vehicleOption: formik.values.vehicleOption || "No",
				});
				setCalculatedPrice(data?.totalCost);
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
		calculateTourPrice();
	}, [
		formik.values.adultNo,
		formik.values.childrenNo,
		formik.values.packageName,
		formik.values.vehicleOption,
		tourMatchingCode,
	]);

	return (
		<div>
			<form className="form-group px-3" onSubmit={formik.handleSubmit}>
				<div className="row d-flex justify-content-center pr-4">
					<div className="card p-4 pb-4">
						<fieldset disabled>
							<label htmlFor="disabledTextInput">
								Journey Date
							</label>
							<input
								defaultValue={journeyDate}
								type="text"
								id="disabledTextInput"
								className="form-control my-2 py-3"
								placeholder="Disabled input"
							/>
						</fieldset>

						<select
							className="form-select form-select-lg my-2"
							aria-label=".form-select-lg example"
							id="packageName"
							name="packageName"
							value={formik.values.packageName}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						>
							<option value="" disabled>
								Choose Package
							</option>
							{packages.map((packageItem, index) => (
								<option
									value={packageItem?.packageName}
									key={index + 1}
								>
									{packageItem?.packageName}
								</option>
							))}
						</select>
						{formik.touched.packageName &&
							formik.errors.packageName && (
								<span className="text-danger my-1 ms-2">
									&#9432; {formik.errors.packageName}
								</span>
							)}
						<div className="adult-count-div">
							<label>Adult Person Count</label>
							<input
								type="number"
								className="form-control py-3"
								placeholder="Set person number"
								name="adultNo"
								value={formik.values.adultNo}
								onChange={formik.handleChange}
								min="1"
								max={groupSize}
								required
							/>
							{formik.touched.adultNo &&
								formik.errors.adultNo && (
									<span className="text-danger my-1 ms-2">
										&#9432; {formik.errors.adultNo}
									</span>
								)}
						</div>

						<div className="child-count-div">
							<label>Child Count (If any)</label>
							<input
								type="number"
								className="form-control py-3"
								placeholder="Set child number"
								name="childrenNo"
								value={formik.values.childrenNo}
								onChange={formik.handleChange}
								min="0"
								max="4"
								required
							/>
						</div>

						<select
							className="form-select form-select-lg my-2"
							aria-label=".form-select-lg example"
							id="vehicleOption"
							name="vehicleOption"
							value={formik.values.vehicleOption}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
						>
							<option value="" disabled>
								{" "}
								Choose vehicle option
							</option>
							{vehicleDetailes.map((vehicle, index) => (
								<option
									key={index + 3}
									value={vehicle.vehicle1Name}
								>
									{vehicle.vehicle1Name}
								</option>
							))}
							{vehicleDetailes.map((vehicle, index) => (
								<option
									key={index + 4}
									value={vehicle.vehicle2Name}
								>
									{vehicle.vehicle2Name}
								</option>
							))}
						</select>
						{formik.touched.vehicleOption &&
							formik.errors.vehicleOption && (
								<span className="text-danger my-1 ms-2">
									&#9432; {formik.errors.vehicleOption}
								</span>
							)}

						<div className="price-div">
							<p className="text-center p-price">
								{calculatedPrice === price
									? `Start from $ ${price}`
									: `Total Cost $ ${calculatedPrice}`}
							</p>
						</div>

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
	);
};

export default TourPackageForm;
