import React, { useState } from "react";
import { ManageForms } from "../styles/Login.styled";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CommonElements from "./CommonElements";

export default function Login() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div>
      <Header />
      <CommonElements>
        <div className="breadCumb">
          <div class="center">
            <p>Home / Journal Articles</p>
          </div>
        </div>
      </CommonElements>
      <ManageForms>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <form className="form">
                <div class="mb-3">
                  <h2>Member Login</h2>
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
                <div className="text-center d-grid gap-2 col-6 mx-auto">
                  <button class="btn btn-primary" type="button">
                    Login
                  </button>
                </div>
                <div className="d-flex gap-4 mt-3 justify-content-center">
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
                        to="/register"
                        activeClassName="active"
                        className="nav-links"
                        onClick={handleClick}
                      >
                        Register
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
                        to="/forget-password"
                        activeClassName="active"
                        className="nav-links"
                        onClick={handleClick}
                      >
                        Forget Password ?
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
