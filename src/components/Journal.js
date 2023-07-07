import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Breadcrumb, TitleSection } from "../styles/CommonElements.styled";
import { JouranlSection } from "../styles/Journal.styled";
import JouranlImg1 from "../dist/images/j1.jpg";
import JouranlImg2 from "../dist/images/j2.jpg";
import JouranlImg3 from "../dist/images/j3.jpg";
import JouranlImg4 from "../dist/images/j4.jpg";
import { BiSearchAlt2 } from "react-icons/bi";

export default function Journal() {
  return (
    <div>
      <Header />
      <Breadcrumb>
        <div className="breadCumb">
          <div class="center">
            <p>Home / Journal Articles</p>
          </div>
        </div>
      </Breadcrumb>
      <div>
        <TitleSection>
          <h1>
            See Our <span> Journal Articles</span>
          </h1>
        </TitleSection>
      </div>
      <JouranlSection>
        <div className="col-8 m-auto">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#journalModal"
            className="btn advance-search-button rounded-pill"
          >
            Advanced Search
          </button>
          <div class="modal" id="journalModal">
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Advanced Search</h4>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>

                <div class="modal-body">
                  <form class="row g-3">
                    <div class="col-md-6">
                      <label for="inputEmail4" class="form-label">
                        Publisher
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputEmail4"
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="inputPassword4" class="form-label">
                        ISBN
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputPassword4"
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="inputEmail4" class="form-label">
                        Year Of Publisher
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputEmail4"
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="inputPassword4" class="form-label">
                        Title
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputPassword4"
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="inputEmail4" class="form-label">
                        Call. NO
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputEmail4"
                      />
                    </div>
                    <div class="col-md-6">
                      <label for="inputPassword4" class="form-label">
                        Author
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputPassword4"
                      />
                    </div>
                  </form>
                </div>

                <div class="modal-footer">
                  <div class="d-grid gap-2 col-12 mx-auto">
                    <button
                      class="btn btn-success"
                      type="button"
                      data-bs-dismiss="modal"
                    >
                      <BiSearchAlt2 /> Advanced Search{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8 text-center m-auto mt-5">
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-5">
              <div className="box-4 p-2">
                <img src={JouranlImg1} alt="There is a pic" className="box-4-image" />
                <div className="overlay">
                  <ul className="icon">
                    <li className="i1 mt-2">
                      <button
                        type="button"
                        className="btn rounded-pill btn-design"
                      >
                        View eBook
                      </button>
                    </li>
                    <li className="i2 mt-2">
                      <button
                        type="button"
                        className="btn rounded-pill btn-design"
                      >
                        Physical Read
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="caption">
                  <h5 className="title">News Paper Title</h5>
                  <p className="publish-date">pub: December 9, 2014</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-5">
              <div className="box-4 p-2">
                <img src={JouranlImg2} alt="There is a pic" className="box-4-image" />
                <div className="overlay">
                  <ul className="icon">
                    <li className="i1 mt-2">
                      <button
                        type="button"
                        className="btn rounded-pill btn-design"
                      >
                        View eBook
                      </button>
                    </li>
                    <li className="i2 mt-2">
                      <button
                        type="button"
                        className="btn rounded-pill btn-design"
                      >
                        Physical Read
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="caption">
                  <h5 className="title">News Paper Title</h5>
                  <p className="publish-date">pub: December 9, 2014</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-5">
              <div className="box-4 p-2">
                <img src={JouranlImg3} alt="There is a pic" className="box-4-image" />
                <div className="overlay">
                  <ul className="icon">
                    <li className="i1 mt-2">
                      <button
                        type="button"
                        className="btn rounded-pill btn-design"
                      >
                        View eBook
                      </button>
                    </li>
                    <li className="i2 mt-2">
                      <button
                        type="button"
                        className="btn rounded-pill btn-design"
                      >
                        Physical Read
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="caption">
                  <h5 className="title">News Paper Title</h5>
                  <p className="publish-date">pub: December 9, 2014</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-5">
              <div className="box-4 p-2">
                <img src={JouranlImg4} alt="There is a pic" className="box-4-image" />
                <div className="overlay">
                  <ul className="icon">
                    <li className="i1 mt-2">
                      <button
                        type="button"
                        className="btn rounded-pill btn-design"
                      >
                        View eBook
                      </button>
                    </li>
                    <li className="i2 mt-2">
                      <button
                        type="button"
                        className="btn rounded-pill btn-design"
                      >
                        Physical Read
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="caption">
                  <h5 className="title">News Paper Title</h5>
                  <p className="publish-date">pub: December 9, 2014</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </JouranlSection>
      <Footer />
    </div>
  );
}
