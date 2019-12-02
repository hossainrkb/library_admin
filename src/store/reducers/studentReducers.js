import * as Types from "../actions/types";

const init = {
  isAuthenticated: false,
  student: {},
  search_std: [],
  error: {},
  hola_success: "",
  no_std: "",
  success: ""
};

const stdReducer = (state = init, action) => {
  switch (action.type) {
    case Types.STUDENT_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        hola_success: action.payload.hola_success,
        success: action.payload.success
      };
    }
    case Types.GET_STD_BY_ID: {
      return {
        ...state,
        student: action.payload.student
      };
    }
    case Types.SEARCH_STD: {
      return {
        ...state,
        search_std: action.payload.search_student,
        no_std: action.payload.no_std,
        error: action.payload.error
      };
    }

    default:
      return state;
  }
};

export default stdReducer;
