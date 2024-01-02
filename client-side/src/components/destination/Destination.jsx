import { Link } from "react-router-dom";
import "../../assets/css/responsive.css";
import "../../assets/css/sections/global-settings.css";
import "../../assets/css/style.css";
import "../../assets/css/lib/slick.min.css";

import $ from "jquery";

import BgGradient3 from "../../assets/images/background/bg-gradient-3.png";
import BgGradient4 from "../../assets/images/background/bg-gradient-4.png";
import { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import { getTopDestination } from "../../_api/DestinationApi.js";

const Destination = () => {
  const isotopeContainer = useRef(null);
  const [topDestination, setTopDestination] = useState(null);

  const fetchDestination = async () => {
    const response = await getTopDestination();
    setTopDestination(response.data);
  };

  useEffect(() => {
    (function () {
      fetchDestination();

      //Hide Loading Box (Preloader)
      function handlePreloader() {
        if ($(".loader-wrap").length) {
          $(".loader-wrap").delay(300).fadeOut(300);
        }
      }

      if ($(".preloader-close").length) {
        $(".preloader-close").on("click", function () {
          $(".loader-wrap").delay(300).fadeOut(300);
        });
      }

      // Copy logo to hidden menu
      $(".logo-box .logo").clone().appendTo(".nav-logo-box");
      // Copy main menu to side menu
      $(".main-menu .navigation").clone().appendTo(".side-menu");

      //Update Header Style and Scroll to Top
      function headerStyle() {
        if ($(".main-header").length) {
          var windowpos = $(window).scrollTop();
          var siteHeader = $(".main-header");
          var scrollLink = $(".scroll-to-top");
          if (windowpos >= 1) {
            siteHeader.addClass("fixed-header");
            scrollLink.fadeIn(300);
          } else {
            siteHeader.removeClass("fixed-header");
            scrollLink.fadeOut(300);
          }
        }
      }

      headerStyle();

      //Search Toggle
      if ($(".search-box").length) {
        $(".search-toggle").on("click", function () {
          $("body").toggleClass("visible-search");
        });
        $(".s-close-btn,.search-backdrop").on("click", function () {
          $("body").removeClass("visible-search");
        });
        $(document).keydown(function (e) {
          if (e.keyCode == 27) {
            $("body").removeClass("visible-search");
          }
        });
      }

      //Cart Sidebar Toggle
      if ($(".cart-sidebar").length) {
        $(".main-header .header-upper .links-box .cart-btn > a").on(
          "click",
          function (e) {
            e.preventDefault();
            $("body").toggleClass("visible-cart-bar");
          },
        );
        $(".cart-sidebar .closer-btn,.cart-backdrop").on("click", function () {
          $("body").removeClass("visible-cart-bar");
        });
        $(document).keydown(function (e) {
          if (e.keyCode == 27) {
            $("body").removeClass("visible-cart-bar");
          }
        });
      }

      //Hidden Bar Menu Config
      function hiddenBarMenuConfig() {
        var menuWrap = $(".hidden-bar .side-menu");
        // appending expander button
        menuWrap.find("li.dropdown > a").append(function () {
          return '<button type="button" className="btn-expander"><i className="icon icon-arrow-down"></i></button>';
        });
        // hidding submenu
        menuWrap.find(".dropdown").children("ul").hide();

        $(".hidden-bar .side-menu ul li.dropdown .btn-expander").on(
          "click",
          function (e) {
            e.preventDefault();
            if ($(this).parents("li").children("ul").is(":visible")) {
              $(this).parents("li").children("ul").slideUp();
              $(this).find("i").toggleClass("icon-arrow-up");
              return false;
            } else {
              $(this)
                .parents(".navigation")
                .children("li")
                .children("ul")
                .hide();
              $(this)
                .parents(".navigation")
                .children("li")
                .children("a")
                .find("i")
                .removeClass("icon-arrow-up");
              $(this)
                .parents(".navigation")
                .children("li")
                .children("a")
                .find("i")
                .addClass("icon-arrow-down");
              $(this).parents("li").children("ul").slideToggle();
              // toggling arrow of expander
              $(this).find("i").toggleClass("icon-arrow-up");
              return false;
            }
          },
        );
      }

      hiddenBarMenuConfig();

      //Custom Scroll for Hidden Sidebar
      if ($(".hidden-bar-wrapper").length) {
        $(".hidden-bar-closer,.menu-backdrop").on("click", function () {
          $(".hidden-bar,body").removeClass("visible-sidebar");
          $(".side-menu ul li.dropdown ul").slideUp();
          $(".side-menu ul li.dropdown > a i")
            .removeClass("icon-arrow-up")
            .addClass("icon-arrow-down");
        });
        $(document).keydown(function (e) {
          if (e.keyCode == 27) {
            $(".hidden-bar,body").removeClass("visible-sidebar");
            $(".side-menu ul li.dropdown ul").slideUp();
            $(".side-menu ul li.dropdown > a i")
              .removeClass("icon-arrow-up")
              .addClass("icon-arrow-down");
          }
        });
        $(".hidden-bar-opener").on("click", function () {
          $(".hidden-bar,body").addClass("visible-sidebar");
        });
      }

      //Testimonials Carousel
      if ($(".testi-slider-two").length) {
        $(".testi-slider-two").slick({
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "24px",
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          dots: true,
          arrows: false,
          touchMove: true,
          touchThreshold: 4,
          autoplaySpeed: 5000,
          pauseOnHover: true,
          speed: 1000,
          prevArrow:
            '<div className="prev-btn"><i className="fa-solid fa-angle-left"></span></div>',
          nextArrow:
            '<div className="next-btn"><i className="fa-solid fa-angle-right"></span></div>',
          //cssEase:'linear'
        });
      }

      //Activity Slider Carousel
      if ($(".activity-banner-slider").length) {
        $(".activity-banner-slider").slick({
          slidesToShow: 1,
          centerMode: false,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          dots: false,
          arrows: true,
          touchMove: true,
          touchThreshold: 4,
          autoplaySpeed: 5000,
          pauseOnHover: true,
          speed: 1000,
          prevArrow:
            '<div className="prev-btn"><i className="fa-solid fa-angle-left"></span></div>',
          nextArrow:
            '<div className="next-btn"><i className="fa-solid fa-angle-right"></span></div>',
          //cssEase:'linear'
        });
      }

      //Insta Carousel
      if ($(".insta-carousel-two").length) {
        $(".insta-carousel-two").slick({
          slidesToShow: 6,
          centerMode: false,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          dots: false,
          arrows: false,
          touchMove: true,
          touchThreshold: 3,
          autoplaySpeed: 5000,
          pauseOnHover: true,
          speed: 1000,
          //cssEase:'linear',
          responsive: [
            {
              breakpoint: 1366,
              settings: {
                slidesToShow: 5,
              },
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });
      }

      //MixitUp Gallery Filters
      if ($(".filter-list").length) {
        $(".filter-list").mixItUp({});
      }

      //Datepicker
      // if ($(".datepicker").length) {
      // 	$(".datepicker").datepicker();
      // }

      //Jquery Spinner / Quantity Spinner
      if ($(".qty-spinner").length) {
        $("input.qty-spinner").TouchSpin({
          verticalbuttons: true,
        });
      }

      //Default Masonry
      function enableDefaultMasonry() {
        if (isotopeContainer.current) {
          const iso = new Isotope(isotopeContainer.current, {
            itemSelector: ".masonry-item",
            masonry: {
              columnWidth: 1,
              gutter: 5,
            },
            animationOptions: {
              duration: 500,
              easing: "linear",
            },
          });
          iso.layout();
        }
      }

      enableDefaultMasonry();

      //Jquery Spinner / Quantity Spinner
      if ($(".quantity-spinner").length) {
        $(".quantity-spinner .plus").on("click", function () {
          var val = $(this).prev(".prod_qty").val();
          $(this)
            .prev(".prod_qty")
            .val(val * 1 + 1);
        });
        $(".quantity-spinner .minus").on("click", function () {
          var val = $(this).next(".prod_qty").val();
          if (val != 1) {
            $(this)
              .next(".prod_qty")
              .val(val * 1 - 1);
          }
        });
      }

      // Scroll to a Specific Div
      if ($(".scroll-to-target").length) {
        $(".scroll-to-target").on("click", function () {
          var target = $(this).attr("data-target");
          // animate
          $("html, body").animate(
            {
              scrollTop: $(target).offset().top,
            },
            1500,
          );
        });
      }

      $(window).on("scroll", function () {
        headerStyle();
      });

      $(window).on("load", function () {
        handlePreloader();
        if ($("body.page-loaded").length) {
          $("body").addClass("page-done");
        }
        enableDefaultMasonry();
      });

      $(window).on("resize", function () {
        enableDefaultMasonry();
      });
    })(window.jQuery);
  }, []);

  return (
    <div className="destination-section">
      <div className="bg-grad-right">
        <img src={BgGradient3} />
      </div>
      <div className="bg-grad-left">
        <img src={BgGradient4} />
      </div>
      <div className="auto-container">
        <div className="title-box centered">
          <div className="subtitle">Discover</div>
          <h2>
            <i className="bg-vector" />
            <span>Popular Destinations for your next vacation</span>
          </h2>
        </div>
        <div className="gallery-box">
          <div
            ref={isotopeContainer}
            className="masonry-container row clearfix"
          >
            {topDestination &&
              topDestination.map((data) => {
                return (
                  <div
                    key={data._id}
                    className="dest-block-one masonry-item column-width col-xl-3 col-lg-6 col-md-6 col-sm-12"
                  >
                    <div
                      className="inner-box wow fadeInUp"
                      data-wow-delay="600ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="image-box">
                        <Link to={`/destination/${data._id}`}>
                          <img src={data["photo"][0]} alt="Gallery  7" />
                        </Link>
                      </div>
                      <div className="hvr-box">
                        <div className="hvr-inner">
                          <h4>
                            <Link to={`/destination/${data._id}`}>
                              {data["name"]}
                            </Link>
                          </h4>
                          <div className="tour-count">
                            <span>{data["placeCount"]} Places</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
