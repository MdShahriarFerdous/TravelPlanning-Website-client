import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./css/bootstrap.css";
import { useFormik } from "formik";
import { object, string } from "yup";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, useNavigate } from "react-router-dom";
import { RegisterAPI } from "../../backend-services/api";
import { useLoader } from "../../context/loaderContext";
import { toast } from "react-toastify";

const RegisterPage = () => {
	const navigate = useNavigate();
	const [loader, setLoader] = useLoader();
	const formik = useFormik({
		initialValues: {
			username: "",
			email: "",
			password: "",
		},
		validationSchema: object({
			username: string().max(12, "Maximum 12 characters").required(),
			email: string().email("Must be a valid email").required(),
			password: string().min(6, "Minimum 6 characters long").required(),
		}),
		onSubmit: async (values, { resetForm }) => {
			setLoader(true);
			try {
				const data = await RegisterAPI(values);
				if (data.status === "success") {
					localStorage.setItem("registerInfo", JSON.stringify(data));
					navigate("/check-mail");
				} else {
					console.error("Registration failed:", data.message);
				}
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
			<form className="form-group " onSubmit={formik.handleSubmit}>
				<div className="d-flex justify-content-center logo-div mb-3">
					<h2 className="welcome-text">Join </h2>
					<h2 className="logo-text">
						We<span className="we-text">Travel</span>
					</h2>
				</div>
				<div className="row d-flex py-4 justify-content-center">
					<div className="col-lg-6">
						<div className="card p-5">
							<h1 className="card-title mb-4 text-center">
								Sign up
							</h1>
							<input
								type="text"
								className="form-control my-2 py-3"
								placeholder="Username"
								name="username"
								value={formik.values.username}
								onChange={formik.handleChange}
							/>
							{formik.touched.username &&
								formik.errors.username && (
									<span className="text-danger my-1 ms-2">
										&#9432; {formik.errors.username}
									</span>
								)}
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
								Sign up
							</button>
							<p className="text-center mt-2">
								Already have an account?
								<NavLink className="text-info ms-2" to="/login">
									Sign in
								</NavLink>
							</p>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default RegisterPage;
