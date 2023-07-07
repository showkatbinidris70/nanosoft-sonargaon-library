import styled from "styled-components";

export const HeaderSection = styled.div`
  .container-fluid {
    background-color: #198754;
  }
  .container {
    font-size: 17px;
    font-weight: 500;
  }
  .nav-link {
    color: white;
  }
  .nav-link:hover {
    color: red;
  }
  .navbar-home {
    color: white;
  }
  .navbar-home:hover {
    color: red;
  }
  .icons {
    color: white;
  }
  .icons:hover {
    color: red;
  }
  .text-decoration {
    text-decoration: none;
    color: white;
  }
  .text-decoration:hover {
    color: red;
  }
  .modal-design {
    height: 40px;
    border-radious: 0px;
    background-color: transparent;
    border: none;
  }
  .modal-left {
    width: 95%;
    margin-top: 12px;
  }
  .modal-left input {
    border-radius: 0px !important;
  }
  .modal-right {
    width: 5%;
    margin-top: 12px;
    padding: 0;
  }
  .navber-text-color {
    // color: transparent;
    color: #ffffff;
  }
  .navbar-toggler {
    border: 1px solid #fff;
  }
  .toggler-icon {
    color: #fff;
  }
  .btn-radius {
    border-radius: 0px;
    // background-color: red;
  }
  .modal-content {
    background: transparent;
    border: none;
  }
  .modal-header {
    border: none;
  }
  .modal-header button {
    color: #dc3545 !important;
    margin-left: auto;
    background: none;
    border: none;
  }

  .modal-content {
    width: 89%;
  }

  .close-btn-contorl {
    margin-top: -2.2rem;
  }

  .input-form {
    margin-top: -1.2rem;
  }
  .right-nav-control {
    margin-left: 230px;
  }

  // drop down menu start

  *:not(.box-size-control) {
    box-sizing: border-box;
  }

  // drop down menu end

  @media only screen and (max-width: 700px) {
    .close-btn-contorl {
      margin-top: -3rem;
    }
    form .input-form {
      margin-top: -0.1rem;
    }
    .close-btn-contorl {
      margin-right: -40px;
      margin-bottom: -140px;
    }
    .input-form {
      margin-top: 0.1rem;
    }

    *:not(.box-size-control) {
      box-sizing: border-box;
    }
    .box-size-control a {
      font-size: 12px;
    }
    .btn-controls {
      font-size: 12px;
    }
  }
  // @media only screen and (max-width: 750px) {
  //   .showkat {
  //     position: fixed;
  //     display: flex;
  //     justify-content: end;
  //     align-items: end;
  //     overflow: hidden;
  //     top: 0;
  //     margin-left: 150px;
  //   }
  // }
`;

// export const Breadcrumb = styled.div`
//   width: 100%;
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: 50% 100%;
//   height: 9.5rem;
//   color: white;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: url(${BreadcrumbImg});
//   .breadCumb {
//     background-color: #198754;
//     height: 9.5rem;
//     width: 100%;
//     opacity: 0.7;
//   }

//   .center {
//     height: 9.5rem;
//     position: relative;
//   }

//   .center p {
//     margin: 0;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     -ms-transform: translate(-50%, -50%);
//     transform: translate(-50%, -50%);
//     padding: 5px;
//     background-color: #fd7e14;
//     border-color: #fd7e14;
//     letter-spacing: 1px;
//   }
// `;

export const ModalDesign = styled.div``;
