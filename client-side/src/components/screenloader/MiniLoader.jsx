import { RotatingLines } from "react-loader-spinner";

export default function MiniLoader() {
	return (
		<div className="d-flex justify-content-center">
			<RotatingLines
				strokeColor="#ff5522"
				strokeWidth="5"
				animationDuration="0.75"
				width="80"
				visible={true}
			/>
		</div>
	);
}
