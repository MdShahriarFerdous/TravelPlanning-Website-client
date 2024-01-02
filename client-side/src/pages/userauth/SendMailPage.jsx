import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./css/bootstrap.css";
import "./css/general.css";
import travelMail from "../../assets/images/travel-mail.svg";

const SendMailPage = () => {
	return (
		<>
			<div className="d-flex justify-content-center align-items-center mt-5 p-5">
				<h3 className="go-to-mail-text">
					A verification link sent to your mail. Please go to your
					mail to verify. You can close this tab. After clicking the
					link from mail you will redirect to our website again. Happy
					Travel!
				</h3>
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
