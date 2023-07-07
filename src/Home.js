import React, { useState } from "react";
import "./dist/style.css";
import {
  AboutUsSection,
  BottomFooter,
  CustomFooterSection,
  HomepageHeaderSection,
  ImageCarousel,
} from "./styles/HomePageHeader.styled";
import { NavLink } from "react-router-dom";
import SliderImg1 from "./dist/images/1.jpg";
import SliderImg2 from "./dist/images/2.jpg";
import SliderImg3 from "./dist/images/3.jpg";
import SliderImg4 from "./dist/images/4.jpg";
import SliderImg5 from "./dist/images/5.jpg";
import SliderImg6 from "./dist/images/6.jpg";
import SliderImg7 from "./dist/images/7.jpg";
import MuseumLibLogo from "./dist/images/museum-lib-logo.jpeg";
import GovLogo from "./dist/images/govlogo.png";
import {
  BsEnvelopeFill,
  BsTelephoneFill,
  BsGeoAltFill,
  BsGrid3X3GapFill,
} from "react-icons/bs";
import { HeaderSection } from "./styles/Home.styled";
export default function Home() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div>
      {/* <nav class="navbar navbar-expand-lg">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Search" />
          <button class="btn btn-success" type="submit">
            Go
          </button>
        </div>
      </nav> */}

      <HomepageHeaderSection>
        <div className="container-fluid">
          <div className="navbar-container">
            <div className="row">
              <nav class="navbar navbar-expand-lg">
                <div className=""></div>

                <div
                  class="collapse navbar-collapse left-navbar"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items">
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <i class="fa fa-home"></i> HOME
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <NavLink
                          exact
                          to="/books"
                          activeClassName="active"
                          className="nav-links text-white text-decoration-none"
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
                          className="nav-links text-white text-decoration-none"
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
                          className="nav-links text-white text-decoration-none"
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
                          className="nav-links text-white text-decoration-none"
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
                          className="nav-links text-white text-decoration-none"
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
                          className="nav-links text-white text-decoration-none"
                          onClick={handleClick}
                        >
                          CONTACT US
                        </NavLink>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="d-flex align-items-center">
                  <form class="d-flex input-group-sm  ">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Search book by Title, Category, Writer Name, Publicatons Name"
                    />
                    <button
                      class="btn btn-default border border-1 border-radious-50 button-control"
                      type="submit"
                    >
                      <i class="fa fa-search icons"></i>
                    </button>
                  </form>

                  <a
                    class="link-secondary ms-3 right-navbar text-decoration-none"
                    href="#"
                  >
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
                  </a>
                </div>
                <div className="nav-item dropdown dropdown-control">
                  <button
                    class="navbar-toggler border border-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-bs-target="#navbarDropdown"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="text-white fs-2 border-0">
                      <BsGrid3X3GapFill />
                    </span>
                  </button>
                  <ul
                    class="dropdown-menu me-auto mb-2 mb-lg-0 dropdown-menu-control"
                    aria-labelledby="navbarDropdown"
                  >
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <i class="fa fa-home"></i> HOME
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        <NavLink
                          exact
                          to="/books"
                          activeClassName="active"
                          className="nav-links text-white text-decoration-none"
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
                          className="nav-links text-white text-decoration-none"
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
                          className="nav-links text-white text-decoration-none"
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
                          className="nav-links text-white text-decoration-none"
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
                          to="/photo"
                          activeClassName="active"
                          className="nav-links text-white text-decoration-none"
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
                          to="/photo"
                          activeClassName="active"
                          className="nav-links text-white text-decoration-none"
                          onClick={handleClick}
                        >
                          CONTACT US
                        </NavLink>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </HomepageHeaderSection>

      <ImageCarousel>
        <div
          id="carouselBasicExample"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={SliderImg1}
                alt="There is an image"
                class="image-carousel"
              />
              <div class="carousel-caption d-md-block overlay">
                <img
                  src={MuseumLibLogo}
                  alt="There is an image"
                  className="logos"
                />

                <img src={GovLogo} alt="There is an image" className="logos" />

                <h2>Bangladesh Folk Art & Crafts Foundation</h2>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={SliderImg2}
                alt="There is an image"
                class="image-carousel"
              />
              <div class="carousel-caption d-md-block overlay">
                <img
                  src={MuseumLibLogo}
                  alt="There is an image"
                  className="logos"
                />

                <img src={GovLogo} alt="There is an image" className="logos" />

                <h2>Bangladesh Folk Art & Crafts Foundation</h2>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={SliderImg3}
                alt="There is an image"
                class="image-carousel"
              />
              <div class="carousel-caption d-md-block overlay">
                <img
                  src={MuseumLibLogo}
                  alt="There is an image"
                  className="logos"
                />

                <img src={GovLogo} alt="There is an image" className="logos" />

                <h2>Bangladesh Folk Art & Crafts Foundation</h2>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={SliderImg4}
                alt="There is an image"
                class="image-carousel"
              />
              <div class="carousel-caption d-md-block overlay">
                <img
                  src={MuseumLibLogo}
                  alt="There is an image"
                  className="logos"
                />

                <img src={GovLogo} alt="There is an image" className="logos" />

                <h2>Bangladesh Folk Art & Crafts Foundation</h2>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={SliderImg5}
                alt="There is an image"
                class="image-carousel"
              />
              <div class="carousel-caption d-md-block overlay">
                <img
                  src={MuseumLibLogo}
                  alt="There is an image"
                  className="logos"
                />

                <img src={GovLogo} alt="There is an image" className="logos" />

                <h2>Bangladesh Folk Art & Crafts Foundation</h2>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={SliderImg6}
                alt="There is an image"
                class="image-carousel"
              />
              <div class="carousel-caption d-md-block overlay">
                <img
                  src={MuseumLibLogo}
                  alt="There is an image"
                  className="logos"
                />

                <img src={GovLogo} alt="There is an image" className="logos" />

                <h2>Bangladesh Folk Art & Crafts Foundation</h2>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src={SliderImg7}
                alt="There is an image"
                class="image-carousel"
              />
              <div class="carousel-caption d-md-block overlay">
                <img
                  src={MuseumLibLogo}
                  alt="There is an image"
                  className="logos"
                />

                <img src={GovLogo} alt="There is an image" className="logos" />

                <h2>Bangladesh Folk Art & Crafts Foundation</h2>
              </div>
            </div>
          </div>
        </div>
      </ImageCarousel>

      <AboutUsSection>
        <div className="container pt-5 pb-5">
          <h2 className="text-center pt-5 col-md-12 col-sm-12">
            About Bangladesh Folk Art & Crafts Foundation
          </h2>
          <div className="row p-3">
            <div className="col-md-6 col-sm-6">
              <p>
                Traditional folk art and crafts of Bangladesh are an integral
                part of our culture. This is a symbol of our ethnic identity and
                traditions of the past.The continuity of folk lifestyle of
                Bengal, Visual aesthetics in life & our dreams are all embodied
                in the craft. Bangladesh Folk Arts and Crafts Foundation was
                established in 1975 for looking back at our past, To base the
                present on a solid foundation of the past and finding the right
                destination for the cultural future. Sonargaon a glorious
                ancient township of Bengal's history. Sonargaon was the capital
                of ancient Bengal for three hundred years
              </p>
            </div>
            <div className="col-md-6 col-sm-6">
              <img
                src={SliderImg4}
                alt="There is an image"
                className="w-100 h-75"
              />
            </div>
          </div>
          <div className="row p-3">
            <div className="col-md-6 col-sm-6">
              {" "}
              <img
                src={SliderImg3}
                alt="There is an image"
                className="w-100 h-75"
              />
            </div>
            <div className="col-md-6 col-sm-6">
              <p>
                Sonargaon cannot be separated from the rulers of the Sultan
                period, Baro Bhuiyan Chief Isa Khan and the famous Muslin. With
                the advice & financial support of Father of the Nation
                Bangabandhu Sheikh Mujibur Rahman & sincere efforts from
                Shilpacharjaya Jaynul Abedin perfectly choose the historic
                Sonargaon to look back on our golden tradition. Its clearly
                mentioned about the encouragement of crafts in Bangladesh Folk
                Art and Crafts Foundation Act 1998 (1998 Act No. 8 of the Act)
                Section 7 (f) of sub-section. The main objective of this
                Foundation is to revitalize folk art and crafts through
                collecting, preserving, displaying, researching, sponsoring,
                promoting etc.
              </p>
            </div>
          </div>
        </div>
      </AboutUsSection>

      <CustomFooterSection>
        <div className="overlay">
          <div className="container">
            <div className="row text-dark custom-footer mt-5 opacities">
              <div className="col-md-4 col-sm-12 text-style">
                <ul>
                  <li>Contact Us</li>
                  <li>
                    <BsTelephoneFill /> 09604 000 777
                  </li>
                  <li>
                    <BsEnvelopeFill /> director.s.museum@gmail.com
                  </li>
                  <li>
                    <BsGeoAltFill /> Sonargaon, Narayanganj
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-12 text-style">
                <ul>
                  <li>Quick Links</li>
                  <li>Sonargaon Museum</li>
                  <li>Artisan Web Portal</li>
                  <li>e-ticket</li>
                  <li>Ministry of Cultural Affairs</li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-12 text-style">
                <ul>
                  <li>NEWSLETTER</li>
                  <li>Please subscribe for our newsletter</li>
                  <li>
                    <form action="/action_page.php">
                      <div class="form-group">
                        <label for="email">Email:</label>
                        <input
                          type="email"
                          class="form-control"
                          id="email"
                          placeholder="Email ID"
                          name="email"
                        />
                      </div>
                      <button
                        type="submit"
                        class="btn btn-primary text-uppercase col-6"
                      >
                        subscribe
                      </button>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CustomFooterSection>
      <BottomFooter>
        <div className="col-md-12 col-sm-6">
          Copyrights © Sonargaon Museum. All rights reserved Developed by
          Nanosoft
        </div>
      </BottomFooter>
    </div>
  );
}
