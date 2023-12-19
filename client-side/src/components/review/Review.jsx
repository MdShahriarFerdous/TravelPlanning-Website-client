import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import {
  CreateReviewTourByIdAPI,
  ReviewListTourByIdAPI,
} from "../../backend-services/reviewApi";
import { toast } from "react-toastify";
import { useAuth } from "../../context/authContext";
import Star from "./average/Star";
import StarRating from "./StarRating";
import "./Star.css";

const Review = ({ tourInfoId }) => {
  const [totalReview, setTotalReview] = useState(null); // done
  const [reviewData, setReviewData] = useState([]); // done
  const [userRating, setUserRating] = useState(null);
  const [comment, setComment] = useState("");
  const [averageRating, setAverageRating] = useState(null); //done
  const [review, setReview] = useState(null);
  const [auth, setAuth] = useAuth(); // done

  useEffect(() => {
    (async () => {
      try {
        const response = await ReviewListTourByIdAPI(tourInfoId);
        console.log("API response: ", response);
        if (response) {
          // all tour reviews
          const tourReviews = response.data.reviews;
          console.log("All Reviews: ", tourReviews);

          setReviewData(tourReviews);

          // total reviews count
          const totalReviews = response.data.totalReviews;
          console.log("Total Reviews: ", totalReviews);
          setTotalReview(totalReviews);

          // all ratings
          const allRatings = tourReviews.map((tourReview) => tourReview.rating);

          // calculate the average rating
          const totalRatings = allRatings.length;
          const sumRatings = allRatings.reduce(
            (acc, rating) => acc + rating,
            0
          );

          console.log("total sum: ", sumRatings);
          const averageRatings =
            totalRatings > 0 ? sumRatings / totalRatings : 0;

          console.log("Average Rating: ", averageRatings);

          setAverageRating(averageRatings);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    })();
  }, [reviewData]);

  const handleRatingChange = (selectedRating) => {
    console.log("Selected Rating:", selectedRating);
    setUserRating(selectedRating);
  };

  // handle submit button
  const handleReviewSubmit = async () => {
    try {
      if (!auth?.token) {
        toast.error("Please login first to continue!");
      } else if (!userRating) {
        toast.error("Please provide a rating!");
      } else {
        const response = await CreateReviewTourByIdAPI(tourInfoId);
        console.log("API Response:", response);
        console.log(tourInfoId);

        if (response && response.error) {
          toast.error(response.error);
        } else {
          setComment(""); 
          setReviewData([...reviewData, response]); 
          setUserRating(null);
        }
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="container-fluids mt-5">
      <div className="row">
        <div className="col-lg-8 card p-4" style={{ marginLeft: "30px", overflowY: "auto" }}>
          <h2 className="fw-bold mb-4">Reviews</h2>
          <div className="mb-3">
            <Star stars={averageRating} reviews={totalReview} />
            <p className="fw-medium">{review}</p>
          </div>
          {reviewData.map((obj) => (
            <div key={obj._id} className="all_reviews card p-3 mt-2 shadow" >
              <p>User: {obj.user.username}</p>
              <p>
                Rating: {obj.rating}{" "}
                <FaStar size={15} style={{ color: "orange" }} />
              </p>
              <p>Comment: {obj.comment}</p>
            </div>
          ))}
          <div className="my-4">
            <h4>Give your review:</h4>
            <StarRating onRatingChange={handleRatingChange} />
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Write a Review
            </label>
            <textarea
              className="form-control "
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Share your experience..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button
              className="btn bg-gradient-primary w-lg-30"
              onClick={handleReviewSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
