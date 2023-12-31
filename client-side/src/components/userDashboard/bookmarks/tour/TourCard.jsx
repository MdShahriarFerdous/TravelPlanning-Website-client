/* eslint-disable react/prop-types */
// import { RiDeleteBin6Line } from "react-icons/ri";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

const TourCard = ({ tour }) => {
  const { title, typeOfTour, about } = tour || {};
  return (
    <div className="card border-primary mb-3 mx-1">
      <div className="card-body d-flex justify-content-between">
        <div className="card_items">
          <h4 className="font-weight-normal">{title}</h4>
          <h5 className="font-weight-normal">
            <span style={{ color: "#ff5522" }}>Type: {typeOfTour}</span>
          </h5>
          <p className="text-muted">{about}</p>
        </div>
        {/* <div className="icon mt-2">
          <RiDeleteBin6Line />
        </div> */}
      </div>
    </div>
  );
};

export default TourCard;
