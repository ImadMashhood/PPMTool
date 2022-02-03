import { combineReducers } from "redux";
import errorReducer from "./errorReducer.js";
import ProjectReducer from "./ProjectReducer.js";
import securityReducer from "./securityReducer";

export default combineReducers({
  errors: errorReducer,
  project: ProjectReducer,
  security: securityReducer,
});
