import { styled } from "styled-components";
export const BooksListSection = styled.div`
  .book-list-title {
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

  .nav-link {
    display: block;
    padding: 0.5rem 1rem;
    color: #0d6efd;
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out;
  }
  .nav-tabs .nav-link {
    margin-bottom: -1px;
    background: 0 0;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    font-weight: bold;
    color: #e28205;
  }
  .nav-tabs .nav-link.active {
    color: #0b9573;
  }
  .table-header {
    background-color: rgb(11, 149, 115);
    color: #ffffff;
  }
  .table-header th {
    font-size: 1.3vw;
    padding-left: 0px;
    padding: 9px;
    font-weight: 500;
  }
  .table-box-size {
    max-width: 100%;
    overflow: hidden;
  }
  // .text-nowrap {

  // }

  // Drill down Book details
  tbody tr td a {
    text-decoration: none;
  }
  // Pagination strart
  .page-link {
    color: #000000;
    border: none;
    padding: 5px;
  }


  ////////////////////////////////////////
  .pagination {
    display: flex;
    list-style: none;
    outline: none;
  }
  .pagination > .active > a {
    color: #000;
  }
  .pagination > li > a {
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
  }
  .pagination > .active > a,
  .pagination > .active > span,
  .pagination > .active > a:hover,
  .pagination > .active > span:hover,
  .pagination > .active > a:focus,
  .pagination > .active > span:focus {
    background-color: #f2f2f2;
    outline: none;
  }
  .pagination > li > a,
  .pagination > li > span {
    color: #000;
  }
  .pagination > li:first-child > a,
  .pagination > li:first-child > span,
  .pagination > li:last-child > a,
  .pagination > li:last-child > span {
    border-radius: unset;
  }
  // Pagination end
`;
