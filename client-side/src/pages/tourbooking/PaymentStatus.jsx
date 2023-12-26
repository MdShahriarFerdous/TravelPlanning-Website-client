import { FaArrowLeft } from "react-icons/fa";
import LogoImgs from "../../assets/images/logo-nav.png";
import "./tourbooking.css";
import SuccessfulAnimation from "../../assets/animation-json/successful.json";
import Lottie from "lottie-react";
import { NavLink } from "react-router-dom";
const PaymentStatus = () => {
	return (
		<div className="container">
			<div className="home-back-btn mt-5 mb-5">
				<NavLink to="/">
					<button
						type="button"
						className="btn btn-outline-secondary btn-back">
						{" "}
						<FaArrowLeft className="back-arrow" /> Back to Home
					</button>
				</NavLink>
			</div>
			<div className="row">
				<div className="col-lg-6 m-auto">
					<div className="card p-5 status-card">
						<div
							className="m-auto mt-2 mb-4"
							style={{ width: "160px" }}>
							<Lottie
								loop={true}
								animationData={SuccessfulAnimation}
							/>
						</div>
						<div className="container text-center">
							<h3 className="mb-4">Payment Successful!</h3>
							<p className="mb-4">
								Your payment invoice will be added in your
								dashboard booking section.
							</p>
							<p className="p-query mb-4">
								If you have any questions or quiries feel free
								to contact us.
							</p>
							<p className="">Thanks for being with us.</p>
						</div>
						<div className="text-center mt-4">
							<img src={LogoImgs} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentStatus;
