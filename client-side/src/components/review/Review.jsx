import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import {
	CreateReviewTourByIdAPI,
	ReviewListTourByIdAPI,
} from "../../backend-services/reviewApi";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import { toast } from "react-toastify";
import { useAuth } from "../../context/authContext";
import Star from "./average/Star";
import StarRating from "./StarRating";
import ProfileImg from "../../assets/images/profile-image/profileImage.png";
import "./Star.css";
import "./review.css";

const Review = ({ tourInfoId }) => {
	// console.log("tourInfoId: ", tourInfoId);
	const [totalReview, setTotalReview] = useState(null); // done
	const [reviewData, setReviewData] = useState([]); // done
	const [userRating, setUserRating] = useState(null);
	const [comment, setComment] = useState("");
	const [averageRating, setAverageRating] = useState(null); //done
	// const [review, setReview] = useState(null);
	const [auth, setAuth] = useAuth(); // done

	useEffect(() => {
		(async () => {
			try {
				const data = await ReviewListTourByIdAPI(tourInfoId);
				// console.log("API response: ", data);
				if (data) {
					// all tour reviews
					const tourReviews = data.data.reviews;
					// console.log("All Reviews: ", tourReviews);

					setReviewData(tourReviews);

					// total reviews count
					const totalReviews = data.data.totalReviews;
					// console.log("Total Reviews: ", totalReviews);

					setTotalReview(totalReviews);

					// all ratings
					const allRatings = tourReviews.map(
						(tourReview) => tourReview.rating
					);
					// console.log(allRatings);

					// calculate the average rating
					const totalRatings = allRatings.length;
					const sumRatings = Number(
						allRatings.reduce((acc, rating) => acc + rating, 0)
					);

					// console.log("total sum: ", sumRatings);
					const averageRatings = Number(
						totalRatings > 0 ? sumRatings / totalRatings : 0
					);

					// console.log("Average Rating: ", averageRatings);

					setAverageRating(averageRatings);
				}
			} catch (error) {
				console.error("Error fetching reviews:", error);
			}
		})();
	}, [tourInfoId, reviewData]);

	const handleRatingChange = (selectedRating) => {
		// console.log("Selected Rating:", selectedRating);
		setUserRating(selectedRating);
	};

	// handle submit button
	const handleReviewSubmit = async (e) => {
		e.preventDefault();

		try {
			if (!auth?.token) {
				toast.error("Please login first to continue!");
			} else if (!userRating) {
				toast.error("Please provide a rating!");
			} else {
				const data = await CreateReviewTourByIdAPI(tourInfoId, {
					userRating,
					comment,
				});
				console.log("API Response:", data);
				console.log(tourInfoId);

				if (data && data.error) {
					toast.error(data.error);
				} else {
					setComment("");
					setReviewData([...reviewData, data]);

					setUserRating(null);
				}
			}
		} catch (error) {
			console.error("Error submitting review:", error);
		}
	};

	return (
		<div className="container" style={{ marginTop: "200px" }}>
			<h3 className="text-center">Reviews</h3>
			<Star stars={averageRating} reviews={totalReview} />

			<div className="row mt-4" style={{ overflowY: "auto" }}>
				{reviewData.map((obj) => (
					<div className="col-lg-6" key={obj._id}>
						<div className="card p-3 review-card" key={obj._id}>
							<div className="row" key={obj._id}>
								<div className="col-lg-9" key={obj._id}>
									<div className="d-flex" key={obj._id}>
										<img
											src={ProfileImg}
											style={{
												width: "40px",
												height: "40px",
											}}
										/>
										<p className="p-user-name">
											{obj?.user?.username}
										</p>
									</div>
								</div>

								<div className="col-lg-3">
									<p style={{ marginTop: "6px" }}>
										Rating: {obj.rating}
										<FaStar
											style={{
												marginBottom: "3px",
												color: "orange",
											}}
										/>
									</p>
								</div>
							</div>

							<div className="row mt-2">
								<div className="col-lg-11">
									<p className="px-2">{obj.comment}</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="row mt-4">
				<div className="col-lg-12">
					<div className="card p-3">
						<h4 className="p-2">Give your review:</h4>
						<StarRating onRatingChange={handleRatingChange} />
						<label
							htmlFor="exampleFormControlTextarea1"
							className="form-label mt-3"
						>
							Write a Review
						</label>
						<textarea
							className="form-control p-2"
							id="exampleFormControlTextarea1"
							rows="3"
							placeholder="Share your experience..."
							value={comment}
							onChange={(e) => setComment(e.target.value)}
						></textarea>
						<button
							className="btn bg-gradient-primary w-lg-30 comment-submit-btn"
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
