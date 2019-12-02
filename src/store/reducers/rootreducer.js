import { combineReducers } from "redux";
import stdReducer from './studentReducers'
import eachListReducer from "./each_listReducer";
import bkReducer from "./bookReducers";
import adminReducer from "./adminReducer";


const rootReducer = combineReducers({
  std: stdReducer,
  each_list: eachListReducer,
  bk: bkReducer,
  admin: adminReducer
});

export default rootReducer;
