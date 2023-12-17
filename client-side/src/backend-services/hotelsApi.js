import axios from "axios";
import qs from "qs";

// =========================HotelsList API=========================
export const hotelsList = async ({ query }) => {
  const sortedQuery = qs.stringify(query);
  try {
    const { data } = await axios.get(`/hotels?${sortedQuery}`);
    if (data.error) {
      console.error(data.error);
    } else {
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};

// =========================HotelDetails API=======================
export const hotelDetailedinfo = async (hotelId) => {
  try {
    return await axios.get(`/hotels/${hotelId}`);
  } catch (error) {
    console.error(error);
  }
};