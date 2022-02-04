import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import AddProject from "./components/Project/AddProject";
import Home from "./components/Project/Home";
import { Provider } from "react-redux";
import store from "./store";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import UpdateProject from "./components/Project/UpdateProject";
import Login from "./components/accountBox/loginForm";
import signupForm from "./components/accountBox/signupForm";
import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";
import { logout } from "./actions/securityActions";
import SecureRoute from "./securityUtils.js/SecureRoute";
import ProjectBoard from "./components/projectBoard/ProjectBoard";
import AddProjectTask from "./components/projectBoard/projectTasks/AddProjectTask";
import UpdateProjectTask from "./components/projectBoard/projectTasks/UpdateProjectTask";

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken,
  });

  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}

function App() {
  const location = useLocation;
  return (
    <div className="App">
      <Provider store={store}>
        <AnimatePresence exitBeforeEnter>
          <Router location={location} key={location.pathname}>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path={"/signin"} component={Login} />
              <Route exact path={"/signup"} component={signupForm} />

              <Switch>
                <SecureRoute exact path="/dashboard" component={Dashboard} />
                <SecureRoute exact path="/addProject" component={AddProject} />
                <SecureRoute
                  exact
                  path="/updateProject/:id"
                  component={UpdateProject}
                />
                <SecureRoute
                  exact
                  path="/updateProjectTask/:backlog_id/:pt_id"
                  component={UpdateProjectTask}
                />
                <SecureRoute
                  exact
                  path="/projectBoard/:id"
                  component={ProjectBoard}
                />
                <SecureRoute
                  exact
                  path="/addProjectTask/:id"
                  component={AddProjectTask}
                />
                <SecureRoute
                  exact
                  path="/updateProjectTask/:backlog_id/:pt_id"
                  component={UpdateProjectTask}
                />
              </Switch>
            </Switch>
          </Router>
        </AnimatePresence>
      </Provider>
    </div>
  );
}

export default App;
