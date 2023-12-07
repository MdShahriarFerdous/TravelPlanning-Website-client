import { useLocation } from "react-router-dom";
import bannerImg from "../../assets/images/resources/featured/featured-4.jpg";

const TripsDetailsPage = () => {
  const location = useLocation();

  const { location_name = "Dhaka", tripLength = "2", hotels, itinerary } = location.state;

  console.log(location_name);
  console.log(tripLength);
  console.log(hotels);
  console.log(itinerary);

  return (
    <div className="page-wrapper">
      {/* Banner Section */}
      <div className="tour-single-banner">
        <div
          className="image-layer"
          style={{
            backgroundImage: "url(src/assets/images/resources/featured/featured-4.jpg)",
          }}
        ></div>
        <div className="auto-container">
          <div className="content-box">
            <div className="content clearfix"></div>
          </div>
        </div>
      </div>
      {/*End Banner Section */}

      {/*Default Single Container*/}
      <div className="dsp-container tour-single">
        <div className="auto-container">
          <div className="row clearfix">
            {/*Content Side*/}
            <div className="content-side col-xl-8 col-lg-12 col-md-12 col-sm-12">
              <div className="content-inner">
                <div className="sp-header">
                  <div className="loc-rat clearfix">
                    <div className="location">{location_name}</div>
                    <div className="add-fav">
                      <a href="#">
                        <i className="far fa-heart" /> Add to Wishlist
                      </a>
                    </div>
                  </div>
                  <h1>Welcome to {location_name}</h1>
                  <div className="info clearfix">
                    <div className="duration">
                      <i className="fa-solid fa-clock" /> {tripLength} days
                    </div>
                  </div>
                </div>
                <div className="upper-content">
                  <div className="text-content">
                    <h3>Tour Details</h3>
                    <p>Cupidatat nostrud cupidatat anim mollit reprehenderit pariatur nostrud officia. Dolor enim esse consequat sunt id enim ipsum consectetur occaecat occaecat velit. Id pariatur labore dolor ut do minim. Eiusmod occaecat esse velit mollit excepteur irure fugiat reprehenderit est aliqua sint pariatur anim sint. Ea sit ex ut magna exercitation voluptate incididunt aliqua in in dolor non. Id consequat dolor reprehenderit adipisicing velit pariatur adipisicing aliquip. Reprehenderit dolore qui duis sint Lorem laboris officia in aliquip sunt. Amet aute aliqua cillum excepteur in duis officia aute. Tempor nulla mollit enim amet duis qui elit reprehenderit aliqua est dolor.</p>
                  </div>
                </div>
                <div className="t-plans">
                  <h3>Tour Plans</h3>
                  <ul className="accordion-box tp-accordion clearfix">
                    {/*Block*/}
                    {itinerary &&
                      itinerary.map((item, index) => (
                        <li className="accordion block active-block" key={index}>
                          <div className="acc-btn active">
                            <span className="d-count">{Object.keys(item)[0]}</span> Explore in {Object.keys(item)[0]}
                            <span className="arrow fa fa-angle-down" />
                          </div>
                          <div className="acc-content current">
                            <div className="content">
                              <div className="travilo-text">
                                <ul>
                                  {item[Object.keys(item)[0]].map((item, index) => (
                                    <li key={index}>{item}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="location">
                  <h3>Map</h3>
                  <div className="map-box">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63230.7149410174!2d98.29248065!3d7.903459599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30503a96a80e1833%3A0x40223bc2c382480!2sPa%20Tong%2C%20Kathu%20District%2C%20Phuket%2C%20Thailand!5e0!3m2!1sen!2som!4v1690982895480!5m2!1sen!2som" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    <div className="map-icon">
                      <img src="assets/images/icons/map-marker-2.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripsDetailsPage;
