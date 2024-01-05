import React, { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { getProfile } from "../../../backend-services/profileApi";
import "./Profile.css";

const PersonalInfo = ({ profile }) => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await getProfile();
        const profileData = response.data;

        setProfileData(profileData);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      }
    };

    fetchProfileData();
  }, []);
  return (
    <div className="container card mt-3 p-5">
      <div className="header d-flex justify-content-between">
        <h3 className="card-title text-start heading">Personal Information</h3>
        <div className="Btn">
          <button
            className="ms-auto align-items-center editBtn"
            type="button"
            style={{ background: "none", fontSize: "22px" }}
            onClick={() => profile("edit")}
          >
            <FaRegEdit className="mb-1" /> Edit
          </button>
        </div>
      </div>

      <div className="profile-info mt-4">
        <div className="mb-3 profile_content">
          <p className="info-title">Bio</p>

          <p className="info">{profileData ? profileData.bio : "Loading..."}</p>
        </div>

        <div className="mb-3 profile_content">
          <p className="info-title">Phone</p>

          <p className="info">
            {profileData ? profileData.phone : "Loading..."}
          </p>
        </div>

        <div className="mb-3 profile_content">
          <p className="info-title">City</p>

          <p className="info">
            {profileData ? profileData.city : "Loading..."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
