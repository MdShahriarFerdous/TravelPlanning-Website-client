import { NavLink } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TbArticle } from "react-icons/tb";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./SideNavbar.css";

const UserSideNavbar = () => {
	return (
		<div className="container">
			<nav className="sidebar">
				<ul className="navbar-ul">
					<li>
						<NavLink
							to="/user/dashboard"
							className="list d-block navlink-hover"
						>
							<MdOutlineDashboard className="ic dashboard-icon" />{" "}
							Dashboard
						</NavLink>
					</li>
					<li>
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

					<li>
						<NavLink
							to="/user/all-bookings"
							className="list d-block navlink-hover"
						>
							<FaRegCalendarCheck className="ic book-icon" />
							My Bookings
						</NavLink>
					</li>

					<li>
						<NavLink
							to="/user/bookmarked-hotels"
							className="list d-block navlink-hover"
						>
							<FaRegHeart className="ic save-icon" />
							Hotel Bookmarks
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/user/bookmarked-tours"
							className="list d-block navlink-hover"
						>
							<FaRegHeart className="ic save-icon" />
							Tour Bookmarks
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/user/blogs"
							className="list d-block navlink-hover"
						>
							<TbArticle className="ic blog-icon" /> Blogs
						</NavLink>
					</li>
					<li>
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
