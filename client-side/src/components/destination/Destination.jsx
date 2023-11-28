import React from "react";
import "../../assets/css/responsive.css";
import "../../assets/css/sections/global-settings.css";
import "../../assets/css/style.css";
// import "../../assets/css/lib/slick.min.css";

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

const Destination = () => {
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
											<a href="destination-single.html">
												India
											</a>
										</h4>
										<div className="tour-count">
											<span>280 Tour Packages</span>
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
						{/* .dest-block-one */}
						{/*Block*/}
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
						{/* .dest-block-one */}
						{/*Block*/}
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
