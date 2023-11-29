import AppLayout from "../../components/applayout/AppLayout";
import ContentSide from "../../components/blogs/SingleView/contentside/ContentSide";
import SidebarSide from "../../components/blogs/SingleView/sidebarside/SidebarSide";

const BlogDetailsPage = () => {
  return (
    <AppLayout>
      <div className="sidebar-container blog-page">
        <div className="auto-container">
          <div className="row clearfix">
            <ContentSide />
            <SidebarSide />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default BlogDetailsPage;
