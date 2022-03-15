import { BOOK_DATA, BOOK_ERROR } from "../actions/types";

const initialState = {
   items: null,
};

export default function (state = initialState, action) {
   const { type, payload } = action;

   switch (type) {
      case BOOK_DATA:
         console.log(payload);
         return {
            ...state,
            items: payload.items,
         };

      case BOOK_ERROR:
         console.log(payload.error.message);
         return {
            ...state,
            errorMessage: payload.error.message,
         };
      default:
         return state;
   }
}
