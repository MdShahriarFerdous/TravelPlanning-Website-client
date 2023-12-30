import { useState } from "react";
import { NavLink } from "react-router-dom";
import UserSideNavbar from "../navbar/UserSideNavbar";
import { FaArrowLeft } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { updateProfile } from "../../../backend-services/profileApi"
import { useAuth } from "../../../context/authContext";
import PersonalInfo from "./PersonalInfo";
import PasswordSetting from "./PasswordSetting";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./Profile.css";
import "../commonCSS/common.css";


const Profile = () => {
  const [selectedProfile, setSelectedProfile] = useState("personalInfo");
  const [selectedImage, setSelectedImage] = useState(null);
  const [auth] = useAuth();

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
  };
  
  const onUpdateProfile = async (file) => {
    try {
      await updateProfile({ image: file });
      toast.success("Image uploaded");
    } catch (error) {
      console.error("Error uploading : ", error);
      toast.error("Error uploading image");
    }
  };

  const handleProfileImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      onUpdateProfile(file);
    }
  };

  return (
    <div className="parent_content">
      <div className="container-fluids">
        <div className="row">
          <div className="col-lg-3 fixed-start">
            <UserSideNavbar />
          </div>

          <div className="col-lg-9 animated fixed-end profile_info">
            <div className="pt-5">
              <NavLink to="/" className="mt-8">
                <button type="button" style={{ background: "none" }}>
                  <FaArrowLeft className="back-arrow" /> Back to Home
                </button>
              </NavLink>
            </div>
            <div className="row d-flex flex-row">
              <div className="col-lg-4">
                <div className="card w-100 mt-3 p-4">
                  <div className="profile d-flex flex-column align-items-center">
                    <p style={{fontSize:"1.5rem"}}>{`${auth?.user?.username}`}</p>
                    <img
                      src={selectedImage}
                      alt="Profile Image"
                    />
                    <label htmlFor="upload-photo" className="btn bg-gradient-primary mt-2 align-items-center">
                      Upload Photo
                      <input
                        type="file"
                        id="upload-photo"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleProfileImage}
                      />
                    </label>
                  </div>
                  <div className="profile_item">
                    <ul className="list">
                      <li
                        className={`list-item ${
                          selectedProfile === "personalInfo" ? "active" : ""
                        }`}
                        onClick={() => handleProfileSelect("personalInfo")}
                      >
                        <CgProfile className="profile_icon" /> Personal Info
                      </li>
                      <li
                        className={`list-item ${
                          selectedProfile === "passwordSetting" ? "active" : ""
                        }`}
                        onClick={() => handleProfileSelect("passwordSetting")}
                      >
                        <CiSettings className="profile_icon" /> Password Setting
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                  {selectedProfile === "personalInfo" && <PersonalInfo onUpdateProfile={onUpdateProfile} />}
                  {selectedProfile === "passwordSetting" && <PasswordSetting />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
