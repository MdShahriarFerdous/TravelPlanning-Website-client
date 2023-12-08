import Gallery from "../../common/Gallery";
import RecentPosts from "../../common/RecentPosts";
import Search from "../../common/Search";
import RelatedPosts from "./RelatedPosts";

export default function SidebarSide() {
  return (
    <div className="sidebar-side col-xl-4 col-lg-5 col-md-12 col-sm-12">
      <div className="sidebar-inner">
        <Search />
        <RelatedPosts />
        <RecentPosts />
        <Gallery />
      </div>
    </div>
  );
}
