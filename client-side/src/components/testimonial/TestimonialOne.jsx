import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const TestimonialOne = ({ testimonial }) => {
  let { comment, image, rating_star, name, designation } = testimonial;

  return (
    <div className="testi-block-one">
      <div className="inner-box">
        <div className="icon">
          <span className="flaticon-left-quote" />
        </div>
        <p className="travilo-text">{comment}</p>
        <div className="info">
          <div className="image">
            <img src={image} alt="Testimonial 1" />
          </div>
          <div className="rating">
            <div className="stars">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <div className="name">{name}</div>
          <div className="designation">{designation}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialOne;
