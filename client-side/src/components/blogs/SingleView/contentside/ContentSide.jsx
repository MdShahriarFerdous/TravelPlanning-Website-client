import Author from "./Author";
import PostControls from "./PostControls";
import PostDetails from "./PostDetails";

export default function ContentSide() {
  return (
    <div className="content-side col-xl-8 col-lg-8 col-md-12 col-sm-12">
      <div className="content-inner">
        <PostDetails />
        <PostControls />
        <Author />
      </div>
    </div>
  );
}
