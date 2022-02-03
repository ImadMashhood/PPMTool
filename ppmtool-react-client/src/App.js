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
import signupForm from "./components/accountBox/signupForm";
import Login from "./components/accountBox/loginForm";

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
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/addProject" component={AddProject} />
              <Route
                exact
                path="/updateProject/:id"
                component={UpdateProject}
              />
              <Route exact path={"/signin"} component={Login} />
              <Route exact path={"/signup"} component={signupForm} />
            </Switch>
          </Router>
        </AnimatePresence>
      </Provider>
    </div>
  );
}

export default App;
