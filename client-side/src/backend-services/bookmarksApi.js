import axios from "axios";
import qs from "qs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//* =========================Bookmark-List-API=========================
export const bookmarkList = async ({ query }) => {
  const sortedQuery = qs.stringify(query);
  try {
    const authToken = localStorage.getItem("auth");
    const token = authToken && JSON.parse(authToken).token;

    if (token) {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/get-all-bookmarks?${sortedQuery}`,
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (data.error) {
        console.error(data.error);
		return false;
      } else {
        return data;
      }
    }else{
		return false;
	}
  } catch (error) {
    console.error(error);
  }
};

//* =========================Add-Bookmark-Tour-By-API=========================
export const AddBookmarkTourByIdAPI = async (tourInfoId) => {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API}/add-tour-bookmark/${tourInfoId}`
    );

    if (data.error) {
      toast.error(data.error);
    } else {
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};

//* =========================Remove-Bookmark-Tour-By-API=========================
export const RemoveBookmarkTourByIdAPI = async (tourInfoId) => {
  try {
    const { data } = await axios.delete(
      `${import.meta.env.VITE_API}/remove-tour-bookmark/${tourInfoId}`
    );

    if (data.error) {
      toast.error(data.error);
    } else {
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};
//* =========================Add-Bookmark-Tour-By-API=========================
export const AddHotelTourByIdAPI = async (hotelId) => {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API}/add-hotel-bookmark/${hotelId}`
    );

    if (data.error) {
      toast.error(data.error);
    } else {
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};

//* =========================Remove-Bookmark-Tour-By-API=========================
export const RemoveHotelTourByIdAPI = async (hotelId) => {
  try {
    const { data } = await axios.delete(
      `${import.meta.env.VITE_API}/remove-hotel-bookmark/${hotelId}`
    );

    if (data.error) {
      toast.error(data.error);
    } else {
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};
