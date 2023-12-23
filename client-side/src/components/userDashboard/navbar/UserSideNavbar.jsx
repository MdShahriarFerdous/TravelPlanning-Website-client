import { NavLink, useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TbArticle } from "react-icons/tb";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./SideNavbar.css";
import { useAuth } from "../../../context/authContext";

const UserSideNavbar = () => {
	const [auth, setAuth] = useAuth();
	const navigate = useNavigate();

	const handleClick = () => {
		setAuth({ ...auth, user: null, token: "" });
		localStorage.removeItem("auth");
		navigate("/");
	};

	return (
		<div className="container">
			<nav className="sidebar">
				<ul className="navbar-ul">
					<li className="item-menu-el">
						<NavLink
							to="/user/dashboard"
							className="list d-block navlink-hover"
						>
							<MdOutlineDashboard className="ic dashboard-icon" />{" "}
							Dashboard
						</NavLink>
					</li>

					<li className="item-menu-el">
						<NavLink
							to="/user/profile"
							className="list d-block navlink-hover"
						>
							<IoPersonOutline className="ic profile-icon" />{" "}
							Profile
						</NavLink>
					</li>

					{/* <li>
						<NavLink
							to="/user/hotel-booking-lists"
							className="list d-block navlink-hover"
						>
							<FaRegCalendarCheck
								style={{ marginRight: "8px" }}
								className="ic book-icon"
							/>
							Hotel Booking
						</NavLink>
					</li>

					<li>
						<NavLink
							to="/user/tour-booking-lists"
							className="list d-block navlink-hover"
						>
							<FaRegCalendarCheck
								style={{ marginRight: "8px" }}
								className="ic book-icon"
							/>
							Tour Booking
						</NavLink>
					</li> */}

					<li className="item-menu-el">
						<NavLink
							to="/user/all-bookings"
							className="list d-block navlink-hover"
						>
							<FaRegCalendarCheck className="ic book-icon" />
							My Bookings
						</NavLink>
					</li>

					<li className="item-menu-el">
						<NavLink
							to="/user/bookmarked-hotels"
							className="list d-block navlink-hover"
						>
							<FaRegHeart className="ic save-icon" />
							Bookmarked Hotels
						</NavLink>
					</li>

					<li className="item-menu-el">
						<NavLink
							to="/user/bookmarked-tours"
							className="list d-block navlink-hover"
						>
							<FaRegHeart className="ic save-icon" />
							Bookmarked Tours
						</NavLink>
					</li>

					<li className="item-menu-el">
						<NavLink
							to="/user/blogs"
							className="list d-block navlink-hover"
						>
							<TbArticle className="ic blog-icon" /> My Blogs
						</NavLink>
					</li>

					<li className="item-menu-el" onClick={handleClick}>
						<NavLink
							to="sign-out"
							className="list signout d-block navlink-hover"
						>
							<IoLogOutOutline className="ic logout-icon" />
							Sign Out
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default UserSideNavbar;
