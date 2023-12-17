/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "./Blogs.css";

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
    arrows: false,
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
    <div className="gallery-list">
      <Slider {...settings}>
        {galleryBlogs.map((gallery) => {
          const { _id, galleryImage } = gallery || {};
          return (
            <div key={_id}>
              <img src={galleryImage} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
