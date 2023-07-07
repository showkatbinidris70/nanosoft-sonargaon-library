import React, { useState } from "react";
import { ManageForms } from "../styles/Login.styled";
import Header from "./Header";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

export default function ForgetPassword() {
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
                <div class="mb-1">
                  <h2>Forget Password</h2>
                  <hr />
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

                <div className="text-center d-grid gap-2 col-6 mx-auto">
                  <button class="btn btn-secondary" type="button">
                    Send
                  </button>
                </div>
                <div className="d-flex mt-3 pt-2 bg-light justify-content-around border-top">
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
