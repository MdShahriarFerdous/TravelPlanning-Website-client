import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import "../../assets/css/sections/global-settings.css";
import BannerArrowPic from "../../assets/images/background/banner-arrow.png";
import BGradient from "../../assets/images/background/bg-gradient-1.png";
import BGImage from "../../assets/images/resources/misc/travel-hero-2.jpg";
import YelloCrown from "../../assets/images/elements/yellow-1.png";

const HeroSection = () => {
  return (
    <div className="banner-section">
      <div className="banner-container">
        <div
          className="banner-arrow wow slideInLeft"
          data-wow-delay="0ms"
          data-wow-duration="1500ms"
        >
          <img src={BannerArrowPic} />
        </div>
        <div className="auto-container">
          <div className="row clearfix">
            <div className="left-col col-lg-6 col-md-12">
              <div className="inner">
                <div className="clearfix">
                  <div className="content">
                    <div className="bg-image">
                      <img src={BGradient} />
                    </div>
                    <h3>Start Travelling Now</h3>
                    <h1>
                      <i className="d-icon">
                        <img src={YelloCrown} />
                      </i>
                      Explore the Top Destinations
                    </h1>
                    <div className="form-box site-form">
                      <form
                        method="post"
                        action="https://tech-taqwa.com/html/index.html"
                      >
                        <div className="row clearfix">
                          <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="field-label">Destination</div>
                            <div className="field-inner">
                              <input
                                type="text"
                                name="field-name"
                                defaultValue
                                placeholder="Where to go?"
                                required
                              />
                              <i className="alt-icon fa fa-map-marker-alt" />
                            </div>
                          </div>
                          <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="field-label">Check in</div>
                            <div className="field-inner">
                              <input
                                className="datepicker"
                                type="text"
                                name="field-name"
                                defaultValue
                                placeholder="Check in"
                                required
                              />
                              <i className="alt-icon fa fa-calendar-alt" />
                            </div>
                          </div>
                          <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="field-label">Check out</div>
                            <div className="field-inner">
                              <input
                                className="datepicker"
                                type="text"
                                name="field-name"
                                defaultValue
                                placeholder="Check out"
                                required
                              />
                              <i className="alt-icon fa fa-calendar-alt" />
                            </div>
                          </div>
                          <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="field-label">Guests</div>
                            <div className="field-inner">
                              <input
                                type="text"
                                name="field-name"
                                defaultValue
                                placeholder="Guests"
                                required
                              />
                              <i className="alt-icon fa fa-user" />
                            </div>
                          </div>
                        </div>
                        <button type="submit" className="theme-btn f-btn">
                          <span>
                            Search
                            <i className="fa-solid fa-search" />
                          </span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-col col-lg-6 col-md-12">
              <div
                className="inner wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div
                  className="image-layer"
                  style={{
                    backgroundImage: `url(${BGImage})`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
