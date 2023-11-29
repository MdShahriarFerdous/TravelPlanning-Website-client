import Slider from "react-slick";

const Partners = () => {
  const imgs = ["partner-1-white.png", "partner-2-white.png", "partner-3-white.png", "partner-4-white.png", "partner-5-white.png", "partner-1-white.png", "partner-2-white.png", "partner-3-white.png", "partner-4-white.png", "partner-5-white.png"];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
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
