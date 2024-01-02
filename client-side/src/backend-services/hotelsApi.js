import axios from "axios";
import moment from "moment";
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
export const check = async (payload) => {
  try {
    const data = await axios.post(
      `${import.meta.env.VITE_API}/hotel-available`,
      payload
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

//* ==========================Hotel Booking Create=============================
export const hotelBookingCreate = async (payload) => {
  try {
    const updatedPayload = {
      ...payload,
      checkIn: moment(payload.checkIn).format("YYYY-MM-DD"),
      checkOut: moment(payload.checkOut).format("YYYY-MM-DD"),
      summary: null,
    };
    return await axios.post("/hotel-bookings", updatedPayload);
  } catch (error) {
    console.error(error.response.data);
    return error.response;
  }
};

//* ==========================Hotel Bookings List=============================
export const hotelBookingsList = async ({ query }) => {
  const sortedQuery = qs.stringify(query);
  try {
    const { data } = await axios.get(
      `/user-specific-hotel-bookings?${sortedQuery}`
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

//* ====================Hotel Bookings Detailed Info==========================
export const hotelBookingsDetailedinfo = async (hotelBookingId) => {
  try {
    return await axios.get(`/hotel-bookings/${hotelBookingId}`);
  } catch (error) {
    console.error(error);
  }
};

//* ==========================Hotel Booking Payment============================
export const hotelBookingPayment = async (payload) => {
  try {
    return await axios.post("/hotel-booking-payment", {
      hotelBookingId: payload,
    });
  } catch (error) {
    console.error(error);
    return error.response;
  }
};
