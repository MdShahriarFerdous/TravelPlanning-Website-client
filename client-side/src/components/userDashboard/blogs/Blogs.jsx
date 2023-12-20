import UserSideNavbar from "../navbar/UserSideNavbar";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import { useLocation } from "react-router-dom";
import { blogsList } from "../../../backend-services/blogsApi";
import BlogCard from "./BlogCard";
import "../commonCSS/common.css";

const Blogs = () => {
  const location = useLocation();
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
    (async () => {
      setIsLoading(true);
      const res = await blogsList({
        query: { type: "blog" },
      });

      if (res) {
        const blogData = res.blogs || {};
        setIsLoading(false);
        setBlogs(blogData);
      }
    })();
  }, [location.search]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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
                Back to Home
              </NavLink>
              <h2 className="card-title heading mt-4 text-start">All Blogs</h2>
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
                  <div className="d-flex justify-content-center my-8">
                    <p
                      className="text-center font-weight-bold"
                      style={{ fontSize: "22px" }}
                    >
                      No Data Found!
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
