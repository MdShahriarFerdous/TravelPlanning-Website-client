import axios from "axios";
import { toast } from "react-toastify";
import qs from "qs";
import "react-toastify/dist/ReactToastify.css";

//* =========================BlogsList API=========================
export const blogsList = async ({query}) => {
	const {pageNumber} = query || {}
	const sortedQuery = qs.stringify({pageNumber});
	try {
		const { data } = await axios.get(`/blogs?${sortedQuery}`);
		if (data.error) {
			toast.error(data.error);
		} else {
			return data;
		}
	} catch (error) {
		console.error(error);
		toast.error("Fetching  failed. Try again.");
	}
};