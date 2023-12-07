import loader from "../../assets/images/loader/loader.svg";
import "./loader.css";

const ScreenLoader = () => {
	return (
		<div>
			<div className="ProcessingDiv">
				<div className="center-screen">
					<img className="loader-size" src={loader} />
				</div>
			</div>
		</div>
	);
};

export default ScreenLoader;
