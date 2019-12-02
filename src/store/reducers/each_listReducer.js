import * as Types from "../actions/types";
const eachListReducer = (state = [], action) => {
  switch (action.type) {
    case Types.STUDENT_LIST: {
      return action.payload.student_list;
    }
    case Types.BOOK_LIST: {
      return action.payload.book_list;
    }
    case Types.ISSUE_BOOK_LIST: {
      return action.payload.issue_book_list;
    }
   

    default:
      return state;
  }
};

export default eachListReducer;
