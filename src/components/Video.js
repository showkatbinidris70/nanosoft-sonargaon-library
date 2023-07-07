import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Breadcrumb, TitleSection } from "../styles/CommonElements.styled";
import { VideoSection } from "../styles/Video.styled";

export default function JournalAriticle() {
  return (
    <div>
      <Header />
      <Breadcrumb>
        <div className="breadCumb">
          <div class="center">
            <p>Home / Video</p>
          </div>
        </div>
      </Breadcrumb>
      <TitleSection>
        <h1>
          See Our <span> Video Gallery</span>
        </h1>
      </TitleSection>
      <VideoSection>
        <div className="col-8 text-center m-auto mt-5">
          <div className="row">
            <div className="col-md-6 col-sm-6 mb-5">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe
                  class="embed-responsive-item"
                  src="https://www.youtube.com/embed/STkB71tvYPY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </VideoSection>
      <Footer />
    </div>
  );
}
