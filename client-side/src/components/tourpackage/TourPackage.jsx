import Slider from "react-slick";

import "../../assets/css/responsive.css";
import "../../assets/css/sections/global-settings.css";
import "../../assets/css/lib/slick.min.css";
import "../../assets/css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./package.css";
import Pattern1 from "../../assets/images/background/pattern-1.png";
import ItalyPic from "../../assets/images/resources/destinations/italy.jpg";
import BrazilPic from "../../assets/images/resources/destinations/brazil.jpg";
import EgyptPic from "../../assets/images/resources/destinations/egypt.jpg";
import CanadaPic from "../../assets/images/resources/destinations/canada.jpg";
import MaldivesPic from "../../assets/images/resources/destinations/maldives.jpg";
import MoroccoPic from "../../assets/images/resources/destinations/morocco.jpg";
import AustraliaPic from "../../assets/images/resources/destinations/australia.jpg";
import JapanPic from "../../assets/images/resources/destinations/japan.jpg";
import OmanPic from "../../assets/images/resources/destinations/oman.jpg";
import TIcon9 from "../../assets/images/icons/t-icon-9.png";
import TIcon2 from "../../assets/images/icons/t-icon-2.png";
import TIcon3 from "../../assets/images/icons/t-icon-3.png";
import TIcon1 from "../../assets/images/icons/t-icon-1.png";
import { NavLink } from "react-router-dom";

function Arrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: "block" }}
			onClick={onClick}
		/>
	);
}

const TourPackage = () => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 2,
		initialSlide: 0,
		nextArrow: <Arrow />,
		prevArrow: <Arrow />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
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
	};
	return (
		<div className="packages-section">
			<div
				className="bg-layer"
				style={{
					backgroundImage: `url(${Pattern1})`,
				}}
			></div>

			<div className="auto-container tour-container">
				<div className="title-box">
					<div className="subtitle">Packages</div>
					<h2>
						<span>Tour Packages</span>
					</h2>
				</div>

				<div className="carousel-box">
					<div className="packages-carousel">
						<Slider {...settings}>
							{/* ========= Block-1 start ========= */}
							<div className="package-block">
								<NavLink to="">
									<div className="inner-box">
										<div className="image-box">
											<div className="image">
												<img
													src={ItalyPic}
													alt="Italy"
												/>
											</div>
										</div>
										<div className="lower-box">
											<div className="p-icon">
												<img src={TIcon9} />
												<span className="icon flaticon-family" />
											</div>
											<div className="location">
												Italy
											</div>
											<h5>
												Romantic Venice, The City of
												Canals and Love
											</h5>
											<div className="info clearfix">
												<div className="duration">
													<i className="fa-solid fa-clock" />
													5 Days 6 Nights
												</div>
												<div className="persons">
													<i className="fa-solid fa-user" />
													2
												</div>
											</div>
											<div className="bottom-box clearfix">
												<div className="rating">
													<i className="fa-solid fa-star" />
													<strong>4.8</strong>
													<span className="count">
														1260 Reviews
													</span>
												</div>
												<p className="price">
													Start from  
													<span className="amount">
														$199
													</span>
												</p>
											</div>
										</div>
									</div>
								</NavLink>
							</div>
							{/* ========= Block-1 end ========= */}

							{/* ========= Block-2 start ========= */}
							<div className="package-block">
								<NavLink to="">
									<div className="inner-box">
										<div className="image-box">
											<div className="image">
												<img
													src={BrazilPic}
													alt="Brazil"
												/>
											</div>
										</div>
										<div className="lower-box">
											<div className="p-icon">
												<img src={TIcon2} />
												<span className="icon flaticon-adventure" />
											</div>
											<div className="location">
												Brazil
											</div>
											<h5>
												Lush Amazon Rainforest Waiting
												to Be Explored
											</h5>
											<div className="info clearfix">
												<div className="duration">
													<i className="fa-solid fa-clock" />
													7 Days 8 Nights
												</div>
												<div className="persons">
													<i className="fa-solid fa-user" />
													6
												</div>
											</div>
											<div className="bottom-box clearfix">
												<div className="rating">
													<a
														href="#"
														className="theme-btn"
													>
														<i className="fa-solid fa-star" />
														<strong>4.9</strong>
														<span className="count">
															510 Reviews
														</span>
													</a>
												</div>
												<p className="price">
													Start from  
													<span className="amount">
														$599
													</span>
												</p>
											</div>
										</div>
									</div>
								</NavLink>
							</div>
							{/* ========= Block-2 end ========= */}

							{/* ========= Block-3 start ========= */}
							<div className="package-block">
								<NavLink to="">
									<div className="inner-box">
										<div className="image-box">
											<div className="image">
												<img
													src={EgyptPic}
													alt="Egypt"
												/>
											</div>
										</div>
										<div className="lower-box">
											<div className="p-icon">
												<img src={TIcon3} />
												<span className="icon flaticon-adventure" />
											</div>
											<div className="location">
												Egypt
											</div>
											<h5>
												Unraveling Ancient Wonders,
												Exploring Egypt
											</h5>
											<div className="info clearfix">
												<div className="duration">
													<i className="fa-solid fa-clock" />
													3 Days 4 Nights
												</div>
												<div className="persons">
													<i className="fa-solid fa-user" />
													8
												</div>
											</div>
											<div className="bottom-box clearfix">
												<div className="rating">
													<a
														href="#"
														className="theme-btn"
													>
														<i className="fa-solid fa-star" />
														<strong>4.4</strong>
														<span className="count">
															2190 Reviews
														</span>
													</a>
												</div>
												<p className="price">
													Start from  
													<span className="amount">
														$399
													</span>
												</p>
											</div>
										</div>
									</div>
								</NavLink>
							</div>
							{/* ========= Block-3 end ========= */}

							{/* ========= Block-4 start ========= */}
							<div className="package-block">
								<NavLink to="">
									<div className="inner-box">
										<div className="image-box">
											<div className="image">
												<img
													src={CanadaPic}
													alt="Canada"
												/>
											</div>
										</div>
										<div className="lower-box">
											<div className="p-icon">
												<img src={TIcon1} />
												<span className="icon flaticon-adventure" />
											</div>
											<div className="location">
												Canada
											</div>
											<h5>
												Adventure in the Canadian
												Rockies, Majesty Unleashed
											</h5>
											<div className="info clearfix">
												<div className="duration">
													<i className="fa-solid fa-clock" />
													5 Days 6 Nights
												</div>
												<div className="persons">
													<i className="fa-solid fa-user" />
													12
												</div>
											</div>
											<div className="bottom-box clearfix">
												<div className="rating">
													<a
														href="#"
														className="theme-btn"
													>
														<i className="fa-solid fa-star" />
														<strong>4.8</strong>
														<span className="count">
															4210 Reviews
														</span>
													</a>
												</div>
												<p className="price">
													Start from  
													<span className="amount">
														$329
													</span>
												</p>
											</div>
										</div>
									</div>
								</NavLink>
							</div>
							{/* ========= Block-4 end ========= */}

							{/* ========= Block-5 start ========= */}
							<div className="package-block">
								<NavLink to="">
									<div className="inner-box">
										<div className="image-box">
											<div className="image">
												<img
													src={MaldivesPic}
													alt="Maldives"
												/>
											</div>
										</div>
										<div className="lower-box">
											<div className="p-icon">
												<img src={TIcon2} />
												<span className="icon flaticon-family" />
											</div>
											<div className="location">
												Maldives
											</div>
											<h5>
												Unveiling the Serenity of
												Maldivian Islands
											</h5>
											<div className="info clearfix">
												<div className="duration">
													<i className="fa-solid fa-clock" />
													5 Days 6 Nights
												</div>
												<div className="persons">
													<i className="fa-solid fa-user" />
													2
												</div>
											</div>
											<div className="bottom-box clearfix">
												<div className="rating">
													<a
														href="#"
														className="theme-btn"
													>
														<i className="fa-solid fa-star" />
														<strong>4.9</strong>
														<span className="count">
															5330 Reviews
														</span>
													</a>
												</div>
												<p className="price">
													Start from  
													<span className="amount">
														$699
													</span>
												</p>
											</div>
										</div>
									</div>
								</NavLink>
							</div>
							{/* ========= Block-5 end ========= */}

							{/* ========= Block-6 start ========= */}
							<div className="package-block">
								<NavLink to="">
									<div className="inner-box">
										<div className="image-box">
											<div className="image">
												<img
													src={MoroccoPic}
													alt="Morocco"
												/>
											</div>
										</div>
										<div className="lower-box">
											<div className="p-icon">
												<img src={TIcon3} />
												<span className="icon flaticon-chinese-temple-1" />
											</div>
											<div className="location">
												Morocco
											</div>
											<h5>
												Marrakech, A Tapestry of Colors
												and Culture
											</h5>
											<div className="info clearfix">
												<div className="duration">
													<i className="fa-solid fa-clock" />
													5 Days 6 Nights
												</div>
												<div className="persons">
													<i className="fa-solid fa-user" />
													4
												</div>
											</div>
											<div className="bottom-box clearfix">
												<div className="rating">
													<a
														href="#"
														className="theme-btn"
													>
														<i className="fa-solid fa-star" />
														<strong>4.7</strong>
														<span className="count">
															3610 Reviews
														</span>
													</a>
												</div>
												<p className="price">
													Start from  
													<span className="amount">
														$359
													</span>
												</p>
											</div>
										</div>
									</div>
								</NavLink>
							</div>
							{/* ========= Block-6 end ========= */}
						</Slider>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TourPackage;
