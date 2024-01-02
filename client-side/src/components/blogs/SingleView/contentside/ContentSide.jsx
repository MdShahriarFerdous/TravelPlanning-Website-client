/* eslint-disable react/prop-types */
import Author from "./Author";
import PostControls from "./PostControls";
import PostDetails from "./PostDetails";

export default function ContentSide({
  currentBlogPost,
  previousBlogPost,
  nextBlogPost,
}) {
  return (
    <div className="content-side col-xl-8 col-lg-8 col-md-12 col-sm-12">
      <div className="content-inner">
        <PostDetails post={currentBlogPost} />
        <PostControls
          previousBlogPost={previousBlogPost}
          nextBlogPost={nextBlogPost}
        />
        <Author post={currentBlogPost}/>
      </div>
    </div>
  );
}
