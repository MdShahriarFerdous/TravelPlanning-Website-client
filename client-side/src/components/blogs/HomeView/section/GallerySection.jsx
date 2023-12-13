/* eslint-disable react/prop-types */
import Slider from "react-slick";

export default function GallerySection({ galleryBlogs }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
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
    <div className="insta-section">
      <div className="insta-feed">
        <div className="carousel-container">
          <div className="carousel-box">
            <div className="insta-carousel">
              <Slider {...settings}>
                {galleryBlogs.map((gallery) => {
                  const { _id, galleryImage } = gallery || {};
                  return (
                    <div key={_id} className="insta-block">
                      <div className="image">
                        <span className="img">
                          <a
                            href={galleryImage}
                            className="lightbox-image"
                            data-fancybox="insta-gallery"
                          >
                            <img src={galleryImage} alt="" />
                          </a>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
