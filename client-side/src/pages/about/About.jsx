import Navbar from "./../../components/navbar/Navbar";
import Footer from "./../../components/footer/Footer";

import AboutImage from "../../assets/images/about-us/about.svg";
import Gradient2Img from "../../assets/images/background/bg-gradient-2.png";
import Green1Img from "../../assets/images/elements/green-1.png";
import Icon1 from "../../assets/images/icons/f-icon-1.png";
import Icon2 from "../../assets/images/icons/f-icon-2.png";
import Gradient26Img from "../../assets/images/background/bg-gradient-26.png";
import Yellow3 from "../../assets/images/elements/yellow-3.png";
import Pink4 from "../../assets/images/elements/pink-4.png";
import TicketImg from "../../assets/images/resources/misc/tickets.jpg";
import ManHikingImg from "../../assets/images/resources/misc/man-hiking-2.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import "../../assets/css/sections/global-settings.css";

import "./about.css";

const About = () => {
	return (
		<>
			<Navbar />
			<div
				className="container"
				style={{ marginTop: "220px", marginBottom: "120px" }}>
				<div className="row">
					<div className="col-lg-6">
						<p className="about-slogan">
							We're Making Work Meaningful for Our Customers,
							Giving the Easiest Solution for Travel Planning.
						</p>
					</div>

					<div className="col-lg-6">
						<img src={AboutImage} />
					</div>
				</div>
			</div>

			<div className="mt-4" style={{ marginBottom: "120px" }}>
				<div className="about-section alternate">
					<div className="bg-grad-right">
						<img src={Gradient2Img} />
					</div>

					<div className="container-fluid px-3">
						<div className="auto-container">
							<div className="row clearfix">
								<div className="text-col col-lg-6 col-md-12 col-sm-12">
									<div
										className="inner wow fadeInRight"
										data-wow-duration="1500ms"
										data-wow-delay="0ms">
										<div className="d-elem-1">
											<img src={Green1Img} />
										</div>
										<div className="title-box">
											<div className="subtitle">
												Let’s Explore the World
											</div>
											<h2>
												<span>
													We Make Your Travel More
													Enjoyable
												</span>
											</h2>
											<p className="travilo-text">
												Our dedicated team is committed
												to providing you with
												exceptional experiences,
												personalized itineraries, and
												expert guidance, ensuring your
												journey is filled with
												unforgettable moments.
											</p>
										</div>
										<div className="features">
											<div className="row clearfix">
												<div className="f-block col-lg-6 col-md-6 col-sm-12">
													<div className="inner-box">
														<div className="icon">
															<img src={Icon1} />
														</div>
														<h6>
															Award winning tour
															&amp; travel
															arranger
														</h6>
													</div>
												</div>
												<div className="f-block col-lg-6 col-md-6 col-sm-12">
													<div className="inner-box">
														<div className="icon">
															<img src={Icon2} />
														</div>
														<h6>
															Most popular booking
															solution provider
														</h6>
													</div>
												</div>
											</div>
										</div>
										<div className="lower-text">
											<div className="travilo-text">
												<ul>
													<li>
														<FontAwesomeIcon
															icon={faArrowRight}
															style={{
																color: "#ff5528",
																marginRight:
																	"8px",
															}}
														/>
														Inspiring travel
														experiences
													</li>
													<li>
														<FontAwesomeIcon
															icon={faArrowRight}
															style={{
																color: "#ff5528",
																marginRight:
																	"8px",
															}}
														/>
														Expertly curated
														itineraries
													</li>
													<li>
														<FontAwesomeIcon
															icon={faArrowRight}
															style={{
																color: "#ff5528",
																marginRight:
																	"8px",
															}}
														/>
														Personalized guidance
														and support
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div className="image-col col-lg-6 col-md-12 col-sm-12">
									<div
										className="inner wow fadeInLeft"
										data-wow-duration="1500ms"
										data-wow-delay="0ms">
										<div className="bg-grad-left">
											<img src={Gradient26Img} />
										</div>
										<div className="d-elem-1">
											<img src={Yellow3} />
										</div>
										<div className="d-elem-2">
											<img src={Pink4} />
										</div>
										<div className="image-box clearfix">
											<div className="image">
												<img
													src={TicketImg}
													alt="Tickets"
													title="Tickets"
												/>
											</div>
											<div className="image">
												<img src={ManHikingImg} />
											</div>
										</div>
										<div className="exp">
											<span className="count">12</span>{" "}
											Successful
											<br />
											Years
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default About;
