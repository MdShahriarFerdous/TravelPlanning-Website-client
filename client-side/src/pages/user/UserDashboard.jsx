import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "../userauth/css/bootstrap.css";
import { useAuth } from "../../context/authContext";

const UserDashboard = () => {
	const [auth, setAuth] = useAuth();
	return (
		<div className="d-flex justify-content-center align-items-center vh-100">
			<h2>Hello! {`${auth?.user?.username}`}</h2>
		</div>
	);
};

export default UserDashboard;
