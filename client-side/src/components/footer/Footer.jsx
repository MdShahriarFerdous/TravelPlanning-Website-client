import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import "../../assets/css/sections/global-settings.css";
import FooterLogo1 from "../../assets/images/logo-nav.png";
import FooterLogo2 from "../../assets/images/logo-footer.png";
import OmanPic from "../../assets/images/resources/thumbnails/oman-thumb.jpg";
import MaldivPic from "../../assets/images/resources/thumbnails/maldives-thumb.jpg";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
const Footer = () => {
  const location = useLocation();
  const [routeName, setRouteName] = useState("/");

  useEffect(() => {
    setRouteName(location.pathname);
  }, [location]);

  const filter = /^\/$/;
  const isLandingPage = !filter.test(routeName);
  return (
    <div className={`main-footer ${isLandingPage ? "style-two" : ""}`}>
      <div className="upper-section">
        <div className="auto-container">
          <div className="content-box">
            <div className="row clearfix">
              <div className="footer-column col-xl-4 col-lg-3 col-md-6 col-sm-12">
                <div className="footer-widget about-widget">
                  <div className="footer-logo">
                    <NavLink to={"/"} title="WeTravel">
                      <img
                        src={isLandingPage ? FooterLogo2 : FooterLogo1}
                        title="WeTravel"
                      />
                    </NavLink>
                  </div>
                  <div className="footer-info">
                    <ul className="info">
                      <li className="address">
                        <a href="#">
                          <i className="icon fa fa-map-marker-alt" />
                          Dhaka, Bangladesh
                        </a>
                      </li>
                      <li className="phone">
                        <a href="tel:+96899999000">
                          <i className="icon fa-solid fa-phone" />
                          +968 99999000
                        </a>
                      </li>
                      <li className="email">
                        <a href="mailto:hello@WeTravel.com">
                          <i className="icon fa fa-envelope" />
                          hello@WeTravel.com
                        </a>
                      </li>
                    </ul>
                    <ul className="social-links clearfix">
                      <li>
                        <a href="#" className="facebook">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="twitter">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="linkedin">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="youtube">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12">
                <div className="row clearfix">
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget links-widget">
                      <h4>Top Destination</h4>
                      <div className="links">
                        <ul>
                          <li>
                            <a href="#">Sajek</a>
                          </li>
                          <li>
                            <a href="#">Coxs Bazar</a>
                          </li>
                          <li>
                            <a href="#">Rome</a>
                          </li>
                          <li>
                            <a href="#">Mascot</a>
                          </li>
                          <li>
                            <a href="#">Dhaka</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget links-widget">
                      <h4>Useful Links</h4>
                      <div className="links">
                        <ul>
                          <li>
                            <a href="#">About Us</a>
                          </li>
                          <li>
                            <a href="#">Company Profile</a>
                          </li>
                          <li>
                            <a href="#">Team Members</a>
                          </li>
                          <li>
                            <a href="#">Support</a>
                          </li>
                          <li>
                            <a href="#">Career</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-column col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div className="footer-widget gallery-widget">
                  <h4>Featured Tours</h4>
                  <div className="gallery">
                    <div className="gallery-item">
                      <div className="image">
                        <a href="#">
                          <img src={OmanPic} alt="Oman" />
                        </a>
                      </div>
                      <h6>
                        <a href="#">Adventure in Omans Rimal Bani Wahiba</a>
                      </h6>
                      <div className="price">
                        Starts from
                        <span className="amount">$399</span>
                      </div>
                    </div>
                    <div className="gallery-item">
                      <div className="image">
                        <a href="#">
                          <img src={MaldivPic} />
                        </a>
                      </div>
                      <h6>
                        <a href="#">Unveiling the Serenity of the Maldives</a>
                      </h6>
                      <div className="price">
                        Starts from
                        <span className="amount">$459</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="f-bottom">
        <div className="auto-container">
          <div className="inner clearfix">
            <div className="copyright">
              All rights researved
              <strong> TechTaqwa</strong> © 2023
            </div>
            <div className="bottom-links">
              <ul className="clearfix">
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
