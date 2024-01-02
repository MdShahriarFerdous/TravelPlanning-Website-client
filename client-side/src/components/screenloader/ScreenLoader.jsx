import Lottie from "lottie-react";
import FlyLoader from "../../assets/animation-json/fly.json";
import "./loader.css";

const ScreenLoader = () => {
	return (
		<div>
			<div className="ProcessingDiv">
				<div className="center-screen">
					<Lottie
						loop={true}
						animationData={FlyLoader}
						className="loader-size"
					/>
				</div>
			</div>
		</div>
	);
};

export default ScreenLoader;
