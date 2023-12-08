import { useEffect, useState } from "react";
import AppLayout from "../../components/applayout/AppLayout";
import ContentSide from "../../components/blogs/SingleView/contentside/ContentSide";
import SidebarSide from "../../components/blogs/SingleView/sidebarside/SidebarSide";

import { useParams } from "react-router-dom";
import { blogsDetailedList } from "../../backend-services/blogsApi";
import ScreenLoader from "../../components/screenloader/ScreenLoader";
import Banner from "../../components/blogs/SingleView/contentside/Banner";

const BlogDetailsPage = () => {
  const { blogId } = useParams();
  const [previousBlogPost, setPreviousBlogPost] = useState(null);
  const [currentBlogPost, setCurrentBlogPost] = useState(null);
  const [nextBlogPost, setNextBlogPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const res = await blogsDetailedList(blogId);
      if (res?.data?.data) {
        const { previousPost, currentPost, nextPost } = res.data.data || {};
        setIsLoading(false);
        setPreviousBlogPost(previousPost);
        setCurrentBlogPost(currentPost);
        setNextBlogPost(nextPost);
      }
    })();
  }, [blogId]);
  return (
    <>
      {isLoading ? (
        <ScreenLoader />
      ) : (
        <AppLayout>
          <Banner post={currentBlogPost} />
          <div className="sidebar-container blog-page">
            <div className="auto-container">
              <div className="row clearfix">
                <ContentSide
                  previousBlogPost={previousBlogPost}
                  currentBlogPost={currentBlogPost}
                  nextBlogPost={nextBlogPost}
                />
                <SidebarSide />
              </div>
            </div>
          </div>
        </AppLayout>
      )}
    </>
  );
};

export default BlogDetailsPage;
