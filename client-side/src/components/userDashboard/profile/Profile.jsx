import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserSideNavbar from "../navbar/UserSideNavbar";
import { FaArrowLeft } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { updateProfile } from "../../../backend-services/profileApi";
import { useAuth } from "../../../context/authContext";
import PersonalInfo from "./PersonalInfo";
import UserSetting from "./UserSetting";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./Profile.css";
import "../commonCSS/common.css";
import { useUserImage } from "../../../context/userImageContext";
import circleLoader from "../../../assets/images/loader/spanloader.svg";
import EditPersonalInfo from "./editprofile/EditPersonalInfo";

const Profile = () => {
  const [selectedProfile, setSelectedProfile] = useState("personalInfo");
  const [selectedImage, setSelectedImage] = useState(null);
  const [auth, setAuth] = useAuth();
  const [userImage, setUserImage] = useUserImage();
  const [loading, setLoading] = useState(false);
  const [updatedUsername, setUpdatedUsername] = useState("");

  const handleUpdateUsername = (newUsername) => {
    setUpdatedUsername(newUsername);
  };

  const handleProfileSelect = (profile) => {
    setSelectedProfile(profile);
  };

  useEffect(() => {
    if (userImage?.image) {
      setSelectedImage(userImage?.image);
    }
  }, [userImage]);

  const onUpdateProfile = async (file) => {
    setLoading(true);
    try {
      const data = await updateProfile({ image: file });
      if (data.status === "Success") {
        setUserImage({
          ...userImage,
          image: data.image,
        });
      }
    } catch (error) {
      console.error("Error uploading : ", error);
      toast.error("Error uploading image");
    } finally {
      setLoading(false);
      toast.success("Image uploaded");
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
                    <p
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        marginBottom: "10px",
                      }}
                    >{`${updatedUsername || auth?.user?.username}`}</p>

                    <p
                      style={{
                        fontSize: "0.8rem",
                      }}
                    >{`${auth?.user?.email}`}</p>
                    {loading ? (
                      <>
                        <div
                          style={{
                            width: "120px",
                            height: "120px",
                            borderRadius: "60px",
                            border: "1px solid #67748E",
                          }}
                        >
                          <img
                            src={circleLoader}
                            style={{
                              width: "80px",
                              height: "80px",
                              marginTop: "15px",
                              marginLeft: "16px",
                            }}
                          />
                        </div>
                      </>
                    ) : (
                      <img src={selectedImage} alt="Profile Image" />
                    )}

                    <label
                      htmlFor="upload-photo"
                      className="btn bg-gradient-primary mt-2 input-label-btn"
                    >
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
                    <ul className="list settings-item">
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
                          selectedProfile === "userSetting" ? "active" : ""
                        }`}
                        onClick={() => handleProfileSelect("userSetting")}
                      >
                        <CiSettings
                          className="profile_icon"
                          style={{
                            fontSize: "1.68rem",
                          }}
                        />{" "}
                        User Setting
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 user-info-part">
                {selectedProfile === "personalInfo" && (
                  <PersonalInfo
                    onUpdateProfile={onUpdateProfile}
                    profile={handleProfileSelect}
                  />
                )}
                {selectedProfile === "edit" && <EditPersonalInfo />}
                {selectedProfile === "userSetting" && (
                  <UserSetting onUpdateUsername={handleUpdateUsername} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
