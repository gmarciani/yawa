import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import './App.sass';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Board from './components/board/Board';
import Profile from './components/profile/Profile';
import Navbar from "./components/navbar/Navbar";

class App extends React.Component {

    render() {
          return (
              <div className="App">
                  <Navbar/>
                  <BrowserRouter>
                      <Switch>
                          <Route path="/board">
                              <Board />
                          </Route>
                          <Route path="/profile">
                              <Profile />
                          </Route>
                          <Route path="/login">
                              <Login />
                          </Route>
                          <Route path="/signup">
                              <Signup />
                          </Route>
                      </Switch>
                  </BrowserRouter>
              </div>
          );
    }
}

export default App;
