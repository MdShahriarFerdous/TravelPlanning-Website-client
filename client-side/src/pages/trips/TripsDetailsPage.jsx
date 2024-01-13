import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import AppLayout from "../../components/applayout/AppLayout";
import { addItineraryWishlistAPI, placesList } from "../../backend-services/tripsApi";
import { hotelsList } from "../../backend-services/hotelsApi";
import MiniLoader from "../../components/screenloader/MiniLoader";
import AddTourBookmark from "../../components/bookmark/tour/AddTourBookmark";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fillHeart, faClock } from "@fortawesome/free-solid-svg-icons";
import { faHeart as notFillHeart } from "@fortawesome/free-regular-svg-icons";
import Marker from "../../assets/images/icons/map-marker-2.png";
import SpanLoader from "../../assets/images/loader/spanloader.svg";

import "./Accordion.css";
import Accordion from "react-bootstrap/Accordion";

const TripsDetailsPage = () => {
  const location = useLocation();

  const [auth] = useAuth();

  const [hotels, setHotels] = useState([]);
  const [features, setFeatures] = useState([]);
  const [addToWishlistLoading, setAddToWishlistLoading] = useState(false);
  const [isPageLoading, setPageLoading] = useState(false);
  const [isWishList, setIsWishList] = useState(false);

  const {
    duration,
    selectedLocationinfo: { location_name, latitude, longitude },
  } = location.state;

  const opentripmap_apiKey = "5ae2e3f221c38a28845f05b68852378085b60d4b40e6727779cf2612";

  const fetchLocationData = async () => {
    const { features } = await placesList({
      query: {
        radius: 200000,
        lon: longitude,
        lat: latitude,
        apikey: opentripmap_apiKey,
      },
    });
    if (features) {
      setFeatures(features);
    }
  };

  const fetchHotelList = async () => {
    const res = await hotelsList({
      query: {
        location: location_name,
      },
    });
    if (res) {
      const { hotels } = res || {};
      setHotels(hotels);
    }
  };

  useEffect(() => {
    setPageLoading(true);
    (async () => {
      await fetchLocationData();
      await fetchHotelList();
      setPageLoading(false);
    })();
  }, []);

  // Setting up locations start
  let filteredObjects = features.filter((item) => item.properties.rate >= 2); // filtering those objects which have more than 2 stars
  let tripAbleLocation = filteredObjects.slice(0, duration * 3); // each day one person will visit 3 places. So, filteredObjects can have many places but here is only slicing of those places a person can visit. if the person wants to visit for 3 days, it will be 3(duration) * 3(places) = 9 places. So 9 places will be slice from filtered places

  // Creating an array to store daily itineraries with their respective locations
  const arr = [];
  for (let i = 0; i < tripAbleLocation.length; i += 3) {
    const dayObjects = tripAbleLocation.slice(i, i + 3);
    const day = {
      [`Day ${Math.floor(i / 3) + 1}`]: dayObjects,
    };
    arr.push(day);
  }
  // Setting up locations end

  // Showing map in the page
  const mapUrl = `https://maps.google.com/maps?width=100%&height=350&hl=en&q=${location_name}&t=&z=13&ie=UTF8&iwloc=B&output=embed`;

  const handleAddWishlist = async (e) => {
    e.preventDefault();
    setAddToWishlistLoading(true);
    if (!auth?.token) {
      toast.error("Please login first");
    } else {
      let result = await addItineraryWishlistAPI(duration, location_name, latitude, longitude);
      if (result) {
        toast.success("Saved successfully");
        setIsWishList(true);
      }
    }
    setAddToWishlistLoading(false);
  };

  return (
    <>
      {isPageLoading ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <MiniLoader />
        </div>
      ) : (
        <AppLayout>
          <div className="dsp-container tour-single my-6 p-5">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="content-side col-xl-8 col-lg-12 col-md-12 col-sm-12">
                  <div className="content-inner">
                    <div className="sp-header">
                      <div className="loc-rat clearfix">
                        <div className="location">{location_name}</div>
                        <div className="add-fav">
                          <a onClick={handleAddWishlist}>
                            {addToWishlistLoading ? (
                              <img className="span-loader-size" src={SpanLoader} />
                            ) : isWishList ? (
                              <>
                                <FontAwesomeIcon icon={fillHeart} style={{ color: "#ff5522" }} /> Saved
                              </>
                            ) : (
                              <>
                                <FontAwesomeIcon icon={notFillHeart} /> Add to Wishlist
                              </>
                            )}
                          </a>
                        </div>
                      </div>
                      <h1>Explore the beautiness of {location_name}</h1>
                      <div className="info clearfix">
                        <div className="duration">
                          <i className="fa-solid fa-clock" />
                          {duration} Days
                        </div>
                      </div>
                    </div>
                    <div className="upper-content">
                      <div className="text-content me-4">
                        <h3>Tour Details</h3>
                        <p>
                          <strong>Below are some lorem ipsum text</strong>
                        </p>
                        <p>In laboris amet non tempor et irure anim minim esse est. Commodo in in ut amet proident cillum duis tempor. Officia tempor qui aute laborum non excepteur nulla ex qui. Consequat cillum magna ea et. Voluptate sit laboris dolor consectetur amet ullamco ut ad irure.</p>
                        <p>Eiusmod sit sint cillum aute duis. Culpa ut mollit qui velit anim. Id deserunt ullamco ad esse enim incididunt dolor cupidatat dolor laboris amet. Consectetur amet nostrud amet ut id ipsum culpa enim aliqua eu eu exercitation. Nostrud duis aute aliqua cupidatat laboris excepteur fugiat. Voluptate ea labore sint do occaecat aliquip eu incididunt dolor magna veniam anim elit. In consectetur culpa laborum proident officia anim.</p>
                        <p>
                          Amet excepteur est amet culpa laboris laborum laboris consequat sunt deserunt pariatur aute ut eu. Officia dolore sint veniam laborum. Aute ut consectetur quis nulla non irure. Pariatur dolore enim minim qui mollit. Ea reprehenderit ut consequat duis labore.
                          <br />
                          Et incididunt reprehenderit deserunt aliqua. Incididunt ex est commodo ipsum laborum incididunt cupidatat. Eu consectetur consequat fugiat occaecat excepteur cillum velit enim quis Lorem nisi culpa occaecat pariatur. Nulla qui ad deserunt elit minim voluptate culpa. Magna dolor irure reprehenderit do cillum qui. Sit Lorem ad veniam culpa velit et officia anim adipisicing elit dolor.
                        </p>
                      </div>
                    </div>

                    <div className="t-plans my-5">
                      <h3>Tour Plans</h3>
                      {/* <ul className="accordion-box tp-accordion clearfix" style={{ paddingLeft: 0 }}>
                        {arr.map((item, index) => {
                          return (
                            <li className={`accordion block ${index === activeAccordion ? "active-block" : ""}`} key={index}>
                              <div className={`acc-btn ${index === activeAccordion ? "active" : ""}`} onClick={(e) => handleAccordionClick(e)}>
                                Explore in {Object.keys(item)[0]}
                                <span className="arrow fa fa-angle-down"></span>
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
                          );
                        })}
                      </ul> */}
                      <Accordion defaultActiveKey={[0]} alwaysOpen>
                        {arr.map((item, index) => (
                          <Accordion.Item key={index} eventKey={index}>
                            <Accordion.Header>Explore in {Object.keys(item)[0]}</Accordion.Header>
                            {item[Object.keys(item)].map((item, index) => (
                              <Accordion.Body key={index}>
                                {item.properties.name} <small className="text-body-secondary">(Tags: {item.properties.kinds})</small>
                              </Accordion.Body>
                            ))}
                          </Accordion.Item>
                        ))}
                      </Accordion>
                    </div>
                    <div className="location">
                      <h3>Map</h3>
                      <div className="map-box">
                        <iframe width="100%" height="350" src={mapUrl}></iframe>
                        <div className="map-icon">
                          <img src={Marker} alt="map-marker" />
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
                        <p className="travilo-text">Our dedicated team of travel experts is here to assist you every step of the way, ensuring a seamless and unforgettable journey.</p>
                        <div className="call-to">
                          <a href="tel:0">
                            <i className="icon fa-solid fa-phone" /> Call Us
                            <span className="nmbr">+968 99999000</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/*Widget*/}
                    <div className="dsp-widget similar-widget">
                      <div className="inner">
                        <h3>Featured Hotel</h3>
                        {/*Logo*/}
                        <div className="posts">
                          {hotels.map((item, index) => (
                            <div className="post">
                              <div className="image">
                                <a href="#">
                                  {/* <img src="https://images.unsplash.com/photo-1600011689032-8b628b8a8747?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdGVsfGVufDB8fDB8fHww" alt="London Bridge" /> */}
                                  <img src={item.thumbnail} alt={item.name} style={{ height: 63 }} />
                                </a>
                              </div>
                              <h6>
                                <a href="https://we-travel-tech-taqwa.vercel.app/hotels/le-meridien-dhaka">{item.name}</a>
                              </h6>
                              <div className="price">
                                Starts from <span className="amount">${item.rentPerPerson}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AppLayout>
      )}
    </>
  );
};

export default TripsDetailsPage;
