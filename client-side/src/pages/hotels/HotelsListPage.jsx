import { useEffect, useState } from "react";
import AppLayout from "../../components/applayout/AppLayout";
import HotelCard from "../../components/hotel/common/HotelCard";
import Pagination from "../../components/pagination/Pagination";
import Search from "../../components/search/Search";
import { useLocation, useSearchParams } from "react-router-dom";
import { hotelsList } from "../../backend-services/hotelsApi";
import MiniLoader from "../../components/screenloader/MiniLoader";
import PaginationCounter from "../../components/pagination/PaginationCounter";

const HotelsListPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const queryLocation = searchParams.get("location");
  const queryDate = searchParams.get("startDate");
  const queryGuests = searchParams.get("guests");
  const location = useLocation();
  const [hotels, setHotels] = useState([]);
  const [hotelsMeta, setHotelsMeta] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await hotelsList({
        query: {
          pageNumber,
          location: queryLocation,
          startDate: queryDate,
          guests: queryGuests,
        },
      });
      if (res) {
        const { hotels, page, totalPages, count, itemsPerPage } = res || {};
        setIsLoading(false);
        setHotels(hotels);
        setHotelsMeta({ page, totalPages, count, itemsPerPage });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, location.search]);
  const handlePageChange = (page) => {
    setPageNumber(page);
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <AppLayout>
      <section className="hotels-section" style={{ minHeight: "300px" }}>
        <div className="search-two">
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
            {!isLoading && hotels && hotels.length > 0 && (
              <div className="filter-row">
                <div className="clearfix">
                  <PaginationCounter
                    pageNumber={pageNumber}
                    length={hotels.length}
                    className="s-info"
                    total={hotelsMeta.count}
                  />
                </div>
              </div>
            )}
            <div className="row clearfix">
              {isLoading ? (
                <MiniLoader />
              ) : (
                <>
                  {hotels && hotels.length > 0 ? (
                    <>
                      {hotels.map((hotel) => {
                        return (
                          <div
                            key={hotel._id}
                            className="package-block alt col-lg-4 col-md-6 col-sm-12"
                          >
                            <HotelCard hotel={hotel} />
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <div className="package-block alt col-12">
                      <div>
                        <div>
                          <div
                            style={{
                              padding: "25px 0px 40px",
                              textAlign: "center",
                              fontSize: "2rem",
                              color: "#ff5522",
                            }}
                          >
                            {"No Hotel Found"}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
              {/*  */}
            </div>

            {hotelsMeta && (
              <Pagination
                handlePageChange={handlePageChange}
                meta={hotelsMeta}
                isCentered={true}
              />
            )}
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default HotelsListPage;
