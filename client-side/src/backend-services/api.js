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
export const VerificationAPI = async (browserToken) => {
	try {
		const { data } = await axios.post("/user-verify", { browserToken });
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
		console.error(error);
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
		console.error(error);
		// toast.error("Tour info data failed to serve. Try again.");
	}
};

//* =========================Calculate Tour Prices=========================
export const CalculateTourPriceAPI = async ({
	tourId,
	adultNo,
	childrenNo,
	packageName,
	vehicleOption,
}) => {
	try {
		const { data } = await axios.post(
			`/tour-cost/${tourId}/${adultNo}/${childrenNo}/${packageName}/${vehicleOption}`
		);

		if (data.error) {
			toast.error(data.error);
		} else {
			return data;
		}
	} catch (error) {
		console.error(error);
	}
};

//* =================Submit-Tour-Booking-Infos-API==================

export const TourBookingAPI = async (
	tourInfoId,
	tourId,
	adultNo,
	childrenNo,
	packageName,
	vehicleOption
) => {
	try {
		const { data } = await axios.post(
			`/create-tourBook/${tourInfoId}/${tourId}/${adultNo}/${childrenNo}/${packageName}/${vehicleOption}`
		);

		if (data.error) {
			toast.error(data.error);
		} else {
			return data;
		}
	} catch (error) {
		console.error(error);
		// toast.error("Error when posting booking data");
	}
};

//* =========================get booking-info API=========================

export const GetBookingInfoAPI = async (bookingId) => {
	try {
		const { data } = await axios.get(`/get-tour-booking-info/${bookingId}`);

		if (data.error) {
			toast.error(data.error);
		} else {
			return data;
		}
	} catch (error) {
		console.error(error);
		toast.error("No booking data found");
	}
};

//* =========================get User API=========================

export const GetUserAPI = async (id) => {
	try {
		const { data } = await axios.get(`/user-by-id/${id}`);

		if (data.error) {
			toast.error(data.error);
			return { status: "Error", error: data.error };
		} else {
			return data;
		}
	} catch (error) {
		console.error(error);
		toast.error("No user data found");
	}
};

//* =========================get vehicle-data API=========================

export const GetVehicleDataAPI = async (tourId) => {
	try {
		const { data } = await axios.get(`/get-vehicle-data/${tourId}`);

		if (data.error) {
			toast.error(data.error);
		} else if (data.status === "Success") {
			return data;
		} else {
			toast.error("Unexpected response from the server");
		}
	} catch (error) {
		console.error(error);
		// toast.error("Failed to fetch vehicle data");
	}
};

//* =========================get package data API=========================

export const GetPackageDataAPI = async (tourId, packageName) => {
	try {
		const { data } = await axios.get(
			`/get-package-data/${tourId}/${packageName}`
		);

		if (data.error) {
			toast.error(data.error);
		} else {
			return data;
		}
	} catch (error) {
		console.error(error);
		// toast.error("No package data found");
	}
};

//* =========================get personPay-data API=========================

export const GetPersonPayDataAPI = async (tourId, packageName) => {
	try {
		const { data } = await axios.get(
			`/get-personpay-data/${tourId}/${packageName}`
		);

		if (data.error) {
			toast.error(data.error);
		} else {
			return data;
		}
	} catch (error) {
		console.error(error);
		// toast.error("No person data found");
	}
};

//* =========================SingleTour-byId-API=========================
export const TourInfoByIdAPI = async (tourInfoId) => {
	try {
		const { data } = await axios.get(`/tour/${tourInfoId}`);

		if (data.error) {
			toast.error(data.error);
		} else {
			return data;
		}
	} catch (error) {
		console.error(error);
		toast.error("Tour info data failed to serve. Try again.");
	}
};

//* =========================Delete-booking-API=========================
export const DeleteTourBookingAPI = async (id) => {
	try {
		const { data } = await axios.delete(`/delete-booking/${id}`);

		if (data.error) {
			toast.error(data.error);
		} else {
			return data;
		}
	} catch (error) {
		console.error(error);
		toast.error("Tour booking delete process failed!.");
	}
};

//* =========================Get-Tour-by-Types=========================
export const TourByTypeAPI = async (tourType) => {
	try {
		const { data } = await axios.get(`/show-tourTypeLists/${tourType}`);

		if (data.error) {
			toast.error(data.error);
		} else {
			return data;
		}
	} catch (error) {
		console.error(error);
		toast.error("Tour-type data fetching failed. Try again.");
	}
};

//* ===============Tour-typesSearch or pagination API=================
export const SearchAPI = async (
	pageNo = 1,
	perPage = 5,
	searchKeyword = "0"
) => {
	try {
		const url =
			searchKeyword === "0"
				? `/show-tourCardList/${pageNo}/${perPage}`
				: `/show-tourCardList/${pageNo}/${perPage}/${searchKeyword}`;

		const { data } = await axios.get(url);

		if (data.error) {
			toast.error(data.error);
		} else {
			return data;
		}
	} catch (error) {
		console.error(error);
		toast.error("Tour-type data fetching failed. Try again.");
	}
};

//* ===============Tour-checkApi=================
export const CheckBoxAPI = async (pageNo = 1, perPage = 5, checked) => {
	try {
		const { data } = await axios.post(
			`/show-checkCardList/${pageNo}/${perPage}`,
			{ checked: checked }
		);

		if (data.error) {
			toast.error(data.error);
		} else {
			return data;
		}
	} catch (error) {
		console.error(error);
		toast.error("Tour-type data fetching failed. Try again.");
	}
};
