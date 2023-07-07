import styled from "styled-components";

export const PhotoSection = styled.div`
  width: 100%;
  min-height: 10rem;
  margin-top: 3rem;
  margin-bottom: 3rem;

  .box {
    text-align: center;
    position: relative;
    background: #f2f2f2;
  }

  .box-image {
    width: 100%;
    height: auto;
    padding: 5px;
  }
  .overlay {
    position: absolute;
    background: rgba(41, 120, 94, 0.8);
    color: #f1f1f1;
    width: 91%;
    transition: 0.5s ease;
    opacity: 0;
    top: 0.8rem;
    bottom: 0.8rem;
    left: 0;
    right: 0;
    color: white;
    font-size: 20px;
    text-align: center;
    display: block;
    margin: 0 auto;
  }

  .box:hover .overlay {
    opacity: 1;
  }

  li {
    list-style: none;
  }

  .title {
    display: block;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    line-height: 33px;
    color: #29785e;
    height: 27px;
    padding-bottom: 3rem;
    overflow: hidden;
  }

  .view-photo {
    text-decoration: none;
    color: #ffffff;
    border: 1px solid #ffffff;
    background: #29785e;
    padding: 0.4rem;
    padding-left: 1.8rem;
    padding-right: 1.8rem;
    font-size: 15px;
    margin-right: 2rem;
    letter-spacing: 1.5px;
  }
  .view-photo:hover {
    color: #000;
    background-color: #ffffff;
  }
`;
