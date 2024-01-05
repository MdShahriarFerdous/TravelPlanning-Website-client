import UserSideNavbar from "../../../navbar/UserSideNavbar";
import ContentLoader from "react-content-loader";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import Pagination from "../../../../pagination/Pagination";
import { FaArrowLeft } from "react-icons/fa";
import HotelBookingCard from "./HotelBookingCard";
import "./HotelBookingLists.css";
import { hotelBookingsList } from "../../../../../backend-services/hotelsApi";
import { userInfo } from "../../../../../backend-services/profileApi";

export default function HotelBookingLists() {
  const navigate = useNavigate();
  const location = useLocation();
  const [bookings, setBookings] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [bookingsMeta, setBookingsMeta] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
    (async () => {
      setIsLoading(true);
      const res = await hotelBookingsList({
        query: { pageNumber },
      });
      if (res) {
        const { hotelBookings, page, totalPages, count, itemsPerPage } =
          res || {};
        if (hotelBookings.length > 0) {
          setBookings(hotelBookings);
          setBookingsMeta({ page, totalPages, count, itemsPerPage });
        }
        setIsLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, location.search]);

  useEffect(() => {
    (async () => {
      const response = await userInfo();
      if (response) {
        if (response?.data?.error) {
          navigate("/login");
        }
      }
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    })();
  }, []);
  const handlePageChange = (page) => {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
    setPageNumber(page);
  };
  return (
    <div className="parent_content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3 fixed-start">
            <UserSideNavbar />
          </div>

          <div className="col-lg-9 animated  fixed-end">
            <div className="pt-5">
              <NavLink to="/" className="mt-8">
                <button type="button" style={{ background: "none" }}>
                  <FaArrowLeft className="back-arrow" /> Back to Home
                </button>
              </NavLink>
              <h2 className="card-title heading my-4 text-start">
                My Hotel bookings
              </h2>
            </div>
            {isLoading && <ContentLoader />}
            {!isLoading && bookings && bookings.length > 0 && (
              <>
                {bookings.map((booking) => {
                  return (
                    <HotelBookingCard booking={booking} key={booking._id} />
                  );
                })}
                {bookingsMeta && (
                  <Pagination
                    handlePageChange={handlePageChange}
                    meta={bookingsMeta}
                    isCentered={false}
                  />
                )}
              </>
            )}
            {!isLoading && !bookings && (
              <div className="card border-primary mb-3 me-10">
                <div className="card-body d-flex justify-content-between">
                  <div className="card_items">
                    <h4 className="font-weight-normal">
                      No Hotel Bookings Created Yet!
                    </h4>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
