import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.sass';
import Login from './components/login/Login';
import Clock from './components/simple/clock/Clock';
import Board from './components/board/Board';

function App() {
  const [token, setToken] = useState();

  /*
  if(!token) {
    return <Login setToken={setToken} />
  }*/

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Clock />
        <BrowserRouter>
          <Switch>
            <Route path="/board">
              <Board />
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
