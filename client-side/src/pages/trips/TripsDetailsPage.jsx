import AppLayout from "../../components/applayout/AppLayout";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Preloader from "./Preloader";

const TripsDetailsPage = () => {
  const location = useLocation();

  const [features, setFeatures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    duration,
    selectedLocationinfo: { location_name, latitude, longitude },
  } = location.state;

  const opentripmap_apiKey =
    "5ae2e3f221c38a28845f05b68852378085b60d4b40e6727779cf2612";

  const fetchData = () => {
    axios
      .get(
        `https://api.opentripmap.com/0.1/en/places/radius?radius=200000&lon=${longitude}&lat=${latitude}&apikey=${opentripmap_apiKey}`
      )
      .then((res) => setFeatures(res.data.features))
      .catch((error) => console.error(error.message));
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
    fetchData();
  }, []);

  let filteredObjects = features.filter((item) => item.properties.rate >= 2);
  let tripAbleLocation = filteredObjects.slice(0, duration * 3);

  const arr = [];
  for (let i = 0; i < tripAbleLocation.length; i += 3) {
    const dayObjects = tripAbleLocation.slice(i, i + 3);
    const day = {
      [`Day ${Math.floor(i / 3) + 1}`]: dayObjects,
    };
    arr.push(day);
  }

  const mapUrl = `https://maps.google.com/maps?q=${location_name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  if (!isLoading) {
    return <Preloader></Preloader>;
  }

  return (
    <AppLayout>
      <div className="dsp-container tour-single my-6 p-5">
        <div className="auto-container">
          <div className="row clearfix">
            {/*Content Side*/}
            <div className="content-side col-xl-8 col-lg-12 col-md-12 col-sm-12">
              <div className="content-inner">
                <div className="sp-header">
                  <div className="loc-rat clearfix">
                    <div className="location">{location_name}</div>
                    {/* <div className="add-fav">
                      <a href="#">
                        <i className="far fa-heart" /> Add to Wishlist
                      </a>
                    </div> */}
                  </div>
                  <h1>Explore the beautiness of {location_name}</h1>
                  <div className="info clearfix">
                    <div className="duration">
                      <i className="fa-solid fa-clock" /> {duration} Days
                    </div>
                  </div>
                </div>
                <div className="upper-content">
                  <div className="text-content me-4">
                    <h3>Tour Details</h3>
                    <p>
                      <strong>Below are some lorem ipsum text</strong>
                    </p>
                    <p>
                      In laboris amet non tempor et irure anim minim esse est.
                      Commodo in in ut amet proident cillum duis tempor. Officia
                      tempor qui aute laborum non excepteur nulla ex qui.
                      Consequat cillum magna ea et. Voluptate sit laboris dolor
                      consectetur amet ullamco ut ad irure.
                    </p>
                    <p>
                      {" "}
                      Eiusmod sit sint cillum aute duis. Culpa ut mollit qui
                      velit anim. Id deserunt ullamco ad esse enim incididunt
                      dolor cupidatat dolor laboris amet. Consectetur amet
                      nostrud amet ut id ipsum culpa enim aliqua eu eu
                      exercitation. Nostrud duis aute aliqua cupidatat laboris
                      excepteur fugiat. Voluptate ea labore sint do occaecat
                      aliquip eu incididunt dolor magna veniam anim elit. In
                      consectetur culpa laborum proident officia anim.
                    </p>
                    <p>
                      Amet excepteur est amet culpa laboris laborum laboris
                      consequat sunt deserunt pariatur aute ut eu. Officia
                      dolore sint veniam laborum. Aute ut consectetur quis nulla
                      non irure. Pariatur dolore enim minim qui mollit. Ea
                      reprehenderit ut consequat duis labore.
                      <br />
                      Et incididunt reprehenderit deserunt aliqua. Incididunt ex
                      est commodo ipsum laborum incididunt cupidatat. Eu
                      consectetur consequat fugiat occaecat excepteur cillum
                      velit enim quis Lorem nisi culpa occaecat pariatur. Nulla
                      qui ad deserunt elit minim voluptate culpa. Magna dolor
                      irure reprehenderit do cillum qui. Sit Lorem ad veniam
                      culpa velit et officia anim adipisicing elit dolor.
                    </p>
                    <br />
                    {/* <h5>Highlights</h5>
                    <ul className="styled-list-one">
                      <li>Aliqua quis pariatur irure ea id voluptate et adipisicing magna laboris labore.</li>
                      <li>Aute ullamco commodo incididunt et ea minim occaecat eiusmod commodo ipsum incididunt consectetur.</li>
                      <li>Laboris occaecat velit id reprehenderit.</li>
                    </ul> */}
                  </div>
                </div>
                <div className="t-plans my-5">
                  <h3>Tour Plans</h3>
                  <ul className="accordion-box tp-accordion clearfix">
                    {arr.map((item, index) => (
                      <li className="accordion block active-block" key={index}>
                        <div className="acc-btn active">
                          Explore in {Object.keys(item)[0]}
                        </div>
                        <div className="acc-content current">
                          <div className="content">
                            <div className="travilo-text">
                              <ul>
                                {item[Object.keys(item)].map((item, index) => (
                                  <li
                                    key={index}
                                    style={{
                                      textTransform: "capitalize",
                                      letterSpacing: "1px",
                                    }}
                                  >
                                    {item.properties.name}
                                    <br />
                                    <small>Tags: {item.properties.kinds}</small>
                                  </li>
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
                  <div className="map-box mx-4">
                    <iframe
                      width="100%"
                      height="350"
                      id="gmap_canvas"
                      src={mapUrl}
                    ></iframe>
                    <div className="map-icon">
                      <img src="assets/images/icons/map-marker-2.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Sidebar Side*/}
            <div className="sidebar-side col-xl-4 col-lg-8 col-md-12 col-sm-12">
              <div className="sidebar-inner">
                <div className="dsp-widget get-help-widget">
                  <div className="inner">
                    <h6>Get Help</h6>
                    <h3>Need Help to Book?</h3>
                    <p className="travilo-text">
                      Our dedicated team of travel experts is here to assist you
                      every step of the way, ensuring a seamless and
                      unforgettable journey.
                    </p>
                    <div className="call-to">
                      <a href="tel:0">
                        <i className="icon fa-solid fa-phone" /> Call Us{" "}
                        <span className="nmbr">+968 99999000</span>
                      </a>
                    </div>
                  </div>
                </div>
                {/*Widget*/}
                <div className="dsp-widget similar-widget">
                  <div className="inner">
                    <h3>You might also like</h3>
                    {/*Logo*/}
                    <div className="posts">
                      <div className="post">
                        <div className="image">
                          <a href="#">
                            <img
                              src="https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdGVsfGVufDB8fDB8fHww"
                              alt="London Bridge"
                            />
                          </a>
                        </div>
                        <h6>
                          <a href="https://we-travel-tech-taqwa.vercel.app/hotels/le-meridien-dhaka">
                            Le Méridien Dhaka
                          </a>
                        </h6>
                        <div className="price">
                          Starts from <span className="amount">$100</span>
                        </div>
                      </div>
                      <div className="post">
                        <div className="image">
                          <a href="#">
                            <img
                              src="https://images.unsplash.com/photo-1615460549969-36fa19521a4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGhvdGVsfGVufDB8fDB8fHww"
                              alt="Maldives"
                            />
                          </a>
                        </div>
                        <h6>
                          <a href="https://we-travel-tech-taqwa.vercel.app/hotels/tiger-garden-int.-hotel">
                            Tiger Garden Int. Hotel
                          </a>
                        </h6>
                        <div className="price">
                          Starts from <span className="amount">$150</span>
                        </div>
                      </div>
                      <div className="post">
                        <div className="image">
                          <a href="#">
                            <img
                              src="https://images.unsplash.com/photo-1587213811864-46e59f6873b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxob3RlbHxlbnwwfHwwfHx8MA%3D%3D"
                              alt="Helsinki"
                            />
                          </a>
                        </div>
                        <h6>
                          <a href="https://we-travel-tech-taqwa.vercel.app/hotels/the-peninsula-chittagong">
                            The Peninsula Chittagong
                          </a>
                        </h6>
                        <div className="price">
                          Starts from <span className="amount">$200</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default TripsDetailsPage;
