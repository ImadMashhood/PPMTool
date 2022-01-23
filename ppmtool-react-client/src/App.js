import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import AddProject from "./components/Project/AddProject";
import Home from "./components/Project/Home";
import { Provider } from "react-redux";
import store from "./store";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import UpdateProject from "./components/Project/UpdateProject";

function App() {
  const location = useLocation;
  return (
    <div className="App">
      <Provider store={store}>
        <AnimatePresence exitBeforeEnter>
          <Router location={location} key={location.pathname}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/addProject" element={<AddProject />} />
              <Route path="/updateProject/:id" element={<UpdateProject />} />
            </Routes>
          </Router>
        </AnimatePresence>
      </Provider>
    </div>
  );
}

export default App;
