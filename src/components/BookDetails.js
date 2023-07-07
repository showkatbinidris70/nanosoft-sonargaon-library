import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import { BookDetailsSection } from "../styles/BookDetails.styled";
import DrilDownBookDetailsImg from "../dist/images/1d6aabea-a648-41e1-ac3d-d6ea9d5390d4-image00364.jpg";
import { Breadcrumb } from "../styles/CommonElements.styled";

export default function BookDetails() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div>
      <Header />

      <Breadcrumb>
        <div className="breadCumb">
          <div class="center">
            <p>Home / Book Info / বাংলাদেশের লোকশিল্প</p>
          </div>
        </div>
      </Breadcrumb>

      <BookDetailsSection>
        <div className="container m-3">
          <div className="row">
            <div className="col-md-8 book-content">
              <div className="row">
                <div className="col-md-4 col-sm-6">
                  <img src={DrilDownBookDetailsImg} alt="There is a pic" className="img-border" />
                </div>
                <div className="col-md-8 col-sm-6">
                  <h2>বাংলাদেশের লোকশিল্প</h2>
                  <p>by</p>
                  <p>Category: লোকশিল্প-বাংলাদেশ</p>
                  <p>Published Year: 1988</p>
                  <p>Publication: New Publisher</p>
                  <button type="button" className="btn btn-primary">
                    <a
                      class="nav-link"
                      data-toggle="dropdown"
                      href="http://book-details"
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
                        View eBook
                      </NavLink>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BookDetailsSection>
      <Footer />
    </div>
  );
}
