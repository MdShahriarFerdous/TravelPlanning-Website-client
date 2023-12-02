import axios from "axios";

const baseUrl = 'http://localhost:8000/api/v1';

export function makeAxiosRequest(method, urlPath, data) {
    const headers = {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${serviceToken}`,
    };

    const config = {
        method,
        url: `${baseUrl}${urlPath}`,
        data,
        headers,
    };

    return axios(config)
        .then((res) => res.data)
        .catch((err) => {
            if (axios.isCancel(err)) {
                console.log("Request canceled:", err.message);
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
        });
}
