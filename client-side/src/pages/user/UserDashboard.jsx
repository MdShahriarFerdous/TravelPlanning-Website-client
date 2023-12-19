import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import UserSideNavbar from "../../components/userDashboard/navbar/UserSideNavbar";
import Dashboard from "../../components/userDashboard/dashboard/Dashboard";
import "../../components/userDashboard/commonCSS/common.css";

const UserDashboard = () => {
	return (
		<div className="parent_content">
			<div className="container-fluids">
				<div className="row">
					<div className="col-lg-3">
						<UserSideNavbar />
					</div>
					<div className="col-lg-9">
						<Dashboard />
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDashboard;
