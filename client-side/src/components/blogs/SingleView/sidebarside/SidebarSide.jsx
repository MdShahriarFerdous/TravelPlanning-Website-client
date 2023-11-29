import Gallery from "./Gallery";
import RecentPosts from "./RecentPosts";
import Search from "./Search";
import Socials from "./Socials";
import Tags from "./Tags";

export default function SidebarSide() {
  return (
    <div className="sidebar-side col-xl-4 col-lg-5 col-md-12 col-sm-12">
      <div className="sidebar-inner">
        <Search />
        <RecentPosts />
        <Tags />
        <Gallery />
        <Socials />
      </div>
    </div>
  );
}
