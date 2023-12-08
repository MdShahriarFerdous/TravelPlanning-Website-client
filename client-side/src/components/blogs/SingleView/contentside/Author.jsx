/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
export default function Author({ post }) {
  const { author, authorProfile } = post || {};
  const { _id, username } = author || {};
  const { bio, image } = authorProfile || {};
  return (
    <div className="author-box">
      <div className="inner">
        <div className="image">
          <a href="blog-single.html">
            <img src={image} alt="Author" />
          </a>
        </div>
        <h3>{username}</h3>
        <div className="travilo-text">{bio}</div>
        <div className="more">
          <NavLink to={`/blogs?author=${_id}`}>
            View All Posts &ensp;<i className="fa-solid fa-angle-right"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
