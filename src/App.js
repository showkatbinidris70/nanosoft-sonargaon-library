import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Video from "./components/Video";
import ForgetPassword from "./components/ForgetPassword";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Books from "./components/Books";
import Journal from "./components/Journal";
import Photo from "./components/Photo";
import Newspaper from "./components/Newspaper";
import BookDetails from "./components/BookDetails";
import PhotosDetails from "./components/PhotosDetails";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div>
      {/* <Pagination /> */}
      <Router>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/newspaper" element={<Newspaper />} />
            <Route path="/photo" element={<Photo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/video" element={<Video />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/book-details" element={<BookDetails />} />
            <Route path="/photos-details" element={<PhotosDetails />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
