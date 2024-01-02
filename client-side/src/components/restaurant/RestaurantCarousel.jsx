import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../destination/Destination.css";
import { useState } from "react";
import RestaurantModal from "./RestaurantModal.jsx";

// eslint-disable-next-line react/prop-types
const RestaurantCarousel = ({ destinationData }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleViewDetails = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleCloseModal = () => {
    setSelectedRestaurant(null);
  };

  const truncateDescription = (description, maxLength) => {
    // Check if the description length exceeds the maxLength
    if (description.length > maxLength) {
      // Truncate the description and append "..."
      return description.substring(0, maxLength) + "...";
    }
    // Return the original description if it's within the maxLength
    return description;
  };

  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    destinationData && (
      <div className="list-container container">
        <div className="u-title clearfix">
          <h2>Restaurants in {destinationData.name}</h2>
        </div>
        <Slider {...settings}>
          {destinationData?.restaurants?.length > 0 &&
            destinationData?.restaurants?.map((restaurant, index) => (
              <div key={index}>
                <div className="package-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <div className="image">
                        <a>
                          <img
                            onClick={() => handleViewDetails(restaurant)}
                            src={restaurant?.photo}
                            alt={restaurant?.name}
                            style={{ height: "250px" }}
                          />
                        </a>
                      </div>
                      {/*<div className="b-title top-rated">*/}
                      {/*    <span>Top Rated</span>*/}
                      {/*</div>*/}
                    </div>
                    <div className="lower-box">
                      <div className="location">{restaurant?.name}</div>
                      <h5>
                        <a onClick={() => handleViewDetails(restaurant)}>
                          {truncateDescription(restaurant?.description, 50)}
                        </a>
                      </h5>
                      {/* <div className="bottom-box clearfix">
                        <div className="rating">
                          <a href="#" className="theme-btn">
                            <i className="fa-solid fa-star"></i>
                            <strong>4.8</strong>
                          </a>
                        </div>
                        <div className="price">
                          <span className="count">3210 Reviews</span>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
        {selectedRestaurant && (
          <RestaurantModal
            show={!!selectedRestaurant}
            onHide={handleCloseModal}
            restaurant={selectedRestaurant}
          />
        )}
      </div>
    )
  );
};

export default RestaurantCarousel;
