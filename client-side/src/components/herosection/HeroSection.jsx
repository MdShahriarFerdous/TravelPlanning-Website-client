import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import "../../assets/css/sections/global-settings.css";
import BannerArrowPic from "../../assets/images/background/banner-arrow.png";
import BGradient from "../../assets/images/background/bg-gradient-1.png";
import BGImage from "../../assets/images/resources/misc/travel-hero-2.jpg";
import YelloCrown from "../../assets/images/elements/yellow-1.png";
import Search from "../search/Search";

const HeroSection = () => {
	return (
		<div className="banner-section">
			<div className="banner-container">
				<div
					className="banner-arrow wow slideInLeft"
					data-wow-delay="0ms"
					data-wow-duration="1500ms"
				>
					<img src={BannerArrowPic} />
				</div>
				<div className="auto-container">
					<div className="row clearfix">
						<div className="left-col col-lg-6 col-md-12">
							<div className="inner">
								<div className="clearfix">
									<div className="content">
										<div className="bg-image">
											<img src={BGradient} />
										</div>
										<h3>Start Travelling Now</h3>
										<h1>
											<i className="d-icon">
												<img src={YelloCrown} />
											</i>
											Explore the Top Destinations
										</h1>
										<Search />
									</div>
								</div>
							</div>
						</div>
						<div className="right-col col-lg-6 col-md-12">
							<div
								className="inner wow fadeInRight"
								data-wow-delay="0ms"
								data-wow-duration="1500ms"
							>
								<div
									className="image-layer"
									style={{
										backgroundImage: `url(${BGImage})`,
									}}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
