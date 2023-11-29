import Categories from "./Categories";
import Gallery from "./Gallery";
import RecentPosts from "./RecentPosts";
import Search from "./Search";
import Socials from "./Socials";

export default function SidebarSide() {
  return (
    <div className="sidebar-side col-xl-4 col-lg-5 col-md-12 col-sm-12">
      <div className="sidebar-inner">
        <Search />
        <RecentPosts />
        <Categories />
        <Gallery />
        <Socials />
      </div>
    </div>
  );
}
