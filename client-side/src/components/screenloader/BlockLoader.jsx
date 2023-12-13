import { RotatingLines } from "react-loader-spinner";

const BlockLoader = () => {
	return (
		<div className="d-flex justify-content-center">
			<RotatingLines
				strokeColor="#ff531f"
				strokeWidth="4"
				animationDuration="0.75"
				width="80"
				visible={true}
			/>
		</div>
	);
};

export default BlockLoader;
