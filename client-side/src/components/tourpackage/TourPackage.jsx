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

import TIcon9 from "../../assets/images/icons/t-icon-9.png";
import TIcon2 from "../../assets/images/icons/t-icon-2.png";
import TIcon3 from "../../assets/images/icons/t-icon-3.png";
import TIcon1 from "../../assets/images/icons/t-icon-1.png";
import { Link, NavLink } from "react-router-dom";
import { TourThumbnailAPI } from "../../backend-services/api";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Arrow(props) {
	const { className, style, onClick } = props;
	return <div className={className} onClick={onClick} />;
}

const iconArray = [TIcon1, TIcon2, TIcon3, TIcon9];
let currentIndex = 0;

const getRandomIcon = () => {
	const randomIndex = currentIndex;
	currentIndex = (currentIndex + 1) % iconArray.length;
	return iconArray[randomIndex];
};

const TourPackage = () => {
	const [thumbnailData, setThumbnailData] = useState([]);
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
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

	useEffect(() => {
		fetchThumbnails();
	}, []);

	const fetchThumbnails = async () => {
		try {
			const data = await TourThumbnailAPI();
			if (!data) {
				console.error("Thumbnail Data fetching fail", data.message);
			} else if (data.status === "Success") {
				setThumbnailData(data?.tourPackageLists);
			}
		} catch (error) {
			console.error(error);
			toast.error(error.response.data.error.message);
		}
	};
	return (
		<>
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
								{thumbnailData.map((thumbnail) => (
									<div
										key={thumbnail.tourInfoId}
										className="package-block"
									>
										<Link
											to={`/tour-package/${thumbnail.tourInfoId}`}
										>
											<div className="inner-box">
												<div className="image-box">
													<div className="image">
														<img
															src={
																thumbnail.image
															}
														/>
													</div>
												</div>
												<div className="lower-box">
													<div className="p-icon">
														<img
															src={getRandomIcon()}
														/>
														<span className="icon flaticon-family" />
													</div>
													<div className="location">
														{thumbnail.locationName}
													</div>
													<h5>
														{thumbnail.tourTitle}
													</h5>
													<div className="info clearfix">
														<div className="duration">
															<i className="fa-solid fa-clock" />
															{
																thumbnail.durations
															}
														</div>
														<div className="persons">
															<i className="fa-solid fa-user" />
															{
																thumbnail.peopleSize
															}
														</div>
													</div>
													<div className="bottom-box clearfix">
														<div className="rating">
															<a
																href="#"
																className="theme-btn"
															>
																<i className="fa-solid fa-star" />
																<strong>
																	{
																		thumbnail.ratings
																	}
																</strong>
																&ensp;
																<span className="count">
																	{
																		thumbnail.reviewsCount
																	}{" "}
																	Reviews
																</span>
															</a>
														</div>
														<p className="price">
															Start from  
															<span className="amount">
																${" "}
																{
																	thumbnail.price
																}
															</span>
														</p>
													</div>
												</div>
											</div>
										</Link>
									</div>
								))}
							</Slider>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TourPackage;
