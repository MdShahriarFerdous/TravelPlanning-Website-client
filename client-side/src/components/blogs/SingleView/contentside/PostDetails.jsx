import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function PostDetails({ post }) {
  const { tags, details } = post || {};
  return (
    <div className="post-details">
      <div className="text-content">{details}</div>
      {tags && tags.length > 0 && (
        <div className="more-links clearfix">
          <div className="tags">
            {tags.map((tag) => {
              const { _id, title } = tag || {};
              return (
                <NavLink key={_id} to={`/blogs?tag=${_id}`}>
                  {title}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
