import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import './App.sass';
import Login from './components/login/Login';
import Board from './components/board/Board';
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
                      </Switch>
                  </BrowserRouter>
              </div>
          );
    }
}

export default App;
