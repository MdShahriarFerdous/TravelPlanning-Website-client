import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/home/HomePage";
import PageNotFound from "./pages/notfound/PageNotFound";
import LoginPage from "./pages/userauth/LoginPage";
import RegisterPage from "./pages/userauth/RegisterPage";
import SendMailPage from "./pages/userauth/SendMailPage";
import VerifyPage from "./pages/userauth/VerifyPage";
import UserDashboard from "./pages/user/UserDashboard";

import BlogsListPage from "./pages/blogs/BlogsListPage";
import BlogDetailsPage from "./pages/blogs/BlogDetailsPage";
import HotelsListPage from "./pages/hotels/HotelsListPage";
import TripsSearchPage from "./pages/trips/TripsSearchPage";
import TripsDetailsPage from "./pages/trips/TripsDetailsPage";
import DestinationDetailsPage from "./pages/destination/DestinationDetailsPage.jsx";
import SingleTourPackage from "./pages/single-tour-package/SingleTourPackage.jsx";
import HotelDetailsPage from "./pages/hotels/HotelDetailsPage.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import TourBooking from "./pages/tourbooking/TourBooking.jsx";
import { useLoader } from "./context/loaderContext.jsx";

import Profile from "./components/userDashboard/profile/Profile.jsx";
import TourBookingLists from "./components/userDashboard/booking/tour/TourBookingLists.jsx";
import HotelBookingLists from "./components/userDashboard/booking/hotel/HotelBookingLists.jsx";
import FlightBookingLists from "./components/userDashboard/booking/flight/FlightBookingLists.jsx";
import HotelBookmarks from "./components/userDashboard/bookmarks/hotel/HotelBookmarks.jsx";
import TourBookmarks from "./components/userDashboard/bookmarks/tour/TourBookmarks.jsx";
import Blogs from "./components/userDashboard/blogs/Blogs.jsx";
import TourByType from "./components/tourtypes/tourbytype/TourByType.jsx";
import FlightBookingPage from "./pages/flights/FlightBookingPage.jsx";
import FlightsListPage from "./pages/flights/FlightsListPage.jsx";
import BookingCards from "./components/userDashboard/booking/allbookings/BookingCards.jsx";
import PaymentStatus from "./pages/tourbooking/PaymentStatus.jsx";
import FlightPaymentStatus from "./pages/flights/FlightPaymentStatus.jsx";

const RenderAppContent = () => {
	const [loader] = useLoader();
	if (loader) {
		return null;
	}
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />

				<Route path="/register" element={<RegisterPage />} />
				<Route path="/check-mail" element={<SendMailPage />} />
				<Route
					path="/user/activate/:verifyId"
					element={<VerifyPage />}
				/>
				<Route path="/login" element={<LoginPage />} />
				<Route
					path="/tour-package/:tourInfoId"
					element={<SingleTourPackage />}
				/>

				<Route path="/user" element={<PrivateRoute />}>
					<Route path="dashboard" element={<UserDashboard />} />
					<Route
						path="tour-booking/:bookingId"
						element={<TourBooking />}
					/>
					<Route
						path="tour-payment-status"
						element={<PaymentStatus />}
					/>
					<Route path="profile" element={<Profile />} />
					<Route path="all-bookings" element={<BookingCards />} />
					<Route
						path="hotel-booking-lists"
						element={<HotelBookingLists />}
					/>
					<Route
						path="tour-booking-lists"
						element={<TourBookingLists />}
					/>
					<Route
						path="flight-booking-lists"
						element={<FlightBookingLists />}
					/>
					<Route
						path="bookmarked-hotels"
						element={<HotelBookmarks />}
					/>
					<Route
						path="bookmarked-tours"
						element={<TourBookmarks />}
					/>
					<Route path="blogs" element={<Blogs />} />
				</Route>

				<Route path="/tour-types/:tourType" element={<TourByType />} />

				<Route path="/trips" element={<TripsSearchPage />} />
				<Route path="/tripsdetails" element={<TripsDetailsPage />} />
				<Route path="/blogs" element={<BlogsListPage />} />
				<Route path="/blogs/:blogSlug" element={<BlogDetailsPage />} />
				<Route path="/hotels" element={<HotelsListPage />} />
				<Route path="/flights" element={<FlightsListPage />} />
				<Route
					path="/hotels/:hotelSlug"
					element={<HotelDetailsPage />}
				/>
				<Route
					path="/destination/:id"
					element={<DestinationDetailsPage />}
				/>
				<Route path="*" element={<PageNotFound />} replace />
				<Route
					path="/flight/booking/:id/:total_traveler"
					element={<FlightBookingPage />}
				/>
				<Route
					path="/flight/payment/success"
					element={<FlightPaymentStatus />}
				/>
			</Routes>
			<ToastContainer
				autoClose={3000}
				draggable={false}
				position="top-right"
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnHover
			/>
		</BrowserRouter>
	);
};

const App = () => {
	return <RenderAppContent />;
};

export default App;
