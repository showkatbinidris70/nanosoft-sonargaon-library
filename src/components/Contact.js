import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Breadcrumb } from "../styles/CommonElements.styled";
import { ContactSection } from "../styles/Contact.styled";
import {
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
  BsFillMapFill,
} from "react-icons/bs";

export default function Contact() {
  return (
    <div>
      <Header />
      <Breadcrumb>
        <div className="breadCumb">
          <div class="center">
            <p>Home / Contact Us</p>
          </div>
        </div>
      </Breadcrumb>
      <ContactSection>
        <div className="container">
          <div className="row m-3 m-auto">
            <div className="col-md-6 col-sm-6">
              <div className="p-4">
                <div className="d-flex mt-3">
                  <div className="icon width-left">
                    <BsFillEnvelopeFill />
                  </div>
                  <div className="ms-3 width-right">
                    <h6>Email : </h6>
                    <p>library@sonargaonmuseum.gov.bd</p>
                  </div>
                </div>
                <div className="d-flex mt-3">
                  <div className="icon width-left">
                    <BsFillTelephoneFill />
                  </div>
                  <div className="ms-3 width-right">
                    <h6>Call : </h6>
                    <p>09604 000 777</p>
                  </div>
                </div>
                <div className="d-flex mt-3">
                  <div className="icon width-left">
                    <BsFillMapFill />
                  </div>
                  <div className="ms-3 width-right">
                    <h6>Address : </h6>
                    <p>
                      (Located About 25 Km East of Capital Dhaka & 1 Km Inside
                      of Dhaka-Chittagong Highway. Only 1(One) Hour Distance
                      From Dhaka)
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <form className="m-3 text-white p-4">
                <div class="form-group">
                  <h5>Leave us a little info, and we'll be in touch!</h5>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1" className="required">
                    Enter Your Name
                  </label>
                  <input
                    type="text"
                    class="form-control rounded-0"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div class="form-group mt-2">
                  <label for="exampleInputPassword1" className="required">
                    Enter Your Email
                  </label>
                  <input
                    type="email"
                    class="form-control rounded-0"
                    id="exampleInputPassword1"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div class="form-group mt-2">
                  <label for="exampleInputPassword1" className="required">
                    Subject
                  </label>
                  <input
                    type="text"
                    class="form-control rounded-0"
                    id="exampleInputPassword1"
                    placeholder="Subject"
                  />
                </div>
                <div class="form-group mt-2">
                  <label for="exampleInputPassword1" className="required">
                    Your Message
                  </label>
                  <textarea
                    className="form-control rounded-0"
                    type=""
                    rows="3"
                    cols="12"
                  />
                </div>

                <button
                  type="submit"
                  class="btn btn-primary mt-3 rounded-pill bg-warning text-dark border-0 ps-4 pe-4"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </ContactSection>
      <Footer />
    </div>
  );
}
