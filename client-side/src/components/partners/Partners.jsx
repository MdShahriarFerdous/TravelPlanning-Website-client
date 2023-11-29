import Slider from "react-slick";

const Partners = () => {
  const imgs = ["partner-1-white.png", "partner-2-white.png", "partner-3-white.png", "partner-4-white.png", "partner-5-white.png", "partner-1-white.png", "partner-2-white.png", "partner-3-white.png", "partner-4-white.png", "partner-5-white.png"];

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
            {/*Block*/}
            <Slider {...settings}>
              {imgs.map((img, index) => (
                <div key={index} className="partner-block">
                  <div className="image">
                    <a href="#">
                      <img src={`/src/assets/images/partners/${img}`} alt="" />
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
            {/* .partner-block */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
