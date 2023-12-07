import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//* =========================Register API=========================
export const RegisterAPI = async (values) => {
	let postBody = {
		...values,
	};
	try {
		const { data } = await axios.post("/user-register", postBody);
		if (data.error) {
			toast.error(data.error);
		} else {
			return data;
		}
	} catch (error) {
		console.error(error);
		toast.error("Registration failed. Try again.");
	}
};

//* =========================Verification API=========================
export const VerificationAPI = async (token) => {
	try {
		const { data } = await axios.post("/user-verify", { token });
		if (data.error) {
			toast.error(data.error);
		} else {
			return data;
		}
	} catch (error) {
		console.error(error);
		toast.error("Verification failed. Try again.");
		throw error;
	}
};

//* =========================Login/Sign in API=========================
export const LoginAPI = async (values) => {
	let postBody = {
		...values,
	};
	try {
		const { data } = await axios.post("/user-login", postBody);
		if (data.error) {
			toast.error(data.error);
		} else {
			return data;
		}
	} catch (error) {
		console.error(error);
		toast.error("Login failed. Try again.");
	}
};
