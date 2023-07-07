import { styled } from "styled-components";

export const BookDetailsSection = styled.div`
  min-height: 10rem;
  margin: 0 auto;
  margin-top: 3vw;
  margin-bottom: 5vw;

  .book-content {
    margin: 0 auto;
  }
  .img-border {
    border: 7px solid rgba(221, 221, 221, 0.4);
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: 0.5s ease;
    backface-visibility: hidden;
  }
  .img-border:hover {
    opacity: 0.5;
  }
  h2 {
    font-size: 23px;
    font-weight: 700;
    color: rgb(41, 120, 94);
  }
  button {
    background-color: rgb(41, 120, 94);
    border: none;
  }
  button a {
    color: #fff;
    text-decoration: none;
  }
  button:hover {
    background-color: rgb(53, 130, 50);
  }
`;
