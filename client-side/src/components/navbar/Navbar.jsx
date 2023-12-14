import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "../../assets/css/style.css";
import "../../assets/css/sections/global-settings.css";
import "../../assets/css/responsive.css";
import $ from "jquery";
import { useEffect, useState } from "react";
import "./navbar.css";

import NavLogo from "../../assets/images/logo-nav.png";
import MenuIcon from "../../assets/images/icons/menu-icon.svg";

import { useAuth } from "../../context/authContext";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
	const [auth, setAuth] = useAuth();
	const navigate = useNavigate();

	const logout = () => {
		setAuth({ ...auth, user: null, token: "" });
		localStorage.removeItem("auth");
		navigate("/");
	};

	useEffect(() => {
		(function () {
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
					return '<button type="button" className="btn-expander"><i className="icon icon-arrow-down"></i></button>';
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
		})(window.jQuery);
	}, []);
	// To Toggle Active / Inactive class
	const location = useLocation();
	const [isActive, setIsActive] = useState("/");

	useEffect(() => {
		const matched = location.pathname.match(/^\/([^/]+)/);
		setIsActive(matched && matched[1]);
	}, [location]);

	return (
		<>
			<div className="main-header">
				<div className="header-upper">
					<div className="auto-container">
						<div className="main-box clearfix">
							<div className="logo-box">
								<div className="logo">
									<NavLink to={"/"} title="WeTravel">
										<img src={NavLogo} title="WeTravel" />
									</NavLink>
								</div>
							</div>
							<div className="nav-box clearfix">
								<div className="nav-outer clearfix">
									<nav className="main-menu">
										<ul className="navigation clearfix">
											<li
												className={`${
													isActive === null
														? "current"
														: ""
												}`}
											>
												<NavLink to="/">Home</NavLink>
											</li>
											<li
												className={`${
													isActive === "trips"
														? "current"
														: ""
												} dropdown`}
											>
												<NavLink to="/trips">
													Trips
												</NavLink>
												{/* <ul>
                          <li>
                            <NavLink to="">Plan a trip</NavLink>
                          </li>
                          <li>
                            <NavLink to="">Hire a trip designer</NavLink>
                          </li>
                        </ul> */}
											</li>
											<li
												className={`${
													isActive === "flights"
														? "current"
														: ""
												}`}
											>
												<NavLink to="/flights">
													Flights
												</NavLink>
											</li>
											<li
												className={`${
													isActive === "hotels"
														? "current"
														: ""
												}`}
											>
												<NavLink to="/hotels">
													Hotels
												</NavLink>
											</li>
											<li
												className={`${
													isActive === "blogs"
														? "current"
														: ""
												}`}
											>
												<NavLink to="/blogs">
													Blogs
												</NavLink>
											</li>
										</ul>
									</nav>
								</div>
							</div>
							<div className="nav-toggler">
								<button className="hidden-bar-opener">
									<span className="icon">
										<img src={MenuIcon} alt="menu-icon" />
									</span>
								</button>
							</div>
							<div className="links-box clearfix">
								<div className="link login">
									{auth?.user ? (
										<div className="dropdown">
											<a
												className="nav-link pointer dropdown-toggle"
												data-bs-toggle="dropdown"
											>
												<img
													src="https://res.cloudinary.com/dktnokbnw/image/upload/v1702530434/wetravel/user/profileImage_qdwwkv.png"
													style={{
														width: "36px",
														height: "36px",
													}}
													className="ms-2 avatar shadow mb-2"
												/>
											</a>
											<ul className="dropdown-menu">
												<li className="dropdown-item">
													<NavLink to="/user/dashboard">
														Dashboard
													</NavLink>
												</li>
												<li className="dropdown-item">
													<a onClick={logout}>
														Logout
													</a>
												</li>
											</ul>
										</div>
									) : (
										<NavLink to="/login">
											<button className="btn-style-one">
												Sign in
											</button>
										</NavLink>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!--End Main Header --> */}

			{/* <!--Menu Backdrop--> */}
			<div className="menu-backdrop" />
			<div className="hidden-bar">
				<div className="hidden-bar-wrapper">
					<div className="hidden-bar-closer">
						<span className="icon">
							<svg
								className="icon-close"
								role="presentation"
								viewBox="0 0 16 14"
							>
								<path
									d="M15 0L1 14m14 0L1 0"
									stroke="currentColor"
									fill="none"
									fillRule="evenodd"
								/>
							</svg>
						</span>
					</div>
					<div className="nav-logo-box"></div>
					<nav className="side-menu"></nav>
					<div className="links-box clearfix">
						<div className="clearfix">
							<div className="link">
								{auth?.user ? (
									<ul>
										<li>
											<NavLink to="/user/dashboard">
												Dashboard
											</NavLink>
										</li>
										<li>
											<a onClick={logout}>Logout</a>
										</li>
									</ul>
								) : (
									<NavLink to="/login">
										<button className="btn-style-one">
											Sign in
										</button>
									</NavLink>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
