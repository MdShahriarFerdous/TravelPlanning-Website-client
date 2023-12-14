import React from "react";
import UserSideNavbar from "../navbar/UserSideNavbar";
import { NavLink } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="container-fluids">
      <div className="row">
        <div className="col-4 fixed-start">
          <UserSideNavbar />
        </div>

        <div className="col-8 animated  fixed-end">
        <div className="pt-5">
            <NavLink to="/" className="mt-8">
              Back to Home
            </NavLink>
            <h2 className="card-title heading mt-4 text-start">
              All Blogs
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;