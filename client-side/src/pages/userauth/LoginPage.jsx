import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { object, string } from "yup";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LoginAPI } from "../../backend-services/api";
import { useAuth } from "../../context/authContext";
import { useLoader } from "../../context/loaderContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./css/bootstrap.css";
import "./css/animate.min.css";
import "./css/general.css";

const LoginPage = () => {
	const [auth, setAuth] = useAuth();
	const [loader, setLoader] = useLoader();
	const navigate = useNavigate();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: object({
			email: string().email("Must be valid email").required(),
			password: string().min(6, "Minimum 6 characters long").required(),
		}),
		onSubmit: async (values, { resetForm }) => {
			setLoader(true);
			try {
				const data = await LoginAPI(values);
				if (data.status === "success") {
					localStorage.setItem("auth", JSON.stringify(data));
					setAuth({
						...auth,
						user: data.user,
						token: data.createToken,
					});
					setLoader(false);
					toast.success("Login successful");
				}
				resetForm({
					values: "",
				});
				navigate("/");
			} catch (error) {
				console.error(error);
				toast.error(error.response.data.error.message);
			} finally {
				setLoader(false);
			}
		},
	});
	return (
		<div className="container mt-5">
			<form className="form-group p-5" onSubmit={formik.handleSubmit}>
				<div className="d-flex justify-content-center logo-div mb-3">
					<h2 className="welcome-text animated fadeInUp">
						Welcome to
					</h2>
					<h2 className="logo-text animated fadeInUp">
						We
						<span className="we-text animated fadeInUp">
							Travel
						</span>
					</h2>
				</div>
				<div className="row d-flex py-4 justify-content-center">
					<div className="col-lg-6">
						<div className="card animated fadeInUp p-5">
							<h1 className="card-title mb-4 text-center">
								Sign in
							</h1>
							<input
								type="email"
								className="form-control my-2 py-3"
								placeholder="Email"
								name="email"
								value={formik.values.email}
								onChange={formik.handleChange}
							/>
							{formik.touched.email && formik.errors.email && (
								<span className="text-danger my-1 ms-2">
									&#9432; {formik.errors.email}
								</span>
							)}
							<input
								type="password"
								className="form-control my-2 py-3"
								placeholder="Password"
								name="password"
								value={formik.values.password}
								onChange={formik.handleChange}
							/>
							{formik.touched.password &&
								formik.errors.password && (
									<span className="text-danger my-1 ms-2">
										&#9432; {formik.errors.password}
									</span>
								)}
							<button
								type="submit"
								className="btn bg-gradient-primary my-2"
							>
								Sign in
							</button>
							<p className="text-center mt-2">
								New Here?
								<NavLink
									className="text-info ms-2"
									to="/register"
								>
									Sign up
								</NavLink>
							</p>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default LoginPage;
