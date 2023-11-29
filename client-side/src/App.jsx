import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import BlogsListPage from "./pages/blogs/BlogsListPage";
import BlogDetailsPage from "./pages/blogs/BlogDetailsPage";
import TripsListPage from "./pages/trips/TripsListPage";
import HotelsListPage from "./pages/hotels/HotelsListPage";
import FlightsListPage from "./pages/flights/FlightsListPage";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/trips" element={<TripsListPage />} />
				<Route path="/flights" element={<FlightsListPage />} />
				<Route path="/blogs" element={<BlogsListPage />} />
				<Route path="/blogs/:blogId" element={<BlogDetailsPage />} />
				<Route path="/hotels" element={<HotelsListPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
