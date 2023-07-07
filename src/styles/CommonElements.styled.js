import styled from "styled-components";
import BreadcrumbImg from "../dist/images/bg-header.png";

export const Breadcrumb = styled.div`
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 100%;
  height: 9.5rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${BreadcrumbImg});
  .breadCumb {
    background-color: rgba(25, 135, 84, 0.7);
    height: 9.5rem;
    width: 100%;
  }

  .center {
    height: 9.5rem;
    position: relative;
  }

  .center p {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    padding: 5px;
    background-color: #fd7e14;
    border-color: #fd7e14;
    letter-spacing: 1px;
  }
`;

export const TitleSection = styled.div`
  h1 {
    font-size: 3vw;
    font-weight: 700;
    margin-top: 3rem;
    margin-bottom: 3rem;
    justify-content: center;
    display: flex;

    span {
      margin-left: 5px;
      color: #198754;
    }
  }
`;
