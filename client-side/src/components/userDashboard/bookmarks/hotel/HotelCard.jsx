/* eslint-disable react/prop-types */
import { RiDeleteBin6Line } from "react-icons/ri";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

const HotelCard = ({ hotel }) => {
  const { _id, name } = hotel || {};
  return (
    <div className="card border-primary mb-3 mx-1">
      <div className="card-body d-flex justify-content-between">
        <div className="card_items">
          <h4 className="font-weight-normal">
            <span style={{ color: "#ff5522" }}>ID : </span>
            {_id}
          </h4>
          <h5 className="font-weight-normal">
            <span style={{ color: "#ff5522" }}>Name : </span>
            {name}
          </h5>
          {/* <p className="card-text font-weight-normal">
            Venice is generally supposed to be just about the most romantic city
            on earth. And it’s true, it really is.
          </p> */}
        </div>
        <div className="icon mt-2">
          <RiDeleteBin6Line />
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
