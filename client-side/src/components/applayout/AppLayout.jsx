import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

const AppLayout = ({ children }) => {
	return (
		<>
			<Navbar />
			<Breadcrumbs />
			{children}
			<Footer />
		</>
	);
};

export default AppLayout;
