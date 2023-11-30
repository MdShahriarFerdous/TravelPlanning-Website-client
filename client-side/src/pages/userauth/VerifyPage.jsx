import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { VerificationAPI } from "../../backend-services/api";
import { useAuth } from "../../context/authContext";
import { useLoader } from "../../context/loaderContext";
import "bootstrap/dist/css/bootstrap.css";
import "./css/bootstrap.css";
import "bootstrap";

const VerifyPage = () => {
	const { token } = useParams();
	console.log(token);
	const navigate = useNavigate();
	const [auth, setAuth] = useAuth();
	const [loader, setLoader] = useLoader();

	const handleClick = async (event) => {
		event.preventDefault();

		try {
			setLoader(true);
			const data = await VerificationAPI(token);
			localStorage.setItem("auth", JSON.stringify(data));
			setAuth({ ...auth, user: data.user, token: data.createdToken });
			setLoader(false);
			navigate("/");
		} catch (error) {
			console.log(error);
			toast.error(error.response.data.error.message);
		}
	};

	return (
		<div className="d-flex justify-content-center align-items-center vh-100">
			<h2>Almost there! Click this button to activate your account</h2>
			<button onClick={handleClick} className="btn btn-secondary">
				Activate
			</button>
		</div>
	);
};

export default VerifyPage;
