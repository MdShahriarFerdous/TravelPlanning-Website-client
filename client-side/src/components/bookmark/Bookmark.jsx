import React, { useState, useEffect } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import axios from "axios";

const Bookmark = ({ hotelId, handleBookmarkToggle }) => {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const fetchBookmarkStatus = async () => {
      try {
        const authToken = localStorage.getItem("auth");
        const token = JSON.parse(authToken).createToken;
        axios
          .get(`${import.meta.env.VITE_API}/get-all-bookmarks`, {
            headers: {
              Authorization: `${token}`,
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            const hotels = response.data.data.hotelId;

            setBookmarked(!hotels.includes(hotelId));
          })
          .catch((error) => {
            console.error(error);
          });
        // setBookmarked(response.data.bookmarked);
      } catch (error) {
        console.error("Error fetching bookmark status:", error.message);
      }
    };

    fetchBookmarkStatus();
  }, []);

  return (
    <div className="bookmark-container">
      <button
        className="bookmark-button"
        onClick={() => handleBookmarkToggle(hotelId, bookmarked)}
      >
        {bookmarked ? <FaRegBookmark /> : <FaBookmark />}
      </button>
    </div>
  );
};

export default Bookmark;
