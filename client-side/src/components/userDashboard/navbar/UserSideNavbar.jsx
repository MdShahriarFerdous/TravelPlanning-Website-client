import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { IoBookmarks, IoLogOutOutline } from "react-icons/io5";
import { TbBrandBooking } from "react-icons/tb";
import { GrBlog } from "react-icons/gr";
import "./SideNavbar.css";

const UserSideNavbar = () => {
  return (
    <div className="container">
      <nav className="sidebar">
        <ul>
          <li>
            <NavLink
              to="/user/dashboard"
              className="list d-block navlink-hover"
            >
              <FaHome style={{ marginRight: "8px" }} /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/profile" className="list d-block navlink-hover">
              <BsFillPersonFill style={{ marginRight: "8px" }} /> Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/booking" className="list d-block navlink-hover">
              <TbBrandBooking style={{ marginRight: "8px" }} /> Booking
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/bookmarks"
              className="list d-block navlink-hover"
            >
              <IoBookmarks style={{ marginRight: "8px" }} /> Bookmarks
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/blogs" className="list d-block navlink-hover">
              <GrBlog style={{ marginRight: "8px" }} /> Blogs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="sign-out"
              className="list signout d-block navlink-hover"
            >
              <IoLogOutOutline style={{ marginRight: "8px" }} />
              Sign Out
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserSideNavbar;
