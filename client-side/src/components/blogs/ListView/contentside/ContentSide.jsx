import { useEffect } from "react";
import BlogsList from "./BlogsList";

export default function ContentSide() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="content-side col-xl-8 col-lg-7 col-md-12 col-sm-12">
      <div className="content-inner">
        <BlogsList />
      </div>
    </div>
  );
}
