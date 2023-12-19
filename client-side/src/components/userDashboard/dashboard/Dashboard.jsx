import React from "react";
import { useAuth } from "../../../context/authContext";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./Dashboard.css";
import WelcomeImg from "../../../assets/images/welcome/travel-welcome.svg";
import MenuOptions from "./MenuOptions";

const Dashboard = () => {
	const [auth, setAuth] = useAuth();
	return (
		<div className="container-fluid pt-5">
			<div className="mt-2 mb-5">
				<NavLink to="/">Back to Home</NavLink>
			</div>

			<p className="mt-5 p-welcome">
				Welcome, {`${auth?.user?.username}`}
			</p>
			<h1 className="mt-2 mb-4">Dashboard Overview</h1>

			<div className="promo_card d-flex mb-5">
				<img
					src={WelcomeImg}
					style={{
						height: "40%",
						width: "40%",
						marginLeft: "32px",
					}}
				/>
				<h3
					className="title-for-welcome"
					style={{
						width: "40%",
						marginLeft: "48px",
						marginTop: "14px",
					}}
				>
					Unlock a World of Journeys with WeTravel
				</h3>
				{/* {console.log(auth?.user)} */}
				{/* <span>Lorem ipsum dolor sit amet.</span> */}
			</div>
			<MenuOptions />
		</div>
	);
};

export default Dashboard;
