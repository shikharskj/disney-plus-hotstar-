import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState, useEffect } from 'react';
import Header from './components/Header'
import Home from './components/Home'
import Detail from './components/Detail'
import Login from './components/Login'
import SyncLoader from "react-spinners/SyncLoader";

import { useSelector } from "react-redux";

import { 
  selectUserName, 
} from "./features/user/userSlice";

function App() {
  const userName = useSelector(selectUserName);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      
    };
  }, [userName]);


  return (
    <div className="App">
      {
        (loading) ? (  
          <div className="loader">
            <h1> <pre><span className="large">Loading</span> <SyncLoader color="white" loading={loading} size={12} /></pre>
              
            </h1>
          </div>
        ) : (
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <Login />
              </Route>
              <Route path="/detail/:id">
                <Detail />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
            </Switch>        
          </Router>
        )
      }
      
    </div>
  );
}

export default App;
