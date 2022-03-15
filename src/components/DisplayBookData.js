import React, { useState } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/getBookData";

const DisplayBookData = ({ getData, bookData }) => {
   const [bookInfo, setBookInfo] = useState({
      book: "",
   });

   const { book } = bookInfo;

   const handleChange = (e) =>
      setBookInfo({ ...bookInfo, [e.target.name]: e.target.value });

   const handleSubmit = (e) => {
      e.preventDefault();
      getData(book);
   };

   return (
      <div className="container">
         <h1 className="heading">Find a random book by a searched author</h1>
         <form onSubmit={handleSubmit}>
            <input
               className="input"
               name="book"
               onChange={handleChange}
               required
               placeholder="enter author"
            />
            <br />
            <button className="btn" type="submit">
               Find Book!
            </button>
         </form>
         <div className="box">
            {/* <h1>{author}</h1>
            <h3>{name}</h3>
            <h3>{year}</h3> */}
         </div>
      </div>
   );
};

const mapStateToProps = (state) => ({
   bookData: state.bookData,
});

export default connect(mapStateToProps, { getData })(DisplayBookData);
