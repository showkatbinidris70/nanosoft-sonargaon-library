import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import ReactPaginate from "react-paginate";

export default function Pagination() {
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://sonargaonlibrary.com.bd/api/books");
      const nbaData = await response.json();
      setPageCount(Math.ceil(nbaData.length / perPage));
      setPlayerData(nbaData.slice(offset, offset + perPage));
    };

    fetchData();
  }, [offset]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    console.log(selectedPage * perPage);

    setOffset((selectedPage + 1) * perPage);
  };
  return (
    <div>
      <Container>
        <Row>
          <table>
            <tr>
              <th>Sl NO</th>
              <th>Title</th>
              <th>Author</th>
            </tr>
            {playerData.map((playerData, k) => (
              <tr>
                <td>{playerData.SlNo}</td>
                <td>{playerData.BookName}</td>
                <td>{playerData.Author}</td>
              </tr>
            ))}
          </table>
        </Row>
        <ReactPaginate
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
        />
      </Container>
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ReactPaginate from "react-paginate";
// import { BooksListSection } from "../styles/Books.styled";
// export default function Pagination() {
//   const [offset, setOffset] = useState(0);
//   const [data, setData] = useState([]);
//   const [perPage] = useState(10);
//   const [pageCount, setPageCount] = useState(0);

//   const getData = async () => {
//     const res = await axios.get(`http://sonargaonlibrary.com.bd/api/books`);
//     const data = res.data;
//     const slice = data.slice(offset, offset + perPage);
//     const postData = slice.map((pd) => (
//       <div key={pd.SlNo}>
//         <table>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Author</th>
//             <th>Category</th>
//           </tr>
//           <tr>
//             <td>{pd.SlNo}</td>
//             <td>{pd.BookName}</td>
//             <td>{pd.Category}</td>
//           </tr>
//           <tr></tr>
//         </table>
//       </div>
//     ));
//     setData(postData);
//     setPageCount(Math.ceil(data.length / perPage));
//   };
//   const handlePageClick = (e) => {
//     const selectedPage = e.selected;
//     setOffset(selectedPage + 1);
//   };

//   useEffect(() => {
//     getData();
//   }, [offset]);

//   return (
//     <div>
//       <BooksListSection>
//         {data}
//         <ReactPaginate
//           previousLabel={"prev"}
//           nextLabel={"next"}
//           breakLabel={"..."}
//           breakClassName={"break-me"}
//           pageCount={pageCount}
//           marginPagesDisplayed={2}
//           pageRangeDisplayed={5}
//           onPageChange={handlePageClick}
//           containerClassName={"pagination"}
//           subContainerClassName={"pages pagination"}
//           activeClassName={"active"}
//         />
//       </BooksListSection>
//     </div>
//   );
// }
