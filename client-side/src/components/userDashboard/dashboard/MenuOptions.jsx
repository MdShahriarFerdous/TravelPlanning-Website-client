import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./Dashboard.css";

import { FaTree } from "react-icons/fa6";
import { FaHotel, FaPlaneDeparture, FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";

const MenuOptions = () => {
	return (
		<div
			className="row  mb-5 main-options-block"
			style={{ marginTop: "72px" }}
		>
			<h3 className="mb-4">Step Ahead Your Journey</h3>

			<div className="col-lg-3 options-block">
				<div className="card shadow-sm p-3 tour-card-design">
					<p>Check Latest Tour Packages</p>
					<div className="d-flex justify-content-center align-items-center icon-block">
						<FaTree className="tree-icon" />
					</div>
				</div>
			</div>

			<div className="col-lg-3 options-block">
				<Link to="/hotels">
					<div className="card shadow-sm p-3 hotel-card-design">
						<p>Book Hotel for Your Vacation</p>
						<div className="d-flex justify-content-center align-items-center icon-block">
							<FaHotel className="hotel-icon" />
						</div>
					</div>
				</Link>
			</div>

			<div className="col-lg-3 options-block">
				<Link to="/flights">
					<div className="card shadow-sm px-4 py-3 flight-card-design">
						<p>Check Here for Flights</p>
						<div className="d-flex justify-content-center align-items-center icon-block">
							<FaPlaneDeparture className="flight-icon" />
						</div>
					</div>
				</Link>
			</div>

			<div className="col-lg-3 options-block">
				<Link to="/trips">
					<div className="card shadow-sm p-3 itinerary-card-design">
						<p>Make Your Itinerary Here</p>
						<div className="d-flex justify-content-center align-items-center icon-block">
							<FaTasks className="task-icon" />
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default MenuOptions;
