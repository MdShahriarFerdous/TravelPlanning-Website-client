import { NavLink, useLocation } from "react-router-dom";
import BannerImage from "../../assets/images/resources/featured/banner-5.jpg";
import { useEffect, useState } from "react";
export default function Breadcrumbs() {
  const location = useLocation();
  const [routeName, setRouteName] = useState("/");

  useEffect(() => {
    setRouteName(location.pathname);
  }, [location]);

  const filter = /^\/(trips|flights|hotels|blogs)$/;
  const pageThatNeedsBreadCrumb = filter.test(routeName);

  return (
    <>
      {pageThatNeedsBreadCrumb && (
        <section className="inner-banner">
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${BannerImage})` }}
          ></div>
          <div className="auto-container">
            <div className="content-box">
              <h1>{routeName.substring(1)}</h1>
              <div className="bread-crumb">
                <ul className="clearfix">
                  <li>
                    <NavLink to="/">Home {">"}</NavLink>
                  </li>
                  <li className="current">{routeName.substring(1)}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
