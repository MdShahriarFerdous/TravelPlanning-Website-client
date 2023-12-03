import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./css/bootstrap.css";
import travelMail from "../../assets/images/travel-mail.svg";

const SendMailPage = () => {
	return (
		<>
			<div className="d-flex justify-content-center align-items-center mt-5 p-5">
				<h2>
					A verification link sent to your mail | Please go to your
					mail to verify.
				</h2>
			</div>
			<div className="d-flex justify-content-center align-items-center ">
				<img
					src={travelMail}
					style={{ width: "300px", height: "300px" }}
				/>
			</div>
		</>
	);
};

export default SendMailPage;
