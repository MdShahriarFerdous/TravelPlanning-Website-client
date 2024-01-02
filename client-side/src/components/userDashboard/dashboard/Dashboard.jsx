import WelcomeImg from "../../../assets/images/welcome/travel-welcome.svg";
import { useAuth } from "../../../context/authContext";
import { FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import MenuOptions from "./MenuOptions";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./Dashboard.css";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <div className="container-fluid pt-5">
      <div className="mt-2 mb-5">
        <NavLink to="/">
          <button type="button" style={{ background: "none" }}>
            <FaArrowLeft className="back-arrow" /> Back to Home
          </button>
        </NavLink>
      </div>

      <p className="mt-5 p-welcome">Welcome, {`${auth?.user?.username}`}</p>
      <h1 className="mt-2 mb-4">Dashboard Overview</h1>

      <div className="promo_card d-flex mb-5">
        <img
          src={WelcomeImg}
          style={{
            height: "40%",
            width: "40%",
            marginLeft: "32px",
          }}
        />
        <h3
          className="title-for-welcome"
          style={{
            width: "40%",
            marginLeft: "48px",
            marginTop: "14px",
          }}
        >
          Unlock a World of Journeys with WeTravel
        </h3>
      </div>
      <MenuOptions />
    </div>
  );
};

export default Dashboard;
