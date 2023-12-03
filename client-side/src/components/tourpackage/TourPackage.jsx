import Slider from "react-slick";

import "../../assets/css/responsive.css";
import "../../assets/css/sections/global-settings.css";
import "../../assets/css/lib/slick.min.css";
import "../../assets/css/style.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./package.css";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
							<div className="d-flex">
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
											<div className="location">
												Italy
											</div>
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
											<div className="location">
												Italy
											</div>
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
											<div className="location">
												Italy
											</div>
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
						</div>
						<div className="carousel-item">
							<div className="d-flex">
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
											<div className="location">
												Italy
											</div>
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
											<div className="location">
												Italy
											</div>
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
											<div className="location">
												Italy
											</div>
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
						</div>
					</div>
					
					<button
						className="carousel-control-prev"
						type="button"
						data-bs-target="#carouselExampleControls"
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="true"
						/>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next"
						type="button"
						data-bs-target="#carouselExampleControls"
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="true"
						/>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default TourPackage;
