import * as Types from "../actions/types";

const init = {
  isAuthenticated: false,
  admin: {},
  error: {},
  hola_success: "",
  no_std: "",
  success: ""
};

const adminReducer = (state = init, action) => {
  switch (action.type) {
    case Types.ADMIN_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        hola_success: action.payload.hola_success
      };
    }
    case Types.SET_ADMIN: {
      return {
        ...state,
        admin: action.payload.admin,
        isAuthenticated: Object.keys(action.payload.admin).length !== 0
      };
    }

    default:
      return state;
  }
};

export default adminReducer;
