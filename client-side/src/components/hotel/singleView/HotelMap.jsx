import Marker from "../../../assets/images/icons/map-marker-2.png";
export default function HotelMap() {
  return (
    <div className="location">
      <h3>Map</h3>
      <div className="map-box">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.8509963910865!2d90.3981082741043!3d23.859424284584463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c427757da7a1%3A0xfac8074451cdd3b1!2sRichmond%20Hotel%20%26%20Suites!5e0!3m2!1sen!2sbd!4v1703170014466!5m2!1sen!2sbd"
          width="600"
          height="450"
          style={{ border: "0" }}
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
