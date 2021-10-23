import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './components/Header'
import Home from './components/Home'
import Detail from './components/Detail'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/detail">
              <Detail />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            
          </Switch>        
      </Router>
    </div>
  );
}

export default App;
