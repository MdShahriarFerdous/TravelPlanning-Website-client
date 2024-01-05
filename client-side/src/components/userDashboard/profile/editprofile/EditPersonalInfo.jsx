import React, { useState } from "react";
import { updateProfile } from "../../../../backend-services/profileApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Profile.css";

const EditPersonalInfo = () => {
  const [formData, setFormData] = useState({
    bio: "",
    city: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const instanceOfFormData = new FormData();

    instanceOfFormData.append("bio", formData.bio);
    instanceOfFormData.append("city", formData.city);
    instanceOfFormData.append("phone", formData.phone);

    try {
      // for (let [key, value] of instanceOfFormData.entries()) {
      // 	console.log(`${key}: ${value}`);
      // }
      const data = await updateProfile(instanceOfFormData);
      console.log("Api response:", data);

      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Profile updated successfully!");

        setFormData({
          bio: "",
          city: "",
          phone: "",
        });
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="container card mt-3 p-5">
      <form className="form-group" onSubmit={handleSubmit}>
        <div className="header d-flex justify-content-between">
          <h3 className="card-title text-start heading">Edit Profile</h3>
        </div>

        <div className="flex mb-3 mt-4 info-edit-div">
          <label htmlFor="bio" className="form-label">
            Bio
          </label>
          <textarea
            className="form-control p-2"
            name="bio"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="bio..."
            value={formData.bio}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control my-1 py-3 info-input"
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control my-1 py-3 info-input"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>

        <button
          type="submit"
          className="btn bg-gradient-primary my-2 w-100 profileBtn"
        >
          Update My Profile
        </button>
      </form>
    </div>
  );
};

export default EditPersonalInfo;
