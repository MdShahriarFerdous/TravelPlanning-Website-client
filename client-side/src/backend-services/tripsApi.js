import axios from "axios";
import qs from "qs";

// =========================PlacesList API===================================
export const placesList = async ({ query }) => {
  let sortedQuery = qs.stringify(query);
  try {
    let { data } = await axios.get(`https://api.opentripmap.com/0.1/en/places/radius?${sortedQuery}`);
    if (data) {
      return data;
    } else {
      console.error("Something went wrong");
    }
  } catch (error) {
    console.error(error);
  }
};

// =========================Add Itinerary to Wishlist API===================================
export const addItineraryWishlistAPI = async (duration, location_name, latitude, longitude) => {
  try {
    const { data } = await axios.post("itinerary", {
      duration,
      location_name,
      latitude,
      longitude,
    });
    if (data.status === "success") {
      return true;
    } else {
      console.error("Something went wrong");
    }
  } catch (error) {
    console.error(error);
  }
};
