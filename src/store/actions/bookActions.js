import * as Types from "./types";
import Axios from "axios";



export const book_list = () => dispatch => {
  Axios.get("/book/")
    .then(res => {
      dispatch({
        type: Types.BOOK_LIST,
        payload: {
          book_list: res.data
        }
      });
    })
    .catch(error => {
   
    });
};
export const issue_book_list = () => dispatch => {
  Axios.get("/book/issue_book_list/")
    .then(res => {
      dispatch({
        type: Types.ISSUE_BOOK_LIST,
        payload: {
          issue_book_list: res.data
        }
      });
    })
    .catch(error => {});
};


export const b_register = (book, history) => dispatch => {
  Axios.post("/book/create", book)
    .then(res => {
      dispatch({
        type: Types.BOOK_ERROR,
        payload: {
          error: {},
          hola_success: res.data.message,
          success: res.data.success_message
        }
      });
      history.push("/addBook");
      console.log(res.data.success_message);
    })
    .catch(error => {
      dispatch({
        type: Types.BOOK_ERROR,
        payload: {
          error: error.response.data,
          hola_success: "",
          success: ""
        }
      });
    });
};
export const i_book = (book, history) => dispatch => {
  Axios.post("/book/issue", book)
    .then(res => {
      dispatch({
        type: Types.BOOK_ERROR,
        payload: {
          error: {},
          hola_success: res.data.message,
          success: res.data.success_message
        }
      });
      history.push("/issueBook");
      console.log(res.data.success_message);
    })
    .catch(error => {
      dispatch({
        type: Types.BOOK_ERROR,
        payload: {
          error: error.response.data,
          hola_success: "",
          success: ""
        }
      });
    });
};
export const r_book = (book, history) => dispatch => {
  Axios.post("/book/return", book)
    .then(res => {
      dispatch({
        type: Types.RETURN_BOOK_ERROR,
        payload: {
          re_error: {},
          re_hola_success: res.data.message,
          re_success: res.data.success_message,
           fine_message: res.data. fine_message,
           fine: res.data. fine,
           ck_key: res.data.ck_key,
        }
      });
      history.push("/returnBook");
      
    })
    .catch(error => {
      dispatch({
        type: Types.RETURN_BOOK_ERROR,
        payload: {
          re_error: error.response.data,
          re_hola_success: "",
          re_success: ""
        }
      });
    });
};

export const pay = (book, history) => dispatch => {
  Axios.post("/book/paid", book)
    .then(res => {
      dispatch({
        type: Types.PAID_ERROR,
        payload: {
          paid_error: {},
          paid_message: res.data.paid_message,
          equal_paid: res.data.equal_pay
        }
      });
      history.push("/returnBook");
      
    })
    .catch(error => {
      dispatch({
        type: Types.PAID_ERROR,
        payload: {
          paid_error: error.response.data,
          paid_message: "",
          equal_paid: ""
        }
      });
    });
};

export const getIssueBookBySid = id => dispatch => {
  Axios.get(`/book/issue_book/${id}`)
    .then(response => {
      console.log(response.data)
      dispatch({
        type: Types.GET_ISSUEBOOK_BY_SID,
        payload: { book: response.data }
      });
    })
    .catch(error => {
      console.log(error);
    });
};