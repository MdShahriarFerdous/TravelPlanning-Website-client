import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//* =========================Update-Profile-API=========================
export const updateProfile = async (formData) => {
  try {
    const response = await axios.post("/update-profile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.data.error) {
      toast.error(response.data.error);
    } else {
      return response.data;
    }
    console.log("data: ", response.data);
  } catch (error) {
    console.error("Update Profile:", error);
  }
};
