import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import "../../assets/css/responsive.css";
import "../../assets/css/sections/global-settings.css";
import "../../assets/css/style.css";

import "./tourtypes.css";

import Pattern2 from "../../assets/images/background/pattern-2.png";
import Green3 from "../../assets/images/elements/green-3.png";
import Pink1 from "../../assets/images/elements/pink-1.png";

const TourTypes = () => {
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 3,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: true,
	};

	return (
		<div className="tour-types">
			<div
				className="bg-layer"
				style={{
					backgroundImage: `url(${Pattern2})`,
				}}
			/>
			<div className="d-elem-2">
				<img src={Green3} />
			</div>
			<div className="auto-container">
				<div
					className="title-box centered wow fadeInUp"
					data-wow-delay="0ms"
					data-wow-duration="1500ms"
				>
					<div className="subtitle">Categories</div>
					<h2>
						<span>Pick A Tour Type</span>
					</h2>
				</div>
				<div
					className="carousel-box wow fadeInUp"
					data-wow-delay="0ms"
					data-wow-duration="1500ms"
				>
					<div className="d-elem-1">
						<img src={Pink1} />
					</div>
					<Slider {...settings}>
						<div className="tour-type-block bg-blue">
							<div className="inner-box">
								<div className="icon-box">
									<div className="icon">
										<a href="#">
											<span className="icon flaticon-adventure" />
										</a>
									</div>
								</div>
								<h5>
									<a href="#">Adventure</a>
								</h5>
								<a
									href="tour-packages.html"
									className="over-link"
								/>
							</div>
						</div>

						<div className="tour-type-block bg-green">
							<div className="inner-box">
								<div className="icon-box">
									<div className="icon">
										<a href="#">
											<span className="icon flaticon-hiking" />
										</a>
									</div>
								</div>
								<h5>
									<a href="#">Hiking</a>
								</h5>
								<a
									href="tour-packages.html"
									className="over-link"
								/>
							</div>
						</div>

						<div className="tour-type-block bg-yellow">
							<div className="inner-box">
								<div className="icon-box">
									<div className="icon">
										<a href="#">
											<span className="icon flaticon-family" />
										</a>
									</div>
								</div>
								<h5>
									<a href="#">Romance</a>
								</h5>
								<a
									href="tour-packages.html"
									className="over-link"
								/>
							</div>
						</div>

						<div className="tour-type-block bg-red">
							<div className="inner-box">
								<div className="icon-box">
									<div className="icon">
										<a href="#">
											<span className="icon flaticon-chinese-temple-1" />
										</a>
									</div>
								</div>
								<h5>
									<a href="#">Culture</a>
								</h5>
								<a
									href="tour-packages.html"
									className="over-link"
								/>
							</div>
						</div>

						<div className="tour-type-block bg-blue">
							<div className="inner-box">
								<div className="icon-box">
									<div className="icon">
										<a href="#">
											<span className="icon flaticon-adventure" />
										</a>
									</div>
								</div>
								<h5>
									<a href="#">Adventure</a>
								</h5>
								<a
									href="tour-packages.html"
									className="over-link"
								/>
							</div>
						</div>

						<div className="tour-type-block bg-green">
							<div className="inner-box">
								<div className="icon-box">
									<div className="icon">
										<a href="#">
											<span className="icon flaticon-hiking" />
										</a>
									</div>
								</div>
								<h5>
									<a href="#">Hiking</a>
								</h5>
								<a
									href="tour-packages.html"
									className="over-link"
								/>
							</div>
						</div>

						<div className="tour-type-block bg-yellow">
							<div className="inner-box">
								<div className="icon-box">
									<div className="icon">
										<a href="#">
											<span className="icon flaticon-family" />
										</a>
									</div>
								</div>
								<h5>
									<a href="#">Romance</a>
								</h5>
								<a
									href="tour-packages.html"
									className="over-link"
								/>
							</div>
						</div>

						<div className="tour-type-block bg-blue">
							<div className="inner-box">
								<div className="icon-box">
									<div className="icon">
										<a href="#">
											<span className="icon flaticon-adventure" />
										</a>
									</div>
								</div>
								<h5>
									<a href="#">Adventure</a>
								</h5>
								<a
									href="tour-packages.html"
									className="over-link"
								/>
							</div>
						</div>

						<div className="tour-type-block bg-green">
							<div className="inner-box">
								<div className="icon-box">
									<div className="icon">
										<a href="#">
											<span className="icon flaticon-hiking" />
										</a>
									</div>
								</div>
								<h5>
									<a href="#">Hiking</a>
								</h5>
								<a
									href="tour-packages.html"
									className="over-link"
								/>
							</div>
						</div>

						<div className="tour-type-block bg-yellow">
							<div className="inner-box">
								<div className="icon-box">
									<div className="icon">
										<a href="#">
											<span className="icon flaticon-family" />
										</a>
									</div>
								</div>
								<h5>
									<a href="#">Romance</a>
								</h5>
								<a
									href="tour-packages.html"
									className="over-link"
								/>
							</div>
						</div>
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default TourTypes;
