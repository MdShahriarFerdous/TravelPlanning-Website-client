import { useEffect, useState } from "react";
import {
  blogsInHomeList,
  blogsGalleryList,
} from "../../../backend-services/blogsApi";
import FeaturedSection from "./section/FeaturedSection";
import GallerySection from "./section/GallerySection";
import MiniLoader from "../../screenloader/MiniLoader";

export default function FeaturedBlogs() {
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [galleryBlogs, setGalleryBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isGalleryBlogsLoading, setIsGalleryBlogsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await blogsInHomeList();
      if (res?.data) {
        const { blogs } = res?.data || {};
        setIsLoading(false);
        setFeaturedBlogs(blogs);
      }
    })();
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
      <div className="news-section">
        <div className="auto-container">
          <div className="title-box centered">
            <div className="subtitle">Updates</div>
            <h2>
              <span>From Our Blog</span>
            </h2>
          </div>

          {isLoading ? (
            <MiniLoader />
          ) : (
            <>
              {featuredBlogs && featuredBlogs.length > 0 && (
                <FeaturedSection featuredBlogs={featuredBlogs} />
              )}
            </>
          )}
        </div>
      </div>
      {isGalleryBlogsLoading ? (
        <MiniLoader />
      ) : (
        <>
          {galleryBlogs && galleryBlogs.length > 0 && (
            <GallerySection galleryBlogs={galleryBlogs} />
          )}
        </>
      )}
    </>
  );
}
