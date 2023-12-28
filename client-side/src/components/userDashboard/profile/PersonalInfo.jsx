import React from "react";
import { FaRegEdit } from "react-icons/fa";
import "./Profile.css";

const PersonalInfo = ({ profile }) => {
	return (
		<div className="container card mt-3 p-5">
			<form className="form-group">
				<div className="header d-flex justify-content-between">
					<h3 className="card-title text-start heading">
						Personal Information
					</h3>
					<div className="Btn">
						<button
							className="ms-auto align-items-center editBtn"
							type="button"
							style={{ background: "none", fontSize: "22px" }}
							onClick={() => profile("edit")}>
							<FaRegEdit className="mb-1" /> Edit
						</button>
					</div>
				</div>

				<div className="flex mb-3 mt-4 info-edit-div">
					<label htmlFor="name" className="form-label">
						Bio
					</label>
					<textarea
						className="form-control p-2"
						id="exampleFormControlTextarea1"
						rows="3"
						placeholder="bio..."
						readOnly></textarea>
				</div>
				<div className="mb-3">
					<label htmlFor="phone" className="form-label">
						Phone Number
					</label>
					<input
						type="text"
						className="form-control my-1 py-3 info-input"
						placeholder="Phone"
						name="phone"
						readOnly
					/>
				</div>

				<div className="mb-3">
					<label htmlFor="address" className="form-label">
						City
					</label>
					<input
						type="text"
						className="form-control my-1 py-3 info-input"
						placeholder="city"
						name="city"
						readOnly
					/>
				</div>

				{/* <button
					type="submit"
					className="btn bg-gradient-primary my-2 w-100 profileBtn">
					Update My Profile
				</button> */}
			</form>
		</div>
	);
};

export default PersonalInfo;
