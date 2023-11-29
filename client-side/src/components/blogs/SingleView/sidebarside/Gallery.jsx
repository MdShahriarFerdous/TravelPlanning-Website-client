import GalleryPreviewImage from "../../../../assets/images/resources/gallery/gallery-1.jpg";
import GalleryThumbnailImage from "../../../../assets/images/resources/gallery/gallery-1-thumb.jpg";
export default function Gallery() {
  return (
    <div className="sb-widget gallery-widget">
      <div className="w-inner">
        <div className="s-title">
          <i className="fa-solid fa-caret-right"></i>
          <h4>Gallery</h4>
        </div>
        <ul className="clearfix">
          {Array.apply(null, { length: 24 }).map((e, i) => (
            <li key={i}>
              <div className="image">
                <a
                  href={GalleryPreviewImage}
                  className="lightbox-image"
                  data-fancybox="SbGallery"
                >
                  <img src={GalleryThumbnailImage} />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
