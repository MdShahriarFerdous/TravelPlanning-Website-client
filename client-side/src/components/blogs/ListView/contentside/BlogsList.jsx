import { NavLink } from "react-router-dom";
import BlogSampleImage from "../../../../assets/images/resources/posts/featured-image-3.jpg";
export default function BlogsList() {
  return (
    <div className="news">
      {Array.apply(null, { length: 5 }).map((e, i) => (
        <div
          key={i}
          className="news-block-three wow fadeInUp"
          data-wow-duration="1500ms"
          data-wow-delay="0ms"
        >
          <div className="inner-box">
            <div className="image-box">
              <NavLink to={`/blogs/${i+1}`}>
                <img src={BlogSampleImage} alt="Balloons" />
              </NavLink>
            </div>
            <div className="lower-box">
              <ul className="info clearfix">
                <li>
                  <a href="#">
                    <i className="fa-solid fa-folder"></i> Adventure
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-user"></i> Casey Writer
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-clock"></i> July 17, 2023
                  </a>
                </li>
              </ul>
              <h3>
                <NavLink to={`/blogs/${i}`}>
                  Soaring High: Riding Balloons in Turkey
                </NavLink>
              </h3>
              <div className="travilo-text">
                Discover the magic of Cappadocia, Turkey, from a birds-eye view.
                Experience the breathtaking landscapes and ancient rock
                formations as you float gently above in a hot air balloon. Our
                guide shares tips for the best time to fly and what to expect
                during this unforgettable adventure ...
              </div>
              <div className="more-links clearfix">
                <div className="more">
                  <NavLink
                    to={`/blogs/${i}`}
                    className="theme-btn btn-style-two"
                  >
                    <span>Read More</span>
                  </NavLink>
                </div>
                <div className="social">
                  <strong>Share</strong>
                  <a href="#" className="facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
