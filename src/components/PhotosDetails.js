import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Breadcrumb, TitleSection } from "../styles/CommonElements.styled";
import { PhotoDetailsSection } from "../styles/PhotosDetails.styled";
import AImg1 from "../dist/images/a1.jpeg";
import AImg2 from "../dist/images/a2.jpeg";
import AImg3 from "../dist/images/a3.jpeg";
import AImg4 from "../dist/images/a4.jpeg";
import AImg5 from "../dist/images/a5.jpeg";
import AImg6 from "../dist/images/a6.jpeg";
import AImg7 from "../dist/images/052e012e-13e5-43ee-bfdf-bcd2fe8e7954-18958203.jpg";

export default function PhotosDetails() {
  return (
    <div>
      <Header />
      <Breadcrumb>
        <div className="breadCumb">
          <div class="center">
            <p>Home / Photo</p>
          </div>
        </div>
      </Breadcrumb>
      <TitleSection>
        <h1>
          See Our <span> Photos Gallery( Artisan)</span>
        </h1>
      </TitleSection>

      <PhotoDetailsSection>
        <div className="container">
          <div className="text-center m-auto mt-5">
            <div className="row m-5">
              <div className="col-md-4 col-sm-6 mb-5">
                <div className="box-4 p-2">
                  <img
                    src={AImg1}
                    alt="There is a pic"
                    className="box-4-image"
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 mb-5">
                <div className="box-4 p-2">
                  <img
                    src={AImg2}
                    alt="There is a pic"
                    className="box-4-image"
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 mb-5">
                <div className="box-4 p-2">
                  <img
                    src={AImg3}
                    alt="There is a pic"
                    className="box-4-image"
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 mb-5">
                <div className="box-4 p-2">
                  <img
                    src={AImg4}
                    alt="There is a pic"
                    className="box-4-image"
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 mb-5">
                <div className="box-4 p-2">
                  <img
                    src={AImg5}
                    alt="There is a pic"
                    className="box-4-image"
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 mb-5">
                <div className="box-4 p-2">
                  <img
                    src={AImg6}
                    alt="There is a pic"
                    className="box-4-image"
                  />
                </div>
              </div>
              <div className="col-md-4 col-sm-6 mb-5">
                <div className="box-4 p-2">
                  <img
                    src={AImg7}
                    alt="There is a pic"
                    className="box-4-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PhotoDetailsSection>
      <Footer />
    </div>
  );
}
