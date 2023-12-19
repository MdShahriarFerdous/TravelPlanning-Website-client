import { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import {
	bookmarkList,
	AddBookmarkTourByIdAPI,
	RemoveBookmarkTourByIdAPI,
} from "../../../backend-services/bookmarksApi";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/authContext";
import { useParams } from "react-router-dom";
import SpanLoader from "../../../assets/images/loader/spanloader.svg";
import "./tourbookmark.css";

const AddTourBookmark = () => {
	const [isBookmarked, setIsBookmarked] = useState(false);
	const [loading, setLoading] = useState(false);
	const [auth] = useAuth();
	const { tourInfoId } = useParams();
	const tourMatchingId =
		tourInfoId.charAt(0).toUpperCase() + tourInfoId.slice(1).toLowerCase();

	useEffect(() => {
		(async () => {
			setLoading(true);
			try {
				const response = await bookmarkList({
					query: { type: "tour" },
				});
				if (response) {
					const tours = response?.data?.tourId;
					const foundStatus = tours.some(
						(tour) => tour.tourId === tourMatchingId
					);
					setIsBookmarked(foundStatus);
				}
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		})();
	}, [tourMatchingId]);

	const handleBookmarkClick = async () => {
		try {
			setLoading(true);
			if (!auth?.token) {
				toast.error("Please login first to continue!");
			} else {
				if (isBookmarked) {
					await RemoveBookmarkTourByIdAPI(tourMatchingId);
					toast.info("Bookmark has been removed");
				} else {
					await AddBookmarkTourByIdAPI(tourMatchingId);
					toast.success("Bookmark has been added");
				}
				setIsBookmarked(!isBookmarked);
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

	// 	try {
	// 		if (!auth?.token) {
	// 			toast.error("Please login first to continue!");
	// 		} else {
	// 			if (isBookmarked) {
	// 				await RemoveBookmarkTourByIdAPI(tourMatchingId);
	// 				toast.info("Bookmark has been removed");
	// 				setIsBookmarked(!isBookmarked);
	// 			} else {
	//           await AddBookmarkTourByIdAPI(tourMatchingId);
	// 				toast.success("Bookmark has been added");
	// 				setIsBookmarked(!isBookmarked);
	// 			}
	// 		}
	// 	} catch (error) {
	// 		console.error(error);
	// 		if (error.data.error === "Token expired") {
	// 			toast.error("Token expired, please login");
	// 		}
	// 	}
	// };
	return (
		<>
			<span
				className="span-bookmark"
				style={{
					border: loading ? "1px solid #ffffff" : "1px solid #424853",
				}}
				onClick={handleBookmarkClick}
			>
				{loading ? (
					<img className="span-loader-size" src={SpanLoader} />
				) : isBookmarked ? (
					<FaHeart className="bookmark fill-bookmark" />
				) : (
					<FaRegHeart className="bookmark" />
				)}
			</span>
		</>
	);
};

export default AddTourBookmark;
