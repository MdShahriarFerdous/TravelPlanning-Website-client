import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { VerificationAPI } from "../../backend-services/api";
import { useAuth } from "../../context/authContext";
import { useLoader } from "../../context/loaderContext";
import "bootstrap/dist/css/bootstrap.css";
import "./css/bootstrap.css";
import "bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VerifyPage = () => {
	const { verifyId } = useParams();
	const navigate = useNavigate();
	const [auth, setAuth] = useAuth();
	const [loader, setLoader] = useLoader();

	let browserToken;
	let browserId;
	const data = localStorage.getItem("registerInfo");
	if (data) {
		const parsedData = JSON.parse(data);
		browserToken = parsedData.token;
		browserId = parsedData.verifyId;
	}

	const handleClick = async (event) => {
		event.preventDefault();
		try {
			setLoader(true);
			if (verifyId === browserId) {
				const data = await VerificationAPI(browserToken);
				console.log(data);
				if (data.status === "success") {
					localStorage.setItem("auth", JSON.stringify(data));
					setAuth({
						...auth,
						user: data.user,
						token: data.createdToken,
					});
					setLoader(false);
					navigate("/");
				} else {
					console.error("Verification failed:", data.message);
				}
			} else {
				console.error("Verification ID mismatch");
			}
		} catch (error) {
			console.log(error);
			toast.error(
				error.response?.data?.error?.message || "Verification failed"
			);
		} finally {
			localStorage.removeItem("registerInfo");
		}
	};

	return (
		<div className="d-flex justify-content-center align-items-center vh-100">
			<h2>Almost there! Click this button to activate your account</h2>
			<button
				style={{ display: "block" }}
				onClick={handleClick}
				className="btn btn-secondary"
			>
				Activate
			</button>
		</div>
	);
};

export default VerifyPage;
