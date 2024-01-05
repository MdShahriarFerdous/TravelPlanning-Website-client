import React, { useState } from "react";
import { updateUser } from "../../../backend-services/profileApi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserSetting = ({ onUpdateUsername }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const response = await updateUser({ username, password });

      if (response.error) {
        toast.error(response.error);
      } else {
        toast.success("User updated successfully!");

        onUpdateUsername(username);

        setUsername("");
        setPassword("");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleCancel = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <div className="container card mt-3 p-4">
      <h4>Change Username and Password</h4>
      <form className="mt-3" onSubmit={handleSave}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control my-1 py-3 info-input"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="">New Password</label>
        <input
          type="password"
          className="form-control my-1 py-3 info-input"
          placeholder="Enter New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="mt-2">
          <button
            type="button"
            className="btn bg-outline-danger my-2 me-2 w-25"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button className="btn bg-gradient-primary my-2 ms-2 w-25">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserSetting;
