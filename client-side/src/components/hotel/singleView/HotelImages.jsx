import HImage1 from "../../../assets/images/resources/destinations/hotels/hb-image-1.jpg";
import HImage2 from "../../../assets/images/resources/destinations/hotels/hb-image-2.jpg";
import HImage3 from "../../../assets/images/resources/destinations/hotels/hb-image-3.jpg";
import HImage4 from "../../../assets/images/resources/destinations/hotels/hb-image-4.jpg";
import HImage5 from "../../../assets/images/resources/destinations/hotels/hb-image-5.jpg";

export default function HotelImages() {
  return (
    <div className="hotel-single-banner" style={{ marginTop: "130px" }}>
      <div className="outer-container">
        <div className="row clearfix">
          <div className="image-col">
            <div className="image-block">
              <div className="inner">
                <div className="image">
                  <img src={HImage1} alt="" />
                </div>
                <div
                  className="image-layer"
                  style={{ backgroundImage: `url(${HImage1})` }}
                ></div>
                <a
                  href={HImage1}
                  className="over-link lightbox-image"
                  data-fancybox="HotelGallery"
                ></a>
              </div>
            </div>
          </div>
          <div className="image-col sm-col">
            <div className="image-block sm-block">
              <div className="inner">
                <div className="image">
                  <img style={{ backgroundImage: `url(${HImage2})` }} alt="" />
                </div>
                <div
                  className="image-layer"
                  style={{ backgroundImage: `url(${HImage2})` }}
                ></div>
                <a
                  href={HImage2}
                  className="over-link lightbox-image"
                  data-fancybox="HotelGallery"
                ></a>
              </div>
            </div>
            <div className="image-block sm-block">
              <div className="inner">
                <div className="image">
                  <img style={{ backgroundImage: `url(${HImage3})` }} alt="" />
                </div>
                <div
                  className="image-layer"
                  style={{ backgroundImage: `url(${HImage3})` }}
                ></div>
                <a
                  href={HImage3}
                  className="over-link lightbox-image"
                  data-fancybox="HotelGallery"
                ></a>
              </div>
            </div>
          </div>
          <div className="image-col sm-col">
            <div className="image-block sm-block">
              <div className="inner">
                <div className="image">
                  <img src={HImage4} alt="" />
                </div>
                <div
                  className="image-layer"
                  style={{ backgroundImage: `url(${HImage4})` }}
                ></div>
                <a
                  href={HImage4}
                  className="over-link lightbox-image"
                  data-fancybox="HotelGallery"
                ></a>
              </div>
            </div>
            <div className="image-block sm-block">
              <div className="inner">
                <div className="image">
                  <img src={HImage5} alt="" />
                </div>
                <div
                  className="image-layer"
                  style={{ backgroundImage: `url(${HImage5})` }}
                ></div>
                <a
                  href={HImage5}
                  className="over-link lightbox-image"
                  data-fancybox="HotelGallery"
                ></a>
              </div>
              <div className="img-link">
                <a href="#" className="theme-btn">
                  <span>+ 5 Photos</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
