import axios from "axios";

const baseUrl =
	import.meta.env.VITE_API ||
	"https://travelplanning-website-server.onrender.com/api/v1";

export async function makeAxiosRequest(method, urlPath, data) {

	// Assuming localStorage.getItem('auth') returns the stored string
	const authString = localStorage.getItem('auth');

	// Parse the string to get an object
	const authObject = JSON.parse(authString);

	// Access the token property
	const token = authObject.token;

	const headers = {
		"Content-Type": "application/json",
		Authorization: token,
	};

	const config = {
		method,
		url: `${baseUrl}${urlPath}`,
		data,
		headers,
	};

	try {
		const res = await axios(config);
		return res.data;
	} catch (err) {
		if (axios.isCancel(err)) {
			console.error("Request canceled:", err.message);
		} else if (err.response && err.response.status === 401) {
			// Handle unauthorized access (e.g., redirect to login)
			console.error("Unauthorized access:", err.message);
		} else if (err.response) {
			console.error("API error:", err.response.data.message);
			throw err.response.data;
		} else if (err.request) {
			throw err.request;
		} else {
			throw new Error(`Error: ${err.message}`);
		}
	}
}
