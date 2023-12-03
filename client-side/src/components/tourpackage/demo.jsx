import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "../../assets/css/responsive.css";
import "../../assets/css/sections/global-settings.css";
import "../../assets/css/lib/slick.min.css";
import "../../assets/css/style.css";
import "../../assets/css/lib/jquery.fancybox.min.css";
import "../../assets/css/lib/swiper.min.css";
import "../../assets/css/lib/jquery-ui.min.css";
import "../../assets/css/lib/animate.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

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

const TourPackage = () => {
	return (
		<div className="packages-section">
			<div
				className="bg-layer"
				style={{
					backgroundImage: `url(${Pattern1})`,
				}}
			/>
			<div className="auto-container tour-container">
				<div className="title-box">
					<div className="subtitle">Packages</div>
					<h2>
						<span>Tour Packages</span>
					</h2>
				</div>
				<div
					id="carouselExampleControls"
					className="carousel slide"
					data-bs-ride="carousel"
				>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<div className="package-block">
								<div className="inner-box">
									<div className="image-box">
										<div className="image">
											<a href="tour-single.html">
												<img
													src={ItalyPic}
													alt="Italy"
												/>
											</a>
										</div>
									</div>
									<div className="lower-box">
										<div className="p-icon">
											<img src={TIcon9} />
											<span className="icon flaticon-family" />
										</div>
										<div className="location">Italy</div>
										<h5>
											<a href="tour-single.html">
												Romantic Venice, The City of
												Canals and Love
											</a>
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
													<strong>4.8</strong>
													<span className="count">
														1260 Reviews
													</span>
												</a>
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
							</div>
						</div>

						<div class="carousel-item">
							<div className="package-block">
								<div className="inner-box">
									<div className="image-box">
										<div className="image">
											<a href="tour-single.html">
												<img
													src={BrazilPic}
													alt="Brazil"
												/>
											</a>
										</div>
									</div>
									<div className="lower-box">
										<div className="p-icon">
											<img src={TIcon2} alt />
											<span className="icon flaticon-adventure" />
										</div>
										<div className="location">Brazil</div>
										<h5>
											<a href="tour-single.html">
												Lush Amazon Rainforest Waiting
												to Be Explored
											</a>
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
							</div>
						</div>

						{/* <div className="package-block">
							<div className="inner-box">
								<div className="image-box">
									<div className="image">
										<a href="tour-single.html">
											<img src={EgyptPic} alt="Egypt" />
										</a>
									</div>
								</div>
								<div className="lower-box">
									<div className="p-icon">
										<img
											src="assets/images/icons/t-icon-3.png"
											alt
										/>
										<span className="icon flaticon-adventure" />
									</div>
									<div className="location">Egypt</div>
									<h5>
										<a href="tour-single.html">
											Unraveling Ancient Wonders,
											Exploring Egypt
										</a>
									</h5>
									<div className="info clearfix">
										<div className="duration">
											<i className="fa-solid fa-clock" />3
											Days 4 Nights
										</div>
										<div className="persons">
											<i className="fa-solid fa-user" />8
										</div>
									</div>
									<div className="bottom-box clearfix">
										<div className="rating">
											<a href="#" className="theme-btn">
												<i className="fa-solid fa-star" />
												<strong>4.4</strong>
												<span className="count">
													2190 Reviews
												</span>
											</a>
										</div>
										<p className="price">
											Start from  
											<span className="amount">$399</span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="package-block">
							<div className="inner-box">
								<div className="image-box">
									<div className="image">
										<a href="tour-single.html">
											<img src={CanadaPic} alt="Canada" />
										</a>
									</div>
								</div>
								<div className="lower-box">
									<div className="p-icon">
										<img
											src="assets/images/icons/t-icon-1.png"
											alt
										/>
										<span className="icon flaticon-adventure" />
									</div>
									<div className="location">Canada</div>
									<h5>
										<a href="tour-single.html">
											Adventure in the Canadian Rockies,
											Majesty Unleashed
										</a>
									</h5>
									<div className="info clearfix">
										<div className="duration">
											<i className="fa-solid fa-clock" />5
											Days 6 Nights
										</div>
										<div className="persons">
											<i className="fa-solid fa-user" />
											12
										</div>
									</div>
									<div className="bottom-box clearfix">
										<div className="rating">
											<a href="#" className="theme-btn">
												<i className="fa-solid fa-star" />
												<strong>4.8</strong>
												<span className="count">
													4210 Reviews
												</span>
											</a>
										</div>
										<p className="price">
											Start from  
											<span className="amount">$329</span>
										</p>
									</div>
								</div>
							</div>
						</div> */}

						{/* <div className="package-block">
							<div className="inner-box">
								<div className="image-box">
									<div className="image">
										<a href="tour-single.html">
											<img
												src={MaldivesPic}
												alt="Maldives"
											/>
										</a>
									</div>
								</div>
								<div className="lower-box">
									<div className="p-icon">
										<img
											src="assets/images/icons/t-icon-2.png"
											alt
										/>
										<span className="icon flaticon-family" />
									</div>
									<div className="location">Maldives</div>
									<h5>
										<a href="tour-single.html">
											Unveiling the Serenity of Maldivian
											Islands
										</a>
									</h5>
									<div className="info clearfix">
										<div className="duration">
											<i className="fa-solid fa-clock" />5
											Days 6 Nights
										</div>
										<div className="persons">
											<i className="fa-solid fa-user" />2
										</div>
									</div>
									<div className="bottom-box clearfix">
										<div className="rating">
											<a href="#" className="theme-btn">
												<i className="fa-solid fa-star" />
												<strong>4.9</strong>
												<span className="count">
													5330 Reviews
												</span>
											</a>
										</div>
										<p className="price">
											Start from  
											<span className="amount">$699</span>
										</p>
									</div>
								</div>
							</div>
						</div> */}
						{/* <div className="package-block">
							<div className="inner-box">
								<div className="image-box">
									<div className="image">
										<a href="tour-single.html">
											<img
												src={MoroccoPic}
												alt="Morocco"
											/>
										</a>
									</div>
								</div>
								<div className="lower-box">
									<div className="p-icon">
										<img src={TIcon3} />
										<span className="icon flaticon-chinese-temple-1" />
									</div>
									<div className="location">Morocco</div>
									<h5>
										<a href="tour-single.html">
											Marrakech, A Tapestry of Colors and
											Culture
										</a>
									</h5>
									<div className="info clearfix">
										<div className="duration">
											<i className="fa-solid fa-clock" />5
											Days 6 Nights
										</div>
										<div className="persons">
											<i className="fa-solid fa-user" />4
										</div>
									</div>
									<div className="bottom-box clearfix">
										<div className="rating">
											<a href="#" className="theme-btn">
												<i className="fa-solid fa-star" />
												<strong>4.7</strong>
												<span className="count">
													3610 Reviews
												</span>
											</a>
										</div>
										<p className="price">
											Start from  
											<span className="amount">$359</span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="package-block">
							<div className="inner-box">
								<div className="image-box">
									<div className="image">
										<a href="tour-single.html">
											<img
												src={AustraliaPic}
												alt="Australia"
											/>
										</a>
									</div>
								</div>
								<div className="lower-box">
									<div className="p-icon">
										<img src={TIcon1} alt />
										<span className="icon flaticon-adventure" />
									</div>
									<div className="location">Australia</div>
									<h5>
										<a href="tour-single.html">
											Enchanting Great Barrier Reef,
											Aquatic Wonderland
										</a>
									</h5>
									<div className="info clearfix">
										<div className="duration">
											<i className="fa-solid fa-clock" />5
											Days 6 Nights
										</div>
										<div className="persons">
											<i className="fa-solid fa-user" />
											12
										</div>
									</div>
									<div className="bottom-box clearfix">
										<div className="rating">
											<a href="#" className="theme-btn">
												<i className="fa-solid fa-star" />
												<strong>4.5</strong>
												<span className="count">
													7278 Reviews
												</span>
											</a>
										</div>
										<p className="price">
											Start from  
											<span className="amount">$199</span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="package-block">
							<div className="inner-box">
								<div className="image-box">
									<div className="image">
										<a href="tour-single.html">
											<img src={JapanPic} alt="Japan" />
										</a>
									</div>
								</div>
								<div className="lower-box">
									<div className="p-icon">
										<img src={TIcon2} alt />
										<span className="icon flaticon-chinese-temple-1" />
									</div>
									<div className="location">Japan</div>
									<h5>
										<a href="tour-single.html">
											Captivating Tokyo, Serenity and
											Tradition Unite
										</a>
									</h5>
									<div className="info clearfix">
										<div className="duration">
											<i className="fa-solid fa-clock" />7
											Days 8 Nights
										</div>
										<div className="persons">
											<i className="fa-solid fa-user" />
											14
										</div>
									</div>
									<div className="bottom-box clearfix">
										<div className="rating">
											<a href="#" className="theme-btn">
												<i className="fa-solid fa-star" />
												<strong>4.8</strong>
												<span className="count">
													3890 Reviews
												</span>
											</a>
										</div>
										<p className="price">
											Start from  
											<span className="amount">$799</span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="package-block">
							<div className="inner-box">
								<div className="image-box">
									<div className="image">
										<a href="tour-single.html">
											<img src={OmanPic} alt="Oman" />
										</a>
									</div>
								</div>
								<div className="lower-box">
									<div className="p-icon">
										<img src={TIcon3} alt />
										<span className="icon flaticon-adventure" />
									</div>
									<div className="location">Oman</div>
									<h5>
										<a href="tour-single.html">
											Ancient Heritage and Desert
											Adventures
										</a>
									</h5>
									<div className="info clearfix">
										<div className="duration">
											<i className="fa-solid fa-clock" />5
											Days 6 Nights
										</div>
										<div className="persons">
											<i className="fa-solid fa-user" />6
										</div>
									</div>
									<div className="bottom-box clearfix">
										<div className="rating">
											<a href="#" className="theme-btn">
												<i className="fa-solid fa-star" />
												<strong>4.8</strong>
												<span className="count">
													4189 Reviews
												</span>
											</a>
										</div>
										<p className="price">
											Start from  
											<span className="amount">$599</span>
										</p>
									</div>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TourPackage;
