/* eslint-disable react/prop-types */
// import { RiDeleteBin6Line } from "react-icons/ri";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

const HotelCard = ({ hotel }) => {
  const { name, thumbnail } = hotel || {};
  return (
    <div className="card border-primary mb-3 mx-1">
      <div className="card-body d-flex justify-content-between p-3">
        <div className="card_items d-flex">
          <div className="align-content-center mt-1">
            <img
              src={thumbnail}
              alt=""
              style={{ width: "35rem", borderRadius: "6px" }}
            />
          </div>
          <div className="ps-3">
            <h5 className="font-weight-normal">
              <span style={{ color: "#ff5522" }}>Name : </span>
              {name}
            </h5>
            <p className="card-text font-weight-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo.
            </p>
          </div>
        </div>
        {/* <div className="icon mt-2">
          <RiDeleteBin6Line />
        </div> */}
      </div>
    </div>
  );
};

export default HotelCard;
