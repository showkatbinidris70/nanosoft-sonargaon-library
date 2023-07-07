import React, { useState } from "react";
import { ManageForms } from "../styles/Login.styled";
import Header from "./Header";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

export default function Register() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div>
      <Header />
      <ManageForms>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <form className="form">
                <div class="mb-3">
                  <h2>Member Registration</h2>
                  <hr />
                </div>
                <div class="mb-3">
                  <label for="name" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Enter Name"
                  />
                </div>
                <div class="mb-3">
                  <label for="mobile" class="form-label">
                    Mobile
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Enter Mobile Number"
                  />
                </div>
                <div class="mb-3">
                  <label for="formGroupExampleInput" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Email ID"
                  />
                </div>

                <div class="mb-3">
                  <label for="address" class="form-label">
                    Address
                  </label>
                  <textarea
                    className="col-12"
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput"
                    placeholder="Enter Address"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="formGroupExampleInput2" class="form-label">
                    Password
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Password"
                  />
                </div>
                <div class="mb-3">
                  <label for="confirm-password" class="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Confirm Password"
                  />
                </div>
                <div className="text-center d-grid gap-2 col-6 mx-auto">
                  <button class="btn btn-primary" type="button">
                    Login
                  </button>
                </div>
                <div className="d-flex mt-3 pt-2 justify-content-between border-top">
                  <div className="">
                    <a
                      class="nav-link"
                      data-toggle="dropdown"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                    >
                      <NavLink
                        exact
                        to="/login"
                        activeClassName="active"
                        className="nav-links"
                        onClick={handleClick}
                      >
                        Login
                      </NavLink>
                    </a>
                  </div>
                  <div className="">
                    <a
                      class="nav-link"
                      data-toggle="dropdown"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                    >
                      <NavLink
                        exact
                        to="/"
                        activeClassName="active"
                        className="nav-links"
                        onClick={handleClick}
                      >
                        Cancel
                      </NavLink>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </ManageForms>
      <Footer />
    </div>
  );
}
