import FAQ from "./FAQ";
import HotelBookingCart from "./HotelBookingCart";
import HotelDetails from "./HotelDetails";
import HotelImages from "./HotelImages";
import HotelMap from "./HotelMap";
import SimilarHotels from "./SimilarHotels";
// import RoomDetails from "./RoomDetails";
// import Reviews from "./Reviews";
// import TopAttraction from "./TopAttraction";
// import WhatsNearBy from "./WhatsNearBy";

export default function Hotel() {
  return (
    <>
      <HotelImages />
      <div className="dsp-container hot-single">
        <div className="auto-container">
          <div className="part-one">
            <div className="row clearfix">
              <HotelDetails />
              <HotelBookingCart />
            </div>
          </div>
          {/* <RoomDetails /> */}
          <div className="part-two">
            <div className="row clearfix">
              <div className="content-side col-xl-8 col-lg-12 col-md-12 col-sm-12">
                <div className="content-inner">
                  <HotelMap />
                  <FAQ />
                  {/* Will Be Implemented Later */}
                  {/* <Reviews /> */}
                </div>
              </div>
              <div className="sidebar-side col-xl-4 col-lg-8 col-md-12 col-sm-12">
                <div className="sidebar-inner">
                  {/* Will Be Implemented Later */}
                  {/* <WhatsNearBy /> */}
                  {/* <TopAttraction /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SimilarHotels />
    </>
  );
}
