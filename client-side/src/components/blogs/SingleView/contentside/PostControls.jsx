import { NavLink } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export default function PostControls({ previousBlogPost, nextBlogPost }) {
  const {
    slug: prevSlug,
    title: prevTitle,
    thumbnailImage: prevThumb,
  } = previousBlogPost || {};
  const {
    slug: nextSlug,
    title: nextTitle,
    thumbnailImage: nextThumb,
  } = nextBlogPost || {};
  return (
    <div className="post-controls clearfix">
      {previousBlogPost && (
        <div className="control p-control">
          <div className="image">
            <NavLink to={`/blogs/${prevSlug}`}>
              <img src={prevThumb} alt="Previous Blog" />
            </NavLink>
          </div>
          <div className="c-title">
            <NavLink to={`/blogs/${prevSlug}`}>
              <span className="fa-solid fa-angle-left"></span>&ensp; Previous
              Post
            </NavLink>
          </div>
          <h6>
            <NavLink to={`/blogs/${prevSlug}`}>{prevTitle}</NavLink>
          </h6>
        </div>
      )}
      {nextBlogPost && (
        <div className="control n-control">
          <div className="image">
            <NavLink to={`/blogs/${nextSlug}`}>
              <img src={nextThumb} alt="Next Blog" />
            </NavLink>
          </div>
          <div className="c-title">
            <NavLink to={`/blogs/${nextSlug}`}>
              Next Post &ensp;
              <span className="fa-solid fa-angle-right"></span>
            </NavLink>
          </div>
          <h6>
            <NavLink to={`/blogs/${nextSlug}`}>{nextTitle}</NavLink>
          </h6>
        </div>
      )}
    </div>
  );
}
