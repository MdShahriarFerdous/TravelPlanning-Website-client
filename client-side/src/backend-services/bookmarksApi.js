import axios from "axios";
import qs from "qs";

// =========================Bookmarks API=========================
export const bookmarkList = async ({ query }) => {
  const sortedQuery = qs.stringify(query);
  try {
    const authToken = localStorage.getItem("auth");
    const token = JSON.parse(authToken).createToken;

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
    } else {
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};
