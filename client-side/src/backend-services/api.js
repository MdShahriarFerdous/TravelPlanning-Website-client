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
		console.log(error);
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
		console.log(error);
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
		console.log(error);
		toast.error("Login failed. Try again.");
	}
};
//* =========================Tour-thumbnail-list-API=========================
export const TourThumbnailAPI = async () => {
	try {
		const { data } = await axios.get("/tour-thumbnails");

		if (data.error) {
			toast.error(data.error);
		} else {
			return data;
		}
	} catch (error) {
		console.log(error);
		toast.error("Thumbnail fetching failed. Try again.");
	}
};

//* =========================SingleTour-byId-API=========================
export const TourByIdAPI = async (tourInfoId) => {
	try {
		const { data } = await axios.get(`/tour-info/${tourInfoId}`);

		if (data.error) {
			toast.error(data.error);
		} else {
			return data;
		}
	} catch (error) {
		console.log(error);
		toast.error("Tour info data failed to serve. Try again.");
	}
};
