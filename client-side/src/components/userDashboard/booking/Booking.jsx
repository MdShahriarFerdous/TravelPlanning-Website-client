import React from "react";
import UserSideNavbar from "../navbar/UserSideNavbar";
import { NavLink } from "react-router-dom";

const Booking = () => {
  return (
    <div className="container-fluids">
      <div className="row">
        <div className="col-3 fixed-start">
          <UserSideNavbar />
        </div>

        <div className="col-9 animated  fixed-end">
          <div className="pt-5">
            <NavLink to="/" className="mt-8">
              Back to Home
            </NavLink>
            <h2 className="card-title heading mt-4 text-start">
              Booking List
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
