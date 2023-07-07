import styled from "styled-components";
import BgFooter from "../dist/images/bg-footer.png";

export const NavbarMenu = styled.div`
  width: 100%;
  height: 3rem;
  background-color: #29785e;
`;
export const HomepageHeaderSection = styled.div`
  .container-fluid {
    position: static;
    background-color: #29785e !important;
    color: rgba(255, 255, 255, 0.84);
    line-height: 1em;
  }
  .dropdown-menu-control {
    margin-left: -100px;
  }
  .navbar-container {
    background-color: #29785e;
    font-size: 13px;
    font-weight: 500;
    width: 100%;
    padding: 0rem 2rem 0rem 2rem;
    margin: 0 auto;
  }
  .nav-link {
    color: white;
  }
  .nav-link:hover {
    text-decoration: none;
    background-size: 100% 5px, auto;
  }
  .nav-link:hover:after {
    width: 100%;
    left: 0;
  }

  li:after {
    content: "";
    display: flex;
    border-bottom: solid 1px white;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  li:hover:after {
    transform: scaleX(1);
  }
  .icons {
    color: white;
  }
  .icons:hover {
    color: white;
  }
  .right-navbar a {
    text-decoration: none;
    color: white;
  }

  .text-decoration:hover:after {
    width: 99%;
    left: 0;
  }
  .text-decoration:after {
    content: "";
    display: flex;
    border-bottom: solid 1px white;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  .text-decoration:hover:after {
    transform: scaleX(1);
  }

  .btn-border-radius {
    border-radius: 0px;
  }
  form {
    // width: 400px;
  }
  .form-control {
    border-radius: 50px;
  }
  .button-control {
    border-radius: 50px;
    background-color: #5cb85c;
    margin-left: -25px;
    z-index: 99;
    position: relative;
  }
  .button-control:hover {
    background-color: #5cc85c;
  }
  .dropdown-control ul {
    background-color: #29785e;
    padding-top: 7px;
    border: none;
  }
  .dropdown-control ul li a {
    color: white;
    margin: 5px;
    font-size: 12px;
  }

  // Media query
  /* Large devices (laptops/desktops, 1280px and up) */
  @media only screen and (min-width: 913px) {
    form {
      width: 550px;
    }
  }
  /* Large devices (laptops/desktops, 1280px and up) */
  @media only screen and (min-width: 1024px) {
    form {
      width: 450px;
    }
  }
  /* Large devices (laptops/desktops, 912px and up) */
  @media only screen and (max-width: 912px) {
    .right-navbar .text-decoration {
      display: none;
    }
    form {
      width: 750px;
    }
  }
  /* Large devices (laptops/desktops, 820px and up) */
  @media only screen and (max-width: 820px) {
    .right-navbar .text-decoration {
      display: none;
    }
    form {
      width: 650px;
    }
  }
  /* Large devices (laptops/desktops, 768px and up) */
  @media only screen and (max-width: 768px) {
    .right-navbar .text-decoration {
      display: none;
    }
    form {
      width: 600px;
    }
  }
  /* Large devices (laptops/desktops, 540px and up) */
  @media only screen and (max-width: 540px) {
    .right-navbar .text-decoration {
      display: none;
    }
    form {
      width: 400px;
    }
  }
  /* Large devices (laptops/desktops, 414px and up) */
  @media only screen and (max-width: 414px) {
    .right-navbar .text-decoration {
      display: none;
    }
    form {
      width: 280px;
    }
  }
  /* Large devices (laptops/desktops, 395px and up) */
  @media only screen and (max-width: 395px) {
    .right-navbar .text-decoration {
      display: none;
    }
    form {
      width: 260px;
    }
  }
  /* Large devices (laptops/desktops, 375px and up) */
  @media only screen and (max-width: 375px) {
    .right-navbar .text-decoration {
      display: none;
    }
    form {
      width: 240px;
    }
  }
  /* Large devices (laptops/desktops, 360px and up) */
  @media only screen and (max-width: 360px) {
    .right-navbar .text-decoration {
      display: none;
    }
    form {
      width: 230px;
    }
  }

  /* Large devices (laptops/desktops, 280px and up) */
  @media only screen and (max-width: 280px) {
    .right-navbar .text-decoration {
      display: none;
    }
    form {
      width: 150px;
    }
  }

  @media only screen and (max-width: 320px) {
    .right-navbar .text-decoration {
      display: none;
    }
    form {
      width: 190px;
    }
  }
`;

export const ImageCarousel = styled.div`
  width: 100%;
  min-height: 10rem;

  .image-carousel {
    width: 100%;
    border-bottom-left-radius: 50% 30%;
    border-bottom-right-radius: 50% 30%;
    overflow: hidden;
    width: 150% !important;
    margin-left: -25%;
    height: 50vw;
    max-height: 75vh;
  }

  .overlay {
    position: absolute;
    padding-top: 9vw;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(41, 120, 94, 0.8);
    border-bottom-left-radius: 50% 30%;
    border-bottom-right-radius: 50% 30%;
    overflow: hidden;
    width: 150% !important;
    margin-left: -25%;
    height: 50vw;
    max-height: 75vh;
  }
  .logos {
    width: 80px;
    height: 80px;
    margin: 1vw;
  }
  h2 {
    display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-bottom: 2vw;
    font-size: 4vw;
    color: white;
    margin: 0.67em 0;
    line-height: 1.3846153846;
    font-weight: 700;
  }
`;

export const AboutUsSection = styled.div`
  width: 100%;
  min-height: 5rem;

  .container {
    width: 80%;
    margin: 0 auto;
  }
  h2 {
    text-align: center;
    color: #29785e;
    margin-bottom: 30px;
    margin: 0.67em 0;
    font-size: 2em;
    line-height: 1.3846153846;
    font-weight: 700;
  }
  p {
    text-align: justify;
    margin: 0 0 10px;
    text-align: justify;
    line-height: 2;
    font-weight: 400;
  }
  img {
    border: 7px solid rgba(221, 221, 221, 0.4);
  }

  // Media query
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (max-width: 992px) {
    .container {
      width: 100%;
      margin: 5px;
    }
`;

export const CustomFooterSection = styled.div`
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 100%;
  min-height: 17.5rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${BgFooter});
  .overlay {
    background-color: rgba(242, 239, 239, 0.6);
    min-height: 17.5rem;
    width: 100%;
  }
  .custom-footer {
    width: 80%;
    margin: 0 auto;
  }
  .text-style ul li {
    list-style-type: none;
    line-height: 2;
    opacity: 0.9 !important;
  }
  .text-style ul li:first-child {
    color: #198754;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    font-weight: 400;
    line-height: 1.8;
    opacity: 0.9 !important;
  }
  button {
    background-color: #198754;
    border: #198754;
    margin-top: 1rem;
  }
  // Media query
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (max-width: 992px) {
    .custom-footer {
      width: 100%;
    }
    .text-style ul li:first-child {
      margin-left: -1rem;
    }
  }
`;
export const BottomFooter = styled.div`
  width: 100%;
  min-height: 3.5rem;
  color: white;
  background-color: #198754;
  margin: 0;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
`;
