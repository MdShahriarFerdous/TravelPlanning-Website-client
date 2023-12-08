import { useEffect, useState } from "react";
import { blogTagsList } from "../../../../backend-services/blogsApi";
import { NavLink } from "react-router-dom";
import MiniLoader from "../../../screenloader/MiniLoader";

export default function Tags() {
  const [blogTags, setBlogTags] = useState([]);
  const [isBlogTagsLoading, setIsBlogTagsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setIsBlogTagsLoading(true);
      const res = await blogTagsList();
      if (res?.data) {
        const { blogTags } = res?.data || {};
        setIsBlogTagsLoading(false);
        setBlogTags(blogTags);
      }
    })();
  }, []);
  return (
    <>
      {isBlogTagsLoading ? (
        <MiniLoader />
      ) : (
        <>
          {blogTags && blogTags.length > 0 && (
            <div className="sb-widget links-widget">
              <div className="w-inner">
                <div className="s-title">
                  <i className="fa-solid fa-caret-right"></i>
                  <h4>Tags</h4>
                </div>
                <ul>
                  {blogTags.map((tag) => {
                    const { _id, title } = tag || {};
                    return (
                      <li key={_id}>
                        <NavLink to={`/blogs?tag=${_id}`}>{title}</NavLink>
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
