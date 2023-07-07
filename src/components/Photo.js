import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Breadcrumb, TitleSection } from "../styles/CommonElements.styled";
import { PhotoSection } from "../styles/Photo.styled";
import ArtisanImg1 from "../dist/images/Artisan1.jpeg";
import CraftsImg from "../dist/images/crafts.jpeg";
import OurPremiesImg from "../dist/images/our-premies.jpeg";
import { NavLink } from "react-router-dom";

export default function Photo() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div>
      <Header />
      <Breadcrumb>
        <div className="breadCumb">
          <div class="center">
            <p>Home / Photo Category</p>
          </div>
        </div>
      </Breadcrumb>
      <TitleSection>
        <h1>
          See Our <span> Photos Catalog</span>
        </h1>
      </TitleSection>
      <PhotoSection>
        <div className="container col-8">
          <div className="row">
            <div className="col-md-4 col-sm-6 mt-3">
              <div className="box p-2">
                <img src={ArtisanImg1} alt="There is a pic" className="box-image" />
                <div className="overlay">
                  <ul>
                    <li className="i1 mt-5">
                      <NavLink
                        exact
                        to="/photos-details"
                        activeClassName="active"
                        className="nav-links view-photo rounded-pill"
                        onClick={handleClick}
                      >
                        View Photos
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="caption">
                  <h5 className="title">Artisan</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mt-3">
              <div className="box p-2">
                <img src={CraftsImg} alt="There is a pic" className="box-image" />
                <div className="overlay">
                  <ul>
                    <li className="i1 mt-5">
                      <NavLink
                        exact
                        to="/photos-details"
                        activeClassName="active"
                        className="nav-links view-photo rounded-pill"
                        onClick={handleClick}
                      >
                        View Photos
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="caption">
                  <h5 className="title">Crafts</h5>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mt-3">
              <div className="box p-2">
                <img src={OurPremiesImg} alt="There is a pic" className="box-image" />
                <div className="overlay">
                  <ul>
                    <li className="i1 mt-5">
                      <NavLink
                        exact
                        to="/photos-details"
                        activeClassName="active"
                        className="nav-links view-photo rounded-pill"
                        onClick={handleClick}
                      >
                        View Photos
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="caption">
                  <h5 className="title">Premies</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PhotoSection>
      <Footer />
    </div>
  );
}
