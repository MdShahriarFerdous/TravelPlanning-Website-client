import { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import TestimonialOne from "./TestimonialOne";
import "./testimonial.css";

const Testimonial = () => {
	const settings = {
		slidesToShow: 3,
		centerMode: false,
		centerPadding: "24px",
		slidesToScroll: 3,
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
					slidesToScroll: 2,
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
	};

	const [testimonial, setTestimonial] = useState([]);

	useEffect(() => {
		axios
			.get(
				"https://travelplanning-website-server.onrender.com/api/v1/testimonial"
			)
			.then((res) => setTestimonial(res.data.message))
			.catch((error) => console.error(error));
	}, []);

	return (
		<div className="testimonials-section">
			<div className="auto-container">
				<div className="title-box centered">
					<div className="subtitle">Testimonials</div>
					<h2>
						<span>What Travelers Say</span>
					</h2>
				</div>
				<div
					className="carousel-box wow fadeInUp"
					data-wow-delay="0ms"
					data-wow-duration="1500ms"
				>
					<div className="bg-grad-left">
						<img
							src="src/assets/images/background/bg-gradient-8.png"
							alt=""
							title=""
						/>
					</div>
					<div className="bg-grad-right">
						<img
							src="src/assets/images/background/bg-gradient-7.png"
							alt=""
							title=""
						/>
					</div>
					<div className="d-elem-1">
						<img
							src="src/assets/images/elements/pink-2.png"
							alt=""
						/>
					</div>
					<div className="testimonial-carousel">
						<Slider {...settings}>
							{testimonial
								? testimonial.map((item, index) => (
										<TestimonialOne
											key={index}
											testimonial={item}
										/>
								  ))
								: "Not loading yet"}
						</Slider>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
