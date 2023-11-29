import React from "react";
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

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="/check-mail" element={<SendMailPage />} />
				<Route path="/user/activate/:token" element={<VerifyPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/dashboard" element={<UserDashboard />} />
				<Route path="*" element={<PageNotFound />} replace />
			</Routes>
			<ToastContainer />
		</BrowserRouter>
	);
};

export default App;
