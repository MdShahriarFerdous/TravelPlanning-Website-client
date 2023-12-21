// import { RiDeleteBin6Line } from "react-icons/ri";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

const BlogCard = ({ blog }) => {
  const { title, category, details } = blog || {};
  return (
    <div className="card border-primary mb-3 me-10">
      <div className="card-body d-flex justify-content-between">
        <div className="card_items">
          <h4 className="font-weight-normal">{title}</h4>
          <h5 className="font-weight-normal">
            <span style={{ color: "#ff5522" }}>Category : </span>
            {category.title}
          </h5>
          <p className="text-muted">{details}</p>
        </div>
        {/* <div className="icon mt-2">
          <RiDeleteBin6Line />
        </div> */}
      </div>
    </div>
  );
};

export default BlogCard;
