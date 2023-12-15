import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ScreenLoader from "../../screenloader/ScreenLoader";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

import { useFormik } from "formik";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./tourbytype.css";

const TourByType = () => {
	const { tourType } = useParams();
	const [loading, setLoading] = useState(false);

	const formik = useFormik({
		initialValues: {
			searchKeyword: "",
		},
		onSubmit: async (values, { resetForm }) => {
			try {
			} catch (error) {
				console.error(error);
				toast.error(error.response.data.error.message);
			} finally {
				// setLoader(false);
			}
		},
	});
	return (
		<>
			{loading ? (
				<ScreenLoader />
			) : (
				<>
					<Navbar />
					<div className="container-fluid p-5 bg-div">
						<div className="container mt-3 mb-3">
							<form
								className="form-group p-2"
								onSubmit={formik.handleSubmit}
							>
								<div className="d-flex align-items-center">
									<input
										type="text"
										placeholder="search"
										className="form-control my-2 py-3 serach-input"
										name="searchKeyword"
										value={formik.values.searchKeyword}
										onChange={formik.handleChange}
									/>
									<button
										type="submit"
										className="btn bg-gradient-primary my-2 btn-search"
									>
										Search
									</button>
								</div>
							</form>
						</div>

						<h1>{tourType}</h1>
					</div>
					<Footer />
				</>
			)}
		</>
	);
};

export default TourByType;
