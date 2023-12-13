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
import FlightsListPage from "./pages/flights/FlightsListPage";
import TripsSearchPage from "./pages/trips/TripsSearchPage";
import TripsDetailsPage from "./pages/trips/TripsDetailsPage";
import DestinationDetailsPage from "./pages/destination/DestinationDetailsPage.jsx";
import SingleTourPackage from "./pages/single-tour-package/SingleTourPackage.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import Profile from "./components/userDashboard/profile/Profile";
import Booking from "./components/userDashboard/booking/Booking";
import Bookmarks from "./components/userDashboard/bookmarks/Bookmarks";
import Blogs from "./components/userDashboard/blogs/Blogs";

const App = () => {
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
				<Route path="/user" element={<PrivateRoute />}>
					<Route path="dashboard" element={<UserDashboard />} />
					<Route path="profile" element={<Profile />} />
					<Route path="booking" element={<Booking />} />
        			<Route path="bookmarks" element={<Bookmarks />} />
        			<Route path="blogs" element={<Blogs />} />
				</Route>

				<Route
					path="/tour-package/:tourInfoId"
					element={<SingleTourPackage />}
				/>
				<Route path="*" element={<PageNotFound />} replace />

				<Route path="/trips" element={<TripsSearchPage />} />
				<Route path="/tripsdetails" element={<TripsDetailsPage />} />
				<Route path="/flights" element={<FlightsListPage />} />
				<Route path="/blogs" element={<BlogsListPage />} />
				<Route path="/blogs/:blogId" element={<BlogDetailsPage />} />
				<Route path="/hotels" element={<HotelsListPage />} />
				<Route
					path="/destination/:id"
					element={<DestinationDetailsPage />}
				/>
			</Routes>
			<ToastContainer />
		</BrowserRouter>
	);
};

export default App;
