import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

// eslint-disable-next-line react/prop-types
const BlogCard = ({ blog }) => {
  const { title, category, details, isGallery, status } = blog || {};
  return (
    <div className="card border-primary mb-3 me-10">
      <div className="card-body d-flex justify-content-between">
        <div className="card_items">
          <h4 className="font-weight-normal">{title}</h4>

          {category?.title && (
            <h5 className="font-weight-normal">
              <span style={{ color: "#ff5522" }}>Category : </span>
              {category.title}
            </h5>
          )}
          {isGallery ? (
            <h5 className="font-weight-normal">
              <span style={{ color: "#ff5522" }}>Mode : </span>
              Gallery List Type
            </h5>
          ) : (
            <p className="text-muted">{details}</p>
          )}
        </div>
        <div className="mt-2">
          {status ? (
            <span className="badge rounded-pill text-bg-dark font-weight-normal">
              Published
            </span>
          ) : (
            <span className="badge rounded-pill text-bg-info text-light">
              Draft
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
