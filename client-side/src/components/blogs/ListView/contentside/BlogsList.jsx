/* eslint-disable no-unused-vars */
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import Pagination from "../../../pagination/Pagination";
import { blogsList } from "../../../../backend-services/blogsApi";
import MiniLoader from "../../../screenloader/MiniLoader";
export default function BlogsList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  const author = searchParams.get("author");
  const tag = searchParams.get("tag");
  const location = useLocation();
  const [blogs, setBlogs] = useState([]);
  const [blogsMeta, setBlogsMeta] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
    (async () => {
      setIsLoading(true);
      const res = await blogsList({
        query: { pageNumber, category, author, tag },
      });
      if (res) {
        const { blogs, page, totalPages, count } = res || {};
        setIsLoading(false);
        setBlogs(blogs);
        setBlogsMeta({ page, totalPages, count });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, location.search]);
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
        {isLoading ? (
          <MiniLoader />
        ) : (
          <>
            {blogs && blogs?.length > 0 ? (
              blogs.map((blog) => {
                const {
                  _id,
                  slug,
                  title,
                  thumbnailImage,
                  author,
                  category,
                  details,
                  createdAt,
                } = blog || {};
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
                        <NavLink to={`/blogs/${slug}`}>
                          <img src={thumbnailImage} alt="Balloons" />
                        </NavLink>
                      </div>
                      <div className="lower-box">
                        <ul className="info clearfix">
                          {category?.title && (
                            <li>
                              <NavLink to={`/blogs?category=${category?._id}`}>
                                <i className="fa-solid fa-folder"></i>{" "}
                                {category?.title}
                              </NavLink>
                            </li>
                          )}
                          {author.username && (
                            <li>
                              <NavLink to={`/blogs?author=${author._id}`}>
                                <i className="fa-solid fa-user"></i>{" "}
                                {author.username}
                              </NavLink>
                            </li>
                          )}
                          <li>
                            <i className="fa-solid fa-clock"></i>{" "}
                            {moment(createdAt).format("Do MMMM, YYYY")}
                          </li>
                        </ul>
                        <h3>
                          <NavLink to={`/blogs/${slug}`}>{title}</NavLink>
                        </h3>
                        <div className="travilo-text">{details}</div>
                        <div className="more-links clearfix">
                          <div className="more">
                            <NavLink
                              to={`/blogs/${slug}`}
                              className="theme-btn btn-style-two"
                            >
                              <span>Read More</span>
                            </NavLink>
                          </div>
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
            {blogsMeta && (
              <Pagination
                handlePageChange={handlePageChange}
                meta={blogsMeta}
              />
            )}
          </>
        )}
      </div>
    </>
  );
}
