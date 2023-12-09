import Slider from "react-slick";
import HotelCard from "../common/HotelCard";
import "../Hotel.css"

export default function SimilarHotels() {
  const settings = {
    dots: false,
    infinite: true,
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
    <div className="similar-section">
      <div className="auto-container">
        <div className="title-box">
          <h2>
            <span>Similar Hotels Like This</span>
          </h2>
        </div>
        <div className="carousel-box">
          <div className="packages-carousel">
            <Slider {...settings}>
              {Array.apply(null, { length: 9 }).map((e, i) => (
                <div key={i} className="package-block alt">
                  <HotelCard index={i} hotelId={1} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
