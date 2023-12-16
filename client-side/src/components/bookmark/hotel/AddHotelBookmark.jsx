import React, { useEffect, useState } from "react";
import { HiOutlineBookmark, HiBookmark } from "react-icons/hi2";
import {
  bookmarkList,
  AddHotelTourByIdAPI,
  RemoveHotelTourByIdAPI,
} from "../../../backend-services/bookmarksApi";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/authContext";
import { useParams } from "react-router-dom";
import "./BookmarkIcon.css";

const AddHotelBookmark = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [auth, setAuth] = useAuth();
  const { hotelId } = useParams();

  //   fetch tour bookmark status
  useEffect(() => {
    (async () => {
      const response = await bookmarkList({ query: { type: "hotel" } });
      if (response) {
        const hotels = response.data.hotelId;
        const foundStatus = hotels.some(
          (hotel) => hotel.hotelId === hotelId._id
        );
        // console.log(foundStatus);
        setIsBookmarked(foundStatus);
      }
    })();
  }, []);

  //   handle toggle
  const handleBookmarkClick = async () => {
    try {
      if (!auth?.token) {
        toast.error("Please login first to continue!");
      } else {
        if (isBookmarked) {
          await RemoveHotelTourByIdAPI(hotelId);
          toast.info("Bookmark has been removed");
          setIsBookmarked(!isBookmarked);
        } else {
          await AddHotelTourByIdAPI(hotelId);
          toast.success("Bookmark has been added");
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
