import React from "react";
import "../../assets/css/responsive.css";
import "../../assets/css/sections/global-settings.css";
import "../../assets/css/style.css";
import "../../assets/css/lib/slick.min.css";

import $ from "jquery";

import BgGradient3 from "../../assets/images/background/bg-gradient-3.png";
import BgGradient4 from "../../assets/images/background/bg-gradient-4.png";
import Gallery1 from "../../assets/images/resources/gallery/gallery-1.jpg";
import Gallery2 from "../../assets/images/resources/gallery/gallery-2.jpg";
import Gallery3 from "../../assets/images/resources/gallery/gallery-3.jpg";
import Gallery12 from "../../assets/images/resources/gallery/gallery-12.jpg";
import Gallery14 from "../../assets/images/resources/gallery/gallery-14.jpg";
import Gallery15 from "../../assets/images/resources/gallery/gallery-15.jpg";
import Gallery6 from "../../assets/images/resources/gallery/gallery-6.jpg";
import Gallery7 from "../../assets/images/resources/gallery/gallery-7.jpg";
import { useEffect } from "react";

const Destination = () => {
	useEffect(() => {
		(function () {
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
					}
				);
				$(".cart-sidebar .closer-btn,.cart-backdrop").on(
					"click",
					function () {
						$("body").removeClass("visible-cart-bar");
					}
				);
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
					return '<button type="button" class="btn-expander"><i class="icon icon-arrow-down"></i></button>';
				});
				// hidding submenu
				menuWrap.find(".dropdown").children("ul").hide();

				$(".hidden-bar .side-menu ul li.dropdown .btn-expander").on(
					"click",
					function (e) {
						e.preventDefault();
						if (
							$(this).parents("li").children("ul").is(":visible")
						) {
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
					}
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

			//Packages Carousel
			if ($(".packages-carousel").length) {
				$(".packages-carousel").slick({
					slidesToShow: 3,
					centerMode: false,
					slidesToScroll: 3,
					autoplay: true,
					infinite: true,
					dots: false,
					touchMove: true,
					touchThreshold: 3,
					autoplaySpeed: 5000,
					pauseOnHover: true,
					speed: 1000,
					prevArrow:
						'<div class="prev-btn"><i class="fa-solid fa-angle-left"></span></div>',
					nextArrow:
						'<div class="next-btn"><i class="fa-solid fa-angle-right"></span></div>',
					//cssEase:'linear',
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3,
							},
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
							},
						},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							},
						},
						{
							breakpoint: 600,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
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

			//popular Carousel
			if ($(".popular-carousel").length) {
				$(".popular-carousel").slick({
					slidesToShow: 4,
					centerMode: false,
					centerPadding: "24px",
					slidesToScroll: 2,
					autoplay: true,
					infinite: true,
					dots: false,
					touchMove: true,
					touchThreshold: 3,
					autoplaySpeed: 5000,
					pauseOnHover: true,
					speed: 1000,
					prevArrow:
						'<div class="prev-btn"><i class="fa-solid fa-angle-left"></span></div>',
					nextArrow:
						'<div class="next-btn"><i class="fa-solid fa-angle-right"></span></div>',
					//cssEase:'linear',
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3,
							},
						},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
							},
						},
						{
							breakpoint: 768,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							},
						},
						{
							breakpoint: 600,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
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
						'<div class="prev-btn"><i class="fa-solid fa-angle-left"></span></div>',
					nextArrow:
						'<div class="next-btn"><i class="fa-solid fa-angle-right"></span></div>',
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
						'<div class="prev-btn"><i class="fa-solid fa-angle-left"></span></div>',
					nextArrow:
						'<div class="next-btn"><i class="fa-solid fa-angle-right"></span></div>',
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

			//Fact Counter + Text Count
			if ($(".count-box").length) {
				$(".count-box").appear(
					function () {
						var $t = $(this),
							n = $t.find(".count-text").attr("data-stop"),
							r = parseInt(
								$t.find(".count-text").attr("data-speed"),
								10
							);

						if (!$t.hasClass("counted")) {
							$t.addClass("counted");
							$({
								countNum: $t.find(".count-text").text(),
							}).animate(
								{
									countNum: n,
								},
								{
									duration: r,
									easing: "linear",
									step: function () {
										$t.find(".count-text").text(
											Math.floor(this.countNum)
										);
									},
									complete: function () {
										$t.find(".count-text").text(
											this.countNum
										);
									},
								}
							);
						}
					},
					{ accY: 0 }
				);
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
				if ($(".masonry-container").length) {
					var winDow = $(window);
					// Needed variables
					var $container = $(".masonry-container");

					// $container.isotope({
					// 	itemSelector: ".masonry-item",
					// 	masonry: {
					// 		columnWidth: 1,
					// 		gutter: 5,
					// 	},
					// 	animationOptions: {
					// 		duration: 500,
					// 		easing: "linear",
					// 	},
					// });
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
						1500
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
					<div className="masonry-container row clearfix">
						{/*Block*/}
						<div className="dest-block-one masonry-item col-xl-6 col-lg-12 col-md-12 col-sm-12">
							<div
								className="inner-box wow fadeInUp"
								data-wow-delay="0ms"
								data-wow-duration="1500ms"
							>
								<div className="image-box">
									<a href="destination-single.html">
										<img src={Gallery1} alt="Gallery 1" />
									</a>
								</div>
								<div className="hvr-box">
									<div className="hvr-inner">
										<h4>
											<a href="#">India</a>
										</h4>
										<div className="tour-count">
											<span>280 Tour Packages</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="dest-block-one masonry-item column-width col-xl-3 col-lg-6 col-md-6 col-sm-12">
							<div
								className="inner-box wow fadeInUp"
								data-wow-delay="300ms"
								data-wow-duration="1500ms"
							>
								<div className="image-box">
									<a href="destination-single.html">
										<img src={Gallery2} alt="Gallery 2" />
									</a>
								</div>
								<div className="hvr-box">
									<div className="hvr-inner">
										<h4>
											<a href="destination-single.html">
												Morocco
											</a>
										</h4>
										<div className="tour-count">
											<span>200 Tour Packages</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="dest-block-one masonry-item column-width col-xl-3 col-lg-6 col-md-6 col-sm-12">
							<div
								className="inner-box wow fadeInUp"
								data-wow-delay="600ms"
								data-wow-duration="1500ms"
							>
								<div className="image-box">
									<a href="destination-single.html">
										<img src={Gallery3} alt="Gallery 3" />
									</a>
								</div>
								<div className="hvr-box">
									<div className="hvr-inner">
										<h4>
											<a href="destination-single.html">
												Istanbul
											</a>
										</h4>
										<div className="tour-count">
											<span>140 Tour Packages</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="dest-block-one masonry-item column-width col-xl-3 col-lg-6 col-md-6 col-sm-12">
							<div
								className="inner-box wow fadeInUp"
								data-wow-delay="0ms"
								data-wow-duration="1500ms"
							>
								<div className="image-box">
									<a href="destination-single.html">
										<img src={Gallery12} alt="Gallery 12" />
									</a>
								</div>
								<div className="hvr-box">
									<div className="hvr-inner">
										<h4>
											<a href="destination-single.html">
												London
											</a>
										</h4>
										<div className="tour-count">
											<span>350 Tour Packages</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="dest-block-one masonry-item col-xl-6 col-lg-12 col-md-12 col-sm-12">
							<div
								className="inner-box wow fadeInUp"
								data-wow-delay="300ms"
								data-wow-duration="1500ms"
							>
								<div className="image-box">
									<a href="destination-single.html">
										<img
											src={Gallery14}
											alt="Gallery  14"
										/>
									</a>
								</div>
								<div className="hvr-box">
									<div className="hvr-inner">
										<h4>
											<a href="destination-single.html">
												Rome
											</a>
										</h4>
										<div className="tour-count">
											<span>240 Tour Packages</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="dest-block-one masonry-item column-width col-xl-3 col-lg-6 col-md-6 col-sm-12">
							<div
								className="inner-box wow fadeInUp"
								data-wow-delay="600ms"
								data-wow-duration="1500ms"
							>
								<div className="image-box">
									<a href="destination-single.html">
										<img src={Gallery15} alt="Gallery 15" />
									</a>
								</div>
								<div className="hvr-box">
									<div className="hvr-inner">
										<h4>
											<a href="destination-single.html">
												Cairo
											</a>
										</h4>
										<div className="tour-count">
											<span>512 Tour Packages</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* .dest-block-one */}
						{/*Block*/}
						<div className="dest-block-one masonry-item column-width col-xl-3 col-lg-6 col-md-6 col-sm-12">
							<div
								className="inner-box wow fadeInUp"
								data-wow-delay="600ms"
								data-wow-duration="1500ms"
							>
								<div className="image-box">
									<a href="destination-single.html">
										<img src={Gallery6} alt="Gallery 6" />
									</a>
								</div>
								<div className="hvr-box">
									<div className="hvr-inner">
										<h4>
											<a href="destination-single.html">
												Carribean
											</a>
										</h4>
										<div className="tour-count">
											<span>99 Tour Packages</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* .dest-block-one */}
						{/*Block*/}
						<div className="dest-block-one masonry-item column-width col-xl-3 col-lg-6 col-md-6 col-sm-12">
							<div
								className="inner-box wow fadeInUp"
								data-wow-delay="600ms"
								data-wow-duration="1500ms"
							>
								<div className="image-box">
									<a href="destination-single.html">
										<img src={Gallery7} alt="Gallery  7" />
									</a>
								</div>
								<div className="hvr-box">
									<div className="hvr-inner">
										<h4>
											<a href="destination-single.html">
												Istanbul
											</a>
										</h4>
										<div className="tour-count">
											<span>330 Tour Packages</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* .dest-block-one */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Destination;
