import Slider from "react-slick";
import "./partner.css";
import Partner1 from "../../assets/images/partners/partner-1-white.png";
import Partner2 from "../../assets/images/partners/partner-2-white.png";
import Partner3 from "../../assets/images/partners/partner-3-white.png";
import Partner4 from "../../assets/images/partners/partner-4-white.png";
import Partner5 from "../../assets/images/partners/partner-5-white.png";

const Partners = () => {
  const settings = {
    slidesToShow: 5,
    centerMode: false,
    centerPadding: "24px",
    slidesToScroll: 2,
    autoplay: true,
    infinite: true,
    dots: false,
    arrows: false,
    touchMove: true,
    touchThreshold: 5,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="partners-section">
      <div className="auto-container">
        <div className="carousel-box">
          <div className="partners-carousel">
            <Slider {...settings}>
              <div className="partner-block">
                <div className="image">
                  <a href="#">
                    <img
                      src={Partner1}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="partner-block">
                <div className="image">
                  <a href="#">
                    <img
                      src={Partner2}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="partner-block">
                <div className="image">
                  <a href="#">
                    <img
                      src={Partner3}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="partner-block">
                <div className="image">
                  <a href="#">
                    <img
                      src={Partner4}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="partner-block">
                <div className="image">
                  <a href="#">
                    <img
                      src={Partner5}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="partner-block">
                <div className="image">
                  <a href="#">
                    <img
                      src={Partner1}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="partner-block">
                <div className="image">
                  <a href="#">
                    <img
                      src={Partner2}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="partner-block">
                <div className="image">
                  <a href="#">
                    <img
                      src={Partner3}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="partner-block">
                <div className="image">
                  <a href="#">
                    <img
                      src={Partner4}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="partner-block">
                <div className="image">
                  <a href="#">
                    <img
                      src={Partner5}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
