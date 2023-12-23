import axios from "axios";
import qs from "qs";

// =========================HotelsList API===================================
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

// =========================HotelDetails API=================================
export const hotelDetailedinfo = async (hotelId) => {
  try {
    return await axios.get(`/hotels/${hotelId}`);
  } catch (error) {
    console.error(error);
  }
};
// =========================Hotel Info API====================================
export const hotelInfoApi = async (hotelId) => {
  try {
    return await axios.get(`/hotel-info-get?hotelId=${hotelId}`);
  } catch (error) {
    console.error(error);
  }
};

// =========================Hotel Categories List API=========================
export const hotelCategoriesList = async ({ query }) => {
  const sortedQuery = qs.stringify(query);
  try {
    const { data } = await axios.get(`/room-categories?${sortedQuery}`);
    if (data.error) {
      console.error(data.error);
    } else {
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};

//* ======================Hotel Room Check Availablity=========================
export const check = async (info) => {
  const { guests, rooms, checkIn, checkOut, hotelId } = info || {};
  try {
    const data = await axios.post(
      `${import.meta.env.VITE_API}/hotel-available`,
      { guests, rooms, checkIn, checkOut, hotelId }
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
