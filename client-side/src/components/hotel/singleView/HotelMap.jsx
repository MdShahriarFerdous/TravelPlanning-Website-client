import Marker from "../../../assets/images/icons/map-marker-2.png";
import Parser from "html-react-parser";
// eslint-disable-next-line react/prop-types
export default function HotelMap({ hotelDetailedInfos }) {
  const { googleMap } = hotelDetailedInfos || {};
  return (
    <div className="location">
      <h3>Map</h3>
      {googleMap ? (
        <div className="map-box">
          {Parser(googleMap)}
          <div className="map-icon">
            <img src={Marker} alt="" />
          </div>
        </div>
      ) : (
        <>Hotel Address Embeded in Google Map</>
      )}
    </div>
  );
}
