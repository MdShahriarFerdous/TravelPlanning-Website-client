import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../destination/Destination.css";
import PlaceModal from "./PlaceModal.jsx";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const PlaceCarousel = ({ destinationData }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const handleViewDetails = (place) => {
    setSelectedPlace(place);
  };

  const handleCloseModal = () => {
    setSelectedPlace(null);
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
        breakpoint: 1299,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    destinationData && (
      <div className="list-container auto-container">
        <div className="u-title clearfix">
          <h2>Places in {destinationData?.name}</h2>
        </div>
        <Slider {...settings}>
          {destinationData?.places?.length > 0 &&
            destinationData?.places?.map((place, index) => (
              <div key={index}>
                <div className="package-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <div className="image">
                        <a>
                          <img
                            onClick={() => handleViewDetails(place)}
                            src={place?.photo}
                            alt={place?.name}
                            style={{ height: "250px" }}
                          />
                        </a>
                      </div>
                      {/*<div className="b-title top-rated">*/}
                      {/*    <span>Top Rated</span>*/}
                      {/*</div>*/}
                    </div>
                    <div className="lower-box">
                      <div className="location">{place?.name}</div>
                      <h5>
                        <a>{truncateDescription(place?.description, 50)}</a>
                      </h5>
                      <div className="bottom-box clearfix">
                        <div className="rating">
                          <a href="#" className="theme-btn">
                            <i className="fa-solid fa-star"></i>
                            <strong>4.8</strong>
                          </a>
                        </div>
                        <div className="price">
                          <span className="count">3210 Reviews</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
        {selectedPlace && (
          <PlaceModal
            show={!!selectedPlace}
            onHide={handleCloseModal}
            place={selectedPlace}
          />
        )}
      </div>
    )
  );
};

export default PlaceCarousel;
