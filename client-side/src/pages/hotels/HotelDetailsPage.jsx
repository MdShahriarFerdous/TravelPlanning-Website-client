import AppLayout from "../../components/applayout/AppLayout";
import { useEffect, useState } from "react";
import {
  hotelDetailedinfo,
  hotelInfoApi,
} from "../../backend-services/hotelsApi";
import HotelBookingCart from "../../components/hotel/singleView/HotelBookingCart";
import HotelDetails from "../../components/hotel/singleView/HotelDetails";
import HotelImages from "../../components/hotel/singleView/HotelImages";
import SimilarHotels from "../../components/hotel/singleView/SimilarHotels";
import MiniLoader from "../../components/screenloader/MiniLoader";
import RoomDetails from "../../components/hotel/singleView/RoomDetails";
import HotelMap from "../../components/hotel/singleView/HotelMap";
import { useParams } from "react-router-dom";
// import FAQ from "../../components/hotel/singleView/FAQ";
// import Reviews from ../../components/hotel/singleView/Reviews";
// import TopAttraction from "../../components/hotel/singleView/TopAttraction";
// import WhatsNearBy from "../../components/hotel/singleView/WhatsNearBy";

const HotelDetailsPage = () => {
  const { hotelSlug } = useParams();
  const [hotelInfo, setHotelInfo] = useState(null);
  const [hotelDetailedInfos, setHotelDetailedInfos] = useState(null);
  const [hotelInfoLoading, setHotelInfoLoading] = useState(false);
  const [hotelDetailedInfosLoading, setHotelDetailedInfosLoading] =
    useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    (async () => {
      setHotelInfoLoading(true);
      const res1 = await hotelDetailedinfo(hotelSlug);
      if (res1?.data?.error) {
        setHotelInfoLoading(false);
      }
      if (res1?.data?.data) {
        const { hotelData } = res1.data.data || {};
        setHotelInfoLoading(false);
        setHotelInfo(hotelData);
        setHotelDetailedInfosLoading(true);
        const res2 = await hotelInfoApi(hotelData._id);
        if (res2?.data?.status === "Success")
          setHotelDetailedInfosLoading(false);
        if (res2?.data?.data) setHotelDetailedInfos(res2?.data?.data);
      }
    })();
  }, [hotelSlug]);
  const { _id, name, thumbnail, location } = hotelInfo || {};

  return (
    <AppLayout>
      {hotelInfoLoading || hotelDetailedInfosLoading ? (
        <div style={{ minHeight: "50vh", marginTop: "150px" }}>
          <MiniLoader />
        </div>
      ) : (
        <>
          {hotelInfo?.name && (
            <>
              <HotelImages mainThumbnail={thumbnail} />
              <div className="dsp-container hot-single">
                <div className="auto-container">
                  <div className="part-one">
                    <div className="row clearfix">
                      <HotelDetails
                        name={name}
                        hotelLocation={location.location_name}
                        hotelDetailedInfos={hotelDetailedInfos}
                        hotelId={_id}
                      />
                      <HotelBookingCart
                        hotelInfo={hotelInfo}
                        hotelDetailedInfos={hotelDetailedInfos}
                      />
                    </div>
                  </div>
                  <RoomDetails hotelInfo={hotelInfo} />
                  <div className="part-two">
                    <div className="row clearfix">
                      {/* <div className="content-side col-xl-8 col-lg-12 col-md-12 col-sm-12"> */}
                      <div className="content-side col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div className="content-inner">
                          <HotelMap hotelDetailedInfos={hotelDetailedInfos} />
                          {/* Will Be Implemented Later */}
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
        </>
      )}
      {!(hotelInfoLoading || hotelDetailedInfosLoading) && !hotelInfo?.name && (
        <div className="dsp-container hot-single">
          <h3 className="text-info text-center p-5 mt-5">
            Hotel Details Not Found
          </h3>
        </div>
      )}
    </AppLayout>
  );
};

export default HotelDetailsPage;
