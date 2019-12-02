import * as Types from './types'
import Axios from 'axios'
import jwtDecode from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";

export const admin_login = (admin, history) => dispatch => {
  Axios.post("/admin/login", admin)
    .then(res => {
      let token = res.data.token;
      if (token) {
        localStorage.setItem("admin_auth_token", token);
         setAuthToken(token);
        let decode = jwtDecode(token);
        dispatch({
          type: Types.SET_ADMIN,
          payload: {
            admin: decode
          }
        });
        history.push("/");
      } else {
        dispatch({
          type: Types.ADMIN_ERROR,
          payload: {
            error: {},
            hola_success: res.data.message
          }
        });
      }
    })
    .catch(error => {
      dispatch({
        type: Types.ADMIN_ERROR,
        payload: {
          error: error.response.data
        }
      });
    });
};

export const logout = history => {
  localStorage.removeItem("admin_auth_token");
  history.push("/adminlogin");
  return {
    type: Types.SET_ADMIN,
    payload: {
      admin: {}
    }
  };
};