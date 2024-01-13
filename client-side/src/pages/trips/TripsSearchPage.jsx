import AppLayout from "../../components/applayout/AppLayout";
import TripsSearch from "../../components/search/TripsSearch";

const TripsSearchPage = () => {
  return (
    <AppLayout>
      <section className="hotels-section" style={{ padding: "0 80px" }}>
        <div className="search-one">
          <div className="auto-container">
            <div className="outer">
              <div className="search-title">
                <span>Search for your desired tour place</span>
              </div>
              <TripsSearch />
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default TripsSearchPage;
