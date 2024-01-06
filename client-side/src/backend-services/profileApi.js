import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//* =========================Update-Profile-API=========================
export const updateProfile = async (formData) => {
	try {
		const response = await axios.post("/update-profile", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});

		if (response.data.error) {
			toast.error(response.data.error);
		} else {
			return response.data;
		}
		console.log("data: ", response.data);
	} catch (error) {
		console.error("Update Profile:", error);
	}
};

//* =========================Get-Profile-API=========================
export const getProfile = async () => {
	try {
		const response = await axios.get("/get-profile");

		if (response.data.error) {
			toast.error(response.data.error);
		} else {
			return response.data;
		}
	} catch (error) {
		console.error("Error fetching profile:", error);
	}
};

//* =========================Update-User-API=========================
export const updateUser = async (userData) => {
	try {
		const response = await axios.post("/update-user", userData);

		if (response.data.error) {
			toast.error(response.data.error);
		} else {
			return response.data;
		}
	} catch (error) {
		console.error("Error updating user:", error);
	}
};

//* =========================Get-User-Info-API=========================
export const userInfo = async () => {
	try {
		const { data } = await axios.get("/user-info");
		if (data.error) {
			console.error(data.error);
		} else {
			return data;
		}
	} catch (error) {
		console.error(error.response.data);
		return error.response;
	}
};
