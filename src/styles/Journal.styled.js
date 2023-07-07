import styled from "styled-components";

export const JouranlSection = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 5rem;

  .advance-search-button {
    background-color: #ffc107;
    color: #000000;
    padding: 8px;
  }
  .advance-search-button:hover {
    background-color: #ffc107;
    color: #000000;
    box-shadow: 2px 2px 2px 2px #ddc107;
  }
  .col-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .caption {
    background: #f2f2f2;
    transition: all 0.2s ease-out;
  }
  .title {
    display: block;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    line-height: 33px;
    color: #000;
    height: 27px;
    width: 85%;
    margin-bottom: 5px;
    overflow: hidden;
  }
  .publish-date {
    display: block;
    text-align: center;
    font-size: 15px;
    font-style: italic;
    color: #29785e;
    height: 27px;
    width: 85%;
    margin-bottom: 5px;
    overflow: hidden;
  }
  .box-4 {
    text-align: center;
    position: relative;
  }

  .box-4-image {
    width: 100%;
    height: auto;
    background-color: #04aa6d;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    background: rgba(41, 120, 94, 0.8);
    color: #f1f1f1;
    width: 100%;
    transition: 0.5s ease;
    opacity: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    font-size: 20px;
    padding: 20px;
    text-align: center;
    display: block;
  }

  .box-4:hover .overlay {
    opacity: 1;
  }
  .icon {
    position: absolute;
    left: 20%;
    top: 25%;
    -webkit-transform: translate(-20%, -20%);
    transform: translate(-20%, -20%);
  }
  .icon li {
    list-style: none;
  }
  .i1 button {
    letter-spacing: 1.5px;
  }
  .btn-design {
    border: 1px solid #ffffff;
    background: #29785e;
    color: #ffffff;
  }
  .btn-design:hover {
    background: #ffffff;
    color: #000000;
  }
`;
