import UserSideNavbar from "../../navbar/UserSideNavbar";
import { NavLink } from "react-router-dom";
import "../../commonCSS/common.css";

const FlightBookingLists = () => {
	return (
		<div className="parent_content">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-3 fixed-start">
						<UserSideNavbar />
					</div>

					<div className="col-lg-9 animated  fixed-end">
						<div className="pt-5">
							<NavLink to="/" className="mt-8">
								Back to Home
							</NavLink>
							<h2 className="card-title heading mt-4 text-start">
								Flight Booking List
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FlightBookingLists;
