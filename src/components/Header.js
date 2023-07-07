import React, { useState } from "react";
import { RxDividerVertical } from "react-icons/rx";
import { HeaderSection } from "../styles/Header.styled";
import { NavLink } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { BiMenu } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [show, setShow] = useState(true);

  return (
    <div>
      <HeaderSection>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              {/*  */}
              <div className="d-flex justify-content-between">
                <div className="">
                  <nav class="navbar navbar-expand-lg">
                    <button
                      class="navbar-toggler navber-text-color"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                    >
                      <span>
                        <GiHamburgerMenu className="toggler-icon" />
                      </span>
                    </button>

                    <div
                      class="collapse navbar-collapse btn-controls"
                      id="navbarSupportedContent"
                    >
                      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            <i class="fa fa-home">
                              <NavLink
                                exact
                                to="/"
                                activeClassName="active"
                                className="nav-links text-decoration-none navbar-home"
                                onClick={handleClick}
                              >
                                {" "}
                                HOME
                              </NavLink>
                            </i>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            <NavLink
                              exact
                              to="/books"
                              activeClassName="active"
                              className="nav-links text-decoration-none navbar-home"
                              onClick={handleClick}
                            >
                              BOOKS
                            </NavLink>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            <NavLink
                              exact
                              to="/journal"
                              activeClassName="active"
                              className="nav-links text-decoration-none navbar-home"
                              onClick={handleClick}
                            >
                              JOURNAL ARTICLES
                            </NavLink>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            <NavLink
                              exact
                              to="/newspaper"
                              activeClassName="active"
                              className="nav-links text-decoration-none navbar-home"
                              onClick={handleClick}
                            >
                              NEWSPAPER ARTICLES
                            </NavLink>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            <NavLink
                              exact
                              to="/photo"
                              activeClassName="active"
                              className="nav-links text-decoration-none navbar-home"
                              onClick={handleClick}
                            >
                              PHOTO
                            </NavLink>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            <NavLink
                              exact
                              to="/video"
                              activeClassName="active"
                              className="nav-links text-decoration-none navbar-home"
                              onClick={handleClick}
                            >
                              VIDEO
                            </NavLink>
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#">
                            <NavLink
                              exact
                              to="/contact"
                              activeClassName="active"
                              className="nav-links text-decoration-none navbar-home"
                              onClick={handleClick}
                            >
                              CONTACT US
                            </NavLink>
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* <div class="d-flex align-items-center showkat">
                  <a class="link-secondary me-3" href="#">
                    {!show ? (
                      <div className="modal-header">
                        <button
                          type="button"
                          class="btn text-white"
                          data-bs-toggle="modal"
                          data-bs-target="#myModal"
                          data-bs-dismiss="modal"
                          onClick={() => setShow(show)}
                        ></button>
                      </div>
                    ) : (
                      <div className="modal-header">
                        <button
                          type="button"
                          class="btn"
                          data-bs-toggle="modal"
                          data-bs-target="#myModal"
                          onClick={() => setShow(!show)}
                        >
                          <i class="fa fa-search icons search-icon-btn"></i>
                        </button>
                      </div>
                    )}
                  </a>

                  <hr />
                  <a class="link-secondary me-3" href="#">
                    <RxDividerVertical className="text-dark" />
                    <i class="fa fa-user-circle icons">
                      <NavLink
                        exact
                        to="/login"
                        activeClassName="active"
                        className="nav-links text-decoration"
                        onClick={handleClick}
                      >
                        {" "}
                        LOGIN
                      </NavLink>
                    </i>
                  </a>
                </div> */}
                    {/* Modal Start here */}
                    <div class="modal fade" id="myModal">
                      <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                          <div className="modal-header">
                            {!show ? (
                              <button
                                type="button"
                                class="close-btn-contorl"
                                data-bs-dismiss="modal"
                                data-bs-toggle="modal"
                                data-bs-target="#myModal"
                                onClick={() => setShow(!show)}
                              >
                                {" "}
                                <ImCross />
                              </button>
                            ) : (
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                data-bs-toggle="modal"
                                data-bs-target="#myModal"
                                onClick={() => setShow(show)}
                              >
                                {" "}
                                <i class="fa fa-search icons search-icon-btn"></i>
                              </button>
                            )}
                          </div>

                          <div class="modal-body">
                            <form action="/action_page.php">
                              <div class="input-group input-form">
                                <input
                                  type="text"
                                  class="form-control btn-radius"
                                  placeholder="Search book by Title, Category, Writer Name, Publicatons Name"
                                  name="search"
                                />
                                <div class="input-group-btn">
                                  <button
                                    class="btn btn-success btn-radius"
                                    type="submit"
                                  >
                                    Search
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Modal end here */}
                  </nav>
                </div>
                <div className="box-size-control mt-2">
                  <div class="d-flex align-items-center showkat">
                    <a class="link-secondary me-3" href="#">
                      {!show ? (
                        <div className="modal-header">
                          <button
                            type="button"
                            class="btn text-white"
                            data-bs-toggle="modal"
                            data-bs-target="#myModal"
                            data-bs-dismiss="modal"
                            onClick={() => setShow(show)}
                          ></button>
                        </div>
                      ) : (
                        <div className="modal-header">
                          <button
                            type="button"
                            class="btn"
                            data-bs-toggle="modal"
                            data-bs-target="#myModal"
                            onClick={() => setShow(!show)}
                          >
                            <i class="fa fa-search icons search-icon-btn"></i>
                          </button>
                        </div>
                      )}
                    </a>

                    <hr />
                    <a class="link-secondary me-3" href="#">
                      <RxDividerVertical className="text-dark" />
                      <i class="fa fa-user-circle icons">
                        <NavLink
                          exact
                          to="/login"
                          activeClassName="active"
                          className="nav-links text-decoration"
                          onClick={handleClick}
                        >
                          {" "}
                          LOGIN
                        </NavLink>
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </HeaderSection>
    </div>
  );
}
