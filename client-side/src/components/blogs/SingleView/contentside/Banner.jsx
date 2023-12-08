import moment from "moment";
import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Banner({ post }) {
  const { author, category, title, coverImage, createdAt } = post || {};
  return (
    <section className="blog-single-banner" style={{ marginTop: "130px" }}>
      <div
        className="image-layer"
        style={{ backgroundImage: `url(${coverImage})` }}
      ></div>
      <div className="auto-container">
        <div className="content-box">
          <div className="content">
            <h1>{title}</h1>
            <ul className="info clearfix">
              {category && (
                <li>
                  <NavLink to={`/blogs?tag=${category?._id}`}>
                    <i className="fa-solid fa-folder"></i> {category?.title}
                  </NavLink>
                </li>
              )}

              {author && (
                <li>
                  <a href="#">
                    <i className="fa-solid fa-user"></i> {author.username}
                  </a>
                </li>
              )}

              <li>
                <i className="fa-solid fa-clock"></i>{" "}
                {moment(createdAt).format("Do MMMM, YYYY")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
