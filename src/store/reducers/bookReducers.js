import * as Types from "../actions/types";

const init = {
  isAuthenticated: false,
  book: {},
  error: {},

  hola_success: "",
  success: "",
  re_error: {},
  re_hola_success: "",
  re_success: "",
  fine_message: "",
  fine: "",
  ck_key: "",
  paid_error: {},
  paid_message: "",
  equal_paid: "",
  book:[]
};

const bkReducer = (state = init, action) => {
  switch (action.type) {
    case Types.RETURN_BOOK_ERROR: {
      return {
        ...state,
        re_error: action.payload.re_error,
        re_hola_success: action.payload.re_hola_success,
        re_success: action.payload.re_success,
        fine_message: action.payload.fine_message,
        fine: action.payload.fine,
        ck_key: action.payload.ck_key,
      };
    }
    case Types.BOOK_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        hola_success: action.payload.hola_success,
        success: action.payload.success
      };
    }
    case Types.PAID_ERROR: {
      return {
        ...state,
        paid_error: action.payload.paid_error,
        paid_message: action.payload.paid_message,
        equal_paid: action.payload.equal_paid
      };
    }
       case Types.GET_ISSUEBOOK_BY_SID: {
      return {
        ...state,
        book: action.payload.book
      };
    }

    default:
      return state;
  }
};

export default bkReducer;
