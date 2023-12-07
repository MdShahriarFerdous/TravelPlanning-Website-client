import loader from "../../assets/images/loader/loader.svg";
import "./blockloader.css";

const BlockLoader = () => {
	return (
		<div>
			<div className="ProcessingDivBlock">
				<div className="center-screenBlock ">
					<img className="loader-sizeBlock" src={loader} />
				</div>
			</div>
		</div>
	);
};

export default BlockLoader;
