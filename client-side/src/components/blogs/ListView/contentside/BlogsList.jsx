import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import Pagination from "../../../pagination/Pagination";
import ScreenLoader from "../../../screenloader/ScreenLoader";
import { blogsList } from "../../../../backend-services/blogsApi";
export default function BlogsList() {
  const [blogs, setBlogs] = useState([]);
  const [blogsMeta, setBlogsMeta] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await blogsList({ query: { pageNumber } });
      if (res) {
        const { blogs, page, totalPages, count } = res || {};
        setIsLoading(false);
        setBlogs(blogs);
        setBlogsMeta({ page, totalPages, count });
      }
    })();
  }, [pageNumber]);
  const handlePageChange = (page) => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
    setPageNumber(page);
  };
  return (
    <>
      <div className="news">
        {isLoading && <ScreenLoader />}
        {blogs && blogs?.length > 0 ? (
          blogs.map((blog) => {
            console.log(blog);
            const { _id, title, thumbnailImage, author, tags, details, createdAt } =
              blog || {};
            const blogId = _id;
            return (
              <div
                key={blogId}
                className="news-block-three wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <NavLink to={`/blogs/${blogId}`}>
                      <img src={thumbnailImage} alt="Balloons" />
                    </NavLink>
                  </div>
                  <div className="lower-box">
                    <ul className="info clearfix">
                      {tags && tags.length > 0 && (
                        <li>
                          <a href="#">
                            <i className="fa-solid fa-folder"></i>{" "}
                            {tags?.[0] || "No Tag"}
                          </a>
                        </li>
                      )}

                      <li>
                        <a href="#">
                          <i className="fa-solid fa-user"></i>{" "}
                          {author.userName || "Unknown Author"}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-solid fa-clock"></i>{" "}
                          {moment(createdAt).format("Do MMMM, YYYY")}
                        </a>
                      </li>
                    </ul>
                    <h3>
                      <NavLink to={`/blogs/${blogId}`}>{title}</NavLink>
                    </h3>
                    <div className="travilo-text">{details}</div>
                    <div className="more-links clearfix">
                      <div className="more">
                        <NavLink
                          to={`/blogs/${blogId}`}
                          className="theme-btn btn-style-two"
                        >
                          <span>Read More</span>
                        </NavLink>
                      </div>
                      {/* <div className="social">
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
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div
            className="news-block-three wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="0ms"
          >
            <div className="inner-box">
              <div className="lower-box">
                <h3>No Blogs found</h3>
              </div>
            </div>
          </div>
        )}
      </div>
      {blogsMeta && (
        <Pagination handlePageChange={handlePageChange} blogsMeta={blogsMeta} />
      )}
    </>
  );
}
