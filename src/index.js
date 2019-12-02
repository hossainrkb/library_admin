import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import store from './store/index';
import { Provider } from 'react-redux' 
import * as Types from "./store/actions/types";
import jwtDecode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
const get_token = localStorage.getItem("admin_auth_token");
if (get_token) {
  let decode = jwtDecode(get_token);
  setAuthToken(get_token);
  store.dispatch({
    type: Types.SET_ADMIN,
    payload: {
      admin: decode
    }
  });
}
ReactDOM.render(
  <Provider store= {store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
