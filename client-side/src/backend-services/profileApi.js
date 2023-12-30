import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//* =========================Update-Profile-ById-API=========================
export const updateProfile = async (formData) => {
  try {
    const data = await axios.post(
      `${import.meta.env.VITE_API}/update-profile`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (data.error) {
      toast.error(data.error);
    } else {
      return data.data;
    }
  } catch (error) {
    console.error("Profile API Error:", error);
  }
};

//* =========================Get-User-Info-API=========================
export const userInfo = async () => {
  try {
    const { data } = await axios.get("/user-info");
    if (data.error) {
      console.error(data.error);
    } else {
      return data;
    }
  } catch (error) {
    console.error(error.response.data);
    return error.response;
  }
};
