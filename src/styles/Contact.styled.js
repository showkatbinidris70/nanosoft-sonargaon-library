import styled from "styled-components";

export const ContactSection = styled.div`
  width: 100%;
  min-height: 10rem;
  margin-top: 3rem;
  margin-bottom: 3rem;

  .icon {
    background-color: #29785e;
    color: #ffffff;
    font-size: 2.2rem;
    height: 60px;
    width: 70px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .width-left {
    width: 15%;
  }
  .width-right {
    width: 85%;
  }
  h6 {
    margin-top: 5px;
    font-weight: bold;
  }
  h5 {
    color: #fff;
    display: block;
    font-size: 20px;
    font-weight: bold;
  }
  form {
    background-color: #29785e;
  }
  .required:after {
    content: " *";
    color: red;
  }
`;
