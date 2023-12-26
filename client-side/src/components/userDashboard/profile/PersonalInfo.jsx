import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import "./Profile.css"

const PersonalInfo = () => {

  return (
      <div className='container card mt-3 p-4'>
            <form className="form-group"> 
            <div className="header d-flex justify-content-between">
              <h3 className="card-title text-start heading">
                Personal Information
              </h3>
              <div className="editBtn">
                  <button
                    className="ms-auto align-items-center"
                    type="button"
                    style={{ background: "none", fontSize:"22px" }}
                  >
                    <FaRegEdit className="mb-1" /> Edit
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
              <label htmlFor="phone" className="form-label">
                Mobile Number
              </label>
              <input
                type="text"
                className="form-control my-1 py-3 w-50"
                placeholder="Phone"
                name="phone"
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
                name="city"
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
  );
};

export default PersonalInfo;