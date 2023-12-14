import React from "react";
import { useAuth } from "../../../context/authContext";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./Dashboard.css";

const Dashboard = () => {
  const [auth, setAuth] = useAuth();
  return (
    <div className="container-fluids pt-5">
      <NavLink to="/" className="mt-8">
        Back to Home
      </NavLink>

      <h2 className="mt-4">Dashboard</h2>
      <div className="promo_card">
        <h1>Welcome back {`${auth?.user?.username}`}</h1>
        <span>Lorem ipsum dolor sit amet.</span>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default Dashboard;
