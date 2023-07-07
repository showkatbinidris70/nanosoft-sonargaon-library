import styled from "styled-components";
import BgFooter from "../dist/images/bg-footer.png";

export const FooterSection = styled.div`
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 100%;
  min-height: 21.5rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${BgFooter});
  .overlay {
    background-color: #f2efef;
    min-height: 21.5rem;
    width: 100%;
    opacity: 0.9;
  }
  .custom-footer {
    width: 80%;
    margin: 0 auto;
  }
  .text-style ul li {
    list-style-type: none;
    line-height: 2;
  }
  .text-style ul li:first-child {
    color: #198754;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    font-weight: 400;
    line-height: 1.8;
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
      margin-left: -15px;
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
