import React from "react";
import UserSideNavbar from "./../navbar/UserSideNavbar";
import { NavLink } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "./Bookmarks.css";

const Bookmarks = () => {
  return (
    <div className="container-fluids">
      <div className="row">
        <div className="col-3 fixed-start">
          <UserSideNavbar />
        </div>

        <div className="col-9 animated fixed-end w-60 bookmarks">
          <div className="pt-5">
            <NavLink to="/" className="mt-8">
              Back to Home
            </NavLink>
            <h2 className="card-title heading mt-4 text-start">
              Bookmark List
            </h2>
          </div>

          <ul className="nav" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-tour-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-tour"
                type="button"
                role="tab"
                aria-controls="pills-tour"
                aria-selected="true"
              >
                Tour
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-hotel-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-hotel"
                type="button"
                role="tab"
                aria-controls="pills-hotel"
                aria-selected="false"
              >
                Hotel
              </button>
            </li>
          </ul>

          <div className="tab-content bookmarks_card" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-tour"
              role="tabpanel"
              aria-labelledby="pills-tour-tab"
            >
              <div className="card border-primary mb-3 mx-1">
                <div className="card-body d-flex justify-content-between">
                  <div className="card_items">
                    <h4 className="font-weight-normal">Venice</h4>
                    <h5 className="font-weight-normal">
                      Romantic Venice, The City of Canals and Love
                    </h5>
                    <p className="card-text font-weight-normal">
                      Venice is generally supposed to be just about the most
                      romantic city on earth. And it’s true, it really is.
                    </p>
                  </div>
                  <div className="icon mt-2">
                    <RiDeleteBin6Line />
                  </div>
                </div>
              </div>
              <div className="card border-primary mb-3 mx-1">
                <div className="card-body d-flex justify-content-between">
                  <div className="card_items">
                    <h4 className="font-weight-normal">Canada</h4>
                    <h5 className="font-weight-normal">
                      Adventure in the CanadianRockies, Majesty Unleashed
                    </h5>
                    <p className="card-text font-weight-normal">
                      Canada is generally supposed to be just about the most
                      romantic city on earth. And it’s true, it really is.
                    </p>
                  </div>
                  <div className="icon mt-2">
                    <RiDeleteBin6Line />
                  </div>
                </div>
              </div>
              <div className="card border-primary mb-3 mx-1">
                <div className="card-body d-flex justify-content-between">
                  <div className="card_items">
                    <h4 className="font-weight-normal">Morocco</h4>
                    <h5 className="font-weight-normal">
                      Marrakech, A Tapestry of Colors and Culture
                    </h5>
                    <p className="card-text font-weight-normal">
                      Morocco is generally supposed to be just about the most
                      romantic city on earth. And it’s true, it really is.
                    </p>
                  </div>
                  <div className="icon mt-2">
                    <RiDeleteBin6Line />
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade show"
              id="pills-hotel"
              role="tabpanel"
              aria-labelledby="pills-hotel-tab"
            >
              <div className="card border-primary mb-3 mx-1">
                <div className="card-body d-flex justify-content-between">
                  <div className="card_items">
                    <h5 className="font-weight-normal">Le Meridien Dhaka</h5>
                    <p className="card-text font-weight-normal">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit aperiam autem eos velit sunt cumque modi corrupti.
                    </p>
                  </div>
                  <div className="icon mt-2">
                    <RiDeleteBin6Line />
                  </div>
                </div>
              </div>
              <div className="card border-primary mb-3 mx-1">
                <div className="card-body d-flex justify-content-between">
                  <div className="card_items">
                    <h5 className="font-weight-normal">
                      Hotel Bonolota International
                    </h5>
                    <p className="card-text font-weight-normal">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit aperiam autem eos velit sunt cumque modi corrupti.
                    </p>
                  </div>
                  <div className="icon mt-2">
                    <RiDeleteBin6Line />
                  </div>
                </div>
              </div>
              <div className="card border-primary mb-3 mx-1">
                <div className="card-body d-flex justify-content-between">
                  <div className="card_items">
                    <h5 className="font-weight-normal">
                      Radisson Blu Dhaka Water Garden
                    </h5>
                    <p className="card-text font-weight-normal">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Impedit aperiam autem eos velit sunt cumque modi corrupti.
                    </p>
                  </div>
                  <div className="icon mt-2">
                    <RiDeleteBin6Line />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
