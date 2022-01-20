import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        {/*<Switch>
          TODO set homepage
          <Route path="/" exact component={Home} />
        </Switch>*/}
        <Dashboard  />   
      </Router>
      
       
    </div>
  );
}

export default App;
