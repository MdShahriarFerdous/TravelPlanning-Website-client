import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Footer from "./components/footer/Footer";
// import HeroSection from "./components/herosection/HeroSection";
// import TourPackage from "./components/tourpackage/TourPackage";
// import Destination from "./components/destination/Destination";
import HomePage from "./pages/home/HomePage";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
