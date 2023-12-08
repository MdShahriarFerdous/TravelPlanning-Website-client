import { useEffect, useState } from "react";
import { blogCategoriesList } from "../../../../backend-services/blogsApi";
import ScreenLoader from "../../../screenloader/ScreenLoader";
import { NavLink } from "react-router-dom";

export default function Categories() {
  const [blogCategories, setBlogCategories] = useState([]);
  const [isBlogCategoriesLoading, setIsBlogCategoriesLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setIsBlogCategoriesLoading(true);
      const res = await blogCategoriesList();
      if (res?.data) {
        const { blogCategories } = res?.data || {};
        setIsBlogCategoriesLoading(false);
        setBlogCategories(blogCategories);
      }
    })();
  }, []);
  return (
    <>
      {isBlogCategoriesLoading ? (
        <ScreenLoader />
      ) : (
        <>
          {blogCategories && blogCategories.length > 0 && (
            <div className="sb-widget links-widget">
              <div className="w-inner">
                <div className="s-title">
                  <i className="fa-solid fa-caret-right"></i>
                  <h4>Categories</h4>
                </div>
                <ul>
                  {blogCategories.map((category) => {
                    const { _id, title } = category || {};
                    return (
                      <li key={_id}>
                        <NavLink to={`/blogs?category=${_id}`}>{title}</NavLink>
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
