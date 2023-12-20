/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../destination/Destination.css";
import { useState } from "react";
import HotelModal from "./HotelModal.jsx";

// eslint-disable-next-line react/prop-types
const HotelCarousel = ({ destinationData }) => {

  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleViewDetails = (place) => {
    setSelectedHotel(place);
  };

  const handleCloseModal = () => {
    setSelectedHotel(null);
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
          <h2>Hotels in {destinationData.name}</h2>
        </div>
        <Slider {...settings}>
          {destinationData?.hotels?.length > 0 &&
            destinationData?.hotels?.map((hotel, index) => (
              <div key={index}>
                <div className="package-block">
                  <div className="inner-box">
                    <div className="image-box">
                      <div className="image">
                        <a>
                          <img
                            onClick={() => handleViewDetails(hotel)}
                            src={hotel?.thumbnail}
                            alt={hotel?.name}
                            style={{ height: "250px" }}
                          />
                        </a>
                      </div>
                      {/*<div className="b-title top-rated">*/}
                      {/*    <span>Top Rated</span>*/}
                      {/*</div>*/}
                    </div>
                    <div className="lower-box">
                      <div className="location">{hotel?.name}</div>
                      <h5>
                        {/*<a href="#">{truncateDescription(hotel?.description, 50)}</a>*/}
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
        {selectedHotel && (
          <HotelModal
            show={!!selectedHotel}
            onHide={handleCloseModal}
            hotel={selectedHotel}
          />
        )}
      </div>
    )
  );
};

export default HotelCarousel;
