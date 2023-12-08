import { useState, useEffect } from 'react';
import axios from 'axios';

const BookmarksPage = () => {
  const [bookmarks, setBookmarks] = useState([]);

  const getAllBookmarks = async () => {
    try {
      const response = await axios.get(`$http://localhost:8000/api/v1/get-all-bookmarks`);
      setBookmarks(response.data.data);
    } catch (error) {
      console.error('Error getting all bookmarks:', error);
    }
  };

  const handleRemoveBookmark = async (bookmarkId) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/remove-bookmarks/${bookmarkId}`);
      getAllBookmarks();
    } catch (error) {
      console.error('Error removing bookmark:', error);
    }
  };

  useEffect(() => {
    getAllBookmarks();
  }, []);

  return (
    <div>
      <h1>Bookmarks Page</h1>
      <ul>
        {bookmarks.map((bookmark) => (
          <li key={bookmark._id}>
            {`Hotel ID: ${bookmark.hotelId}, Tour ID: ${bookmark.tourId}`}{' '}
            <button onClick={() => handleRemoveBookmark(bookmark._id)}>
              Remove Bookmark
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookmarksPage;
