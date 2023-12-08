/* eslint-disable react/prop-types */
import moment from "moment";
import Background1 from "../../../../assets/images/background/bg-gradient-9.png";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { NavLink } from "react-router-dom";

export default function FeaturedSection({ featuredBlogs }) {
  return (
    <div className="news-box">
      <div className="bg-grad-left">
        <img src={Background1} alt="" title="" />
      </div>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 2 }}
        className="masonry-container row clearfix"
      >
        <Masonry gutter="1.5rem">
          {featuredBlogs.map((feature) => {
            const { _id, thumbnailImage, title, category, createdAt } =
              feature || {};
            return (
              <div key={_id} className="news-block-one">
                <div className="inner-box">
                  <div
                    className="image-layer"
                    style={{ backgroundImage: `url(${thumbnailImage})` }}
                  ></div>
                  <div className="over-box">
                    <ul className="info clearfix">
                      {category?.title && (
                        <li>
                          <a href="#"></a>
                          <NavLink to={`/blogs?tag=${category?._id}`}>
                            <i className="fa-solid fa-folder"></i>{" "}
                            {category?.title}
                          </NavLink>
                        </li>
                      )}
                      <li className="text-white">
                        <i className="fa-solid fa-clock"></i>{" "}
                        {moment(createdAt).format("Do MMMM, YYYY")}
                      </li>
                    </ul>
                    <h3>
                      <NavLink to={`/blogs/${_id}`}>{title}</NavLink>
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
