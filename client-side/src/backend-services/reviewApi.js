import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//* =========================Create-Review-Tour-ById-API=========================
export const CreateReviewTourByIdAPI = async (tourInfoId, {userRating, comment}) => {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API}/tour/review/${tourInfoId}`,{
        userRating, comment
      }
    );
    console.log(tourInfoId);

    if (data.error) {
      toast.error(data.error);
    } else {
      return data;
    }
  } catch (error) {
    console.error("Error in CreateReviewTour:", error);
  }
};

//* =========================Review-List-Tour-ById-API=========================
export const ReviewListTourByIdAPI = async (tourInfoId) => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API}/tour/reviews/${tourInfoId}`
    );

    if (data.error) {
      toast.error(data.error);
    } else {
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};
