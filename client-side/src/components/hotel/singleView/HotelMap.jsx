import Marker from "../../../assets/images/icons/map-marker-2.png";
export default function HotelMap() {
  return (
    <div className="location">
      <h3>Map</h3>
      <div className="map-box">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5222.559276807464!2d-0.14652169835693887!3d51.50644437092068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760529d30fc857%3A0x596135811e044014!2sThe%20Ritz%20London!5e0!3m2!1sen!2som!4v1691071567666!5m2!1sen!2som"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="map-icon">
          <img src={Marker} alt="" />
        </div>
      </div>
    </div>
  );
}
