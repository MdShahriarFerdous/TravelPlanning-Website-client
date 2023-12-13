import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import UserSideNavbar from "../../components/userDashboard/navbar/UserSideNavbar";
import Dashboard from "../../components/userDashboard/dashboard/Dashboard";

const UserDashboard = () => {
  return (
    <div className="container-fluids">
      <div className="row">
        <div className="col-3">
          <UserSideNavbar />
        </div>
        <div className="col-9">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
