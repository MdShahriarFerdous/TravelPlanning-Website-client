import Slider from "react-slick";
import HotelCard from "../common/HotelCard";
import { hotelsList } from "../../../backend-services/hotelsApi";
import { useState, useEffect } from "react";
import "../Hotel.css";
import MiniLoader from "../../screenloader/MiniLoader";

// eslint-disable-next-line react/prop-types
export default function SimilarHotels({ locationId }) {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await hotelsList({
        query: { pageNumber: 1, location: locationId },
      });
      if (res) {
        const { hotels } = res || {};
        setIsLoading(false);
        setHotels(hotels);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationId]);
  const settings = {
    dots: false,
    arrows: false,
    infinite: hotels.length > 3 ? true : false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="hotels-section">
      <div className="auto-container">
        <div className="title-box">
          <h2>
            <span>Similar Hotels in The City</span>
          </h2>
        </div>
        <div className="packages">
          <div className="row clearfix">
            {isLoading ? (
              <MiniLoader />
            ) : (
              <>
                {hotels && hotels.length > 0 ? (
                  <Slider {...settings}>
                    {hotels.map((hotel) => (
                      <div key={hotel._id} className="package-block alt">
                        <HotelCard hotel={hotel} />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <div className="package-block alt col-12">
                    <div>
                      <div>
                        <div
                          style={{
                            padding: "25px 0px 40px",
                            textAlign: "center",
                            fontSize: "2rem",
                            color: "#ff5522",
                          }}
                        >
                          {"No Hotel Found"}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
