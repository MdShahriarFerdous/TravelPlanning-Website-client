import { useParams } from "react-router-dom";
import AppLayout from "../../components/applayout/AppLayout";
import { useEffect, useState } from "react";
import { hotelDetailedinfo } from "../../backend-services/hotelsApi";
import HotelBookingCart from "../../components/hotel/singleView/HotelBookingCart";
import HotelDetails from "../../components/hotel/singleView/HotelDetails";
import HotelImages from "../../components/hotel/singleView/HotelImages";
import SimilarHotels from "../../components/hotel/singleView/SimilarHotels";
import MiniLoader from "../../components/screenloader/MiniLoader";
import RoomDetails from "../../components/hotel/singleView/RoomDetails";
// import HotelMap from "../../components/hotel/singleView/HotelMap";
// import FAQ from "../../components/hotel/singleView/FAQ";
// import Reviews from ../../components/hotel/singleView/Reviews";
// import TopAttraction from "../../components/hotel/singleView/TopAttraction";
// import WhatsNearBy from "../../components/hotel/singleView/WhatsNearBy";

const HotelDetailsPage = () => {
  const { hotelSlug } = useParams();
  const [hotelInfo, setHotelInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await hotelDetailedinfo(hotelSlug);
      if (res?.data?.data) {
        const { hotelData } = res.data.data || {};
        setIsLoading(false);
        setHotelInfo(hotelData);
      }
    })();
  }, [hotelSlug]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const { _id, name, thumbnail, location } = hotelInfo || {};
  return (
    <AppLayout>
      {isLoading && (
        <div style={{ minHeight: "50vh", marginTop: "150px" }}>
          <MiniLoader />
        </div>
      )}
      {!isLoading && hotelInfo?.name && (
        <>
          <HotelImages mainThumbnail={thumbnail} />
          <div className="dsp-container hot-single">
            <div className="auto-container">
              <div className="part-one">
                <div className="row clearfix">
                  <HotelDetails
                    name={name}
                    location={location?.location_name}
                    hotelId={_id}
                  />
                  <HotelBookingCart hotelInfo={hotelInfo} />
                </div>
              </div>
              <RoomDetails hotelId={_id} />
              <div className="part-two">
                <div className="row clearfix">
                  <div className="content-side col-xl-8 col-lg-12 col-md-12 col-sm-12">
                    <div className="content-inner">
                      {/* Will Be Implemented Later */}
                      {/* <HotelMap /> */}
                      {/* <FAQ /> */}
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
          <SimilarHotels locationId={location?.location_name} />
        </>
      )}
      {!isLoading && !hotelInfo?.name && (
        <div className="dsp-container hot-single">
          <div className="auto-container">
            <div className="part-one">
              <div className="row clearfix">
                <div className="content-side col-xl-8 col-lg-12 col-md-12 col-sm-12">
                  <div className="content-inner">
                    <div className="sp-header">
                      <div className="loc-rat clearfix">
                        <div className="location">Hotel Details Not Found</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
};

export default HotelDetailsPage;
