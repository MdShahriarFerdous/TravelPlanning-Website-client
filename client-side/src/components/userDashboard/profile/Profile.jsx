import React from "react";
import UserSideNavbar from "../navbar/UserSideNavbar";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="container-fluids">
      <div className="row">
        <div className="col-3 fixed-start">
          <UserSideNavbar />
        </div>

        <div className="col-9 animated fixed-end profile_info">
          <form className="form-group pt-5">
            <NavLink to="/" className="mt-8">
              Back to Home
            </NavLink>
            <div className="header d-flex justify-content-between">
              <h2 className="card-title text-start mt-4 heading">
                Personal Information
              </h2>

              <div className="editBtn me-5">
                <button className="btn bg-secondary text-white px-5 mt-4 profileBtn">
                  Edit
                </button>
              </div>
            </div>

            <div className="flex mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control my-1 py-3 w-50 "
                placeholder="Full Name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control my-1 py-3 w-50"
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Mobile Number
              </label>
              <input
                type="text"
                className="form-control my-1 py-3 w-50"
                placeholder="Phone"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control my-1 py-3 w-50"
                placeholder="Address"
              />
            </div>

            <button
              type="submit"
              className="btn bg-gradient-primary my-2 w-50 profileBtn"
            >
              Update Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
