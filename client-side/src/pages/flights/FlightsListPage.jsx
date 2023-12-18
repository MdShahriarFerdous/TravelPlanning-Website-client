import AppLayout from "../../components/applayout/AppLayout";
import FlightSearch from "../../components/search/FlightSearch";

const FlightsListPage = () => {
  return (
    <AppLayout>
      <section className="hotels-section" style={{padding: "0 80px 0 80px"}}>
        <div className="search-one">
          <div className="auto-container">
            <div className="outer">
              <div className="search-title">
                <span>Search for your desired flight</span>
              </div>
              <FlightSearch />
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default FlightsListPage;
