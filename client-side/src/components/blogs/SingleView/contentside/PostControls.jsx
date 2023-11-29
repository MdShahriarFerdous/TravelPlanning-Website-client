import PostControlImage1 from "../../../../assets/images/resources/gallery/gallery-1-thumb.jpg";
import PostControlImage2 from "../../../../assets/images/resources/gallery/gallery-2-thumb.jpg";
export default function PostControls() {
  return (
    <div className="post-controls clearfix">
      <div className="control p-control">
        <div className="image">
          <a href="blog-single.html">
            <img
              src={PostControlImage1}
              alt="India"
            />
          </a>
        </div>
        <div className="c-title">
          <a href="blog-single.html">
            <span className="fa-solid fa-angle-left"></span>&ensp; Previous Post
          </a>
        </div>
        <h6>
          <a href="blog-single.html">A Fusion of Cultures and Wonders Await!</a>
        </h6>
      </div>
      <div className="control n-control">
        <div className="image">
          <a href="blog-single.html">
            <img
              src={PostControlImage2}
              alt="Morocco"
            />
          </a>
        </div>
        <div className="c-title">
          <a href="blog-single.html">
            Next Post &ensp;
            <span className="fa-solid fa-angle-right"></span>
          </a>
        </div>
        <h6>
          <a href="blog-single.html">
            Unraveling the Charms of Moroccos Vibrant City
          </a>
        </h6>
      </div>
    </div>
  );
}
