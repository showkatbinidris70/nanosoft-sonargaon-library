import styled from "styled-components";

export const NewspaperSection = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 5rem;

  .col-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .box-4 {
    text-align: center;
    position: relative;
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
