import SpanLoader from "../../../assets/images/loader/spanloader.svg";
import { useAuth } from "../../../context/authContext";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import {
  bookmarkList,
  AddHotelTourByIdAPI,
  RemoveHotelTourByIdAPI,
} from "../../../backend-services/bookmarksApi";
import { toast } from "react-toastify";
import "./BookmarkIcon.css";

// eslint-disable-next-line react/prop-types
const AddHotelBookmark = ({ hotelId }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [auth] = useAuth();
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await bookmarkList({ query: { type: "hotel" } });
        if (response?.data) {
          const hotels = response.data.hotelId;
          const foundStatus = hotels.some((hotel) => {
            return hotel._id === hotelId;
          });
          setIsBookmarked(foundStatus);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   handle toggle
  const handleBookmarkClick = async () => {
    setLoading(true);
    try {
      if (!auth?.token) {
        toast.error("Please Login to Add Bookmark");
      } else {
        if (isBookmarked) {
          await RemoveHotelTourByIdAPI(hotelId);
          toast.info("Bookmark Removed");
          setIsBookmarked(!isBookmarked);
        } else {
          await AddHotelTourByIdAPI(hotelId);
          toast.success("Hotel Bookmarked");
          setIsBookmarked(!isBookmarked);
        }
      }
    } catch (error) {
      console.error(error);
      if (error.data.error === "Token expired") {
        toast.error("Token expired, please login");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <span
      className="add-favourite"
      onClick={handleBookmarkClick}
      style={{ cursor: "pointer" }}
    >
      {loading ? (
        <img className="span-loader-size" src={SpanLoader} />
      ) : isBookmarked ? (
        <>
          <FaHeart />
          <span style={{ marginLeft: "10px" }}>Remove Bookmark</span>
        </>
      ) : (
        <>
          <FaRegHeart />
          <span style={{ marginLeft: "10px" }}>BookMark this Hotel</span>
        </>
      )}
    </span>
  );
};

export default AddHotelBookmark;
