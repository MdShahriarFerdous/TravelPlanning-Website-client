import AddHotelBookmark from "../../bookmark/hotel/AddHotelBookmark";

// eslint-disable-next-line react/prop-types
export default function HotelDetails({ name, location, hotelId }) {
  return (
    <div className="content-side col-xl-8 col-lg-12 col-md-12 col-sm-12">
      <div className="content-inner">
        <div className="sp-header">
          <div className="loc-rat clearfix">
            <div className="location">{location}</div>
            <div className="rating">
              <a href="#" className="theme-btn">
                <i className="fa-solid fa-star"></i>
                <strong>4.8</strong> <span className="count">8345 Reviews</span>
              </a>
            </div>
            <AddHotelBookmark hotelId={hotelId} />
          </div>
          <h1>{name}</h1>
          <div className="info clearfix">
            <div className="duration">
              <i className="fa-solid fa-map-marker-alt"></i> 150 Piccadilly,
              London W1J 9BR, United Kingdom
            </div>
          </div>
        </div>

        <div className="upper-content">
          <div className="text-content">
            <h3>About this Hotel</h3>
            <p>
              The Ritz London is an iconic luxury hotel located in the heart of
              Piccadilly, one of Londons most prestigious neighborhoods.
            </p>
            <p>
              Established in 1906, The Ritz exudes timeless elegance and refined
              opulence, making it a favorite destination for discerning
              travelers from around the world. The hotels stunning Edwardian
              architecture and lavish interiors, adorned with chandeliers,
              marble columns, and antique furnishings, transport guests to a
              bygone era of sophistication and grandeur.
            </p>
            <p>
              With 136 luxurious guest rooms and suites, each meticulously
              decorated to evoke classic glamour and modern comfort, The Ritz
              London promises an unforgettable stay. Guests are treated to
              impeccable service from the hotels dedicated staff, ensuring every
              need is met with grace and attention to detail. The hotels
              restaurants, including the renowned Michelin-starred Ritz
              Restaurant, offer exquisite dining experiences, serving a mix of
              British and French culinary delights.
            </p>
            <br />
            <h3>Facilities</h3>
            <div className="facilities">
              <div className="row clearfix">
                <div className="fac-block col-lg-6 col-md-6 col-sm-12">
                  <div className="inner">
                    <div className="icon">
                      <i className="flaticon-air-conditioner"></i>
                    </div>
                    <h5>Full Air Conditioned</h5>
                    <div className="travilo-text">
                      The Ritz London provides air-conditioned rooms and public
                      areas to ensure a comfortable stay, especially during warm
                      London summers.
                    </div>
                  </div>
                </div>
                <div className="fac-block col-lg-6 col-md-6 col-sm-12">
                  <div className="inner">
                    <div className="icon">
                      <i className="flaticon-wifi-1"></i>
                    </div>
                    <h5>Free Wifi Zone</h5>
                    <div className="travilo-text">
                      Complimentary high-speed Wi-Fi is available throughout the
                      hotel, allowing guests to stay connected during their
                      visit.
                    </div>
                  </div>
                </div>
                <div className="fac-block col-lg-6 col-md-6 col-sm-12">
                  <div className="inner">
                    <div className="icon">
                      <i className="flaticon-park"></i>
                    </div>
                    <h5>Out Door Area</h5>
                    <div className="travilo-text">
                      The hotel boasts a picturesque outdoor terrace where
                      guests can relax and enjoy the fresh air in a tranquil
                      setting.
                    </div>
                  </div>
                </div>
                <div className="fac-block col-lg-6 col-md-6 col-sm-12">
                  <div className="inner">
                    <div className="icon">
                      <i className="flaticon-restaurant"></i>
                    </div>
                    <h5>Food & Drinks</h5>
                    <div className="travilo-text">
                      The Ritz offers a range of dining options, from the
                      opulent Ritz Restaurant to the elegant Palm Court, famous
                      for its afternoon tea service, making every meal a
                      memorable experience.
                    </div>
                  </div>
                </div>
                <div className="fac-block col-lg-6 col-md-6 col-sm-12">
                  <div className="inner">
                    <div className="icon">
                      <i className="flaticon-swimming-pool-1"></i>
                    </div>
                    <h5>Swimming Pool</h5>
                    <div className="travilo-text">
                      The Ritz London features a beautiful indoor swimming pool
                      where guests can unwind and rejuvenate.
                    </div>
                  </div>
                </div>
                <div className="fac-block col-lg-6 col-md-6 col-sm-12">
                  <div className="inner">
                    <div className="icon">
                      <i className="flaticon-heart-1"></i>
                    </div>
                    <h5>Spa and Gym</h5>
                    <div className="travilo-text">
                      The hotels luxurious spa and fitness center provide guests
                      with the opportunity to indulge in relaxation and maintain
                      their fitness routines during their stay.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3>Policies</h3>
            <div className="policies">
              <div className="text u-text">
                Please note that hotel policies and facilities may be subject to
                change, so its recommended to confirm the most up-to-date
                information directly with the hotel when making a reservation.
              </div>
              <div className="pols">
                <div className="pol-block">
                  <div className="inner">
                    <div className="icon">
                      <i className="flaticon-check-point"></i>
                    </div>
                    <h5>Check in & Check out</h5>
                    <div className="travilo-text">
                      Check-in time is typically after 3:00 PM, and check-out
                      time is before 12:00 PM.
                    </div>
                  </div>
                </div>
                <div className="pol-block">
                  <div className="inner">
                    <div className="icon">
                      <i className="flaticon-little-boy"></i>
                    </div>
                    <h5>Children & Infants</h5>
                    <div className="travilo-text">
                      The Ritz London welcomes children of all ages. Extra beds
                      and cribs may be provided upon request, subject to
                      availability.
                    </div>
                  </div>
                </div>
                <div className="pol-block">
                  <div className="inner">
                    <div className="icon">
                      <i className="flaticon-calendar-3"></i>
                    </div>
                    <h5>Cancellation</h5>
                    <div className="travilo-text">
                      The hotels cancellation policy may vary depending on the
                      type of reservation and rate selected. Guests are advised
                      to review the specific terms and conditions at the time of
                      booking.
                    </div>
                  </div>
                </div>
                <div className="pol-block">
                  <div className="inner">
                    <div className="icon">
                      <i className="flaticon-parking-lot"></i>
                    </div>
                    <h5>Parking</h5>
                    <div className="travilo-text">
                      The Ritz London offers valet parking services for guests
                      with private vehicles. Charges may apply.
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
}
