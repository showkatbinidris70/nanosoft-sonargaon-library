import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Breadcrumb, TitleSection } from "../styles/CommonElements.styled";
import { NewspaperSection } from "../styles/NewsPaper.styled";

export default function Newspaper() {
  return (
    <div>
      {" "}
      <Header />
      <Breadcrumb>
        <div className="breadCumb">
          <div class="center">
            <p>Home / Newspaper Articles</p>
          </div>
        </div>
      </Breadcrumb>
      <TitleSection>
        <h1>
          See Our <span> Newspaper Articles</span>
        </h1>
      </TitleSection>
      <NewspaperSection>
        <div className="col-8 text-center m-auto mt-5">
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-5">
              <div className="box-4 p-2" style={{ backgroundColor: "#f2f2f2" }}>
                <h2>News Paper</h2>
                <p>News Paper Pubsih Date</p>
                <div className="overlay">
                  <ul className="icon">
                    <li className="i1 mt-2">
                      <button
                        type="button"
                        className="btn rounded-pill btn-design"
                      >
                        View Article
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NewspaperSection>
      <Footer />
    </div>
  );
}
