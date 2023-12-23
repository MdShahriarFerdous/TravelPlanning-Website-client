import Marker from "../../../assets/images/icons/map-marker-2.png";
// eslint-disable-next-line react/prop-types
export default function HotelMap({ hotelDetailedInfos }) {
  const { googleMap } = hotelDetailedInfos || {};
  return (
    <div className="location">
      <h3>Map</h3>
      <div className="map-box">
        {googleMap}

        <div className="map-icon">
          <img src={Marker} alt="" />
        </div>
      </div>
    </div>
  );
}
