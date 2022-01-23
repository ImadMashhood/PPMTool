import { combineReducers } from "redux";
import errorReducer from "./errorReducer.js";
import ProjectReducer from "./ProjectReducer.js";

export default combineReducers({
  errors: errorReducer,
  project: ProjectReducer,
});
