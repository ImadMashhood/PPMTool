import { combineReducers } from "redux";
import errorReducer from "./errorReducer.js";
import ProjectReducer from "./ProjectReducer.js";
import securityReducer from "./securityReducer";
import backlogReducer from "./backlogReducer";

export default combineReducers({
  errors: errorReducer,
  project: ProjectReducer,
  backlog: backlogReducer,
  security: securityReducer,
});
