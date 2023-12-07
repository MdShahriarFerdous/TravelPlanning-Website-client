import AppLayout from "../../components/applayout/AppLayout";
import HotelPage from "../../components/bookmark/HotelPage";

const HotelsListPage = () => {
  return (
    <AppLayout>
      <div className="sidebar-container blog-page">
        <div className="auto-container">
          <div className="row clearfix">
            <HotelPage />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default HotelsListPage;
