import AppLayout from "../../components/applayout/AppLayout";
import HotelCard from "../../components/hotel/common/HotelCard";
import Pagination from "../../components/pagination/Pagination";
import Search from "../../components/search/Search";

const HotelsListPage = () => {
  const handlePageChange = () => {};
  return (
    <AppLayout>
      <section className="hotels-section">
        <div className="search-one">
          <div className="auto-container">
            <div className="outer">
              <div className="search-title">
                <span>Search for your desired hotel</span>
              </div>
              <Search />
            </div>
          </div>
        </div>
        <div className="auto-container">
          <div className="packages">
            <div className="filter-row">
              <div className="clearfix">
                <div className="s-info">
                  Showing results of <strong>1 - 9</strong> of{" "}
                  <strong>55</strong> items
                </div>
              </div>
            </div>
            <div className="row clearfix">
              {Array.apply(null, { length: 9 }).map((e, i) => (
                <div
                  key={i}
                  className="package-block alt col-lg-4 col-md-6 col-sm-12"
                >
                  <HotelCard index={i} hotelId={1} />
                </div>
              ))}
            </div>
            <Pagination
              handlePageChange={handlePageChange}
              meta={{ page: 1, totalPages: 5 }}
            />
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default HotelsListPage;
