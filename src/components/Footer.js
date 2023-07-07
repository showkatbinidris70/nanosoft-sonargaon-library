import React from "react";
import { BsEnvelopeFill, BsTelephoneFill, BsGeoAltFill } from "react-icons/bs";
import { FooterSection, BottomFooter } from "../styles/Footer.styled";

export default function Footer() {
  return (
    <div>
      <FooterSection>
        <div className="overlay">
          <div className="container">
            <div className="row text-dark custom-footer mt-5">
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
      </FooterSection>
      <BottomFooter>
        <div className="col-md-12 col-sm-6">
          Copyrights © Sonargaon Museum. All rights reserved Developed by
          Nanosoft
        </div>
      </BottomFooter>
    </div>
  );
}
