import BlogsList from "./BlogsList";
import Pagination from "./Pagination";

export default function ContentSide() {
  return (
    <div className="content-side col-xl-8 col-lg-7 col-md-12 col-sm-12">
      <div className="content-inner">
        <BlogsList />
        <Pagination />
      </div>
    </div>
  );
}
