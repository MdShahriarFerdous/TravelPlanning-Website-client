import { NavLink } from "react-router-dom";
import AuthorImage from "../../../../assets/images/resources/thumbnails/post-comment-2.jpg";
export default function Author() {
  return (
    <div className="author-box">
      <div className="inner">
        <div className="image">
          <a href="blog-single.html">
            <img src={AuthorImage} alt="Author" />
          </a>
        </div>
        <h3>Md.Shahriar Ferdous</h3>
        <ul className="author-social clearfix">
          <li>
            <a href="#" className="facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#" className="twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" className="instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
        <div className="travilo-text">
          Md.Shahriar Ferdous is a passionate wordsmith and adventurous spirit,
          hailing from the rolling hills of Ireland. With a pen in one hand and
          a backpack on his shoulder, Liam embarks on thrilling journeys,
          immersing himself in diverse cultures and untamed landscapes. A
          skilled storyteller, he weaves his travel experiences into captivating
          narratives, capturing the essence of each destination with vivid
          imagery and heartfelt emotion.
        </div>
        <div className="more">
          <NavLink to={`/blogs`}>
            View All Posts &ensp;<i className="fa-solid fa-angle-right"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
