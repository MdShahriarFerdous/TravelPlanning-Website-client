import React, { useEffect, useState } from "react";
import { HiOutlineBookmark, HiBookmark } from "react-icons/hi2";
import {
  bookmarkList,
  AddBookmarkTourByIdAPI,
  RemoveBookmarkTourByIdAPI,
} from "../../../backend-services/bookmarksApi";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/authContext";
import { useParams } from "react-router-dom";

const AddTourBookmark = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [auth, setAuth] = useAuth();
  const { tourInfoId } = useParams();

  useEffect(() => {
    (async () => {
      const response = await bookmarkList({ query: { type: "tour" } });
      if (response) {
        const tours = response.data.tourId;
        const foundStatus = tours.some((tour) => tour.tourId === tourInfoId);
        console.log({
          tourInfoId,
          tours,
          foundStatus,
        });
        setIsBookmarked(foundStatus);
      }
    })();
  }, []);

  const handleBookmarkClick = async () => {
    try {
      if (!auth?.token) {
        toast.error("Please login first to continue!");
      } else {
        if (isBookmarked) {
          await RemoveBookmarkTourByIdAPI(tourInfoId);
          toast.info("Bookmark has been removed");
          setIsBookmarked(!isBookmarked)
        } else {
          await AddBookmarkTourByIdAPI(tourInfoId);
          toast.success("Bookmark has been added");
          setIsBookmarked(!isBookmarked)
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
    <>
      <span className="span-bookmark" onClick={handleBookmarkClick}>
        {isBookmarked ? (
          <HiBookmark className="bookmark fill-bookmark" />
        ) : (
          <HiOutlineBookmark className="bookmark" />
        )}
      </span>
    </>
  );
};

export default AddTourBookmark;
