// eslint-disable-next-line react/prop-types
export default function HotelBookingCart({ rentPerPerson }) {
  return (
    <div className="sidebar-side col-xl-4 col-lg-8 col-md-12 col-sm-12">
      <div className="sidebar-inner">
        <div className="dsp-widget t-book-widget">
          <div className="inner-box">
            <div className="t-book-header">
              <span className="st-txt">
                Start <br />
                From
              </span>
              <span className="amount">${rentPerPerson}</span>
              <span className="qty">/ Per Person</span>
            </div>
            <div className="lower-box">
              <div className="form-box site-form">
                <form
                  method="post"
                  action="https://tech-taqwa.com/html/tour-single.html"
                >
                  <div className="fields">
                    <div className="form-group">
                      <div className="field-label">Check in</div>
                      <div className="field-inner">
                        <input
                          className="datepicker"
                          type="text"
                          name="field-name"
                          placeholder="Select a date"
                          required
                        />
                        <i className="alt-icon fa fa-calendar-alt"></i>
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="field-label">Check out</div>
                      <div className="field-inner">
                        <input
                          className="datepicker"
                          type="text"
                          name="field-name"
                          placeholder="Select a date"
                          required
                        />
                        <i className="alt-icon fa fa-calendar-alt"></i>
                      </div>
                    </div>
                  </div>
                  <h6>Guests</h6>
                  <div className="tickets">
                    <div className="ticket-block clearfix">
                      <div className="tick-ttl">Room</div>
                      <div className="tick-sel">
                        <div className="quantity-box">
                          <div className="item-quantity">
                            <input
                              className="qty-spinner"
                              type="text"
                              name="quantity"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ticket-block clearfix">
                      <div className="tick-ttl">Person</div>
                      <div className="tick-sel">
                        <div className="quantity-box">
                          <div className="item-quantity">
                            <input
                              className="qty-spinner"
                              type="text"
                              name="quantity"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="proceed-link">
                    <button type="button" className="theme-btn btn-style-two">
                      <span>Check Availability</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="dsp-widget get-help-widget">
          <div className="inner">
            <h6>Get Help</h6>
            <h3>Need Help to Book?</h3>
            <div className="travilo-text">
              If youre eager to experience the epitome of luxury at The Ritz
              London, our dedicated team of travel experts is here to assist you
              in making your reservation. Whether youre planning a romantic
              getaway, a family vacation, or a business trip, we can tailor your
              stay to meet your specific preferences and needs.
            </div>
            <div className="call-to">
              <a href="tel:+96899999000">
                <i className="icon fa-solid fa-phone"></i> Call Us
                <span className="nmbr">+968 99999000</span>
              </a>
            </div>
          </div>
        </div>

        <div className="dsp-widget dsp-stat-widget">
          <div className="inner">
            <h3>Property Highlights</h3>
            <div className="stats">
              <ul>
                <li className="clearfix">
                  <span className="ttl">Established</span>
                  <span className="dtl">1970</span>
                </li>
                <li className="clearfix">
                  <span className="ttl">Renovation</span>
                  <span className="dtl">2020</span>
                </li>
                <li className="clearfix">
                  <span className="ttl">Total Floor</span>
                  <span className="dtl">50</span>
                </li>
                <li className="clearfix">
                  <span className="ttl">Total Rooms</span>
                  <span className="dtl">240</span>
                </li>
                <li className="clearfix">
                  <span className="ttl">Total Restaurants</span>
                  <span className="dtl">5</span>
                </li>
                <li className="clearfix">
                  <span className="ttl">Total Bars</span>
                  <span className="dtl">3</span>
                </li>
                <li className="clearfix">
                  <span className="ttl">Total Stuff</span>
                  <span className="dtl">5200</span>
                </li>
                <li className="clearfix">
                  <span className="ttl">Total Branch</span>
                  <span className="dtl">3</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
