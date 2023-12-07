import Background1 from "../../../assets/images/background/bg-gradient-9.png";
import Post1 from "../../../assets/images/resources/posts/post-1.jpg";
import Insta1 from "../../../assets/images/resources/instagram/insta-5.jpg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";

export default function FeaturedBlogs() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };
  return (
    <>
      <div className="news-section">
        <div className="auto-container">
          <div className="title-box centered">
            <div className="subtitle">Updates</div>
            <h2>
              <span>From Our Blog</span>
            </h2>
          </div>

          <div className="news-box">
            <div className="bg-grad-left">
              <img src={Background1} alt="" title="" />
            </div>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}
              className="masonry-container row clearfix"
            >
              <Masonry gutter="1.5rem">
                <div className="news-block-one">
                  <div className="inner-box">
                    <div
                      className="image-layer"
                      style={{ backgroundImage: `url(${Post1})` }}
                    ></div>
                    <div className="over-box">
                      <ul className="info clearfix">
                        <li>
                          <a href="#">
                            <i className="fa-solid fa-folder"></i> Adventure
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-solid fa-clock"></i> June 17, 2022
                          </a>
                        </li>
                      </ul>
                      <h3>
                        <NavLink to={`/blogs/1`}>
                          Off the Beaten Path Travel Adventures
                        </NavLink>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="news-block-one">
                  <div className="inner-box">
                    <div
                      className="image-layer"
                      style={{ backgroundImage: `url(${Post1})` }}
                    ></div>
                    <div className="over-box">
                      <ul className="info clearfix">
                        <li>
                          <a href="#">
                            <i className="fa-solid fa-folder"></i> Adventure
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa-solid fa-clock"></i> June 17, 2022
                          </a>
                        </li>
                      </ul>
                      <h3>
                        <NavLink to={`/blogs/1`}>
                          Off the Beaten Path Travel Adventures
                        </NavLink>
                      </h3>
                    </div>
                  </div>
                </div>
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>
      <div className="insta-section">
        <div className="insta-feed">
          <div className="carousel-container">
            <div className="carousel-box">
              <div className="insta-carousel">
                <Slider {...settings}>
                  {Array.apply(null, { length: 8 }).map((e, i) => (
                    <div key={i} className="insta-block">
                      <div className="image">
                        <span className="img">
                          <a
                            href={Insta1}
                            className="lightbox-image"
                            data-fancybox="insta-gallery"
                          >
                            <img src={Insta1} alt="" />
                          </a>
                        </span>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
