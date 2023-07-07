// import React, { useState } from "react";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { BooksListSection } from "../styles/Books.styled";
import { NavLink } from "react-router-dom";
import axios from "axios";
import ReactPaginate from "react-paginate";
import {
  FaBookOpen,
  FaBook,
  FaBookReader,
  FaAngleRight,
  FaAngleLeft,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { Breadcrumb, TitleSection } from "../styles/CommonElements.styled";

export default function Books() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // const [users, setUsers] = useState([]);
  const [book, setBook] = useState([]);
  const [records, setRecords] = useState([]);
  // Pagiantion
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(5);
  const [pageCount, setPageCount] = useState(0);
  // const [playerData, setPlayerData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("http://sonargaonlibrary.com.bd/api/books");
  //     const nbaData = await response.json();
  //     setPageCount(Math.ceil(nbaData.length / perPage));
  //     setPlayerData(nbaData.slice(offset, offset + perPage));
  //   };

  //   fetchData();
  // }, [offset]);

  // const handlePageClick = (e) => {
  //   const selectedPage = e.selected;
  //   console.log(selectedPage * perPage);

  //   setOffset((selectedPage + 1) * perPage);
  // };

  // const fetchUserData = () => {
  //   fetch("http://sonargaonlibrary.com.bd/api/books")
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         throw new Error("Sorry something went wrong");
  //       }
  //     })
  //     .then((data) => {
  //       setUsers(data);
  //     });
  // };

  // useEffect(() => {
  //   fetchUserData();
  // }, []);

  // search bar
  // const itemList = [
  //   "Apple",
  //   "Orange",
  //   "Banana",
  //   "Cherry",
  //   "Milk",
  //   "Peanuts",
  //   "Butter",
  //   "Tomato",
  // ];
  // const [filteredList, setFilteredList] = new useState(itemList);

  // const filterBySearch = (event) => {
  //   const query = event.target.value;
  //   var updatedList = [...itemList];
  //   updatedList = updatedList.filter((item) => {
  //     return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  //   });
  //   setFilteredList(updatedList);
  // };

  // useEffect(() => {
  //   axios
  //     .get("http://sonargaonlibrary.com.bd/api/books")
  //     .then((res) => {
  //       setBook(res.data);
  //       setRecords(res.data);
  //     })
  //     .catch((err) => console.log(err));

  // }, [offset]);
  // const bookFilter = (event) => {
  //   setRecords(
  //     book.filter((f) => f.BookName.toLowerCase().includes(event.target.value))
  //   );
  // };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://sonargaonlibrary.com.bd/api/books");
      const nbaData = await response.json();
      setPageCount(Math.ceil(nbaData.length / perPage));
      setRecords(nbaData.slice(offset, offset + perPage));
      setBook(nbaData);
    };

    fetchData();
  }, [offset]);
  const bookFilter = (event) => {
    setRecords(
      book.filter((f) => f.BookName.toLowerCase().includes(event.target.value))
    );
  };

  // Pagination
  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    console.log(selectedPage * perPage);

    setOffset((selectedPage + 1) * perPage);
  };
  return (
    <div>
      <Header />
      <Breadcrumb>
        <div className="breadCumb">
          <div class="center">
            <p>Home / Book</p>
          </div>
        </div>
      </Breadcrumb>

      <TitleSection>
        <h1>
          See Our <span> Book List</span>
        </h1>
      </TitleSection>
      <BooksListSection>
        {/* {users.map((user) => (
          <li key={user.SlNo}>{user.BookName}</li>
        ))} */}
        <div className="container mb-3">
          <nav>
            <div
              class="nav nav-tabs justify-content-end"
              id="nav-tab"
              role="tablist"
            >
              <button
                class="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                <FaBookOpen className="me-1" /> All
              </button>
              <button
                class="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                <FaBook className="me-1" /> Foundation Book
              </button>
              <button
                class="nav-link"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                <FaBookReader className="me-1" /> E-Book
              </button>
            </div>
          </nav>

          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              {/* <div className="table-responsive text-nowrap"> */}
              <div className="table-responsive">
                <div className="m-1">
                  <form>
                    <input
                      class="form-control"
                      type="search"
                      placeholder="Search.."
                      // onChange={filterBySearch}
                      onChange={bookFilter}
                    />
                  </form>
                  {/* {filteredList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))} */}
                </div>
                <table class="table table-striped table-hover table-bordered table-box-size overflow-hidden">
                  <thead className="table-header table-box-size">
                    <tr>
                      <th style={{ width: "6%" }}>SL No</th>
                      <th style={{ width: "32%" }}>Title</th>
                      <th style={{ width: "18%" }}>Author</th>
                      <th style={{ width: "15%" }}>Editor</th>
                      <th style={{ width: "15%" }}>Category</th>
                      <th style={{ width: "13%" }}>Year of Publised</th>
                    </tr>
                  </thead>
                  <tbody className="table-box-size">
                    {records.map((record) => (
                      <tr>
                        <td>{record.SlNo}</td>
                        <td>
                          <a
                            class="nav-link"
                            data-toggle="dropdown"
                            href="http://book"
                            id="navbarDropdown"
                            role="button"
                          >
                            <NavLink
                              exact
                              to="/book-details"
                              activeClassName="active"
                              className="nav-links"
                              onClick={handleClick}
                            >
                              {record.BookName}
                            </NavLink>
                          </a>
                        </td>
                        <td>{record.Author}</td>
                        <td>{record.Editor}</td>
                        <td>{record.Category}</td>
                        <td>{record.YearOfPublished}</td>
                      </tr>
                    ))}
                    {/* <tr>
                      <td>1</td>
                      <td>
                        <a
                          class="nav-link"
                          data-toggle="dropdown"
                          href="http://book"
                          id="navbarDropdown"
                          role="button"
                        >
                          <NavLink
                            exact
                            to="/book-details"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                          >
                            বাংলাদেশের লোকশিল্প
                          </NavLink>
                        </a>
                      </td>
                      <td>-</td>
                      <td>-</td>
                      <td>লোকশিল্প-বাংলাদেশ</td>
                      <td>1988</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <a
                          class="nav-link"
                          data-toggle="dropdown"
                          href="http://book"
                          id="navbarDropdown"
                          role="button"
                        >
                          <NavLink
                            exact
                            to="/book-details"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                          >
                            লোকসংস্কৃতি
                          </NavLink>
                        </a>
                      </td>
                      <td>মাহমুদ শফিক</td>
                      <td>-</td>
                      <td>লোক সংস্কৃতি</td>
                      <td>2005</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <a
                          class="nav-link"
                          data-toggle="dropdown"
                          href="http://book"
                          id="navbarDropdown"
                          role="button"
                        >
                          <NavLink
                            exact
                            to="/book-details"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                          >
                            কারুশিল্পীদের তালিকা
                          </NavLink>
                        </a>
                      </td>
                      <td>-</td>
                      <td>-</td>
                      <td>কারুশিল্পী-বাংলাদেশ</td>
                      <td>2005</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <a
                          class="nav-link"
                          data-toggle="dropdown"
                          href="http://book"
                          id="navbarDropdown"
                          role="button"
                        >
                          <NavLink
                            exact
                            to="/book-details"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                          >
                            শিল্পাচার্য জয়নুল আবেদিন
                          </NavLink>
                        </a>
                      </td>
                      <td>-</td>
                      <td>-</td>
                      <td>জীবনী ও কর্ম</td>
                      <td>2006</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        <a
                          class="nav-link"
                          data-toggle="dropdown"
                          href="http://book"
                          id="navbarDropdown"
                          role="button"
                        >
                          <NavLink
                            exact
                            to="/book-details"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                          >
                            বিশ্বের মৃৎশিল্প
                          </NavLink>
                        </a>
                      </td>
                      <td>মোঃ রফিকুল ইসলাম</td>
                      <td>-</td>
                      <td>মৃৎশিল্প</td>
                      <td>2013</td>
                    </tr> */}
                  </tbody>
                </table>
                <div className="d-flex justify-content-between m-3">
                  <div className="">
                    <nav aria-label="Page navigation example">
                      <ul class="pagination">
                        {/* <li class="page-item d-flex">
                          <a
                            class="page-link"
                            href="http://book"
                            aria-label="Previous"
                          >
                            <FaAngleDoubleLeft />
                          </a>
                          <a
                            class="page-link"
                            href="http://book"
                            aria-label="Previous"
                          >
                            <FaAngleLeft />
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="http://book">
                            1
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="http://book">
                            2
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="http://book">
                            3
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="http://book">
                            4
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="http://book">
                            5
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="http://book">
                            6
                          </a>
                        </li>
                        <li class="page-item d-flex">
                          <a
                            class="page-link"
                            href="http://book"
                            aria-label="Next"
                          >
                            <FaAngleRight />
                          </a>
                          <a
                            class="page-link"
                            href="http://book"
                            aria-label="Next"
                          >
                            <FaAngleDoubleRight />
                          </a>
                        </li> */}
                        <ReactPaginate
                          previousLabel={<FaAngleDoubleLeft />}
                          nextLabel={<FaAngleDoubleRight />}
                          breakLabel={"..."}
                          breakClassName={"break-me"}
                          pageCount={pageCount}
                          marginPagesDisplayed={2}
                          pageRangeDisplayed={5}
                          onPageChange={handlePageClick}
                          containerClassName={"pagination"}
                          subContainerClassName={"pages pagination"}
                          activeClassName={"active"}
                        />
                      </ul>
                    </nav>
                  </div>
                  <div className="">
                    <p
                      style={{
                        color: "#6c757d",
                        fontSize: "13px",
                        marginTop: "7px",
                      }}
                    >
                      Displaying {perPage} of 6239 records
                    </p>
                  </div>
                </div>
              </div>
              {/* <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              /> */}
            </div>
            {/* second form start */}
            <div
              class="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div className="table-responsive text-nowrap">
                <div className="m-1">
                  <form>
                    <input
                      class="form-control"
                      type="search"
                      placeholder="Search.."
                    />
                  </form>
                </div>
                <table class="table table-striped table-hover table-bordered">
                  <thead className="table-header">
                    <tr>
                      <th style={{ width: "6%" }}>SL No</th>
                      <th style={{ width: "32%" }}>Title</th>
                      <th style={{ width: "16%" }}>Author</th>
                      <th style={{ width: "17%" }}>Editor</th>
                      <th style={{ width: "16%" }}>Category</th>
                      <th style={{ width: "13%" }}>Year of Publised</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {users.map((user) => (
                    <tr>
                      <td>1</td>
                      <td>{user.name}</td>
                      <td>-</td>
                      <td>-</td>
                      <td>লোকশিল্প-বাংলাদেশ</td>
                      <td>1988</td>
                    </tr>
                  ))} */}
                    <tr>
                      <td>1</td>
                      <td>বাংলাদেশের লোকশিল্প</td>
                      <td>-</td>
                      <td>-</td>
                      <td>লোকশিল্প-বাংলাদেশ</td>
                      <td>1988</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>লোকসংস্কৃতি</td>
                      <td>মাহমুদ শফিক</td>
                      <td>-</td>
                      <td>লোক সংস্কৃতি</td>
                      <td>2005</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>কারুশিল্পীদের তালিকা</td>
                      <td>-</td>
                      <td>-</td>
                      <td>কারুশিল্পী-বাংলাদেশ</td>
                      <td>2005</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>শিল্পাচার্য জয়নুল আবেদিন</td>
                      <td>-</td>
                      <td>-</td>
                      <td>জীবনী ও কর্ম</td>
                      <td>2006</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>বিশ্বের মৃৎশিল্প</td>
                      <td>মোঃ রফিকুল ইসলাম</td>
                      <td>-</td>
                      <td>মৃৎশিল্প</td>
                      <td>2013</td>
                    </tr>
                  </tbody>
                </table>
                <div className="d-flex justify-content-between m-3">
                  <div className="">
                    <nav aria-label="Page navigation example">
                      <ul class="pagination">
                        <li class="page-item d-flex">
                          <a
                            class="page-link"
                            href="http://book"
                            aria-label="Previous"
                          >
                            <FaAngleDoubleLeft />
                          </a>
                          <a
                            class="page-link"
                            href="http://book"
                            aria-label="Previous"
                          >
                            <FaAngleLeft />
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="http://book">
                            1
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="http://book">
                            2
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="http://book">
                            3
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="http://book">
                            4
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="http://book">
                            5
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="http://book">
                            6
                          </a>
                        </li>
                        <li class="page-item d-flex">
                          <a
                            class="page-link"
                            href="http://book"
                            aria-label="Next"
                          >
                            <FaAngleRight />
                          </a>
                          <a
                            class="page-link"
                            href="http://book"
                            aria-label="Next"
                          >
                            <FaAngleDoubleRight />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="">
                    <p
                      style={{
                        color: "#6c757d",
                        fontSize: "13px",
                        marginTop: "7px",
                      }}
                    >
                      Displaying 5 of 6637 records
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <div className="table-responsive text-nowrap">
                <div className="m-1">
                  <form>
                    <input
                      class="form-control"
                      type="search"
                      placeholder="Search.."
                    />
                  </form>
                </div>
                <table class="table table-striped table-hover table-bordered">
                  <thead className="table-header">
                    <tr>
                      <th style={{ width: "6%" }}>SL No</th>
                      <th style={{ width: "32%" }}>Title</th>
                      <th style={{ width: "16%" }}>Author</th>
                      <th style={{ width: "17%" }}>Editor</th>
                      <th style={{ width: "16%" }}>Category</th>
                      <th style={{ width: "13%" }}>Year of Publised</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {users.map((user) => (
                    <tr>
                      <td>1</td>
                      <td>{user.name}</td>
                      <td>-</td>
                      <td>-</td>
                      <td>লোকশিল্প-বাংলাদেশ</td>
                      <td>1988</td>
                    </tr>
                  ))} */}
                    <tr>
                      <td>1</td>
                      <td>বাংলাদেশের লোকশিল্প</td>
                      <td>-</td>
                      <td>-</td>
                      <td>লোকশিল্প-বাংলাদেশ</td>
                      <td>1988</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>লোকসংস্কৃতি</td>
                      <td>মাহমুদ শফিক</td>
                      <td>-</td>
                      <td>লোক সংস্কৃতি</td>
                      <td>2005</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>কারুশিল্পীদের তালিকা</td>
                      <td>-</td>
                      <td>-</td>
                      <td>কারুশিল্পী-বাংলাদেশ</td>
                      <td>2005</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>শিল্পাচার্য জয়নুল আবেদিন</td>
                      <td>-</td>
                      <td>-</td>
                      <td>জীবনী ও কর্ম</td>
                      <td>2006</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>বিশ্বের মৃৎশিল্প</td>
                      <td>মোঃ রফিকুল ইসলাম</td>
                      <td>-</td>
                      <td>মৃৎশিল্প</td>
                      <td>2013</td>
                    </tr>
                  </tbody>
                </table>
                <div className="d-flex justify-content-between m-3">
                  <div className="">
                    <nav aria-label="Page navigation example">
                      <ul class="pagination">
                        <li class="page-item d-flex">
                          <a
                            class="page-link"
                            href="http://book"
                            aria-label="Previous"
                          >
                            <FaAngleDoubleLeft />
                          </a>
                          <a
                            class="page-link"
                            href="http://book"
                            aria-label="Previous"
                          >
                            <FaAngleLeft />
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="http://book">
                            1
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="http://book">
                            2
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="http://book">
                            3
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="http://book">
                            4
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="http://book">
                            5
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="http://book">
                            6
                          </a>
                        </li>
                        <li class="page-item d-flex">
                          <a
                            class="page-link"
                            href="http://book"
                            aria-label="Next"
                          >
                            <FaAngleRight />
                          </a>
                          <a
                            class="page-link"
                            href="http://book"
                            aria-label="Next"
                          >
                            <FaAngleDoubleRight />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="">
                    <p
                      style={{
                        color: "#6c757d",
                        fontSize: "13px",
                        marginTop: "7px",
                      }}
                    >
                      Displaying 5 of 6637 records
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BooksListSection>
      <Footer />
    </div>
  );
}
