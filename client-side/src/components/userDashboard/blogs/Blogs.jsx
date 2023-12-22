import { blogsListByUser } from "../../../backend-services/blogsApi";
import UserSideNavbar from "../navbar/UserSideNavbar";
import ContentLoader from "react-content-loader";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import BlogCard from "./BlogCard";
import "../commonCSS/common.css";
import "bootstrap";
import Pagination from "../../pagination/Pagination";
import { FaArrowLeft } from "react-icons/fa";

const Blogs = () => {
  const location = useLocation();
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [blogsMeta, setBlogsMeta] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
    (async () => {
      setIsLoading(true);
      const res = await blogsListByUser({
        query: { pageNumber },
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

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const handlePageChange = (page) => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
    setPageNumber(page);
  };
  return (
    <div className="parent_content">
      <div className="container-fluids">
        <div className="row">
          <div className="col-lg-3 fixed-start">
            <UserSideNavbar />
          </div>

          <div className="col-lg-9 animated  fixed-end">
            <div className="pt-5">
              <NavLink to="/" className="mt-8">
                <button type="button" style={{ background: "none" }}>
                  <FaArrowLeft className="back-arrow" /> Back to Home
                </button>
              </NavLink>
              <h2 className="card-title heading my-4 text-start">My Blogs</h2>
            </div>
            {isLoading ? (
              <ContentLoader />
            ) : (
              <>
                {blogs && blogs.length > 0 ? (
                  blogs.map((blog) => {
                    return <BlogCard blog={blog} key={blog._id} />;
                  })
                ) : (
                  <div className="card border-primary mb-3 me-10">
                    <div className="card-body d-flex justify-content-between">
                      <div className="card_items">
                        <h4 className="font-weight-normal">
                          No Blogs Created Yet!
                        </h4>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
            {blogs && blogs.length > 0 && blogsMeta && (
              <Pagination
                handlePageChange={handlePageChange}
                meta={blogsMeta}
                isCentered={false}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
