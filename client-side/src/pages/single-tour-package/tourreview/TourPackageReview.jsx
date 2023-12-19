import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./review.css";
import ProfileImg from "../../../assets/images/profile-image/profileImage.png";
import { FaStar } from "react-icons/fa";

const TourPackageReview = () => {
	return (
		<div className="container" style={{ marginTop: "200px" }}>
			<h3 className="text-center">Reviews</h3>
			<div className="d-flex justify-content-center align-items-center pt-2">
				<h5>4.5 star</h5>
				<p className="total-reviews-count">(16 reviews)</p>
			</div>

			<div className="row mt-4">
				<div className="col-lg-6">
					<div className="card p-3">
						<div className="row">
							<div className="col-lg-9">
								<div className="d-flex">
									<img
										src={ProfileImg}
										style={{
											width: "40px",
											height: "40px",
										}}
									/>
									<p className="p-user-name">John Smith</p>
								</div>
							</div>
							<div className="col-lg-3">
								<p style={{ marginTop: "6px" }}>
									Rating: 5{" "}
									<FaStar
										style={{
											marginBottom: "3px",
											color: "#DC8817",
										}}
									/>
								</p>
							</div>
						</div>
						<div className="row mt-2">
							<div className="col-lg-11">
								<p className="px-2">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="card p-3">
						<div className="row">
							<div className="col-lg-9">
								<div className="d-flex">
									<img
										src={ProfileImg}
										style={{
											width: "40px",
											height: "40px",
										}}
									/>
									<p className="p-user-name">John Smith</p>
								</div>
							</div>
							<div className="col-lg-3">
								<p style={{ marginTop: "6px" }}>
									Rating: 5{" "}
									<FaStar
										style={{
											marginBottom: "3px",
											color: "#DC8817",
										}}
									/>
								</p>
							</div>
						</div>
						<div className="row mt-2">
							<div className="col-lg-11">
								<p className="px-2">
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit, sed do eiusmod tempor
									incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud
									exercitation ullamco
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TourPackageReview;
