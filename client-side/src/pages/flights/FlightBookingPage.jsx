import AppLayout from "../../components/applayout/AppLayout";
import BookingDetails from "../../components/flight/BookingDetails";
import "./FlightBookingPage.css";
import FlightPrice from "../../components/flight/FlightPrice.jsx";
import { useParams } from "react-router-dom";
import { getFlightById } from "../../_api/FlightApi.js";
import { useEffect, useState } from "react";
import MiniLoader from "../../components/screenloader/MiniLoader.jsx";

const FlightBookingPage = () => {
	const { id, total_traveler } = useParams();
	const [flightData, setFlightData] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	// console.log("v", flightData)
	// console.log("Traveler", {travelers: total_traveler})

	const fetchFlight = async () => {
		setIsLoading(true);
		try {
			const response = await getFlightById(id, total_traveler);
			if (response.error) {
				// If the API returns an error, set flightData to an empty array
				setFlightData({});
			} else {
				// If the API returns data, set flightData to the response data
				setFlightData(response.data);
			}
		} catch (error) {
			// Handle any other errors that might occur during the API call
			console.error("Error fetching flight data:", error);
			setFlightData({});
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchFlight();
	}, []);

	return (
		<AppLayout>
			<section
				className="hotels-section"
				style={{ padding: "120px 80px 0 80px" }}
			>
				<div className="flight-booking-container">
					<div className="auto-container">
						{isLoading ? (
							<MiniLoader />
						) : (
							flightData && (
								<div className="row">
									<BookingDetails
										flightData={flightData}
										traveler={total_traveler}
									/>
									<div className="col-lg-4">
										<FlightPrice
											flightData={flightData}
											traveler={total_traveler}
										/>
									</div>
								</div>
							)
						)}
					</div>
				</div>
			</section>
		</AppLayout>
	);
};

export default FlightBookingPage;
