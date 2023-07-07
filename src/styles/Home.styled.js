import styled from "styled-components";

export const HeaderSection = styled.div`
  position: static;
  background-color: #29785e !important;
  color: rgba(255, 255, 255, 0.84);
  line-height: 1em;
  //   height: 3rem;

  .navbar-container {
    background-color: #29785e;
    font-size: 13px;
    font-weight: 500;
    width: 100%;
    padding: 0rem 2rem 0rem 2rem;
    margin: 0 auto;
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
  @media only screen and (max-width: 800px) {
    .left-navbar {
      //   display: none;
    }
  }
`;
