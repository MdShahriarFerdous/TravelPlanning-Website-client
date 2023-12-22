import UserSideNavbar from "../../navbar/UserSideNavbar";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import TourCard from "./TourCard";
import ContentLoader from "react-content-loader";
import { FaArrowLeft } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { bookmarkList } from "../../../../backend-services/bookmarksApi";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "../../commonCSS/common.css";
const TourBookmarks = () => {
  const location = useLocation();
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
    (async () => {
      setIsLoading(true);
      const res = await bookmarkList({
        query: { type: "tour" },
      });
      if (res) {
        const { tourId } = res.data || {};
        setIsLoading(false);
        setTours(tourId);
      }
    })();
  }, [location.search]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="parent_content">
      <div className="container-fluids">
        <div className="row">
          <div className="col-lg-3 fixed-start">
            <UserSideNavbar />
          </div>

          <div className="col-lg-9 animated fixed-end w-60 bookmarks">
            <div className="pt-5">
              <NavLink to="/" className="mt-8">
                <button type="button" style={{ background: "none" }}>
                  <FaArrowLeft className="back-arrow" /> Back to Home
                </button>
              </NavLink>
              <h2 className="card-title heading my-4 text-start">
                Bookmarked Tour List
              </h2>
            </div>
            {isLoading ? (
              <ContentLoader />
            ) : (
              <>
                {tours && tours.length > 0 ? (
                  tours.map((tour) => {
                    return (
                      <>
                        <Link to={`/tour-package/${tour.tourId.toLowerCase()}`}>
                          <TourCard tour={tour} key={tour._id} />
                        </Link>
                      </>
                    );
                  })
                ) : (
                  <div className="card border-primary mb-3 me-10">
                    <div className="card-body d-flex justify-content-between">
                      <div className="card_items">
                        <h4 className="font-weight-normal">
                          No Tour Package is bookmarked Yet !
                        </h4>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourBookmarks;
