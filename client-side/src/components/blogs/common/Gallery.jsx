import { useEffect, useState } from "react";
import { blogsGalleryList } from "../../../backend-services/blogsApi";
import MiniLoader from "../../screenloader/MiniLoader";
import { NavLink } from "react-router-dom";

export default function Gallery() {
  const [galleryBlogs, setGalleryBlogs] = useState([]);
  const [isGalleryBlogsLoading, setIsGalleryBlogsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setIsGalleryBlogsLoading(true);
      const res = await blogsGalleryList();
      if (res?.data) {
        const { blogs } = res?.data || {};
        setIsGalleryBlogsLoading(false);
        setGalleryBlogs(blogs);
      }
    })();
  }, []);
  return (
    <>
      {isGalleryBlogsLoading ? (
        <MiniLoader />
      ) : (
        <>
          {galleryBlogs && galleryBlogs.length > 0 && (
            <div className="sb-widget gallery-widget">
              <div className="w-inner">
                <div className="s-title">
                  <i className="fa-solid fa-caret-right"></i>
                  <h4>Gallery</h4>
                </div>
                <ul className="clearfix">
                  {galleryBlogs.map((gallery) => {
                    const { _id, galleryImage } = gallery || {};
                    return (
                      <li key={_id}>
                        <div className="image">
                          <NavLink to={`/blogs`} className="lightbox-image">
                            <img src={galleryImage} />
                          </NavLink>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
