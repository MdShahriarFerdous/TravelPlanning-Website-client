import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//* =========================Update-Profile-API=========================
export const updateProfile = async (formData) => {
  try {
    const data = await axios.post(`/update-profile`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (data.error) {
      toast.error(data.error);
    } else {
      return data.data;
    }
    console.log("data: ", data);
  } catch (error) {
    console.error("Update Profile:", error);
  }
};
