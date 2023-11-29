import { NavLink } from "react-router-dom";
import BlogPostSampleImage from "../../../../assets/images/resources/gallery/oman-11-thumb.jpg";
export default function RecentPosts() {
  return (
    <div className="sb-widget posts-widget">
      <div className="w-inner">
        <div className="s-title">
          <i className="fa-solid fa-caret-right"></i>
          <h4>Recent Posts</h4>
        </div>
        <div className="posts">
          {Array.apply(null, { length: 8 }).map((e, i) => (
            <div className="post" key={i}>
              <div className="post-thumb">
                <NavLink to={`/blogs/${i}`}>
                  <img src={BlogPostSampleImage} alt="Salalah" />
                </NavLink>
              </div>
              <div className="travilo-text">
                <NavLink to={`/blogs/${i}`}>
                  Salalah, A Tropical Paradise in Oman
                </NavLink>
              </div>
              <div className="post-info">August 3 2023</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
