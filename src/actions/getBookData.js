import axios from "axios";
import { BOOK_DATA, BOOK_ERROR } from "./types";

export const getData = (book) => async (dispatch) => {
   //    fetch(`https://openlibrary.org/search.json?author=${search}`)
   //       .then((response) => {
   //          return response.json();
   //       })
   //       .then((data) => {
   //          console.log(data);
   //          const book = data.docs[Math.floor(Math.random() * data.docs.length)];
   //       });
   //    e.preventDefault();

   try {
      const res = await axios.get(
         `https://openlibrary.org/search.json?author=${book}`
      );

      dispatch({ type: BOOK_DATA, payload: res.data });
   } catch (error) {
      dispatch({
         type: BOOK_ERROR,
         payload: { error },
      });
   }
};
