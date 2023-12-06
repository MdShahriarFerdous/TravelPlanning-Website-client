import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Bookmark = () => {
  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmarkToggle = async () => {
    try {
      if (bookmarked) {
        // remove bookmark
        await axios.delete(`http://localhost:8000/api/v1/remove-bookmark`);
      } else {
        // add bookmark
        await axios.post(`http://localhost:8000/api/v1/add-bookmark`);
      }

      // toggle the bookmarked state
      setBookmarked(!bookmarked);
    } catch (error) {
      console.error('Error toggling bookmark:', error.message);
    }
  };

  useEffect(() => {
    // fetch bookmark status when the component mounts
    const fetchBookmarkStatus = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/get-all-bookmarks`);
        setBookmarked(response.data.bookmarked);
      } catch (error) {
        console.error('Error fetching bookmark status:', error.message);
      }
    };

    fetchBookmarkStatus();
  }, []);

  return (
    <div className="bookmark-container">
      <button className="bookmark-button" onClick={handleBookmarkToggle}>
        {bookmarked ? (
          <FontAwesomeIcon icon={faTrash} />
        ) : (
          <FontAwesomeIcon icon={faBookmark} />
        )}
      </button>
    </div>
  );
};

export default Bookmark;
