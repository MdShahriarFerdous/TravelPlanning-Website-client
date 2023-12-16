import { useEffect, useState } from "react";
import { HiOutlineBookmark, HiBookmark } from "react-icons/hi2";
import {
  bookmarkList,
  AddHotelTourByIdAPI,
  RemoveHotelTourByIdAPI,
} from "../../../backend-services/bookmarksApi";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/authContext";
import "./BookmarkIcon.css";

// eslint-disable-next-line react/prop-types
const AddHotelBookmark = ({hotelId}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [auth] = useAuth();
  useEffect(() => {
    (async () => {
      const response = await bookmarkList({ query: { type: "hotel" } });
      if (response?.data) {
        const hotels = response.data.hotelId;
        const foundStatus = hotels.some((hotel) => {
          return hotel._id === hotelId;
        });
        setIsBookmarked(foundStatus);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   handle toggle
  const handleBookmarkClick = async () => {
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
    }
  };
  return (
    <div className="add-fav bookmark-icon" onClick={handleBookmarkClick}>
      {isBookmarked ? (
        <HiBookmark className="bookmark fill-bookmark" />
      ) : (
        <HiOutlineBookmark className="bookmark" />
      )}
    </div>
  );
};

export default AddHotelBookmark;
